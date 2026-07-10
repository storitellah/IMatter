#!/usr/bin/env python3
"""Generate I Matter placeholder favicon and app icons.

Draws the teal "I'M" wordmark (matching assets/logos/i-matter-logo.svg)
at all required PWA sizes. Rerun after changing colours or shapes:

    python3 tools/generate-icons.py

Replace the generated PNGs with official branded icons at any time —
keep the same file names so no code changes are needed.
"""
from PIL import Image, ImageDraw
import os

TEAL = (95, 192, 203, 255)      # letters
CREAM = (253, 248, 241, 255)    # light background
TEAL_BG = (47, 167, 181, 255)   # maskable background
WHITE = (255, 255, 255, 255)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICONS = os.path.join(ROOT, "icons")
os.makedirs(ICONS, exist_ok=True)

# Base canvas 512x512; coordinates mirror the SVG logo.
def draw_mark(draw, fill, scale=1.0, offset=(0, 0)):
    def pt(x, y):
        return (x * scale + offset[0], y * scale + offset[1])

    # I
    draw.rounded_rectangle([pt(112, 156), pt(166, 360)], radius=10 * scale, fill=fill)
    # apostrophe
    draw.polygon([pt(182, 138), pt(216, 132), pt(204, 184), pt(174, 190)], fill=fill)
    # M (polygon path from the SVG)
    draw.polygon([
        pt(238, 360), pt(238, 156), pt(290, 156), pt(330, 264), pt(370, 156),
        pt(422, 156), pt(422, 360), pt(376, 360), pt(376, 240), pt(344, 324),
        pt(316, 324), pt(284, 240), pt(284, 360),
    ], fill=fill)


def make_icon(size, bg, fg, rounded=True, pad_scale=1.0):
    base = 512
    img = Image.new("RGBA", (base, base), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if rounded:
        d.rounded_rectangle([0, 0, base, base], radius=112, fill=bg)
    else:
        d.rectangle([0, 0, base, base], fill=bg)
    # center the mark (mark spans x 112..422, y 132..360)
    if pad_scale != 1.0:
        s = pad_scale
        ox = (base - base * s) / 2
        draw_mark(d, fg, scale=s, offset=(ox, ox))
    else:
        draw_mark(d, fg)
    return img.resize((size, size), Image.LANCZOS)


# Regular icons: cream rounded square, teal letters
for size, name in [(512, "icon-512.png"), (192, "icon-192.png"),
                   (180, "apple-touch-icon.png"),
                   (32, "favicon-32.png"), (16, "favicon-16.png")]:
    make_icon(size, CREAM, TEAL, rounded=(size > 48)).save(os.path.join(ICONS, name))

# Maskable icon: full-bleed teal background, white letters, safe-zone padding
make_icon(512, TEAL_BG, WHITE, rounded=False, pad_scale=0.72).save(
    os.path.join(ICONS, "maskable-512.png"))

# favicon.ico with 16/32/48 sizes
ico_sizes = [16, 32, 48]
imgs = [make_icon(s, CREAM, TEAL, rounded=False) for s in ico_sizes]
imgs[0].save(os.path.join(ROOT, "favicon.ico"),
             sizes=[(s, s) for s in ico_sizes], append_images=imgs[1:])

print("Icons written to", ICONS)
