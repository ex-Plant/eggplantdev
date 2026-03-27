const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const BASE_URL = process.argv[2] || "http://127.0.0.1:3001";
const OUTPUT_DIR = path.join(__dirname, "..", "tests", "responsive-audit");

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const PAGES = [
  {
    route: "/sections-test",
    variants: [
      "asymmetricGrid",
      "stackedRows",
      "signalBoard",
      "timeline",
      "numberedMosaic",
      "orbitalCluster",
      "brutalistPoster",
      "constellationMap",
      "splitLedger",
      "magneticCards",
      "glitchFeed",
      "neonLounge",
      "topoContour",
      "polaroidScatter",
      "hologramStack",
      "sacredNeon",
      "cosmicNebula",
      "hexGrid",
      "circuitTrace",
      "astralRings",
      "voidPortal",
    ],
    // Each variant's wrapper element has id="{key}" (via TestAccordion)
    idPrefix: "",
  },
  {
    route: "/heros-test",
    variants: [
      "echoes-djembeya",
      "cosmic-cult-flyer",
      "celestial-altar",
      "glam-cosmic-billboard",
      "ritual-observatory",
      "sacred-ascension",
      "cosmic-aubergine",
      "orbital-launch",
      "wormhole",
      "temple",
      "mission-briefing",
      "blackhole-canteen",
      "ancient-transmission",
      "quantum-garden",
      "aubergine-architect",
      "cosmic-standup",
      "fractal-sermon",
      "supernova-farmers-market",
      "akashic-terminal",
      "synaptic-cathedral",
      "void-liturgy",
    ],
    // Each variant's wrapper element has id="{key}" (via TestAccordion)
    idPrefix: "",
  },
  {
    route: "/heroes-codex",
    // No individual variant ids — audit whole page only
    variants: null,
    idPrefix: null,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function screenshotDir(route, viewportName) {
  // Strip leading slash and replace remaining slashes with dashes
  const slug = route.replace(/^\//, "").replace(/\//g, "-");
  return path.join(OUTPUT_DIR, slug, viewportName);
}

/**
 * Runs all layout checks for a single variant element identified by `elementId`.
 * Returns { overflow, cutOff, visibilityIssue, details }.
 */
async function runLayoutChecks(page, elementId, viewportWidth, viewportHeight) {
  return page.evaluate(
    ({ elementId, viewportWidth, viewportHeight }) => {
      const rawEl = elementId ? document.getElementById(elementId) : document.body;
      if (!rawEl) {
        return {
          overflow: false,
          cutOff: false,
          visibilityIssue: true,
          details: { error: `Element #${elementId} not found` },
        };
      }
      // If the element is a Radix Accordion.Item, drill into the content region
      // to measure the actual variant content, not the accordion chrome.
      const contentRegion = rawEl.querySelector('[role="region"]');
      const wrapper = contentRegion || rawEl;

      const wrapperRect = wrapper.getBoundingClientRect();
      const scrollTop = window.scrollY || 0;

      // --- Overflow detection ---
      // 1. Check if the wrapper itself scrolls horizontally
      const wrapperScrollOverflow = wrapper.scrollWidth > wrapper.clientWidth;

      // 2. Walk every descendant and check if its right edge exceeds viewport
      //    or its left edge is negative (shifted off-canvas left).
      //    Skip elements that are visually clipped by an ancestor with overflow:hidden.
      function isClippedByAncestor(el) {
        let parent = el.parentElement;
        while (parent && parent !== wrapper) {
          const style = window.getComputedStyle(parent);
          const overflow = style.overflow || style.overflowX;
          if (overflow === "hidden" || overflow === "clip") {
            const parentRect = parent.getBoundingClientRect();
            // Check if the parent's clip boundary is within viewport bounds
            if (parentRect.left >= -1 && parentRect.right <= viewportWidth + 1) {
              return true;
            }
          }
          parent = parent.parentElement;
        }
        return false;
      }

      const overflowingElements = [];
      const allDescendants = wrapper.querySelectorAll("*");
      for (const el of allDescendants) {
        const rect = el.getBoundingClientRect();
        const overflowsRight = rect.right > viewportWidth + 1; // +1px tolerance
        const overflowsLeft = rect.left < -1;
        if ((overflowsRight || overflowsLeft) && rect.width > 0 && rect.height > 0) {
          // Skip if an ancestor with overflow:hidden clips this element
          if (isClippedByAncestor(el)) continue;
          overflowingElements.push({
            tag: el.tagName.toLowerCase(),
            id: el.id || null,
            className: (el.className || "").toString().slice(0, 80),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            overflowsRight,
            overflowsLeft,
          });
        }
      }

      const overflow = wrapperScrollOverflow || overflowingElements.length > 0;

      // --- Cut-off detection ---
      // Flag if the variant's height exceeds 3× the viewport height
      // (suggests runaway / broken layout). Using 3x to reduce false positives
      // from legitimately tall content sections.
      const variantHeight = wrapperRect.height;
      const cutOff = variantHeight > viewportHeight * 3;

      // --- Visibility check ---
      // Make sure the wrapper itself has non-zero dimensions
      const visibilityIssue = wrapperRect.width === 0 || wrapperRect.height === 0;

      return {
        overflow,
        cutOff,
        visibilityIssue,
        details: {
          wrapperScrollOverflow,
          overflowingElements: overflowingElements.slice(0, 10), // cap for JSON size
          variantHeight: Math.round(variantHeight),
          wrapperRect: {
            top: Math.round(wrapperRect.top),
            right: Math.round(wrapperRect.right),
            bottom: Math.round(wrapperRect.bottom),
            left: Math.round(wrapperRect.left),
            width: Math.round(wrapperRect.width),
            height: Math.round(wrapperRect.height),
          },
        },
      };
    },
    { elementId, viewportWidth, viewportHeight }
  );
}

/**
 * Scrolls the variant into view, waits for layout to settle, then screenshots.
 * For whole-page audits (elementId === null), scrolls to top.
 */
async function scrollAndScreenshot(page, elementId, screenshotPath) {
  if (elementId) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    }, elementId);
  } else {
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  }
  // Brief settle — avoids cutting off CSS transitions
  await page.waitForTimeout(400);
  await page.screenshot({ path: screenshotPath, fullPage: elementId === null });
}

// ---------------------------------------------------------------------------
// Core audit logic per page + viewport
// ---------------------------------------------------------------------------

async function auditVariant(page, variant, idPrefix, viewport, route, report) {
  const elementId = idPrefix ? `${idPrefix}${variant}` : null;
  const ssDir = screenshotDir(route, viewport.name);
  ensureDir(ssDir);
  const ssPath = path.join(ssDir, `${variant}.png`);

  // Collect console errors for this variant render
  const consoleErrors = [];
  const errorHandler = (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  };
  page.on("console", errorHandler);

  await scrollAndScreenshot(page, elementId, ssPath);

  const checks = await runLayoutChecks(page, elementId, viewport.width, viewport.height);

  page.off("console", errorHandler);

  const result = {
    overflow: checks.overflow,
    cutOff: checks.cutOff,
    visibilityIssue: checks.visibilityIssue,
    consoleErrors: [...consoleErrors],
    screenshotPath: ssPath,
    details: checks.details,
  };

  // Merge into report structure
  if (!report.pages[route]) report.pages[route] = { variants: {} };
  if (!report.pages[route].variants[variant]) report.pages[route].variants[variant] = {};
  report.pages[route].variants[variant][viewport.name] = result;
}

async function auditPage(browser, pageConfig, report) {
  const { route, variants, idPrefix } = pageConfig;
  const url = `${BASE_URL}${route}`;

  console.log(`\n== Auditing ${route} ==`);

  // For each viewport, open a fresh page context so viewport is accurate
  for (const viewport of VIEWPORTS) {
    console.log(`  Viewport: ${viewport.name} (${viewport.width}x${viewport.height})`);

    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
    });

    // Capture page-level console errors (before variant scroll)
    const pageConsoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") pageConsoleErrors.push(msg.text());
    });

    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

    if (variants && variants.length > 0) {
      for (const variant of variants) {
        console.log(`    variant: ${variant}`);
        await auditVariant(page, variant, idPrefix, viewport, route, report);
      }
    } else {
      // heroes-codex — whole-page audit
      console.log(`    (whole-page audit)`);
      await auditVariant(page, "page", null, viewport, route, report);
    }

    await page.close();
  }
}

// ---------------------------------------------------------------------------
// Summary computation
// ---------------------------------------------------------------------------

function buildSummary(report) {
  let totalVariants = 0;
  let issuesFound = 0;
  const issuesByType = { overflow: 0, cutOff: 0, visibilityIssue: 0, consoleErrors: 0 };

  for (const pageData of Object.values(report.pages)) {
    for (const viewportResults of Object.values(pageData.variants)) {
      totalVariants += 1;
      let variantHasIssue = false;

      for (const result of Object.values(viewportResults)) {
        if (result.overflow) {
          issuesByType.overflow += 1;
          variantHasIssue = true;
        }
        if (result.cutOff) {
          issuesByType.cutOff += 1;
          variantHasIssue = true;
        }
        if (result.visibilityIssue) {
          issuesByType.visibilityIssue += 1;
          variantHasIssue = true;
        }
        if (result.consoleErrors && result.consoleErrors.length > 0) {
          issuesByType.consoleErrors += 1;
          variantHasIssue = true;
        }
      }

      if (variantHasIssue) issuesFound += 1;
    }
  }

  return { totalVariants, issuesFound, issuesByType };
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Base URL : ${BASE_URL}`);
  console.log(`Output   : ${OUTPUT_DIR}`);

  ensureDir(OUTPUT_DIR);

  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    pages: {},
  };

  const browser = await chromium.launch({ headless: true });

  try {
    for (const pageConfig of PAGES) {
      await auditPage(browser, pageConfig, report);
    }
  } finally {
    await browser.close();
  }

  report.summary = buildSummary(report);

  const reportPath = path.join(OUTPUT_DIR, "report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");

  console.log(`\nDone.`);
  console.log(`Report   : ${reportPath}`);
  console.log(`Summary  : ${JSON.stringify(report.summary, null, 2)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
