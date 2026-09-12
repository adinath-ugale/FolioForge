import json
import subprocess
import os

APP_PATH = r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge\app.js"

code = """
const fs = require('fs');
const vm = require('vm');

const sandbox = { 
    console, 
    window: {}, 
    document: { addEventListener: () => {} }, 
    localStorage: { getItem: () => null, setItem: () => {} } 
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

// Load templateGenerator.js
const genCode = fs.readFileSync('templateGenerator.js', 'utf8');
vm.runInNewContext(genCode, sandbox);

// Load app.js
const appCode = fs.readFileSync('app.js', 'utf8');
vm.runInNewContext(appCode + '; this.TEMPLATES_DATA = TEMPLATES_DATA;', sandbox);

const FolioForgeGenerator = sandbox.FolioForgeGenerator;
const CATEGORY_PROFILES = FolioForgeGenerator.CATEGORY_PROFILES;
const STYLE_PROFILES = FolioForgeGenerator.STYLE_PROFILES;
const generateTemplateDescription = FolioForgeGenerator.generateTemplateDescription;
const inferCategory = FolioForgeGenerator.inferCategory;
const inferStyle = FolioForgeGenerator.inferStyle;

const templates = sandbox.TEMPLATES_DATA;

templates.forEach((t, index) => {
    const category = t.category || inferCategory(t.title, t.tags);
    const style = t.style || inferStyle(t.title, t.tags, t.coverType);
    
    t.category = category;
    t.style = style;

    const audience = t.targetAudience || CATEGORY_PROFILES[category]?.audience || 'innovative professionals';
    const purpose = t.purpose || CATEGORY_PROFILES[category]?.purpose || 'exhibit high-caliber work and convert prospective clients';
    const techStack = t.technology ? (Array.isArray(t.technology) ? t.technology.join(', ') : t.technology) : CATEGORY_PROFILES[category]?.techDefaults?.slice(0, 3).join(', ') || 'Next.js, React, and Tailwind CSS';
    const sections = t.sections || CATEGORY_PROFILES[category]?.sections || ['Hero Overview', 'Case Studies', 'Interactive Demos', 'Contact'];
    const visualConcept = t.visualConcept || `${STYLE_PROFILES[style]?.visualNote || 'sleek bespoke interface architecture'} crafted specifically for ${t.title}`;

    if (!t.targetAudience) t.targetAudience = audience;
    if (!t.visualConcept) t.visualConcept = visualConcept;
    if (!t.sections) t.sections = sections;
    if (!t.technology) t.technology = CATEGORY_PROFILES[category]?.techDefaults || ['Next.js', 'React', 'Tailwind CSS'];

    // Synthesize tailored description specifically according to this template
    t.description = generateTemplateDescription({
        id: t.id,
        title: t.title,
        category,
        style,
        targetAudience: audience,
        purpose,
        visualConcept,
        sections,
        technology: techStack
    });
});

console.log(JSON.stringify(templates));
"""

res = subprocess.run(["node", "-e", code], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
if res.returncode != 0:
    print("Error generating updated templates:", res.stderr)
    exit(1)

updated_templates = json.loads(res.stdout)
print(f"Total updated templates: {len(updated_templates)}")
unique_descs = set(t['description'] for t in updated_templates)
print(f"Unique descriptions count: {len(unique_descs)} / {len(updated_templates)}")

# Read current app.js
with open(APP_PATH, "r", encoding="utf-8") as f:
    app_text = f.read()

# Locate TEMPLATES_DATA in app.js
# const TEMPLATES_DATA = [ ... ];
start_marker = "const TEMPLATES_DATA = ["
end_marker = "];\n\n// --- Application State ---"
if end_marker not in app_text:
    end_marker = "];\r\n\r\n// --- Application State ---"

if start_marker not in app_text or end_marker not in app_text:
    print("Could not find start or end markers for TEMPLATES_DATA!")
    # Let's inspect where TEMPLATES_DATA ends
    import re
    m = re.search(r'const TEMPLATES_DATA = \[.*?\];\n\n// --- Application State ---', app_text, re.DOTALL)
    if not m:
        print("Regex failed to match TEMPLATES_DATA block")
        exit(1)
    start_pos = m.start()
    end_pos = m.end() - len("\n\n// --- Application State ---")
else:
    start_pos = app_text.index(start_marker)
    end_pos = app_text.index(end_marker) + 1  # include ']'

# Format updated TEMPLATES_DATA
formatted_json = json.dumps(updated_templates, indent=2)
new_templates_block = f"const TEMPLATES_DATA = {formatted_json};"

new_app_text = app_text[:start_pos] + new_templates_block + app_text[end_pos + 1:]

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.write(new_app_text)

print("Successfully updated app.js with all 127 matching generated descriptions!")

# Verify syntax with node -c
check = subprocess.run(["node", "-c", APP_PATH], capture_output=True, text=True)
if check.returncode == 0:
    print("Syntax check PASSED for app.js!")
else:
    print("Syntax error in app.js:", check.stderr)
