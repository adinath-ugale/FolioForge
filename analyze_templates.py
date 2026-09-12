import json
import subprocess

code = """
const fs = require('fs');
const vm = require('vm');
const s = { console, window: {}, document: { addEventListener: () => {} }, localStorage: { getItem: () => null, setItem: () => {} } };
s.window = s;
s.globalThis = s;
const app = fs.readFileSync('app.js', 'utf8');
vm.runInNewContext(app + '; this.T = TEMPLATES_DATA;', s);

console.log(JSON.stringify(s.T.map(t => ({
    id: t.id,
    title: t.title,
    desc: t.description,
    category: t.category,
    style: t.style,
    tags: t.tags,
    image: t.image
}))));
"""

res = subprocess.run(["node", "-e", code], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
if res.returncode == 0:
    items = json.loads(res.stdout)
    print(f"Total templates: {len(items)}")
    
    # Check for empty descriptions
    empty_desc = [t['id'] for t in items if not t['desc'] or len(t['desc'].strip()) == 0]
    print(f"Empty descriptions: {len(empty_desc)}")
    
    # Check uniqueness
    descs = [t['desc'] for t in items]
    unique = set(descs)
    print(f"Unique descriptions: {len(unique)} / {len(items)}")
    
    # Print sample of first 10, middle 5, last 10
    def safe(s):
        return str(s).encode('ascii', 'replace').decode()

    print("\n--- FIRST 5 TEMPLATES ---")
    for t in items[:5]:
        print(f"[{t['id']}] {safe(t['title'])}")
        print(f"   Cat: {t['category']} | Style: {t['style']}")
        print(f"   Desc: {safe(t['desc'][:100])}...")
        
    print("\n--- TEMPLATES 50-53 ---")
    for t in items[49:53]:
        print(f"[{t['id']}] {safe(t['title'])}")
        print(f"   Cat: {t['category']} | Style: {t['style']}")
        print(f"   Desc: {safe(t['desc'][:100])}...")

    print("\n--- LAST 5 TEMPLATES ---")
    for t in items[-5:]:
        print(f"[{t['id']}] {safe(t['title'])}")
        print(f"   Cat: {t['category']} | Style: {t['style']}")
        print(f"   Desc: {safe(t['desc'][:100])}...")
else:
    print("Error:", res.stderr)
