const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

async function main() {
  const targetUrl = process.argv[2] || "http://127.0.0.1:3001";
  const outputDir = process.argv[3] || "/tmp/playwright-inspect";

  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  await page.goto(targetUrl, { waitUntil: "networkidle", timeout: 60000 });
  await page.screenshot({ path: path.join(outputDir, "00-initial.png") });

  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outputDir, "01-scroll.png") });

  await page.mouse.wheel(0, 1200);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outputDir, "02-scroll-more.png") });

  const buttons = await page.locator("button").all();
  if (buttons.length > 0) {
    await buttons[0].click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outputDir, "03-after-click.png") });
  }

  const metadata = {
    title: await page.title(),
    url: page.url(),
    buttons: await page.locator("button").count(),
  };

  fs.writeFileSync(
    path.join(outputDir, "meta.json"),
    JSON.stringify(metadata, null, 2),
    "utf8"
  );

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
