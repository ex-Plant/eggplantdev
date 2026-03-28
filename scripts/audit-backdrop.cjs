/**
 * Playwright audit: ScrollBackdrop test page
 * Scrolls through each scene and captures screenshots + backdrop state.
 * Uses mouse.wheel() to work with Lenis smooth scroll.
 */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const VIEWPORT = { width: 1440, height: 900 };
const BASE_URL = process.env.URL || "http://localhost:3001";
const URL = `${BASE_URL}/backdrop-test`;
const OUT = path.join(__dirname, "..", "test-results", "backdrop-audit");

/** Read backdrop color layer + logo visibility + text color */
async function getBackdropState(page) {
  return page.evaluate(() => {
    // Find color layer
    const all = document.querySelectorAll("*");
    let backdropEl = null;
    all.forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.position === "fixed" && cs.zIndex === "1" && el.children.length === 3) {
        backdropEl = el;
      }
    });
    const colorChild = backdropEl?.children[0];
    const colorCs = colorChild ? getComputedStyle(colorChild) : null;

    // Find logo layer
    const logoEl = document.querySelector("[data-testid='backdrop-logo']");
    const logoCs = logoEl ? getComputedStyle(logoEl) : null;

    // Find the scene wrapper currently near viewport center
    const centerY = window.innerHeight / 2 + window.scrollY;
    let textColor = null;
    document.querySelectorAll("[style*='--scene-text-color']").forEach((el) => {
      const rect = el.getBoundingClientRect();
      const absTop = rect.top + window.scrollY;
      const absBot = rect.bottom + window.scrollY;
      if (absTop <= centerY && absBot >= centerY) {
        textColor = getComputedStyle(el).color;
      }
    });

    return {
      opacity: colorCs?.opacity ?? null,
      backgroundColor: colorCs?.backgroundColor ?? null,
      logoOpacity: logoCs?.opacity ?? null,
      textColor,
    };
  });
}

async function run() {
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: VIEWPORT });

  await page.goto(URL, { waitUntil: "load", timeout: 30000 });
  // Wait for GSAP + ScrollTrigger to initialize
  await page.waitForTimeout(3000);

  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${pageHeight}px`);

  // Initial state
  const initialState = await getBackdropState(page);
  console.log("\n=== INITIAL STATE ===");
  console.log(JSON.stringify(initialState, null, 2));

  // Take initial screenshot
  await page.screenshot({ path: path.join(OUT, "000-scroll.png"), fullPage: false });
  console.log(`0% (y=0) — bg: ${initialState?.backgroundColor}, logo: ${initialState?.logoOpacity}, text: ${initialState?.textColor}`);

  // Scroll through page using multiple wheel events per step.
  // Lenis wheelMultiplier is 0.3, so we need ~3.3x the intended scroll distance.
  const scrollableHeight = pageHeight - VIEWPORT.height;
  const steps = 10;
  const targetPerStep = Math.floor(scrollableHeight / steps);
  // Compensate for Lenis dampening: send larger delta
  const wheelDelta = Math.floor(targetPerStep / 0.3);

  for (let i = 1; i <= steps; i++) {
    // Send in smaller chunks to avoid Lenis clamping
    const chunks = 4;
    for (let c = 0; c < chunks; c++) {
      await page.mouse.wheel(0, Math.floor(wheelDelta / chunks));
      await page.waitForTimeout(100);
    }
    // Wait for Lenis to animate and GSAP tweens to settle
    await page.waitForTimeout(1500);

    const state = await getBackdropState(page);
    const pct = Math.round((i / steps) * 100);
    const filename = `${String(pct).padStart(3, "0")}-scroll.png`;

    await page.screenshot({ path: path.join(OUT, filename), fullPage: false });
    console.log(`${pct}% — bg: ${state?.backgroundColor}, logo: ${state?.logoOpacity}, text: ${state?.textColor}`);
  }

  await browser.close();
  console.log(`\nAll screenshots saved to: ${OUT}`);
}

run().catch(console.error);
