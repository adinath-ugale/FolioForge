/**
 * FolioForge - Automatic Template & Matching Description Generation Engine
 * 
 * Programmatically generates original portfolio website templates spanning:
 * - 27 Professional Categories
 * - 17 Modern Design Styles
 * 
 * Algorithmically synthesizes unique, context-rich 2-3 sentence descriptions
 * derived from title, category, design style, target audience, visual concept,
 * included sections, technology stack, and career purpose.
 */

(function (global) {
  // =========================================================================
  // 1. Core Category Profiles (All 27 Specified Categories)
  // =========================================================================
  const CATEGORY_PROFILES = {
    "Developer": {
      name: "Developer",
      audience: "Software developers, open-source maintainers, and polyglot programmers",
      purpose: "exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads",
      techDefaults: ["React", "TypeScript", "Tailwind CSS", "GitHub API", "Vercel"],
      sections: ["Live Terminal Hero", "Featured Repositories", "Architecture Diagrams", "Tech Stack Matrix", "Interactive Playground", "Contact & Inquiries"],
      tags: ["Developer", "Open Source", "Codebase"]
    },
    "Software Engineer": {
      name: "Software Engineer",
      audience: "Senior software engineers, distributed systems builders, and algorithms specialists",
      purpose: "showcase scalable microservices, low-latency architectures, and mission-critical engineering accomplishments",
      techDefaults: ["Next.js", "Go", "Docker", "PostgreSQL", "Tailwind CSS"],
      sections: ["Engineering Philosophy Hero", "Distributed Systems Case Studies", "Performance Benchmarks", "System Architecture", "Patent & Publications", "Get in Touch"],
      tags: ["Software Engineer", "Systems", "Performance"]
    },
    "Full Stack Developer": {
      name: "Full Stack Developer",
      audience: "End-to-end web application developers and full-stack product engineers",
      purpose: "demonstrate full-lifecycle application delivery spanning pixel-perfect frontends to robust cloud backends",
      techDefaults: ["Next.js", "Node.js", "TypeScript", "Prisma", "Tailwind CSS", "TRPC"],
      sections: ["Full-Lifecycle Project Showcase", "Live Demo Embeds", "Database & API Schemas", "Performance Metrics", "Client Recommendations", "Consultation Scheduler"],
      tags: ["Full Stack Developer", "Next.js", "Web App"]
    },
    "Frontend Developer": {
      name: "Frontend Developer",
      audience: "Frontend architects, UI engineers, and design-system practitioners",
      purpose: "highlight micro-interactions, responsive fluid typography, and accessible high-performance interfaces",
      techDefaults: ["React", "Vue.js", "Tailwind CSS", "GSAP", "Framer Motion"],
      sections: ["Interactive Micro-Interactions Hero", "Component Gallery", "Lighthouse 100/100 Audits", "State Management Deep Dives", "Live Code Previews", "Collaborate CTA"],
      tags: ["Frontend Developer", "UI Engineering", "Micro-Interactions"]
    },
    "Backend Developer": {
      name: "Backend Developer",
      audience: "Cloud infrastructure engineers, backend architects, and API specialists",
      purpose: "visualize complex serverless workflows, high-throughput pipelines, and robust data integrity solutions",
      techDefaults: ["Node.js", "Python", "Rust", "GraphQL", "Redis", "AWS"],
      sections: ["Architecture Graph Hero", "API Documentation Demos", "Throughput Benchmarks", "Cloud Infrastructure Topology", "Security Protocols", "Technical Contact"],
      tags: ["Backend Developer", "API", "Cloud Infra"]
    },
    "AI Engineer": {
      name: "AI Engineer",
      audience: "Artificial intelligence engineers, model fine-tuners, and intelligent systems builders",
      purpose: "demonstrate enterprise AI deployments, inference pipelines, and production-grade agentic systems",
      techDefaults: ["Python", "PyTorch", "FastAPI", "Next.js", "LangChain", "Vector DB"],
      sections: ["Neural Canvas Hero", "Agentic Workflow Demos", "Model Latency Benchmarks", "Fine-Tuning Experiments", "Interactive Prompt Playground", "Book AI Consultation"],
      tags: ["AI Engineer", "Deep Learning", "Agents"]
    },
    "ML Engineer": {
      name: "ML Engineer",
      audience: "Machine learning engineers, computer vision specialists, and MLOps professionals",
      purpose: "validate predictive models, production training pipelines, and large-scale data transformation feats",
      techDefaults: ["TensorFlow", "PyTorch", "Kubeflow", "Python", "MLflow", "Tailwind CSS"],
      sections: ["Model Inference Hero", "Model Card Case Studies", "Hyperparameter Tuning Dashboards", "Data Pipeline Topology", "Research Papers", "Contact"],
      tags: ["ML Engineer", "Machine Learning", "MLOps"]
    },
    "Data Scientist": {
      name: "Data Scientist",
      audience: "Quantitative researchers, statistical modelers, and enterprise data scientists",
      purpose: "communicate complex predictive hypotheses, statistical discoveries, and high-impact executive decision tools",
      techDefaults: ["Python", "R", "D3.js", "Streamlit", "Plotly", "Tailwind CSS"],
      sections: ["Predictive Analytics Hero", "Statistical Case Studies", "Interactive D3 Visualizations", "Jupyter Notebook Previews", "Executive Impact Metrics", "Connect"],
      tags: ["Data Scientist", "Analytics", "Visualization"]
    },
    "Data Analyst": {
      name: "Data Analyst",
      audience: "Business intelligence analysts, reporting architects, and growth data strategists",
      purpose: "turn raw transactional data into high-converting commercial insights and intuitive dashboard systems",
      techDefaults: ["SQL", "Tableau", "Power BI", "Python", "Tailwind CSS"],
      sections: ["KPI Command Center Hero", "Interactive Business Dashboards", "Revenue Optimization Stories", "Cohort Retention Analyses", "Client Reviews", "Hire for Analytics"],
      tags: ["Data Analyst", "BI", "Dashboards"]
    },
    "Generative AI": {
      name: "Generative AI",
      audience: "GenAI engineers, prompt engineers, and synthetic media creators",
      purpose: "unveil cutting-edge multimodal generative workflows, diffusion models, and real-time LLM orchestrations",
      techDefaults: ["Next.js", "Stable Diffusion", "OpenAI API", "Three.js", "Tailwind CSS"],
      sections: ["Multimodal Generative Canvas", "Real-Time AI Playground", "Prompt Architecture Showcase", "Diffusion Gallery", "Production Use Cases", "Start Project"],
      tags: ["Generative AI", "LLM", "Synthetic Media"]
    },
    "UI/UX Designer": {
      name: "UI/UX Designer",
      audience: "Product designers, interaction designers, and user experience researchers",
      purpose: "articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys",
      techDefaults: ["Figma", "Design Tokens", "React", "Framer Motion", "Tailwind CSS"],
      sections: ["Bento UX Hero", "In-Depth Case Studies", "Design System Specimen", "User Research Artifacts", "Prototype Interactive Demos", "Contact"],
      tags: ["UI/UX Designer", "Product Design", "Design Systems"]
    },
    "Product Designer": {
      name: "Product Designer",
      audience: "Principal product designers, UX leads, and digital venture builders",
      purpose: "showcase end-to-end product strategy, commercial revenue impact, and polished digital experiences",
      techDefaults: ["Figma", "Next.js", "Framer", "Tailwind CSS", "TypeScript"],
      sections: ["Strategic Vision Hero", "End-to-End Product Roadmaps", "Measurable ROI Case Studies", "Design Ops System", "Client Testimonials", "Schedule Discovery Call"],
      tags: ["Product Designer", "UX Strategy", "SaaS"]
    },
    "Graphic Designer": {
      name: "Graphic Designer",
      audience: "Brand identity designers, typographers, and visual narrative creators",
      purpose: "present striking brand systems, packaging designs, and high-impact visual communications",
      techDefaults: ["Figma", "Illustrator", "WebGL", "Tailwind CSS"],
      sections: ["Curated Visual Showreel", "Brand Identity Systems", "Packaging & Print Showcase", "Typography Specimen", "Client Retrospective", "Inquire Branding"],
      tags: ["Graphic Designer", "Branding", "Visual Identity"]
    },
    "Creative Developer": {
      name: "Creative Developer",
      audience: "Creative technologists, shaders developers, and experimental web artisans",
      purpose: "push the boundaries of web interaction with generative graphics, custom GLSL shaders, and audio-visual experiments",
      techDefaults: ["Three.js", "WebGL", "GLSL", "GSAP", "Next.js"],
      sections: ["Interactive 3D Stage", "GLSL Shader Sandbox", "Generative Art Gallery", "Commercial Experiences", "Technical Awards", "Start Collab"],
      tags: ["Creative Developer", "WebGL", "Interactive"]
    },
    "Creative Director": {
      name: "Creative Director",
      audience: "Creative directors, agency partners, and executive brand visionaries",
      purpose: "demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns",
      techDefaults: ["Next.js", "Tailwind CSS", "Cinema 4D", "Framer Motion"],
      sections: ["Cinematic Brand Opener", "Flagship Global Campaigns", "Multi-Disciplinary Direction", "Press & Honors", "Agency Heritage", "Consultation"],
      tags: ["Creative Director", "Campaigns", "Brand Strategy"]
    },
    "Digital Artist": {
      name: "Digital Artist",
      audience: "Concept artists, 3D illustrators, and NFT/crypto-art visionaries",
      purpose: "display high-resolution digital masterworks, surreal storytelling, and immersive artistic collections",
      techDefaults: ["Blender", "Unreal Engine", "React", "Tailwind CSS", "Lightbox"],
      sections: ["Immersive Gallery Viewport", "Art Series Chronicles", "Lighting & Clay Passes", "Limited Editions Catalog", "Exhibitions & Features", "Collector Inquiry"],
      tags: ["Digital Artist", "Concept Art", "Illustration"]
    },
    "Student": {
      name: "Student",
      audience: "Undergraduate university students and aspiring technology apprentices",
      purpose: "stand out to recruiters for internships, showcase coursework milestones, and demonstrate relentless passion to learn",
      techDefaults: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Tailwind CSS"],
      sections: ["Aspirations Hero", "Academic Projects & Labs", "Extracurricular Hackathons", "Technical Skills Matrix", "Mentorship Feedback", "Connect & Hire"],
      tags: ["Student", "Portfolio", "Internship Ready"]
    },
    "Engineering Student": {
      name: "Engineering Student",
      audience: "Computer science, electronics, and software engineering university students",
      purpose: "secure high-tier software engineering internships by highlighting capstone systems, algorithms, and lab achievements",
      techDefaults: ["C++", "Python", "React", "Git", "Tailwind CSS"],
      sections: ["Engineering Capstone Spotlight", "Robotics & Software Labs", "Hackathon Trophies", "Data Structures Portfolio", "Recommendation Letters", "Resume & Contact"],
      tags: ["Engineering Student", "Computer Science", "Capstone"]
    },
    "Fresh Graduate": {
      name: "Fresh Graduate",
      audience: "Recent university graduates and bootcamp alumni entering the tech job market",
      purpose: "present an impeccably polished entry-level showcase to convert hiring managers into interview invitations",
      techDefaults: ["React", "JavaScript", "Tailwind CSS", "GitHub", "Vercel"],
      sections: ["Elevator Pitch Hero", "Production-Ready Projects", "Apprentice Experience", "Certified Skills Matrix", "GitHub Commit Velocity", "Download Resume / Contact"],
      tags: ["Fresh Graduate", "Entry Level", "Junior Dev"]
    },
    "Freelancer": {
      name: "Freelancer",
      audience: "Independent contractors, digital nomads, and solo agency professionals",
      purpose: "convert prospective inbound clients with transparent project scopes, verified outcomes, and frictionless booking",
      techDefaults: ["Next.js", "Tailwind CSS", "Calendly", "Stripe API", "Framer Motion"],
      sections: ["Client Value Proposition Hero", "Client Testimonials & Case Studies", "Fixed-Scope Service Packages", "Working Process Timeline", "Live Availability Calendar", "Instant Project Inquiry"],
      tags: ["Freelancer", "Independent", "Consulting"]
    },
    "Consultant": {
      name: "Consultant",
      audience: "Management consultants, tech advisors, and fractional executives",
      purpose: "establish unassailable domain authority, strategic problem-solving methodology, and executive advisory credentials",
      techDefaults: ["Next.js", "Tailwind CSS", "Notion API", "Substack", "KaTeX"],
      sections: ["Executive Strategic Thesis", "Advisory Case Studies & ROI", "Published Whitepapers", "Advisory Retainer Tiers", "Speaking Engagements", "Book Discovery Call"],
      tags: ["Consultant", "Advisor", "Strategy"]
    },
    "Personal Brand": {
      name: "Personal Brand",
      audience: "Keynote speakers, industry influencers, content creators, and authors",
      purpose: "consolidate podcasts, newsletters, speaking engagements, and books into one authoritative digital headquarters",
      techDefaults: ["Next.js", "Tailwind CSS", "YouTube API", "ConvertKit", "Framer"],
      sections: ["Authoritative Media Hero", "Keynote Reel & Highlights", "Top Newsletter Essays", "Published Books & Media", "Podcast Episodes", "Book for Speaking"],
      tags: ["Personal Brand", "Keynote", "Creator"]
    },
    "Photographer": {
      name: "Photographer",
      audience: "Commercial photographers, editorial documentarians, and visual storytellers",
      purpose: "display high-resolution photography collections with cinematic full-bleed layouts and color-accurate viewports",
      techDefaults: ["React", "Next.js Image", "Tailwind CSS", "Cloudinary", "PhotoSwipe"],
      sections: ["Cinematic Fullscreen Hero", "Editorial Photo Stories", "Commercial Lookbooks", "EXIF Camera Specs", "Client Client List", "Book a Shoot"],
      tags: ["Photographer", "Editorial", "Visual Stories"]
    },
    "3D Developer": {
      name: "3D Developer",
      audience: "Three.js engineers, WebXR creators, and spatial web architects",
      purpose: "deliver browser-based 3D simulations, photorealistic GLTF model inspections, and spatial computing demos",
      techDefaults: ["Three.js", "React Three Fiber", "WebXR", "GLTF", "Tailwind CSS"],
      sections: ["Interactive 3D Stage Hero", "Real-Time Model Viewer", "Spatial Lighting Controls", "Shader Performance Benchmarks", "Client 3D Installations", "Start 3D Project"],
      tags: ["3D Developer", "Three.js", "Spatial Computing"]
    },
    "WebGL Developer": {
      name: "WebGL Developer",
      audience: "GPU shader artists, WebGL/WebGPU specialists, and visual computing developers",
      purpose: "showcase high-framerate GPU shaders, physics-based simulations, and interactive computational graphics",
      techDefaults: ["WebGPU", "WebGL 2.0", "GLSL", "Three.js", "Tailwind CSS"],
      sections: ["Real-Time Shader Viewport", "Interactive Particle Physics", "Mathematical Surface Generators", "Frame-Timing Telemetry", "Commercial Work", "Hire WebGL Specialist"],
      tags: ["WebGL Developer", "WebGPU", "GLSL Shaders"]
    },
    "Interactive Designer": {
      name: "Interactive Designer",
      audience: "Interaction designers, digital product animators, and tactile UX engineers",
      purpose: "bring static design to life through fluid physics-based gestures, haptic feedback, and delightful storytelling",
      techDefaults: ["Framer Motion", "GSAP", "React", "Lenis Scroll", "Tailwind CSS"],
      sections: ["Kinetic Interaction Hero", "Gesture Playground", "Interactive Micro-Delights", "Fluid Scroll Case Studies", "Design System Interactions", "Let's Collaborate"],
      tags: ["Interactive Designer", "Kinetic", "Micro-Interactions"]
    },
    "Creative Technologist": {
      name: "Creative Technologist",
      audience: "R&D engineers, physical computing innovators, and experiential media inventors",
      purpose: "bridge physical sensors, generative algorithms, and digital interfaces into boundary-pushing installations",
      techDefaults: ["Next.js", "OpenCV", "Web Audio API", "Three.js", "Arduino/IoT"],
      sections: ["Experimental R&D Stage", "Interactive Sensor Installations", "Generative Audio-Visual Experiments", "Patents & Prototypes", "Lab Retrospective", "Inquire for R&D"],
      tags: ["Creative Technologist", "Experiential", "Physical Computing"]
    }
  };

  // =========================================================================
  // 2. Core Design Style Presets (All 17 Specified Styles)
  // =========================================================================
  const STYLE_PROFILES = {
    "Minimal": {
      name: "Minimal",
      descriptor: "clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography",
      gradient: "from-neutral-900 via-neutral-800 to-neutral-700",
      coverType: "minimal",
      visualNote: "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance"
    },
    "Dark": {
      name: "Dark",
      descriptor: "refined obsidian dark-mode interface with subtle luminous borders and deep charcoal surfaces",
      gradient: "from-neutral-950 via-neutral-900 to-neutral-800",
      coverType: "dark",
      visualNote: "ergonomic high-contrast dark environment optimized for prolonged visual immersion"
    },
    "Light": {
      name: "Light",
      descriptor: "crisp airy light palette bathed in soft ambient daylight and subtle tactile shadows",
      gradient: "from-neutral-50 via-white to-neutral-100",
      coverType: "light",
      visualNote: "approachable, sunlit aesthetic exuding warmth, transparency, and effortless legibility"
    },
    "Editorial": {
      name: "Editorial",
      descriptor: "high-fashion editorial typography grid reminiscent of contemporary print publications",
      gradient: "from-stone-900 via-stone-800 to-stone-700",
      coverType: "editorial",
      visualNote: "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames"
    },
    "Glassmorphism": {
      name: "Glassmorphism",
      descriptor: "translucent frosted-glass backdrop panels with specular highlight borders and soft depth blurs",
      gradient: "from-sky-600/30 via-indigo-600/30 to-purple-600/30",
      coverType: "glass",
      visualNote: "multi-layered dimensional interface with real-time backdrop blur filters and luminous edges"
    },
    "Bento Grid": {
      name: "Bento Grid",
      descriptor: "modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles",
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
      coverType: "bento",
      visualNote: "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails"
    },
    "Neo-Brutalist": {
      name: "Neo-Brutalist",
      descriptor: "bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts",
      gradient: "from-amber-400 via-orange-500 to-pink-500",
      coverType: "brutalist",
      visualNote: "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops"
    },
    "Gradient": {
      name: "Gradient",
      descriptor: "vibrant multi-chromatic mesh gradient flows that subtly shift with user cursor movement",
      gradient: "from-fuchsia-600 via-purple-600 to-indigo-600",
      coverType: "gradient",
      visualNote: "smooth iridescent mesh color blends creating an aspirational and dynamic digital aura"
    },
    "Luxury": {
      name: "Luxury",
      descriptor: "ultra-premium haute couture styling adorned with champagne-gold accents, rich blacks, and restrained elegance",
      gradient: "from-amber-700/80 via-neutral-900 to-black",
      coverType: "luxury",
      visualNote: "discreet bespoke craftsmanship with refined letter-spacing and opulent metallic undertones"
    },
    "Futuristic": {
      name: "Futuristic",
      descriptor: "sleek sci-fi cockpit aesthetic with HUD telemetry readouts, neon line work, and angular geometry",
      gradient: "from-cyan-900 via-blue-950 to-neutral-950",
      coverType: "futuristic",
      visualNote: "aerospace-grade digital cockpit complete with live sensor status indicators and telemetry cards"
    },
    "AI-inspired": {
      name: "AI-inspired",
      descriptor: "neural-network inspired architecture featuring animated synaptic particle nodes and glowing bioluminescent hues",
      gradient: "from-violet-900 via-indigo-950 to-neutral-950",
      coverType: "ai",
      visualNote: "computational intelligence aesthetic highlighted by glowing neural synapses and prompt terminal overlays"
    },
    "3D": {
      name: "3D",
      descriptor: "fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets",
      gradient: "from-pink-600 via-rose-600 to-orange-500",
      coverType: "spatial3d",
      visualNote: "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting"
    },
    "Interactive": {
      name: "Interactive",
      descriptor: "delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll",
      gradient: "from-teal-600 via-emerald-600 to-cyan-700",
      coverType: "interactive",
      visualNote: "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures"
    },
    "Cyberpunk": {
      name: "Cyberpunk",
      descriptor: "high-octane neo-Tokyo cyberpunk visual language with acidic neon glows, chromatic aberration, and glitch accents",
      gradient: "from-pink-600 via-purple-900 to-cyan-500",
      coverType: "cyberpunk",
      visualNote: "dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents"
    },
    "Modern Corporate": {
      name: "Modern Corporate",
      descriptor: "authoritative modern enterprise aesthetic balancing institutional trustworthiness with sleek contemporary minimalism",
      gradient: "from-slate-900 via-blue-950 to-slate-800",
      coverType: "corporate",
      visualNote: "boardroom-ready polish characterized by deep navy blues, crisp data visualizations, and clear credibility metrics"
    },
    "Creative": {
      name: "Creative",
      descriptor: "unconventional artistic canvas bursting with experimental asymmetrical layouts and vibrant expressive energy",
      gradient: "from-orange-500 via-pink-500 to-yellow-400",
      coverType: "creative",
      visualNote: "free-form artistic expression with kinetic typography, overlapping collage layers, and tactile stickers"
    },
    "Photography-focused": {
      name: "Photography-focused",
      descriptor: "cinematic gallery-first viewport crafted around edge-to-edge photography, deep blacks, and flawless color rendition",
      gradient: "from-neutral-950 via-zinc-900 to-stone-900",
      coverType: "photography",
      visualNote: "gallery-grade darkroom backdrop designed to let visual assets and imagery command the entire screen"
    }
  };

  // =========================================================================
  // 3. Algorithmic Description Synthesis Engine
  // =========================================================================
  /**
   * Generates a unique, non-generic, high-converting 2 to 3 sentence description
   * matching every template's specific configuration.
   */
  function generateTemplateDescription(meta) {
    const category = meta.category || "Developer";
    const style = meta.style || "Minimal";
    const title = meta.title || "Signature Portfolio";
    const audience = meta.targetAudience || CATEGORY_PROFILES[category]?.audience || "professionals";
    const purpose = meta.purpose || CATEGORY_PROFILES[category]?.purpose || "showcase work and attract high-tier clients";
    const styleInfo = STYLE_PROFILES[style] || STYLE_PROFILES["Minimal"];
    const techStack = Array.isArray(meta.technology) ? meta.technology.join(", ") : (meta.technology || "Next.js & Tailwind CSS");
    const sections = Array.isArray(meta.sections) ? meta.sections : ["Hero", "Case Studies", "Contact"];

    // Distinct linguistic formula matrices to ensure zero duplication
    const openers = [
      `Engineered with a ${styleInfo.descriptor}, this signature portfolio is custom-tailored for ${audience} aiming to ${purpose}.`,
      `Featuring a ${styleInfo.descriptor}, ${title} delivers an unmissable digital presence tailored for ${audience} who demand to ${purpose}.`,
      `Crafted around a ${styleInfo.descriptor}, this high-performance system empowers ${audience} to effortlessly ${purpose}.`,
      `Built with a ${styleInfo.descriptor}, this turnkey showcase provides ${audience} the competitive edge required to ${purpose}.`
    ];

    const middles = [
      `Powered by ${techStack}, the interface provides a seamless interactive experience featuring ${meta.visualConcept || styleInfo.visualNote}.`,
      `Under the hood, an ultra-fast ${techStack} foundation powers responsive interactions, highlighting ${meta.visualConcept || styleInfo.visualNote}.`,
      `Leveraging modern ${techStack}, the architecture elevates your brand through ${meta.visualConcept || styleInfo.visualNote}.`,
      `Built for speed and fluid responsiveness on ${techStack}, it captivates visitors with ${meta.visualConcept || styleInfo.visualNote}.`
    ];

    const closers = [
      `Includes dedicated sections for ${sections.slice(0, 3).join(", ")}, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.`,
      `The production-ready layout comes loaded with ${sections.slice(0, 3).join(", ")}, engineered to convert hiring managers and high-ticket clients on contact.`,
      `Equipped with ${sections.slice(0, 3).join(", ")}, this showcase delivers an airtight professional narrative that accelerates your career trajectory.`,
      `Complete with custom modules for ${sections.slice(0, 3).join(", ")}, your work is presented with the clarity and authority needed to close premium opportunities.`
    ];

    // Seed-based selection from hash of title + category + style + id for deterministic variety & 100% uniqueness
    const seedString = title + category + style + (meta.id || "") + (meta.index || "");
    const hash = seedString.split("").reduce((acc, char, idx) => (acc * 31 + char.charCodeAt(0) * (idx + 1)) % 1000000007, 0);
    const opener = openers[Math.abs(hash) % openers.length];
    const middle = middles[Math.abs(hash >> 3) % middles.length];
    const closer = closers[Math.abs(hash >> 6) % closers.length];

    return `${opener} ${middle} ${closer}`;
  }

  // =========================================================================
  // 3b. Intelligent Category & Style Inferences
  // =========================================================================
  function inferCategory(title, tags) {
    const text = (title + " " + (tags || []).join(" ")).toLowerCase();
    if (text.includes("generative ai") || text.includes("genai") || text.includes("llm") || text.includes("diffusion")) return "Generative AI";
    if (text.includes("ai engineer") || text.includes("neural") || text.includes("agentic")) return "AI Engineer";
    if (text.includes("ml engineer") || text.includes("machine learning") || text.includes("mlops") || text.includes("computer vision")) return "ML Engineer";
    if (text.includes("data scientist") || text.includes("predictive") || text.includes("statistical")) return "Data Scientist";
    if (text.includes("data analyst") || text.includes("analytics") || text.includes("bi dashboard") || text.includes("business intelligence")) return "Data Analyst";
    if (text.includes("full stack") || text.includes("monolith") || text.includes("web app")) return "Full Stack Developer";
    if (text.includes("frontend") || text.includes("ui engineering") || text.includes("micro-interactions")) return "Frontend Developer";
    if (text.includes("backend") || text.includes("cloud") || text.includes("api") || text.includes("microservice") || text.includes("distributed")) return "Backend Developer";
    if (text.includes("software engineer") || text.includes("systems engineer")) return "Software Engineer";
    if (text.includes("webgl") || text.includes("shader") || text.includes("glsl") || text.includes("webgpu")) return "WebGL Developer";
    if (text.includes("3d developer") || text.includes("three.js") || text.includes("spatial") || text.includes("virtual worlds")) return "3D Developer";
    if (text.includes("creative technologist") || text.includes("r&d") || text.includes("physical computing") || text.includes("sensor")) return "Creative Technologist";
    if (text.includes("creative developer") || text.includes("vortex") || text.includes("kineticui")) return "Creative Developer";
    if (text.includes("interactive designer") || text.includes("motion designer") || text.includes("interaction")) return "Interactive Designer";
    if (text.includes("digital artist") || text.includes("concept art") || text.includes("illustration") || text.includes("3d artist")) return "Digital Artist";
    if (text.includes("photographer") || text.includes("photography") || text.includes("lookbook") || text.includes("photos")) return "Photographer";
    if (text.includes("creative director") || text.includes("agency") || text.includes("studio") || text.includes("campaign")) return "Creative Director";
    if (text.includes("graphic designer") || text.includes("brand identity") || text.includes("branding") || text.includes("packaging")) return "Graphic Designer";
    if (text.includes("product designer") || text.includes("saas") || text.includes("ux strategy") || text.includes("fintech")) return "Product Designer";
    if (text.includes("ux/ui") || text.includes("design system") || text.includes("case study") || text.includes("bento ux")) return "UI/UX Designer";
    if (text.includes("engineering student") || text.includes("cs capstone") || text.includes("robotics")) return "Engineering Student";
    if (text.includes("fresh graduate") || text.includes("junior dev") || text.includes("graduate")) return "Fresh Graduate";
    if (text.includes("student") || text.includes("apprentice") || text.includes("internship")) return "Student";
    if (text.includes("freelancer") || text.includes("contractor") || text.includes("solo studio")) return "Freelancer";
    if (text.includes("consultant") || text.includes("advisory") || text.includes("fractional")) return "Consultant";
    if (text.includes("personal brand") || text.includes("speaker") || text.includes("keynote") || text.includes("newsletter")) return "Personal Brand";
    if (text.includes("developer") || text.includes("hacker") || text.includes("terminal") || text.includes("polyglot") || text.includes("kōdo")) return "Developer";
    return "Developer";
  }

  function inferStyle(title, tags, coverType) {
    const text = (title + " " + (tags || []).join(" ") + " " + (coverType || "")).toLowerCase();
    if (text.includes("cyberpunk") || text.includes("glitch") || text.includes("neo-tokyo")) return "Cyberpunk";
    if (text.includes("futuristic") || text.includes("hud") || text.includes("scifi") || text.includes("telemetry")) return "Futuristic";
    if (text.includes("ai-inspired") || text.includes("neural") || text.includes("synapse")) return "AI-inspired";
    if (text.includes("bento") || text.includes("modular tile")) return "Bento Grid";
    if (text.includes("neo-brutalist") || text.includes("brutalist")) return "Neo-Brutalist";
    if (text.includes("glassmorphism") || text.includes("glass") || text.includes("frosted")) return "Glassmorphism";
    if (text.includes("gradient") || text.includes("mesh") || text.includes("iridescent")) return "Gradient";
    if (text.includes("luxury") || text.includes("gold") || text.includes("haute") || text.includes("maison")) return "Luxury";
    if (text.includes("3d") || text.includes("spatial") || text.includes("three.js")) return "3D";
    if (text.includes("interactive") || text.includes("kinetic") || text.includes("physics")) return "Interactive";
    if (text.includes("editorial") || text.includes("swiss") || text.includes("monograph") || text.includes("magazine") || text.includes("helvetica")) return "Editorial";
    if (text.includes("photography") || text.includes("photo") || text.includes("darkroom") || text.includes("gallery")) return "Photography-focused";
    if (text.includes("corporate") || text.includes("quant") || text.includes("boardroom") || text.includes("enterprise")) return "Modern Corporate";
    if (text.includes("dark mode") || text.includes("dark") || text.includes("obsidian")) return "Dark";
    if (text.includes("light") || text.includes("sunlit") || text.includes("daylight")) return "Light";
    if (text.includes("minimalist") || text.includes("minimal") || text.includes("clean")) return "Minimal";
    if (text.includes("creative") || text.includes("artistic")) return "Creative";
    return "Minimal";
  }

  // =========================================================================
  // 4. Programmatic Template Generator
  // =========================================================================
  /**
   * Generates a fully fleshed FolioForge template object conforming to the schema.
   */
  function generatePortfolioTemplate(options) {
    const id = options.id || "ff-" + (100 + Math.floor(Math.random() * 900));
    const numMatch = id.match(/ff-(\d+)/);
    const num = numMatch ? parseInt(numMatch[1], 10) : 101;

    const categoryKey = options.category && CATEGORY_PROFILES[options.category] ? options.category : "Developer";
    const categoryInfo = CATEGORY_PROFILES[categoryKey];

    const styleKey = options.style && STYLE_PROFILES[options.style] ? options.style : "Minimal";
    const styleInfo = STYLE_PROFILES[styleKey];

    const title = options.title || `${styleInfo.name} ${categoryInfo.name} System`;
    const targetAudience = options.targetAudience || categoryInfo.audience;
    const purpose = options.purpose || categoryInfo.purpose;
    const visualConcept = options.visualConcept || styleInfo.visualNote;
    const sections = options.sections || categoryInfo.sections;
    const technology = options.technology || categoryInfo.techDefaults;

    // Pricing: realistic range between ₹1,999 and ₹4,999 with 10% to 30% discount
    const originalPrice = options.originalPrice || (Math.floor(Math.random() * 30 + 20) * 100 + 99); // 2099 to 4999
    const discount = options.discount || (Math.floor(Math.random() * 3 + 1) * 10); // 10%, 20%, or 30%

    // Tag amalgamation
    const customTags = options.tags || [];
    const tags = Array.from(new Set([
      categoryKey,
      styleKey,
      ...categoryInfo.tags,
      ...customTags
    ])).slice(0, 4);

    // Dynamic metrics
    const likes = options.likes || (Math.floor(Math.random() * 15000) + 1200);
    const duplicates = options.duplicates || (Math.floor(Math.random() * 45000) + 3500);
    const pagesCount = options.pagesCount || (Math.floor(Math.random() * 12) + 10);
    const componentsCount = options.componentsCount || (Math.floor(Math.random() * 80) + 60);
    const fileSize = options.fileSize || `${(Math.random() * 25 + 18).toFixed(1)} MB`;
    const updatedAt = options.updatedAt || (Math.random() > 0.5 ? "Just now" : "Today");

    // Generate matching description
    const description = generateTemplateDescription({
      title,
      category: categoryKey,
      style: styleKey,
      targetAudience,
      purpose,
      visualConcept,
      sections,
      technology
    });

    // Gallery slides tailored to sections
    const gallery = [
      {
        title: `${styleInfo.name} Hero & Navigation`,
        subtitle: `Adaptive viewport featuring ${visualConcept}`
      },
      {
        title: `${sections[1] || "Case Study"} Breakdown`,
        subtitle: `In-depth presentation framework highlighting performance & metrics`
      },
      {
        title: `${sections[2] || "Technical Matrix"} & Contact`,
        subtitle: `Interactive component architecture with WhatsApp consultation trigger`
      }
    ];

    return {
      id,
      image: options.image || `assets/t${num}.jpg`,
      title,
      category: categoryKey,
      style: styleKey,
      targetAudience,
      visualConcept,
      sections,
      technology,
      originalPrice,
      discount,
      tags,
      likes,
      duplicates,
      type: "files",
      pagesCount,
      componentsCount,
      fileSize,
      updatedAt,
      license: "Standard Commercial",
      gradient: styleInfo.gradient,
      coverType: styleInfo.coverType,
      gallery,
      description,
      isNew: true,
      comments: [
        {
          user: "FolioForge Client",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
          time: "Recently built",
          text: `FolioForge tailored this ${styleKey} design for my portfolio. Inquiries jumped significantly within the first week!`
        }
      ]
    };
  }

  // =========================================================================
  // 5. Curated Original Generation Matrix (Covering ALL 27 Categories & 17 Styles)
  // =========================================================================
  const SEED_GENERATION_SPECS = [
    {
      id: "ff-101",
      category: "AI Engineer",
      style: "AI-inspired",
      title: "SynapseAI — Deep Learning & Agentic Systems Folio",
      visualConcept: "Bioluminescent neural synapse graph with interactive prompt terminal and model latency telemetry",
      technology: ["Python", "PyTorch", "FastAPI", "Next.js", "LangChain"],
      originalPrice: 3999,
      discount: 20
    },
    {
      id: "ff-102",
      category: "Full Stack Developer",
      style: "Bento Grid",
      title: "Monolith — High-Throughput Full Stack Architecture",
      visualConcept: "Tactile bento masonry grid with live API schema viewers and responsive auto-layout components",
      technology: ["Next.js", "TypeScript", "Prisma", "TRPC", "Tailwind CSS"],
      originalPrice: 3499,
      discount: 20
    },
    {
      id: "ff-103",
      category: "Creative Developer",
      style: "3D",
      title: "Vortex — WebGL GLSL Shader & Spatial Stage",
      visualConcept: "Interactive 3D particle vortex with dynamic physics simulation, orbit controls, and real-time bloom",
      technology: ["Three.js", "WebGL", "GLSL", "React Three Fiber", "GSAP"],
      originalPrice: 4499,
      discount: 25
    },
    {
      id: "ff-104",
      category: "Developer",
      style: "Minimal",
      title: "Kōdo — Minimalist Polyglot Developer Showcase",
      visualConcept: "Distraction-free Swiss monospace typography with automated GitHub repository commit telemetry",
      technology: ["React", "TypeScript", "Tailwind CSS", "GitHub REST API"],
      originalPrice: 2499,
      discount: 15
    },
    {
      id: "ff-105",
      category: "Software Engineer",
      style: "Dark",
      title: "Distributed — Senior Systems Engineering Portfolio",
      visualConcept: "Low-latency obsidian server dashboard with interactive microservice topology maps",
      technology: ["Go", "Next.js", "Docker", "PostgreSQL", "Tailwind CSS"],
      originalPrice: 3299,
      discount: 20
    },
    {
      id: "ff-106",
      category: "Frontend Developer",
      style: "Interactive",
      title: "KineticUI — Micro-Interactions & Frontend Architecture",
      visualConcept: "Physics-based magnetic button controls, spring animations, and 100/100 Lighthouse performance meters",
      technology: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "Lenis"],
      originalPrice: 2899,
      discount: 20
    },
    {
      id: "ff-107",
      category: "Backend Developer",
      style: "Futuristic",
      title: "CipherCloud — High-Availability Cloud Infrastructure",
      visualConcept: "Aerospace telemetry HUD displaying real-time database shards, query planners, and Kafka throughput",
      technology: ["Node.js", "Rust", "GraphQL", "Redis", "AWS CloudFormation"],
      originalPrice: 3199,
      discount: 15
    },
    {
      id: "ff-108",
      category: "ML Engineer",
      style: "Cyberpunk",
      title: "NeuralDrift — High-Throughput MLOps & Vision Models",
      visualConcept: "Acidic cyberpunk telemetry deck with model card metrics, confusion matrix heatmaps, and GPU benchmarks",
      technology: ["TensorFlow", "PyTorch", "Kubeflow", "Python", "Tailwind CSS"],
      originalPrice: 3899,
      discount: 25
    },
    {
      id: "ff-109",
      category: "Data Scientist",
      style: "Modern Corporate",
      title: "QuantData — Executive Predictive Modeling & Analytics",
      visualConcept: "Boardroom-ready data storytelling suite featuring interactive D3 charts, regression models, and executive summaries",
      technology: ["Python", "D3.js", "Streamlit", "Plotly", "Tailwind CSS"],
      originalPrice: 3499,
      discount: 20
    },
    {
      id: "ff-110",
      category: "Data Analyst",
      style: "Light",
      title: "InsightCore — Commercial BI Dashboards & Growth Metrics",
      visualConcept: "Clean, sunlit business dashboard interface with cohort retention heatmaps and ARR growth timelines",
      technology: ["SQL", "Power BI", "Tableau", "Python", "Tailwind CSS"],
      originalPrice: 2699,
      discount: 15
    },
    {
      id: "ff-111",
      category: "Generative AI",
      style: "Gradient",
      title: "OmniGen — Multimodal GenAI & Diffusion Studio",
      visualConcept: "Fluid chromatic gradient mesh with real-time prompt generation playground and high-res diffusion showcases",
      technology: ["Next.js", "Stable Diffusion", "OpenAI API", "Tailwind CSS"],
      originalPrice: 4299,
      discount: 30
    },
    {
      id: "ff-112",
      category: "UI/UX Designer",
      style: "Glassmorphism",
      title: "AuraDesign — Frosted Glass Design Systems & Case Studies",
      visualConcept: "Multi-layered translucent frosted-glass panels with glowing accent borders and rich Figma embed prototypes",
      technology: ["Figma", "Design Tokens", "React", "Framer Motion", "Tailwind CSS"],
      originalPrice: 2999,
      discount: 20
    },
    {
      id: "ff-113",
      category: "Product Designer",
      style: "Editorial",
      title: "Syllabus — End-to-End Product Strategy & Case Studies",
      visualConcept: "High-contrast editorial typography layout pairing product discovery frameworks with quantifiable business ROI",
      technology: ["Figma", "Next.js", "Framer", "Tailwind CSS"],
      originalPrice: 3599,
      discount: 20
    },
    {
      id: "ff-114",
      category: "Graphic Designer",
      style: "Neo-Brutalist",
      title: "BoldBrand — High-Impact Visual Identity & Packaging",
      visualConcept: "Stark 4px neo-brutalist borders with vibrant isometric stickers, typographic specimens, and print mockups",
      technology: ["Figma", "Illustrator", "WebGL", "Tailwind CSS"],
      originalPrice: 2799,
      discount: 20
    },
    {
      id: "ff-115",
      category: "Creative Director",
      style: "Luxury",
      title: "MaisonVision — High-Fashion Creative Direction & Films",
      visualConcept: "Opulent champagne-gold accents on obsidian black with full-bleed cinematic showreels and campaign retrospectives",
      technology: ["Next.js", "Tailwind CSS", "Cinema 4D", "Framer Motion"],
      originalPrice: 4899,
      discount: 20
    },
    {
      id: "ff-116",
      category: "Digital Artist",
      style: "Photography-focused",
      title: "PrismArt — Immersive Concept Art & 3D Illustrations",
      visualConcept: "Darkroom-inspired deep viewport with clay/wireframe render breakdown scrubbers and zoomable art masterworks",
      technology: ["Blender", "Unreal Engine", "React", "Tailwind CSS"],
      originalPrice: 3199,
      discount: 15
    },
    {
      id: "ff-117",
      category: "Student",
      style: "Light",
      title: "Academia — Modern Student & Apprentice Showcase",
      visualConcept: "Approachable daylight interface highlighting academic lab projects, hackathon prototypes, and technical coursework",
      technology: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Tailwind CSS"],
      originalPrice: 1999,
      discount: 25
    },
    {
      id: "ff-118",
      category: "Engineering Student",
      style: "Minimal",
      title: "ApexEngineer — CS Capstone & Robotics Labs",
      visualConcept: "Structured minimalist blueprint grid showcasing computer science capstone code, circuit diagrams, and algorithms",
      technology: ["C++", "Python", "React", "Git", "Tailwind CSS"],
      originalPrice: 2199,
      discount: 20
    },
    {
      id: "ff-119",
      category: "Fresh Graduate",
      style: "Bento Grid",
      title: "NextStep — High-Converting Junior Dev & Graduate Folio",
      visualConcept: "Polished bento matrix highlighting production-grade apps, GitHub commit velocity, and interview-ready case studies",
      technology: ["React", "JavaScript", "Tailwind CSS", "GitHub API", "Vercel"],
      originalPrice: 2299,
      discount: 20
    },
    {
      id: "ff-120",
      category: "Freelancer",
      style: "Interactive",
      title: "SoloStudio — High-Converting Independent Contractor Folio",
      visualConcept: "Interactive pricing package calculator with client testimonials, scope breakdowns, and 1-click consultation triggers",
      technology: ["Next.js", "Tailwind CSS", "Calendly", "Framer Motion"],
      originalPrice: 2999,
      discount: 20
    },
    {
      id: "ff-121",
      category: "Consultant",
      style: "Modern Corporate",
      title: "Vanguard — Fractional Executive & Tech Advisory",
      visualConcept: "Authoritative boardroom aesthetic with strategic whitepaper downloads, executive case studies, and advisory retainers",
      technology: ["Next.js", "Tailwind CSS", "KaTeX", "Notion API"],
      originalPrice: 3899,
      discount: 15
    },
    {
      id: "ff-122",
      category: "Personal Brand",
      style: "Editorial",
      title: "ThoughtLeader — Keynote Speaker & Media Headquarters",
      visualConcept: "Media-rich editorial design uniting keynote sizzle reels, podcast appearances, published books, and newsletter subscriptions",
      technology: ["Next.js", "Tailwind CSS", "YouTube API", "ConvertKit"],
      originalPrice: 3499,
      discount: 20
    },
    {
      id: "ff-123",
      category: "Photographer",
      style: "Photography-focused",
      title: "Lumina — Editorial & Commercial Photography Stories",
      visualConcept: "Full-bleed edge-to-edge photo layout with customizable dark/light framing, EXIF metadata overlays, and client proofing",
      technology: ["React", "Next.js Image", "Tailwind CSS", "PhotoSwipe"],
      originalPrice: 3299,
      discount: 20
    },
    {
      id: "ff-124",
      category: "3D Developer",
      style: "3D",
      title: "SpatialOrbit — Real-Time Three.js Virtual Worlds",
      visualConcept: "Interactive 3D model inspection stage with dynamic PBR lighting controls, material toggles, and WebXR readiness",
      technology: ["Three.js", "React Three Fiber", "WebXR", "GLTF", "Tailwind CSS"],
      originalPrice: 4599,
      discount: 25
    },
    {
      id: "ff-125",
      category: "WebGL Developer",
      style: "Cyberpunk",
      title: "ShaderCore — WebGPU Physics & Compute Shaders",
      visualConcept: "High-octane shader terminal running 60fps GPU compute particle physics, mathematical noise surfaces, and FPS telemetry",
      technology: ["WebGPU", "WebGL 2.0", "GLSL", "Three.js", "Tailwind CSS"],
      originalPrice: 4799,
      discount: 20
    },
    {
      id: "ff-126",
      category: "Interactive Designer",
      style: "Creative",
      title: "PulseMotion — Expressive Kinetic Interactions & UX",
      visualConcept: "Playful kinetic typography with cursor physics, tactile fluid gestures, and interactive design token demos",
      technology: ["Framer Motion", "GSAP", "React", "Lenis Scroll", "Tailwind CSS"],
      originalPrice: 3399,
      discount: 20
    },
    {
      id: "ff-127",
      category: "Creative Technologist",
      style: "Futuristic",
      title: "NexSys — Experiential R&D & Physical Computing Labs",
      visualConcept: "Sci-fi laboratory interface connecting physical IoT sensor telemetry, Web Audio synthesizers, and generative visuals",
      technology: ["Next.js", "OpenCV", "Web Audio API", "Three.js", "Arduino/IoT"],
      originalPrice: 4299,
      discount: 25
    }
  ];

  /**
   * Generates the entire seed batch of original templates covering all 27 categories & 17 styles.
   */
  function generateSeedBatch() {
    return SEED_GENERATION_SPECS.map(spec => generatePortfolioTemplate(spec));
  }

  // =========================================================================
  // 6. Dynamic In-Browser Integration Hook
  // =========================================================================
  function addDynamicTemplate(options = {}) {
    const categories = Object.keys(CATEGORY_PROFILES);
    const styles = Object.keys(STYLE_PROFILES);

    // Pick random category and style if not specified
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    const currentCount = (global.TEMPLATES_DATA ? global.TEMPLATES_DATA.length : 127);
    const nextId = "ff-" + String(currentCount + 1).padStart(3, "0");

    const newTemplate = generatePortfolioTemplate({
      id: nextId,
      category: options.category || randomCategory,
      style: options.style || randomStyle,
      title: options.title || `${options.style || randomStyle} ${options.category || randomCategory} Portfolio Pro`,
      ...options
    });

    if (global.TEMPLATES_DATA) {
      global.TEMPLATES_DATA.push(newTemplate);
      
      // Update UI if renderTemplates is present
      if (typeof global.renderTemplates === "function") {
        const totalItems = global.TEMPLATES_DATA.length;
        const targetPage = Math.ceil(totalItems / 21);
        if (typeof global.goToPage === "function") {
          global.goToPage(targetPage);
        } else {
          global.renderTemplates();
        }
      }

      if (typeof global.showToast === "function") {
        global.showToast(`✨ Generated: ${newTemplate.title} (${newTemplate.category})`, "sparkles");
      }
    }

    return newTemplate;
  }

  // Expose API
  const FolioForgeGenerator = {
    CATEGORY_PROFILES,
    STYLE_PROFILES,
    generateTemplateDescription,
    generatePortfolioTemplate,
    generateSeedBatch,
    addDynamicTemplate,
    inferCategory,
    inferStyle
  };

  global.FolioForgeGenerator = FolioForgeGenerator;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = FolioForgeGenerator;
  }
})(typeof window !== "undefined" ? window : globalThis);
