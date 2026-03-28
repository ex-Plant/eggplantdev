/**
 * Playwright audit: scroll-bg animation on Soleil Aubergine & Metatron Mono
 * Takes screenshots at key scroll positions to verify the bg overlay behavior.
 */
const { chromium } = require("playwright");
const path = require("path");

const VIEWPORT = { width: 1440, height: 900 };
const URL = "http://localhost:3000";
const OUT = path.join(__dirname, "..", "test-results", "scroll-bg-audit");

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: VIEWPORT });

  const fs = require("fs");
  fs.mkdirSync(OUT, { recursive: true });

  // Go to home page
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1500);

  // Screenshot: initial state (top of page)
  await page.screenshot({ path: path.join(OUT, "01-top-of-page.png"), fullPage: false });
  console.log("01 - Top of page captured");

  // Find Soleil Aubergine section
  const soleil = page.locator("#hero-soleil-aubergine");
  const soleilExists = await soleil.count();
  console.log(`Soleil Aubergine found: ${soleilExists > 0}`);

  if (soleilExists > 0) {
    // Scroll to just before Soleil (should see bg starting to appear)
    const soleilBox = await soleil.boundingBox();
    if (soleilBox) {
      // Scroll so Soleil is about to enter viewport
      await page.evaluate((top) => window.scrollTo({ top: top - 600, behavior: "instant" }), soleilBox.y);
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(OUT, "02-before-soleil.png"), fullPage: false });
      console.log("02 - Before Soleil captured");

      // Scroll to Soleil center
      await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), soleilBox.y);
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(OUT, "03-soleil-entering.png"), fullPage: false });
      console.log("03 - Soleil entering captured");

      // Scroll to Soleil fully visible (center of section)
      await page.evaluate((top) => window.scrollTo({ top: top + 400, behavior: "instant" }), soleilBox.y);
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(OUT, "04-soleil-center.png"), fullPage: false });
      console.log("04 - Soleil center captured");

      // Scroll past Soleil
      await page.evaluate((top) => window.scrollTo({ top: top + 1200, behavior: "instant" }), soleilBox.y);
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(OUT, "05-after-soleil.png"), fullPage: false });
      console.log("05 - After Soleil captured");
    }
  }

  // Find Metatron Mono section
  const metatron = page.locator("#hero-metatrons-cube-mono");
  const metatronExists = await metatron.count();
  console.log(`Metatron Mono found: ${metatronExists > 0}`);

  // Also check for the top Metatron and bottom Metatron
  const allMetatrons = page.locator('[id^="hero-metatrons-cube-mono"]');
  const metatronCount = await allMetatrons.count();
  console.log(`Total Metatron Mono instances: ${metatronCount}`);

  if (metatronCount > 0) {
    for (let i = 0; i < metatronCount; i++) {
      const box = await allMetatrons.nth(i).boundingBox();
      if (box) {
        console.log(`Metatron #${i} position: top=${Math.round(box.y)}, height=${Math.round(box.height)}`);

        await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), box.y);
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(OUT, `06-metatron-${i}-top.png`), fullPage: false });
        console.log(`06 - Metatron #${i} top captured`);

        await page.evaluate((top) => window.scrollTo({ top: top + 400, behavior: "instant" }), box.y);
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(OUT, `07-metatron-${i}-center.png`), fullPage: false });
        console.log(`07 - Metatron #${i} center captured`);
      }
    }
  }

  // Check for visual issues: overlay z-index, element visibility
  const diagnostics = await page.evaluate(() => {
    const results = {};

    // Check if any fixed overlays exist
    const allFixed = document.querySelectorAll("[style*='position: fixed'], .fixed");
    results.fixedElements = allFixed.length;
    results.fixedDetails = Array.from(allFixed).slice(0, 10).map(el => ({
      tag: el.tagName,
      classes: el.className.substring(0, 80),
      opacity: getComputedStyle(el).opacity,
      zIndex: getComputedStyle(el).zIndex,
      display: getComputedStyle(el).display,
    }));

    // Check Soleil bg overlay ref
    const soleil = document.querySelector("#hero-soleil-aubergine");
    if (soleil) {
      const fixedChild = soleil.querySelector(".fixed");
      results.soleilBgOverlay = fixedChild ? {
        opacity: getComputedStyle(fixedChild).opacity,
        zIndex: getComputedStyle(fixedChild).zIndex,
        background: getComputedStyle(fixedChild).background.substring(0, 100),
      } : "NOT FOUND";
    }

    // Check Metatron sections
    const metatrons = document.querySelectorAll('[id^="hero-metatrons-cube-mono"]');
    results.metatronCount = metatrons.length;

    return results;
  });

  console.log("\n=== DIAGNOSTICS ===");
  console.log(JSON.stringify(diagnostics, null, 2));

  // Full page screenshot for overall layout check
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT, "00-full-page.png"), fullPage: true });
  console.log("\n00 - Full page screenshot captured");

  await browser.close();
  console.log(`\nAll screenshots saved to: ${OUT}`);
}

run().catch(console.error);
