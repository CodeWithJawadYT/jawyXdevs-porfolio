import numpy as np
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
bg = Image.new("RGB", (W, H), (12, 12, 12))

obj = Image.open("/app/frontend/public/assets/hero-chrome.png").convert("RGBA").resize((520, 520))
bg.paste(obj, (670, 60), obj)

font = ImageFont.truetype("/tmp/Kanit-Black.ttf", 150)
mask = Image.new("L", (W, H), 0)
d = ImageDraw.Draw(mask)
d.text((66, 110), "JAWYX", font=font, fill=255)
d.text((66, 265), "DEVS", font=font, fill=255)

grad = np.zeros((H, W, 3), np.uint8)
top = np.array([100, 105, 115])
bot = np.array([187, 204, 215])
for yy in range(H):
    grad[yy, :] = (top + (bot - top) * (yy / H)).astype(np.uint8)
bg.paste(Image.fromarray(grad), (0, 0), mask)

f2 = ImageFont.truetype("/tmp/Kanit-Light.ttf", 32)
draw = ImageDraw.Draw(bg)
draw.text((72, 500), "ELITE WEB ENGINEERING & DIGITAL EXPERIENCES", font=f2, fill=(215, 226, 234))
draw.rectangle([72, 480, 560, 483], fill=(182, 0, 168))

bg.save("/app/frontend/public/og-image.jpg", quality=88)
print("og done")
