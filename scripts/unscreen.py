import numpy as np
from PIL import Image

im = Image.open("/app/frontend/public/assets/hero-chrome.png").convert("RGB")
arr = np.asarray(im).astype(np.float32)
alpha = arr.max(axis=2)
safe = np.maximum(alpha, 1)
rgb = np.clip(arr * (255.0 / safe[..., None]), 0, 255).astype(np.uint8)
out = np.dstack([rgb, alpha.astype(np.uint8)])
Image.fromarray(out, "RGBA").save("/app/frontend/public/assets/hero-chrome.png")
print("done")
