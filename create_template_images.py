import os
import json
import math
from PIL import Image, ImageDraw, ImageFont

ASSETS_DIR = r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge\assets"
APP_PATH = r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge\app.js"

# Color palettes by style
STYLE_PALETTES = {
    "AI-inspired": {
        "bg_top": (10, 12, 28),
        "bg_bottom": (18, 22, 54),
        "accent": (147, 51, 234),     # Purple
        "accent_light": (192, 132, 252),
        "card_bg": (24, 28, 65),
        "text": (255, 255, 255),
        "subtext": (168, 175, 215)
    },
    "Bento Grid": {
        "bg_top": (15, 23, 42),       # Slate
        "bg_bottom": (30, 41, 59),
        "accent": (59, 130, 246),     # Blue
        "accent_light": (96, 165, 250),
        "card_bg": (30, 41, 59),
        "text": (255, 255, 255),
        "subtext": (148, 163, 184)
    },
    "3D": {
        "bg_top": (24, 15, 36),
        "bg_bottom": (45, 20, 60),
        "accent": (236, 72, 153),     # Pink
        "accent_light": (244, 114, 182),
        "card_bg": (48, 25, 68),
        "text": (255, 255, 255),
        "subtext": (209, 180, 225)
    },
    "Minimal": {
        "bg_top": (23, 23, 23),
        "bg_bottom": (38, 38, 38),
        "accent": (255, 255, 255),
        "accent_light": (212, 212, 212),
        "card_bg": (45, 45, 45),
        "text": (255, 255, 255),
        "subtext": (163, 163, 163)
    },
    "Dark": {
        "bg_top": (12, 12, 14),
        "bg_bottom": (24, 24, 28),
        "accent": (99, 102, 241),     # Indigo
        "accent_light": (165, 180, 252),
        "card_bg": (30, 30, 38),
        "text": (255, 255, 255),
        "subtext": (156, 163, 175)
    },
    "Interactive": {
        "bg_top": (13, 37, 36),
        "bg_bottom": (20, 58, 55),
        "accent": (20, 184, 166),     # Teal
        "accent_light": (94, 234, 212),
        "card_bg": (28, 75, 72),
        "text": (255, 255, 255),
        "subtext": (153, 215, 205)
    },
    "Futuristic": {
        "bg_top": (6, 24, 44),
        "bg_bottom": (10, 37, 64),
        "accent": (6, 182, 212),      # Cyan
        "accent_light": (103, 232, 249),
        "card_bg": (14, 48, 80),
        "text": (255, 255, 255),
        "subtext": (147, 197, 225)
    },
    "Cyberpunk": {
        "bg_top": (15, 10, 26),
        "bg_bottom": (35, 15, 45),
        "accent": (244, 63, 94),      # Rose / Neon Pink
        "accent_light": (251, 146, 60),# Orange
        "card_bg": (45, 18, 52),
        "text": (255, 255, 255),
        "subtext": (244, 175, 205)
    },
    "Modern Corporate": {
        "bg_top": (15, 23, 42),
        "bg_bottom": (24, 38, 64),
        "accent": (37, 99, 235),      # Blue
        "accent_light": (147, 197, 253),
        "card_bg": (30, 48, 80),
        "text": (255, 255, 255),
        "subtext": (148, 163, 184)
    },
    "Light": {
        "bg_top": (241, 245, 249),
        "bg_bottom": (226, 232, 240),
        "accent": (14, 165, 233),     # Sky Blue
        "accent_light": (2, 132, 199),
        "card_bg": (255, 255, 255),
        "text": (15, 23, 42),
        "subtext": (71, 85, 105)
    },
    "Gradient": {
        "bg_top": (42, 15, 56),
        "bg_bottom": (20, 18, 55),
        "accent": (217, 70, 239),     # Fuchsia
        "accent_light": (240, 171, 252),
        "card_bg": (55, 25, 75),
        "text": (255, 255, 255),
        "subtext": (216, 180, 254)
    },
    "Glassmorphism": {
        "bg_top": (15, 23, 42),
        "bg_bottom": (28, 44, 75),
        "accent": (56, 189, 248),     # Sky
        "accent_light": (186, 230, 253),
        "card_bg": (38, 58, 95),
        "text": (255, 255, 255),
        "subtext": (186, 205, 230)
    },
    "Editorial": {
        "bg_top": (28, 25, 23),       # Warm stone
        "bg_bottom": (41, 37, 36),
        "accent": (245, 158, 11),     # Amber
        "accent_light": (252, 211, 77),
        "card_bg": (55, 50, 48),
        "text": (255, 255, 255),
        "subtext": (214, 211, 209)
    },
    "Neo-Brutalist": {
        "bg_top": (254, 243, 199),    # Amber 100
        "bg_bottom": (253, 230, 138),  # Amber 200
        "accent": (239, 68, 68),      # Red
        "accent_light": (249, 115, 22),
        "card_bg": (255, 255, 255),
        "text": (17, 24, 39),
        "subtext": (55, 65, 81)
    },
    "Luxury": {
        "bg_top": (15, 15, 17),
        "bg_bottom": (26, 24, 20),
        "accent": (217, 178, 95),     # Champagne Gold
        "accent_light": (245, 222, 160),
        "card_bg": (36, 33, 28),
        "text": (255, 255, 255),
        "subtext": (210, 195, 165)
    },
    "Photography-focused": {
        "bg_top": (10, 10, 10),
        "bg_bottom": (20, 20, 22),
        "accent": (243, 244, 246),
        "accent_light": (156, 163, 175),
        "card_bg": (28, 28, 30),
        "text": (255, 255, 255),
        "subtext": (156, 163, 175)
    },
    "Creative": {
        "bg_top": (35, 18, 48),
        "bg_bottom": (60, 25, 45),
        "accent": (249, 115, 22),     # Orange
        "accent_light": (251, 146, 60),
        "card_bg": (70, 32, 55),
        "text": (255, 255, 255),
        "subtext": (230, 185, 200)
    }
}

def get_font(size):
    # Try system fonts or default
    font_paths = [
        "C:\\Windows\\Fonts\\segoeui.ttf",
        "C:\\Windows\\Fonts\\arial.ttf",
        "C:\\Windows\\Fonts\\calibri.ttf"
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

def get_font_bold(size):
    font_paths = [
        "C:\\Windows\\Fonts\\segoeuib.ttf",
        "C:\\Windows\\Fonts\\arialbd.ttf",
        "C:\\Windows\\Fonts\\calibrib.ttf"
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return get_font(size)

def generate_mockup(template, output_path):
    width = 1024
    height = 640

    style = template.get("style", "Minimal")
    palette = STYLE_PALETTES.get(style, STYLE_PALETTES["Minimal"])

    img = Image.new("RGB", (width, height), palette["bg_top"])
    draw = ImageDraw.Draw(img)

    # 1. Background vertical gradient
    top_c = palette["bg_top"]
    bot_c = palette["bg_bottom"]
    for y in range(height):
        ratio = y / float(height)
        r = int(top_c[0] * (1 - ratio) + bot_c[0] * ratio)
        g = int(top_c[1] * (1 - ratio) + bot_c[1] * ratio)
        b = int(top_c[2] * (1 - ratio) + bot_c[2] * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # 2. Geometric atmospheric shapes / glows
    accent = palette["accent"]
    accent_soft = (accent[0], accent[1], accent[2])
    # Top-right glow
    for i in range(120, 0, -8):
        alpha = int(25 * (1 - i / 120))
        glow_color = (
            int(bot_c[0] + (accent[0] - bot_c[0]) * (alpha / 100)),
            int(bot_c[1] + (accent[1] - bot_c[1]) * (alpha / 100)),
            int(bot_c[2] + (accent[2] - bot_c[2]) * (alpha / 100))
        )
        draw.ellipse([width - 250 - i*2, -80 - i*2, width + 100 + i*2, 280 + i*2], outline=glow_color, width=3)

    # 3. Browser Window Frame Mockup
    window_x = 48
    window_y = 40
    window_w = width - 96
    window_h = height - 80
    window_radius = 16

    # Draw window backdrop with border
    border_color = (int(palette["card_bg"][0] * 1.3), int(palette["card_bg"][1] * 1.3), int(palette["card_bg"][2] * 1.3))
    if style in ["Light", "Neo-Brutalist"]:
        border_color = (200, 205, 215)
        window_bg = (255, 255, 255)
    else:
        window_bg = palette["card_bg"]

    draw.rounded_rectangle([window_x, window_y, window_x + window_w, window_y + window_h], radius=window_radius, fill=window_bg, outline=border_color, width=2)

    # Window header bar
    header_h = 44
    header_bg = (int(window_bg[0] * 0.85), int(window_bg[1] * 0.85), int(window_bg[2] * 0.85))
    draw.rounded_rectangle([window_x, window_y, window_x + window_w, window_y + header_h], radius=window_radius, fill=header_bg)
    draw.rectangle([window_x, window_y + header_h - 12, window_x + window_w, window_y + header_h], fill=header_bg)
    draw.line([(window_x, window_y + header_h), (window_x + window_w, window_y + header_h)], fill=border_color, width=1)

    # Traffic light dots
    dot_y = window_y + 22
    draw.ellipse([window_x + 22, dot_y - 6, window_x + 34, dot_y + 6], fill=(239, 68, 68))
    draw.ellipse([window_x + 40, dot_y - 6, window_x + 52, dot_y + 6], fill=(245, 158, 11))
    draw.ellipse([window_x + 58, dot_y - 6, window_x + 70, dot_y + 6], fill=(16, 185, 129))

    # Address bar in header
    addr_w = 340
    addr_x = window_x + (window_w - addr_w) // 2
    addr_y = window_y + 11
    draw.rounded_rectangle([addr_x, addr_y, addr_x + addr_w, addr_y + 22], radius=6, fill=window_bg, outline=border_color)
    font_addr = get_font(11)
    draw.text((addr_x + 14, addr_y + 4), f"folioforge.design/{template['id'].lower()}", fill=palette["subtext"], font=font_addr)

    # FolioForge badge right
    font_badge = get_font_bold(10)
    badge_text = "FOLIOFORGE PRO"
    draw.text((window_x + window_w - 110, dot_y - 6), badge_text, fill=palette["accent_light"], font=font_badge)

    # 4. Main Portfolio Hero Layout inside Window
    content_y = window_y + header_h + 36
    content_x = window_x + 44

    # Category & Style Pill Badge
    pill_text = f"{template.get('category', 'DEVELOPER').upper()}  •  {style.upper()}"
    font_pill = get_font_bold(12)
    pill_w = int(draw.textlength(pill_text, font=font_pill)) + 24
    pill_h = 28
    draw.rounded_rectangle([content_x, content_y, content_x + pill_w, content_y + pill_h], radius=14, fill=palette["accent"])
    draw.text((content_x + 12, content_y + 6), pill_text, fill=(255, 255, 255), font=font_pill)

    # Main Portfolio Title
    font_title = get_font_bold(32)
    raw_title = template.get("title", "Portfolio Design Pro")
    # Take first clean part of title before dash if too long
    title_display = raw_title.split("—")[0].strip() if "—" in raw_title else raw_title
    if len(title_display) > 28:
        title_display = title_display[:26] + "..."

    draw.text((content_x, content_y + 42), title_display, fill=palette["text"], font=font_title)

    # Subtitle / Visual Concept preview
    concept_text = template.get("visualConcept", "Bespoke high-converting portfolio system built for rapid career elevation.")
    if len(concept_text) > 85:
        concept_text = concept_text[:82] + "..."
    font_sub = get_font(15)
    draw.text((content_x, content_y + 88), concept_text, fill=palette["subtext"], font=font_sub)

    # 5. Modular Cards / Bento Elements inside Mockup
    cards_y = content_y + 130
    card_w = (window_w - 88 - 32) // 3
    card_h = 190

    # Card 1: Featured Project / Architecture
    c1_x = content_x
    draw.rounded_rectangle([c1_x, cards_y, c1_x + card_w, cards_y + card_h], radius=10, fill=header_bg, outline=border_color, width=1)
    draw.rounded_rectangle([c1_x + 14, cards_y + 14, c1_x + card_w - 14, cards_y + 85], radius=6, fill=palette["bg_top"])
    draw.text((c1_x + 22, cards_y + 26), "// Featured Case Study", fill=palette["accent_light"], font=get_font_bold(11))
    draw.text((c1_x + 22, cards_y + 46), "Production Architecture", fill=palette["text"], font=get_font_bold(13))
    draw.text((c1_x + 14, cards_y + 102), "Next.js • Tailwind • GSAP", fill=palette["subtext"], font=get_font(12))
    draw.text((c1_x + 14, cards_y + 124), "✓ 100/100 Lighthouse Score", fill=(16, 185, 129), font=get_font_bold(11))
    draw.text((c1_x + 14, cards_y + 146), "✓ Dynamic Micro-Interactions", fill=palette["subtext"], font=get_font(11))

    # Card 2: Interactive Telemetry / Metric / Specs
    c2_x = c1_x + card_w + 16
    draw.rounded_rectangle([c2_x, cards_y, c2_x + card_w, cards_y + card_h], radius=10, fill=header_bg, outline=border_color, width=1)
    draw.text((c2_x + 16, cards_y + 16), "SYSTEM SPECIFICATIONS", fill=palette["accent_light"], font=get_font_bold(11))
    draw.text((c2_x + 16, cards_y + 38), f"{template.get('pagesCount', 18)} Responsive Sections", fill=palette["text"], font=get_font_bold(14))
    
    # Progress bars
    draw.text((c2_x + 16, cards_y + 70), "Conversion Velocity", fill=palette["subtext"], font=get_font(11))
    draw.rounded_rectangle([c2_x + 16, cards_y + 88, c2_x + card_w - 16, cards_y + 96], radius=4, fill=palette["bg_top"])
    draw.rounded_rectangle([c2_x + 16, cards_y + 88, c2_x + int((card_w - 32) * 0.92), cards_y + 96], radius=4, fill=palette["accent"])

    draw.text((c2_x + 16, cards_y + 112), "Interactive Fidelity", fill=palette["subtext"], font=get_font(11))
    draw.rounded_rectangle([c2_x + 16, cards_y + 130, c2_x + card_w - 16, cards_y + 138], radius=4, fill=palette["bg_top"])
    draw.rounded_rectangle([c2_x + 16, cards_y + 130, c2_x + int((card_w - 32) * 0.88), cards_y + 138], radius=4, fill=palette["accent_light"])

    draw.text((c2_x + 16, cards_y + 154), "3–5 Business Days Delivery", fill=palette["text"], font=get_font_bold(11))

    # Card 3: Consultation & Conversion CTA
    c3_x = c2_x + card_w + 16
    draw.rounded_rectangle([c3_x, cards_y, c3_x + card_w, cards_y + card_h], radius=10, fill=header_bg, outline=border_color, width=1)
    draw.text((c3_x + 16, cards_y + 16), "CUSTOM SERVICE", fill=palette["accent_light"], font=get_font_bold(11))
    
    # Price
    orig = template.get("originalPrice", 2999)
    disc = template.get("discount", 20)
    final = round(orig - (orig * disc / 100))
    draw.text((c3_x + 16, cards_y + 36), f"Rs. {final:,}", fill=palette["text"], font=get_font_bold(20))
    draw.text((c3_x + 16, cards_y + 64), f"Original: Rs. {orig:,} ({disc}% OFF)", fill=(16, 185, 129), font=get_font_bold(11))

    # WhatsApp Button Mockup
    btn_y = cards_y + 104
    draw.rounded_rectangle([c3_x + 14, btn_y, c3_x + card_w - 14, btn_y + 36], radius=8, fill=(37, 211, 102))
    draw.text((c3_x + 28, btn_y + 10), "Build on WhatsApp", fill=(255, 255, 255), font=get_font_bold(12))

    draw.text((c3_x + 16, cards_y + 154), "🔒 Direct Client Consultation", fill=palette["subtext"], font=get_font(10))

    # Save to disk
    img.save(output_path, "JPEG", quality=92)
    print(f"Generated {os.path.basename(output_path)} for {template['id']}")

def main():
    print("Reading app.js to extract templates ff-101 to ff-127...")
    with open(APP_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract JSON of TEMPLATES_DATA
    import subprocess
    code = """
    const fs = require('fs');
    const vm = require('vm');
    const sandbox = { console, window: {}, document: { addEventListener: () => {} }, localStorage: { getItem: () => null, setItem: () => {} } };
    sandbox.window = sandbox;
    sandbox.globalThis = sandbox;
    const appCode = fs.readFileSync('app.js', 'utf8');
    vm.runInNewContext(appCode + '; this.TEMPLATES_DATA = TEMPLATES_DATA;', sandbox);
    console.log(JSON.stringify(sandbox.TEMPLATES_DATA.filter(t => {
        const n = parseInt(t.id.replace('ff-', ''), 10);
        return n >= 101 && n <= 127;
    })));
    """
    res = subprocess.run(["node", "-e", code], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
    if res.returncode != 0:
        print("Error reading templates:", res.stderr)
        return

    templates = json.loads(res.stdout)
    print(f"Found {len(templates)} templates to generate images for (ff-101 to ff-127).")

    for t in templates:
        num = t["id"].replace("ff-", "")
        # Remove leading zeroes if any, e.g. ff-101 -> 101
        num_int = int(num)
        filename = f"t{num_int}.jpg"
        out_path = os.path.join(ASSETS_DIR, filename)
        generate_mockup(t, out_path)

    print("\nAll 27 template images (t101.jpg to t127.jpg) successfully generated!")

if __name__ == "__main__":
    main()
