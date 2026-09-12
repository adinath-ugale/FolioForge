import json
import subprocess

code = """
const fs = require('fs');
const vm = require('vm');
const sandbox = { console, window: {}, document: { addEventListener: () => {} }, localStorage: { getItem: () => null, setItem: () => {} } };
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
const genCode = fs.readFileSync('templateGenerator.js', 'utf8');
vm.runInNewContext(genCode, sandbox);
const appCode = fs.readFileSync('app.js', 'utf8');
vm.runInNewContext(appCode + '; this.TEMPLATES_DATA = TEMPLATES_DATA;', sandbox);

const FolioForgeGenerator = sandbox.FolioForgeGenerator;
const CATEGORY_PROFILES = FolioForgeGenerator.CATEGORY_PROFILES;
const STYLE_PROFILES = FolioForgeGenerator.STYLE_PROFILES;
const generateTemplateDescription = FolioForgeGenerator.generateTemplateDescription;
const inferCategory = FolioForgeGenerator.inferCategory;
const inferStyle = FolioForgeGenerator.inferStyle;

const templates = sandbox.TEMPLATES_DATA;
const descMap = {};
const duplicates = [];

templates.forEach((t, index) => {
    const category = t.category || inferCategory(t.title, t.tags);
    const style = t.style || inferStyle(t.title, t.tags, t.coverType);
    const audience = t.targetAudience || CATEGORY_PROFILES[category]?.audience || 'innovative professionals';
    const purpose = t.purpose || CATEGORY_PROFILES[category]?.purpose || 'exhibit high-caliber work and convert prospective clients';
    const techStack = t.technology ? (Array.isArray(t.technology) ? t.technology.join(', ') : t.technology) : CATEGORY_PROFILES[category]?.techDefaults?.slice(0, 3).join(', ') || 'Next.js, React, and Tailwind CSS';
    const sections = t.sections || CATEGORY_PROFILES[category]?.sections || ['Hero Overview', 'Case Studies', 'Interactive Demos', 'Contact'];
    const visualConcept = t.visualConcept || `${STYLE_PROFILES[style]?.visualNote || 'sleek bespoke interface architecture'} crafted specifically for ${t.title}`;

    const desc = generateTemplateDescription({
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

    if (descMap[desc]) {
        duplicates.push({ first: descMap[desc], second: t.id, title1: descMap[desc].title, title2: t.title, desc });
    } else {
        descMap[desc] = { id: t.id, title: t.title };
    }
});

console.log(JSON.stringify(duplicates));
"""

res = subprocess.run(["node", "-e", code], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
if res.returncode == 0:
    dupes = json.loads(res.stdout)
    print(f"Duplicates found: {len(dupes)}")
    for d in dupes:
        print(f"Duplicate between {d['first']['id']} ({d['first']['title']}) and {d['second']} ({d['title2']})")
