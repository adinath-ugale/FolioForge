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
const summary = tList.map(t => ({
    id: t.id,
    title: t.title,
    tags: t.tags,
    category: t.category || null,
    style: t.style || null
}));
console.log(JSON.stringify(summary));
"""

res = subprocess.run(["node", "-e", code], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
if res.returncode == 0:
    items = json.loads(res.stdout)
    print(f"Total items: {len(items)}")
    for i in range(0, min(15, len(items))):
        safe_title = items[i]['title'].encode('ascii', 'replace').decode()
        print(f"{items[i]['id']}: {safe_title} | Tags: {items[i]['tags']}")
    print("...")
    for i in range(95, min(105, len(items))):
        safe_title = items[i]['title'].encode('ascii', 'replace').decode()
        print(f"{items[i]['id']}: {safe_title} | Tags: {items[i]['tags']}")
