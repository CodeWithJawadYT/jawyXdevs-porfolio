import asyncio, os
from playwright.async_api import async_playwright

SITES = [
    ("barbershop", "https://barbershopkwc.com/"),
    ("cambrian", "https://cambriancustompainting.com/"),
    ("tigar", "https://tigar.ca/"),
    ("bxc", "https://bxc-pied.vercel.app/"),
    ("fadedistrict", "https://www.fadedistrictcuts.com/"),
    ("snowbros", "https://snowbrosptbo.ca/"),
]
OUT = "/app/frontend/public/projects"

async def shoot(browser, slug, url):
    try:
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        await page.goto(url, wait_until="networkidle", timeout=45000)
        await page.wait_for_timeout(3500)
        await page.screenshot(path=f"{OUT}/{slug}_top.jpg", quality=80, type="jpeg")
        await page.evaluate("window.scrollTo(0, 900)")
        await page.wait_for_timeout(2500)
        await page.screenshot(path=f"{OUT}/{slug}_mid.jpg", quality=80, type="jpeg")
        await page.close()
        page = await browser.new_page(viewport={"width": 900, "height": 1400})
        await page.goto(url, wait_until="networkidle", timeout=45000)
        await page.wait_for_timeout(3500)
        await page.screenshot(path=f"{OUT}/{slug}_tall.jpg", quality=80, type="jpeg")
        await page.close()
        print(f"OK {slug}")
    except Exception as e:
        print(f"FAIL {slug}: {e}")

async def main():
    os.makedirs(OUT, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        for slug, url in SITES:
            await shoot(browser, slug, url)
        await browser.close()

asyncio.run(main())
