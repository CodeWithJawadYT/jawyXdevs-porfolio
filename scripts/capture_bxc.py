import asyncio
from playwright.async_api import async_playwright

OUT = "/app/frontend/public/projects"
URL = "https://bxc-pied.vercel.app/"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(args=[
            "--use-gl=angle", "--use-angle=swiftshader",
            "--enable-webgl", "--disable-blink-features=AutomationControlled",
        ])
        page = await browser.new_page(viewport={"width": 1280, "height": 800}, user_agent=UA)
        await page.goto(URL, wait_until="load", timeout=60000)
        await page.wait_for_timeout(12000)
        await page.mouse.move(640, 400)
        await page.evaluate("window.scrollTo(0, 100)")
        await page.wait_for_timeout(3000)
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(2000)
        await page.screenshot(path=f"{OUT}/bxc_top.jpg", quality=80, type="jpeg")
        await page.evaluate("window.scrollTo(0, 900)")
        await page.wait_for_timeout(4000)
        await page.screenshot(path=f"{OUT}/bxc_mid.jpg", quality=80, type="jpeg")
        await page.close()
        page = await browser.new_page(viewport={"width": 900, "height": 1400}, user_agent=UA)
        await page.goto(URL, wait_until="load", timeout=60000)
        await page.wait_for_timeout(12000)
        await page.screenshot(path=f"{OUT}/bxc_tall.jpg", quality=80, type="jpeg")
        await browser.close()
        print("done")

asyncio.run(main())
