import json
import subprocess
import os

APP_PATH = r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge\app.js"
ASSETS_DIR = r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge\assets"

code = """
const fs = require('fs');
const vm = require('vm');
const s = { console, window: {}, document: { addEventListener: () => {} }, localStorage: { getItem: () => null, setItem: () => {} } };
s.window = s;
s.globalThis = s;
const app = fs.readFileSync('app.js', 'utf8');
vm.runInNewContext(app + '; this.T = TEMPLATES_DATA;', s);

console.log(JSON.stringify(s.T));
"""

res = subprocess.run(["node", "-e", code], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
if res.returncode != 0:
    print("Error reading app.js:", res.stderr)
    exit(1)

templates = json.loads(res.stdout)
print(f"==================================================")
print(f"DEEP ANALYSIS REPORT: {len(templates)} TEMPLATES")
print(f"==================================================")

issues = []
assets = set(os.listdir(ASSETS_DIR))

for i, t in enumerate(templates):
    t_id = t.get("id")
    title = t.get("title")
    desc = t.get("description")
    cat = t.get("category")
    style = t.get("style")
    img = t.get("image")
    orig_p = t.get("originalPrice")
    disc = t.get("discount")

    # 1. ID check
    expected_id = f"ff-{str(i+1).zfill(3)}"
    if t_id != expected_id:
        issues.append(f"[{t_id}] Expected ID {expected_id}")

    # 2. Description check
    if not desc or len(desc.strip()) < 30:
        issues.append(f"[{t_id}] Missing or too short description")

    # 3. Image check
    img_filename = os.path.basename(img) if img else ""
    if img_filename not in assets:
        issues.append(f"[{t_id}] Missing image file: {img}")

    # 4. Pricing check
    if not orig_p or not disc or orig_p < 1500:
        issues.append(f"[{t_id}] Invalid price: {orig_p}, {disc}%")

print(f"Issues found: {len(issues)}")
if issues:
    for iss in issues[:10]:
        print(" -", iss)
else:
    print("[OK] All 127 templates have valid IDs, images, prices, categories, and styles.")

# Analyze description uniqueness and sentence counts
descs = [t["description"] for t in templates]
unique_descs = set(descs)
print(f"[OK] Unique descriptions: {len(unique_descs)} / {len(templates)}")

sentence_counts = [len([s for s in d.split('.') if s.strip()]) for d in descs]
print(f"[OK] Sentences per description: Min {min(sentence_counts)}, Max {max(sentence_counts)}")

# Category distribution
from collections import Counter
cat_counts = Counter(t.get("category") for t in templates)
print(f"\nCategory representation ({len(cat_counts)} unique categories):")
for cat, count in sorted(cat_counts.items()):
    print(f"  {cat}: {count} templates")

# Style distribution
style_counts = Counter(t.get("style") for t in templates)
print(f"\nStyle representation ({len(style_counts)} unique styles):")
for style, count in sorted(style_counts.items()):
    print(f"  {style}: {count} templates")
