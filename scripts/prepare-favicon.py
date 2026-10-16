"""Export browser favicons while preserving the extracted logo's alpha channel."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
source = Image.open(root / 'src/assets/epart-favicon-transparent-source.png').convert('RGBA')
source = source.crop(source.getbbox())
for size, filename in [(64, 'favicon-transparent.png'), (32, 'favicon.png')]:
    artwork = source.copy()
    artwork.thumbnail((round(size * .88), round(size * .88)), Image.Resampling.LANCZOS)
    icon = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    icon.alpha_composite(artwork, ((size - artwork.width) // 2, (size - artwork.height) // 2))
    icon.save(root / 'public/icons' / filename, optimize=True)
    assert icon.getpixel((0, 0))[3] == 0
print('Exported transparent browser favicons at 32px and 64px.')
