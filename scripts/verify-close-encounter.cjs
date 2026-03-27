const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const viewports = [
    { name: "mobile", width: 375, height: 812 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "desktop", width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto("http://localhost:3000/heroes-codex", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    // Find the close-encounter section and take a screenshot of just the inner card
    const card = page.locator("#close-encounter .overflow-hidden").first();
    await card.waitFor({ state: "visible", timeout: 10000 });
    await card.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    await card.screenshot({ path: `/tmp/close-encounter-${vp.name}.png` });
    console.log(`Captured ${vp.name} (${vp.width}x${vp.height})`);
    await page.close();
  }

  await browser.close();
  console.log("Done.");
})();
