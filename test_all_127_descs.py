import json
import subprocess
import os

APP_PATH = r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge\app.js"
GEN_PATH = r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge\templateGenerator.js"

script = """
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

const templates = sandbox.TEMPLATES_DATA;

// Helper to infer Category from title & tags
function inferCategory(title, tags) {
    const text = (title + ' ' + (tags || []).join(' ')).toLowerCase();
    if (text.includes('generative ai') || text.includes('genai') || text.includes('llm') || text.includes('diffusion')) return 'Generative AI';
    if (text.includes('ai engineer') || text.includes('neural') || text.includes('agentic')) return 'AI Engineer';
    if (text.includes('ml engineer') || text.includes('machine learning') || text.includes('mlops') || text.includes('computer vision')) return 'ML Engineer';
    if (text.includes('data scientist') || text.includes('predictive') || text.includes('statistical')) return 'Data Scientist';
    if (text.includes('data analyst') || text.includes('analytics') || text.includes('bi dashboard') || text.includes('business intelligence')) return 'Data Analyst';
    if (text.includes('full stack') || text.includes('monolith') || text.includes('web app')) return 'Full Stack Developer';
    if (text.includes('frontend') || text.includes('ui engineering') || text.includes('micro-interactions')) return 'Frontend Developer';
    if (text.includes('backend') || text.includes('cloud') || text.includes('api') || text.includes('microservice') || text.includes('distributed')) return 'Backend Developer';
    if (text.includes('software engineer') || text.includes('systems engineer')) return 'Software Engineer';
    if (text.includes('webgl') || text.includes('shader') || text.includes('glsl') || text.includes('webgpu')) return 'WebGL Developer';
    if (text.includes('3d developer') || text.includes('three.js') || text.includes('spatial') || text.includes('virtual worlds')) return '3D Developer';
    if (text.includes('creative technologist') || text.includes('r&d') || text.includes('physical computing') || text.includes('sensor')) return 'Creative Technologist';
    if (text.includes('creative developer') || text.includes('vortex') || text.includes('kineticui')) return 'Creative Developer';
    if (text.includes('interactive designer') || text.includes('motion designer') || text.includes('interaction')) return 'Interactive Designer';
    if (text.includes('digital artist') || text.includes('concept art') || text.includes('illustration') || text.includes('3d artist')) return 'Digital Artist';
    if (text.includes('photographer') || text.includes('photography') || text.includes('lookbook') || text.includes('photos')) return 'Photographer';
    if (text.includes('creative director') || text.includes('agency') || text.includes('studio') || text.includes('campaign')) return 'Creative Director';
    if (text.includes('graphic designer') || text.includes('brand identity') || text.includes('branding') || text.includes('packaging')) return 'Graphic Designer';
    if (text.includes('product designer') || text.includes('saas') || text.includes('ux strategy') || text.includes('fintech')) return 'Product Designer';
    if (text.includes('ux/ui') || text.includes('design system') || text.includes('case study') || text.includes('bento ux')) return 'UI/UX Designer';
    if (text.includes('engineering student') || text.includes('cs capstone') || text.includes('robotics')) return 'Engineering Student';
    if (text.includes('fresh graduate') || text.includes('junior dev') || text.includes('graduate')) return 'Fresh Graduate';
    if (text.includes('student') || text.includes('apprentice') || text.includes('internship')) return 'Student';
    if (text.includes('freelancer') || text.includes('contractor') || text.includes('solo studio')) return 'Freelancer';
    if (text.includes('consultant') || text.includes('advisory') || text.includes('fractional')) return 'Consultant';
    if (text.includes('personal brand') || text.includes('speaker') || text.includes('keynote') || text.includes('newsletter')) return 'Personal Brand';
    if (text.includes('developer') || text.includes('hacker') || text.includes('terminal') || text.includes('polyglot') || text.includes('kōdo')) return 'Developer';
    return 'Developer';
}

// Helper to infer Style from title, tags, and coverType
function inferStyle(title, tags, coverType) {
    const text = (title + ' ' + (tags || []).join(' ') + ' ' + (coverType || '')).toLowerCase();
    if (text.includes('cyberpunk') || text.includes('glitch') || text.includes('neo-tokyo')) return 'Cyberpunk';
    if (text.includes('futuristic') || text.includes('hud') || text.includes('scifi') || text.includes('telemetry')) return 'Futuristic';
    if (text.includes('ai-inspired') || text.includes('neural') || text.includes('synapse')) return 'AI-inspired';
    if (text.includes('bento') || text.includes('modular tile')) return 'Bento Grid';
    if (text.includes('neo-brutalist') || text.includes('brutalist')) return 'Neo-Brutalist';
    if (text.includes('glassmorphism') || text.includes('glass') || text.includes('frosted')) return 'Glassmorphism';
    if (text.includes('gradient') || text.includes('mesh') || text.includes('iridescent')) return 'Gradient';
    if (text.includes('luxury') || text.includes('gold') || text.includes('haute') || text.includes('maison')) return 'Luxury';
    if (text.includes('3d') || text.includes('spatial') || text.includes('three.js')) return '3D';
    if (text.includes('interactive') || text.includes('kinetic') || text.includes('physics')) return 'Interactive';
    if (text.includes('editorial') || text.includes('swiss') || text.includes('monograph') || text.includes('magazine') || text.includes('helvetica')) return 'Editorial';
    if (text.includes('photography') || text.includes('photo') || text.includes('darkroom') || text.includes('gallery')) return 'Photography-focused';
    if (text.includes('corporate') || text.includes('quant') || text.includes('boardroom') || text.includes('enterprise')) return 'Modern Corporate';
    if (text.includes('dark mode') || text.includes('dark') || text.includes('obsidian')) return 'Dark';
    if (text.includes('light') || text.includes('sunlit') || text.includes('daylight')) return 'Light';
    if (text.includes('minimalist') || text.includes('minimal') || text.includes('clean')) return 'Minimal';
    if (text.includes('creative') || text.includes('artistic')) return 'Creative';
    return 'Minimal';
}

// Generate tailored description for every template
const generatedMap = {};
const allDescriptions = [];

templates.forEach((t, index) => {
    const num = index + 1;
    const category = t.category || inferCategory(t.title, t.tags);
    const style = t.style || inferStyle(t.title, t.tags, t.coverType);
    
    t.category = category;
    t.style = style;

    const audience = t.targetAudience || CATEGORY_PROFILES[category]?.audience || 'innovative professionals';
    const purpose = t.purpose || CATEGORY_PROFILES[category]?.purpose || 'exhibit high-caliber work and convert prospective clients';
    const techStack = t.technology ? (Array.isArray(t.technology) ? t.technology.join(', ') : t.technology) : CATEGORY_PROFILES[category]?.techDefaults?.slice(0, 3).join(', ') || 'Next.js, React, and Tailwind CSS';
    const sections = t.sections || CATEGORY_PROFILES[category]?.sections || ['Hero Overview', 'Case Studies', 'Interactive Demos', 'Contact'];
    const visualConcept = t.visualConcept || `${STYLE_PROFILES[style]?.visualNote || 'sleek bespoke interface architecture'} crafted specifically for ${t.title}`;

    // Synthesize tailored description
    const desc = generateTemplateDescription({
        title: t.title,
        category,
        style,
        targetAudience: audience,
        purpose,
        visualConcept,
        sections,
        technology: techStack
    });

    t.description = desc;
    allDescriptions.push(desc);
});

console.log(JSON.stringify({
    count: templates.length,
    uniqueDescriptions: new Set(allDescriptions).size,
    sample1: { id: templates[0].id, title: templates[0].title, category: templates[0].category, style: templates[0].style, desc: templates[0].description },
    sample25: { id: templates[24].id, title: templates[24].title, category: templates[24].category, style: templates[24].style, desc: templates[24].description },
    sample50: { id: templates[49].id, title: templates[49].title, category: templates[49].category, style: templates[49].style, desc: templates[49].description },
    sample100: { id: templates[99].id, title: templates[99].title, category: templates[99].category, style: templates[99].style, desc: templates[99].description },
    sample127: { id: templates[126].id, title: templates[126].title, category: templates[126].category, style: templates[126].style, desc: templates[126].description }
}));
"""

res = subprocess.run(["node", "-e", script], capture_output=True, text=True, encoding="utf-8", cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
if res.returncode != 0:
    print("Error:", res.stderr)
else:
    data = json.loads(res.stdout)
    print("Test run successful!")
    print(f"Total templates processed: {data['count']}")
    print(f"Unique descriptions count: {data['uniqueDescriptions']} (Expected: {data['count']})")
    print("\nSample 1 (ff-001):")
    print(f"Title: {data['sample1']['title']} [{data['sample1']['category']} | {data['sample1']['style']}]")
    print(f"Description:\n{data['sample1']['desc']}")
    print("\nSample 25 (ff-025):")
    print(f"Title: {data['sample25']['title']} [{data['sample25']['category']} | {data['sample25']['style']}]")
    print(f"Description:\n{data['sample25']['desc']}")
    print("\nSample 50 (ff-050):")
    print(f"Title: {data['sample50']['title']} [{data['sample50']['category']} | {data['sample50']['style']}]")
    print(f"Description:\n{data['sample50']['desc']}")
    print("\nSample 100 (ff-100):")
    print(f"Title: {data['sample100']['title']} [{data['sample100']['category']} | {data['sample100']['style']}]")
    print(f"Description:\n{data['sample100']['desc']}")
    print("\nSample 127 (ff-127):")
    print(f"Title: {data['sample127']['title']} [{data['sample127']['category']} | {data['sample127']['style']}]")
    print(f"Description:\n{data['sample127']['desc']}")
