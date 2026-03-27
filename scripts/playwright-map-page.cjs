const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

async function main() {
  const targetUrl = process.argv[2] || "http://127.0.0.1:3001";
  const outputDir = process.argv[3] || "/tmp/playwright-map-page";

  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(targetUrl, { waitUntil: "networkidle", timeout: 60000 });

  const pageInfo = await page.evaluate(() => {
    const textOf = (el) => (el.textContent || "").replace(/\s+/g, " ").trim();

    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4")).map((el) => ({
      tag: el.tagName.toLowerCase(),
      text: textOf(el),
      top: Math.round(el.getBoundingClientRect().top + window.scrollY),
    }));

    const paragraphs = Array.from(document.querySelectorAll("p"))
      .map((el) => ({
        text: textOf(el),
        top: Math.round(el.getBoundingClientRect().top + window.scrollY),
      }))
      .filter((item) => item.text.length > 0);

    return {
      title: document.title,
      scrollHeight: document.documentElement.scrollHeight,
      viewportHeight: window.innerHeight,
      headings,
      paragraphs: paragraphs.slice(0, 40),
    };
  });

  fs.writeFileSync(path.join(outputDir, "page-info.json"), JSON.stringify(pageInfo, null, 2));

  const step = 700;
  const maxScroll = Math.max(0, pageInfo.scrollHeight - pageInfo.viewportHeight);
  let index = 0;

  for (let y = 0; y <= maxScroll; y += step) {
    await page.evaluate((scrollY) => window.scrollTo({ top: scrollY, behavior: "instant" }), y);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outputDir, `${String(index).padStart(2, "0")}-${y}.png`) });
    index += 1;
  }

  await page.close();
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
