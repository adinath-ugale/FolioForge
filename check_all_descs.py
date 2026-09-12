import json
import subprocess

code = """
const fs = require('fs');
const vm = require('vm');
const sandbox = { console, window: {}, document: { addEventListener: () => {} }, localStorage: { getItem: () => null, setItem: () => {} } };
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

const appCode = fs.readFileSync('app.js', 'utf8');
vm.runInNewContext(appCode + '; this.TEMPLATES_DATA = TEMPLATES_DATA;', sandbox);

const tList = sandbox.TEMPLATES_DATA;
console.log(JSON.stringify({
    total: tList.length,
    items: tList.map(t => ({
        id: t.id,
        title: t.title,
        desc: t.description,
        tags: t.tags,
        category: t.category,
        style: t.style,
        image: t.image
    }))
}));
"""

res = subprocess.run(["node", "-e", code], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
if res.returncode != 0:
    print("Error:", res.stderr)
else:
    data = json.loads(res.stdout)
    print(f"Total templates: {data['total']}")
    descs = [d['desc'] for d in data['items']]
    unique_descs = set(descs)
    print(f"Unique descriptions: {len(unique_descs)}")
    from collections import Counter
    c = Counter(descs)
    print("Most common descriptions count:")
    for desc, count in c.most_common(5):
        print(f"Count {count}: {desc[:70]}...")
