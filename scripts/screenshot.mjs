/**
 * Dev-only visual check: drives system Chrome via playwright-core,
 * captures viewport and full-page screenshots and prints console errors.
 * Usage: node scripts/screenshot.mjs [url] [outDir]
 */
import { chromium } from 'playwright-core'

const url = process.argv[2] ?? 'http://localhost:5199'
const outDir = process.argv[3] ?? 'shots'

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

const errors = []
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text())
})
page.on('pageerror', (err) => errors.push(String(err)))

await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(2500)
await page.screenshot({ path: `${outDir}/viewport.png` })

// Scroll through the page so scroll-reveal animations fire, then full-page shot
await page.evaluate(async () => {
  const step = window.innerHeight / 2
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
})
await page.waitForTimeout(1200)
await page.screenshot({ path: `${outDir}/fullpage.png`, fullPage: true })

// Mobile viewport
await page.setViewportSize({ width: 390, height: 844 })
await page.waitForTimeout(800)
await page.screenshot({ path: `${outDir}/mobile.png` })

console.log('console errors:', errors.length ? errors : 'none')
await browser.close()
