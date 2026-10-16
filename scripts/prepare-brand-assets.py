"""Generate optimized web assets from the supplied original Epart JPEGs. Requires Pillow."""
from pathlib import Path
import runpy
from PIL import Image

root = Path(__file__).resolve().parents[1]
logos = root / 'public/images/logo'
wordmark = Image.open(logos / 'epart-logo.jpeg')
wordmark.crop((180, 290, 1350, 745)).resize((540, 210), Image.Resampling.LANCZOS).save(
    logos / 'epart-wordmark.webp', quality=95
)
mark = Image.open(logos / 'E_logo.jpeg').crop((315, 325, 950, 925)).convert('RGBA')
pixels = mark.load()
for y in range(mark.height):
    for x in range(mark.width):
        r, g, b, _ = pixels[x, y]
        # Unmatte the JPEG's near-white background to avoid white edge halos.
        alpha = min(1, (255 - min(r, g, b)) / 55)
        if alpha < .04:
            pixels[x, y] = (0, 0, 0, 0)
        elif alpha < 1:
            pixels[x, y] = tuple(max(0, min(255, round((c - 255 * (1 - alpha)) / alpha))) for c in (r, g, b)) + (round(alpha * 255),)
mark.thumbnail((512, 512), Image.Resampling.LANCZOS)
mark.save(logos / 'epart-mark.webp')
for size, filename in [(192, 'icon-192.png'), (512, 'icon-512.png'),
                       (512, 'icon-512-maskable.png'), (180, 'apple-touch-icon.png')]:
    icon = Image.new('RGBA', (size, size), '#FFFFFF')
    artwork = mark.copy()
    artwork.thumbnail((int(size * .66), int(size * .66)), Image.Resampling.LANCZOS)
    icon.alpha_composite(artwork, ((size - artwork.width) // 2, (size - artwork.height) // 2))
    icon.convert('RGB').save(root / 'public/icons' / filename)
runpy.run_path(str(root / 'scripts/prepare-favicon.py'), run_name='__main__')
print('Generated wordmark, brand mark, favicon and PWA icons from the real logos.')
