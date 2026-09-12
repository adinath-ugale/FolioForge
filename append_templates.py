import json
import subprocess
import os

APP_PATH = r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge\app.js"

def main():
    # 1. Run node to generate the seed batch
    res = subprocess.run(["node", "-e", """
        const gen = require('./templateGenerator.js');
        const batch = gen.generateSeedBatch();
        console.log(JSON.stringify(batch));
    """], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
    
    if res.returncode != 0:
        print("Error getting seed batch:", res.stderr)
        return

    seed_templates = json.loads(res.stdout)
    print(f"Loaded {len(seed_templates)} generated templates.")

    # 2. Read app.js
    with open(APP_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Verify ff-100 is present and ff-101 is not yet in TEMPLATES_DATA
    if '"id": "ff-100"' not in content:
        print("Error: ff-100 not found in app.js!")
        return

    if '"id": "ff-101"' in content:
        print("Warning: ff-101 already present in app.js, skipping append.")
    else:
        # Find the end of TEMPLATES_DATA: the last template object ends before "];"
        # Let's find "originalPrice": 3999,\n    "discount": 20\n  }\n];
        # Or locate the closing bracket of TEMPLATES_DATA
        marker = '    "originalPrice": 3999,\n    "discount": 20\n  }\n];'
        if marker not in content:
            # Let's try matching with flexible whitespace
            import re
            m = re.search(r'("id":\s*"ff-100".*?"discount":\s*20\s*\n\s*\})\s*\n\];', content, re.DOTALL)
            if not m:
                print("Could not find end of TEMPLATES_DATA with regex")
                return
            end_pos = m.end(1)
        else:
            end_pos = content.index(marker) + len('    "originalPrice": 3999,\n    "discount": 20\n  }')

        # Format new templates as JSON
        formatted_templates = []
        for t in seed_templates:
            formatted_templates.append(",\n  " + json.dumps(t, indent=4).replace("\n", "\n  "))

        new_content = content[:end_pos] + "".join(formatted_templates) + content[end_pos:]
        
        with open(APP_PATH, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully appended 27 generated templates into app.js!")

    # 3. Update search filter in app.js
    with open(APP_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    old_search = """    // Search query filter (matches title and tags)
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const matchTitle = t.title.toLowerCase().includes(q);
      const matchTag = t.tags.some(tag => tag.toLowerCase().includes(q));
      if (!matchTitle && !matchTag) return false;
    }"""

    new_search = """    // Search query filter (matches title, tags, category, style, and description)
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const matchTitle = t.title && t.title.toLowerCase().includes(q);
      const matchTag = t.tags && t.tags.some(tag => tag.toLowerCase().includes(q));
      const matchCat = t.category && t.category.toLowerCase().includes(q);
      const matchStyle = t.style && t.style.toLowerCase().includes(q);
      const matchDesc = t.description && t.description.toLowerCase().includes(q);
      if (!matchTitle && !matchTag && !matchCat && !matchStyle && !matchDesc) return false;
    }"""

    if old_search in content:
        content = content.replace(old_search, new_search)
        with open(APP_PATH, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated search filter in app.js!")

    # 4. Enhance modal specs
    old_specs = """      <div class="flex justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800">
        <span class="text-neutral-500">Service Model</span>
        <span class="font-medium text-neutral-900 dark:text-neutral-200">Custom Built &amp; Deployed</span>
      </div>"""

    new_specs = """      <div class="flex justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800">
        <span class="text-neutral-500">Service Model</span>
        <span class="font-medium text-neutral-900 dark:text-neutral-200">Custom Built &amp; Deployed</span>
      </div>
      ${t.category ? `
      <div class="flex justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800">
        <span class="text-neutral-500">Category &amp; Style</span>
        <span class="font-medium text-[#0D99FF]">${t.category} • ${t.style || 'Custom'}</span>
      </div>` : ''}
      ${t.technology ? `
      <div class="flex justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800">
        <span class="text-neutral-500">Tech Stack</span>
        <span class="font-medium text-neutral-900 dark:text-neutral-200">${Array.isArray(t.technology) ? t.technology.slice(0, 3).join(', ') : t.technology}</span>
      </div>` : ''}"""

    if old_specs in content and "Category &amp; Style" not in content:
        content = content.replace(old_specs, new_specs)
        with open(APP_PATH, "w", encoding="utf-8") as f:
            f.write(content)
        print("Enhanced modal specs in app.js!")

    # Verify syntax with node -c
    check = subprocess.run(["node", "-c", APP_PATH], capture_output=True, text=True)
    if check.returncode == 0:
        print("Syntax check passed for app.js!")
    else:
        print("Syntax error in app.js:", check.stderr)

if __name__ == "__main__":
    main()
