// Renders the two résumé pages to PDF with headless Chromium (Playwright).
//   npm i -D playwright && node resume/build.cjs
// Fonts are local (resume/fonts), so the build needs no network.
const path = require("path");
const { chromium } = require("playwright");

const jobs = [
  ["fa.html", "رزومه_حسین_شیردل.pdf"],
  ["en.html", "Hossein_Shirdel_Resume.pdf"],
];

(async () => {
  const only = process.argv[2];
  const browser = await chromium.launch();
  for (const [src, out] of jobs) {
    if (only && !src.startsWith(only)) continue;
    const page = await browser.newPage();
    await page.goto("file://" + path.join(__dirname, src), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => window.__chartsReady === true);
    const overflow = await page.evaluate(() =>
      [...document.querySelectorAll(".page")].map((p, i) => {
        const foot = p.querySelector(".foot").getBoundingClientRect().top;
        const last = [...p.children].filter((c) => !c.classList.contains("foot")).pop().getBoundingClientRect().bottom;
        return { sheet: i + 1, spareMm: +((foot - last) / 3.7795).toFixed(1) };
      })
    );
    console.log(src, JSON.stringify(overflow));
    await page.pdf({ path: path.join(__dirname, "..", out), preferCSSPageSize: true, printBackground: true });
    await page.close();
    console.log("wrote", out);
  }
  await browser.close();
})();
