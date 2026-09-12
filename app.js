// --- Clean Fallback Placeholders for Missing Template Images ---
function handleImageError(img, id) {
  img.onerror = null;
  const template = TEMPLATES_DATA.find(t => t.id === id);
  const title = template ? template.title : "Portfolio Template";
  const numMatch = id.match(/ff-(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : "";

  const placeholder = document.createElement("div");
  placeholder.className = "w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 text-neutral-400 dark:text-neutral-500 p-4 select-none relative overflow-hidden";
  placeholder.innerHTML = `
    <div class="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-2.5 text-neutral-500 dark:text-neutral-300 transition-transform group-hover:scale-105">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
        <path d="M21 15l-5-5L5 21" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="text-xs font-semibold text-neutral-700 dark:text-neutral-200 text-center line-clamp-1 max-w-[85%] mb-1">
      ${title}
    </span>
    <span class="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 bg-white/80 dark:bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700">
      assets/t${num}.jpg
    </span>
  `;
  img.replaceWith(placeholder);
}

function handleModalImageError(img, id) {
  img.onerror = null;
  const template = TEMPLATES_DATA.find(t => t.id === id);
  const title = template ? template.title : "Portfolio Template";
  const numMatch = id.match(/ff-(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : "";

  const placeholder = document.createElement("div");
  placeholder.className = "w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-400 p-8 select-none";
  placeholder.innerHTML = `
    <div class="w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-3 text-neutral-300">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
        <path d="M21 15l-5-5L5 21" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="text-sm font-semibold text-white text-center mb-1.5">
      ${title}
    </span>
    <span class="text-xs font-mono text-neutral-400 bg-neutral-800/90 px-2.5 py-1 rounded border border-neutral-700">
      assets/t${num}.jpg
    </span>
  `;
  img.replaceWith(placeholder);
}

/**
 * FolioForge - Custom Portfolio Building Service
 * Interactive client-side application logic & state management
 */

// ==========================================
// Centralized WhatsApp Configuration
// ==========================================
const WHATSAPP_NUMBER = "919226393146";

// --- Dynamic Pricing & WhatsApp Helpers ---
function calculateFinalPrice(originalPrice, discount) {
  return Math.round(originalPrice - (originalPrice * discount / 100));
}

function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function buildWhatsAppMessage(template) {
  const finalPrice = calculateFinalPrice(template.originalPrice, template.discount);
  return `Build My Portfolio\n\nI want to build my portfolio using:\nTemplate: ${template.title}\nOriginal Price: ${formatINR(template.originalPrice)}\nDiscount: ${template.discount}%\nFinal Price: ${formatINR(finalPrice)}\n\nPlease contact me regarding the portfolio.`;
}

function openWhatsApp(templateId) {
  const template = TEMPLATES_DATA.find(t => t.id === templateId) || activePricingTemplate;
  if (!template) return;
  const message = buildWhatsAppMessage(template);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// --- Dataset of Authentic Custom Portfolio Designs ---
const TEMPLATES_DATA = [
  {
    "id": "ff-001",
    "image": "assets/t1.png",
    "title": "Bento UX Portfolio & Case Studies Kit 2026",
    "likes": 14820,
    "duplicates": 54930,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Case Study"
    ],
    "description": "Featuring a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, Bento UX Portfolio & Case Studies Kit 2026 delivers an unmissable digital presence tailored for Product designers, interaction designers, and user experience researchers who demand to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Powered by Figma, Design Tokens, React, the interface provides a seamless interactive experience featuring dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Bento UX Portfolio & Case Studies Kit 2026. The production-ready layout comes loaded with Bento UX Hero, In-Depth Case Studies, Design System Specimen, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 16,
    "componentsCount": 142,
    "fileSize": "28.4 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-600 via-indigo-600 to-purple-700",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Bento Overview",
        "subtitle": "Desktop 1440px viewport with dynamic modular cards"
      },
      {
        "title": "Case Study Breakdown",
        "subtitle": "Structured problem-solution framework with metrics"
      },
      {
        "title": "Mobile Responsive",
        "subtitle": "Fluid 390px layout optimized for mobile recruiters"
      },
      {
        "title": "Design System Tokens",
        "subtitle": "Pre-linked color variables and auto-layout typography"
      }
    ],
    "comments": [
      {
        "user": "Marcus Vance",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Helped me land my Senior Product Design role at Stripe! Incredible attention to typography and whitespace."
      },
      {
        "user": "Aisha Patel",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "The bento cards are so easy to remix. Beautiful use of auto-layout 5.0."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Bento UX Portfolio & Case Studies Kit 2026",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-002",
    "image": "assets/t2.jpg",
    "title": "Neo-Brutalist Developer & Engineer Folio",
    "likes": 11240,
    "duplicates": 41200,
    "type": "files",
    "tags": [
      "Developer",
      "Minimalist",
      "Dark Mode"
    ],
    "description": "Engineered with a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this signature portfolio is custom-tailored for Software developers, open-source maintainers, and polyglot programmers aiming to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Neo-Brutalist Developer & Engineer Folio. Complete with custom modules for Live Terminal Hero, Featured Repositories, Architecture Diagrams, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 8,
    "componentsCount": 68,
    "fileSize": "14.2 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-400 via-orange-500 to-red-600",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell View",
        "subtitle": "Monospaced interactive code showcase"
      },
      {
        "title": "Project Matrix",
        "subtitle": "Card layout with stack badges and live demo links"
      },
      {
        "title": "Experience Timeline",
        "subtitle": "Git-commit style career trajectory"
      }
    ],
    "comments": [
      {
        "user": "David Zhou",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Best tech portfolio template on FolioForge hands down. Monospace styling is immaculate."
      }
    ],
    "originalPrice": 2499,
    "discount": 20,
    "category": "Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Neo-Brutalist Developer & Engineer Folio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-003",
    "image": "assets/t3.jpg",
    "title": "Studio Laurent \u2014 Creative Director & Editorial Folio",
    "likes": 18950,
    "duplicates": 62410,
    "type": "files",
    "tags": [
      "Editorial",
      "Creative Director",
      "Agency"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Studio Laurent \u2014 Creative Director & Editorial Folio. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 22,
    "componentsCount": 180,
    "fileSize": "46.1 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-stone-800 via-neutral-900 to-black",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Editorial Cover & Index",
        "subtitle": "Editorial serif display with refined grid"
      },
      {
        "title": "Visual Narrative Spread",
        "subtitle": "Full-bleed imagery paired with thoughtful prose"
      },
      {
        "title": "Client Archival Index",
        "subtitle": "Chronological table of high-profile commissions"
      }
    ],
    "comments": [
      {
        "user": "Siddharth Rao",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Well worth the investment. Used this to build my fashion photography portfolio and got featured on Awwwards."
      }
    ],
    "originalPrice": 3999,
    "discount": 25,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Studio Laurent \u2014 Creative Director & Editorial Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-004",
    "image": "assets/t4.jpg",
    "title": "Aether 3D \u2014 Spatial & Motion Designer Showcase",
    "likes": 9680,
    "duplicates": 32150,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Engineered with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this signature portfolio is custom-tailored for Three.js engineers, WebXR creators, and spatial web architects aiming to deliver browser-based 3D simulations, photorealistic GLTF model inspections, and spatial computing demos. Leveraging modern Three.js, React Three Fiber, WebXR, the architecture elevates your brand through real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Aether 3D \u2014 Spatial & Motion Designer Showcase. The production-ready layout comes loaded with Interactive 3D Stage Hero, Real-Time Model Viewer, Spatial Lighting Controls, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 12,
    "componentsCount": 94,
    "fileSize": "38.7 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-purple-900 via-violet-800 to-cyan-700",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Luminous Spatial Hero",
        "subtitle": "Deep neon gradient with wireframe perspective"
      },
      {
        "title": "Interactive Reel Showcase",
        "subtitle": "Framed 60fps video player components"
      },
      {
        "title": "3D Asset Specs",
        "subtitle": "Polygon count, shaders, and lighting rig documentation"
      }
    ],
    "comments": [
      {
        "user": "Chloe Nguyen",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The glass blur styling in this file is next level."
      }
    ],
    "originalPrice": 3499,
    "discount": 20,
    "category": "3D Developer",
    "style": "3D",
    "targetAudience": "Three.js engineers, WebXR creators, and spatial web architects",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Aether 3D \u2014 Spatial & Motion Designer Showcase",
    "sections": [
      "Interactive 3D Stage Hero",
      "Real-Time Model Viewer",
      "Spatial Lighting Controls",
      "Shader Performance Benchmarks",
      "Client 3D Installations",
      "Start 3D Project"
    ],
    "technology": [
      "Three.js",
      "React Three Fiber",
      "WebXR",
      "GLTF",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-005",
    "image": "assets/t5.jpg",
    "title": "K\u014dhaku \u2014 Minimalist Scandinavian Design Folio",
    "likes": 16420,
    "duplicates": 58100,
    "type": "files",
    "tags": [
      "Minimalist",
      "UX/UI",
      "Case Study"
    ],
    "description": "Featuring a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, K\u014dhaku \u2014 Minimalist Scandinavian Design Folio delivers an unmissable digital presence tailored for Product designers, interaction designers, and user experience researchers who demand to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Powered by Figma, Design Tokens, React, the interface provides a seamless interactive experience featuring distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for K\u014dhaku \u2014 Minimalist Scandinavian Design Folio. Equipped with Bento UX Hero, In-Depth Case Studies, Design System Specimen, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 14,
    "componentsCount": 110,
    "fileSize": "18.3 MB",
    "updatedAt": "5 days ago",
    "license": "Standard Commercial",
    "gradient": "from-zinc-100 via-stone-200 to-neutral-300",
    "coverType": "minimalist",
    "gallery": [
      {
        "title": "Clean Index Grid",
        "subtitle": "2-column uncluttered project listing"
      },
      {
        "title": "Typography Specimen",
        "subtitle": "Carefully proportioned optical scale"
      },
      {
        "title": "Client Testimonial Row",
        "subtitle": "Subtle quotes with authentic layout balance"
      }
    ],
    "comments": [
      {
        "user": "Freja Lind",
        "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=80",
        "time": "6 days ago",
        "text": "Pure perfection. Simple, elegant, and frictionless to duplicate."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Minimal",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for K\u014dhaku \u2014 Minimalist Scandinavian Design Folio",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-006",
    "image": "assets/t6.jpg",
    "title": "SaaS Product Designer Comprehensive Folio System",
    "likes": 13750,
    "duplicates": 49800,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Featuring a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, SaaS Product Designer Comprehensive Folio System delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for SaaS Product Designer Comprehensive Folio System. Equipped with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 28,
    "componentsCount": 240,
    "fileSize": "52.3 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-600 via-teal-700 to-cyan-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Executive Overview",
        "subtitle": "KPI metric indicators and business outcome charts"
      },
      {
        "title": "Figma Component Architecture",
        "subtitle": "Nested design system variants showcase"
      },
      {
        "title": "User Journey Maps",
        "subtitle": "Friction point maps and persona breakdowns"
      }
    ],
    "comments": [
      {
        "user": "Jonathan Bell",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "This is the most comprehensive system on the entire community. Worth every penny."
      }
    ],
    "originalPrice": 4999,
    "discount": 30,
    "category": "Creative Director",
    "style": "Minimal",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for SaaS Product Designer Comprehensive Folio System",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-007",
    "image": "assets/t7.jpg",
    "title": "Modern Interactive Resume & Visual CV 2026",
    "likes": 8320,
    "duplicates": 29800,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Featuring a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, Modern Interactive Resume & Visual CV 2026 delivers an unmissable digital presence tailored for Software developers, open-source maintainers, and polyglot programmers who demand to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Modern Interactive Resume & Visual CV 2026. Complete with custom modules for Live Terminal Hero, Featured Repositories, Architecture Diagrams, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 6,
    "componentsCount": 42,
    "fileSize": "8.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-500 via-teal-500 to-green-500",
    "coverType": "resume",
    "gallery": [
      {
        "title": "A4 / US Letter Resume",
        "subtitle": "ATS optimized dual column layout"
      },
      {
        "title": "Web Interactive CV",
        "subtitle": "Clickable skills and expandable work history"
      }
    ],
    "comments": [
      {
        "user": "Nathalie Dupont",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Cleanest resume template I have used. Exported directly to PDF and got interviews right away."
      }
    ],
    "originalPrice": 1999,
    "discount": 15,
    "category": "Developer",
    "style": "Interactive",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Modern Interactive Resume & Visual CV 2026",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-008",
    "image": "assets/t8.jpg",
    "title": "Verve \u2014 Creative Agency & Studio Showreel",
    "likes": 7490,
    "duplicates": 24300,
    "type": "files",
    "tags": [
      "Agency",
      "Creative Director",
      "3D & Visual"
    ],
    "description": "Crafted around a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Under the hood, an ultra-fast Next.js, Tailwind CSS, Cinema 4D foundation powers responsive interactions, highlighting real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Verve \u2014 Creative Agency & Studio Showreel. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 18,
    "componentsCount": 128,
    "fileSize": "34.6 MB",
    "updatedAt": "2 weeks ago",
    "license": "Standard Commercial",
    "gradient": "from-fuchsia-600 via-pink-600 to-rose-600",
    "coverType": "agency",
    "gallery": [
      {
        "title": "Agency Showcase Reel",
        "subtitle": "Wide-format project cards with hover states"
      },
      {
        "title": "Services & Retainer Matrix",
        "subtitle": "Clear client deliverables table"
      }
    ],
    "comments": [
      {
        "user": "Leo Gomez",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Saved our boutique agency at least 40 hours of layout design."
      }
    ],
    "originalPrice": 3799,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Verve \u2014 Creative Agency & Studio Showreel",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-009",
    "image": "assets/t9.jpg",
    "title": "Mobile App UX Specialist Portfolio",
    "likes": 12100,
    "duplicates": 44300,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Interactive"
    ],
    "description": "Featuring a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, Mobile App UX Specialist Portfolio delivers an unmissable digital presence tailored for Product designers, interaction designers, and user experience researchers who demand to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Built for speed and fluid responsiveness on Figma, Design Tokens, React, it captivates visitors with fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Mobile App UX Specialist Portfolio. Complete with custom modules for Bento UX Hero, In-Depth Case Studies, Design System Specimen, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 20,
    "componentsCount": 165,
    "fileSize": "41.2 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-sky-400 via-blue-500 to-indigo-600",
    "coverType": "mobile",
    "gallery": [
      {
        "title": "Device Carousel",
        "subtitle": "iPhone 16 Pro photorealistic clay mockups"
      },
      {
        "title": "Interactive Flow Noodles",
        "subtitle": "Visualized decision tree user states"
      }
    ],
    "comments": [
      {
        "user": "Tariq Mansour",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 week ago",
        "text": "The clay mockups alone are worth downloading this file!"
      }
    ],
    "originalPrice": 2899,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Interactive",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Mobile App UX Specialist Portfolio",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-010",
    "image": "assets/t10.jpg",
    "title": "Cyberpunk & Web3 Product Portfolio",
    "likes": 6890,
    "duplicates": 19800,
    "type": "files",
    "tags": [
      "Dark Mode",
      "Developer",
      "3D & Visual"
    ],
    "description": "Engineered with a high-octane neo-Tokyo cyberpunk visual language with acidic neon glows, chromatic aberration, and glitch accents, this signature portfolio is custom-tailored for Software developers, open-source maintainers, and polyglot programmers aiming to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Built for speed and fluid responsiveness on React, TypeScript, Tailwind CSS, it captivates visitors with dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for Cyberpunk & Web3 Product Portfolio. The production-ready layout comes loaded with Live Terminal Hero, Featured Repositories, Architecture Diagrams, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 14,
    "componentsCount": 88,
    "fileSize": "26.8 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-cyan-500 via-blue-700 to-purple-900",
    "coverType": "cyberpunk",
    "gallery": [
      {
        "title": "Neon Cyber Deck",
        "subtitle": "HUD inspired dark interface elements"
      },
      {
        "title": "Protocol Metrics",
        "subtitle": "TVL, gas optimization, and smart contract flows"
      }
    ],
    "comments": [
      {
        "user": "Alex V.",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "Super crisp aesthetic for decentralized tech portfolios."
      }
    ],
    "originalPrice": 3199,
    "discount": 25,
    "category": "Developer",
    "style": "Cyberpunk",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for Cyberpunk & Web3 Product Portfolio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-011",
    "image": "assets/t11.jpg",
    "title": "MonoType \u2014 Typography & Editorial Monograph",
    "likes": 8940,
    "duplicates": 31200,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for MonoType \u2014 Typography & Editorial Monograph. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 16,
    "componentsCount": 92,
    "fileSize": "19.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-neutral-900 via-zinc-800 to-neutral-700",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Typographic Monograph",
        "subtitle": "Grid systems with dramatic scale ratios"
      },
      {
        "title": "Columnar Essay Layout",
        "subtitle": "Long-form design criticism structure"
      }
    ],
    "comments": [
      {
        "user": "Emma Watson-Lee",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "A masterclass in baseline grids and typography."
      }
    ],
    "originalPrice": 2299,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for MonoType \u2014 Typography & Editorial Monograph",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-012",
    "image": "assets/t12.jpg",
    "title": "Neural \u2014 Generative AI & ML Experience Portfolio",
    "likes": 15320,
    "duplicates": 52100,
    "type": "files",
    "tags": [
      "Developer",
      "3D & Visual",
      "UX/UI"
    ],
    "description": "Crafted around a neural-network inspired architecture featuring animated synaptic particle nodes and glowing bioluminescent hues, this high-performance system empowers GenAI engineers, prompt engineers, and synthetic media creators to effortlessly unveil cutting-edge multimodal generative workflows, diffusion models, and real-time LLM orchestrations. Powered by Next.js, Stable Diffusion, OpenAI API, the interface provides a seamless interactive experience featuring computational intelligence aesthetic highlighted by glowing neural synapses and prompt terminal overlays crafted specifically for Neural \u2014 Generative AI & ML Experience Portfolio. Complete with custom modules for Multimodal Generative Canvas, Real-Time AI Playground, Prompt Architecture Showcase, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 24,
    "componentsCount": 195,
    "fileSize": "44.9 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-indigo-600 via-pink-600 to-amber-400",
    "coverType": "ai",
    "gallery": [
      {
        "title": "Multimodal Agent Showcase",
        "subtitle": "Interactive reasoning traces and prompt chains"
      },
      {
        "title": "Benchmark Comparison",
        "subtitle": "Model latency and accuracy evaluation charts"
      }
    ],
    "comments": [
      {
        "user": "Rohan Gupta",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "18 hours ago",
        "text": "So timely and relevant! Everyone hiring in AI was impressed by this layout."
      }
    ],
    "originalPrice": 4499,
    "discount": 25,
    "category": "Generative AI",
    "style": "AI-inspired",
    "targetAudience": "GenAI engineers, prompt engineers, and synthetic media creators",
    "visualConcept": "computational intelligence aesthetic highlighted by glowing neural synapses and prompt terminal overlays crafted specifically for Neural \u2014 Generative AI & ML Experience Portfolio",
    "sections": [
      "Multimodal Generative Canvas",
      "Real-Time AI Playground",
      "Prompt Architecture Showcase",
      "Diffusion Gallery",
      "Production Use Cases",
      "Start Project"
    ],
    "technology": [
      "Next.js",
      "Stable Diffusion",
      "OpenAI API",
      "Three.js",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-013",
    "image": "assets/t13.png",
    "title": "Nexus \u2014 Design Systems & UI Architecture Hub",
    "likes": 9840,
    "duplicates": 33900,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Developer"
    ],
    "description": "Crafted around a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, this high-performance system empowers Product designers, interaction designers, and user experience researchers to effortlessly articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Built for speed and fluid responsiveness on Figma, Design Tokens, React, it captivates visitors with dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Nexus \u2014 Design Systems & UI Architecture Hub. Complete with custom modules for Bento UX Hero, In-Depth Case Studies, Design System Specimen, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 20,
    "componentsCount": 178,
    "fileSize": "36.2 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-700 via-indigo-800 to-slate-900",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Token Architecture",
        "subtitle": "Semantic color and spacing scales"
      },
      {
        "title": "Component Anatomy",
        "subtitle": "Interactive state and variant breakdown"
      }
    ],
    "comments": [
      {
        "user": "Liam Scott",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Essential for any designer showcasing scalable component libraries."
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Nexus \u2014 Design Systems & UI Architecture Hub",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-014",
    "image": "assets/t14.jpg",
    "title": "Aura \u2014 Freelance Brand & Visual Identity Kit",
    "likes": 11420,
    "duplicates": 38700,
    "type": "files",
    "tags": [
      "Agency",
      "Editorial",
      "Creative Director"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Aura \u2014 Freelance Brand & Visual Identity Kit. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 26,
    "componentsCount": 160,
    "fileSize": "48.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-200 via-rose-300 to-purple-400",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Brand Guidelines",
        "subtitle": "Grid systems, logo mark construction, clearspace"
      },
      {
        "title": "Collateral Grid",
        "subtitle": "Business cards, packaging, and sign mockups"
      }
    ],
    "comments": [
      {
        "user": "Zoe Kravitz",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Brought my client pitch win-rate to 100%. Beautifully organized."
      }
    ],
    "originalPrice": 3599,
    "discount": 20,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Aura \u2014 Freelance Brand & Visual Identity Kit",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-015",
    "image": "assets/t15.jpg",
    "title": "Apex \u2014 One-Page Minimalist Technical Resume",
    "likes": 7650,
    "duplicates": 27400,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Crafted around a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Apex \u2014 One-Page Minimalist Technical Resume. Complete with custom modules for Live Terminal Hero, Featured Repositories, Architecture Diagrams, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 4,
    "componentsCount": 36,
    "fileSize": "6.8 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-slate-100 via-gray-200 to-zinc-300",
    "coverType": "resume",
    "gallery": [
      {
        "title": "Technical Resume View",
        "subtitle": "ATS-friendly monospace & sans-serif hierarchy"
      }
    ],
    "comments": [
      {
        "user": "Kenji Sato",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Crisp, concise, no fluff. Exactly what hiring managers want to see."
      }
    ],
    "originalPrice": 1999,
    "discount": 10,
    "category": "Developer",
    "style": "Minimal",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Apex \u2014 One-Page Minimalist Technical Resume",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-016",
    "image": "assets/t16.jpg",
    "title": "Obsidian \u2014 Dark Mode 3D Portfolio & Showreel",
    "likes": 12890,
    "duplicates": 43100,
    "type": "files",
    "tags": [
      "Dark Mode",
      "3D & Visual",
      "Interactive"
    ],
    "description": "Engineered with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this signature portfolio is custom-tailored for Software developers, open-source maintainers, and polyglot programmers aiming to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Obsidian \u2014 Dark Mode 3D Portfolio & Showreel. Equipped with Live Terminal Hero, Featured Repositories, Architecture Diagrams, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 16,
    "componentsCount": 115,
    "fileSize": "39.4 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-zinc-900 via-neutral-900 to-black",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Obsidian Hero Canvas",
        "subtitle": "Deep dark aesthetic with high-fidelity lighting"
      },
      {
        "title": "Showreel Player",
        "subtitle": "Aspect ratio 21:9 ultra-wide video embed frame"
      }
    ],
    "comments": [
      {
        "user": "Elena Vance",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Looks like an Apple Pro website. Incredible polish."
      }
    ],
    "originalPrice": 3299,
    "discount": 20,
    "category": "Developer",
    "style": "3D",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Obsidian \u2014 Dark Mode 3D Portfolio & Showreel",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-017",
    "image": "assets/t17.jpg",
    "title": "Prism \u2014 Senior Product Design Leadership Folio",
    "likes": 10540,
    "duplicates": 36800,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Built with a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this turnkey showcase provides Creative directors, agency partners, and executive brand visionaries the competitive edge required to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Under the hood, an ultra-fast Next.js, Tailwind CSS, Cinema 4D foundation powers responsive interactions, highlighting distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Prism \u2014 Senior Product Design Leadership Folio. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 24,
    "componentsCount": 210,
    "fileSize": "54.1 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-violet-600 via-purple-700 to-indigo-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Strategic Leadership Overview",
        "subtitle": "Vision docs, OKR attainment, and team growth metrics"
      },
      {
        "title": "Deep Dive Case Studies",
        "subtitle": "End-to-end multi-quarter product evolutions"
      }
    ],
    "comments": [
      {
        "user": "Brian K.",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Land VP/Head of Design positions with this template. Superbly comprehensive."
      }
    ],
    "originalPrice": 4299,
    "discount": 25,
    "category": "Creative Director",
    "style": "Minimal",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Prism \u2014 Senior Product Design Leadership Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-018",
    "image": "assets/t18.jpg",
    "title": "Atelier \u2014 Swiss Modernist Graphic Design Folio",
    "likes": 8760,
    "duplicates": 30200,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Atelier \u2014 Swiss Modernist Graphic Design Folio. Equipped with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 18,
    "componentsCount": 124,
    "fileSize": "22.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-red-600 via-orange-600 to-amber-500",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Grid Composition",
        "subtitle": "Mathematical column and module balance"
      },
      {
        "title": "Poster Exhibition View",
        "subtitle": "Large format print mockups"
      }
    ],
    "comments": [
      {
        "user": "Lara Croft",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The grid system alone is worth double the price."
      }
    ],
    "originalPrice": 3499,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Atelier \u2014 Swiss Modernist Graphic Design Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-019",
    "image": "assets/t19.jpg",
    "title": "Quantum \u2014 Fullstack Engineer Interactive Terminal",
    "likes": 9150,
    "duplicates": 34100,
    "type": "files",
    "tags": [
      "Developer",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Built with a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this turnkey showcase provides Software developers, open-source maintainers, and polyglot programmers the competitive edge required to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Quantum \u2014 Fullstack Engineer Interactive Terminal. The production-ready layout comes loaded with Live Terminal Hero, Featured Repositories, Architecture Diagrams, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 10,
    "componentsCount": 82,
    "fileSize": "16.5 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-950 via-teal-900 to-slate-900",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell",
        "subtitle": "Interactive CLI project explorer"
      },
      {
        "title": "System Architecture",
        "subtitle": "Distributed systems diagrams and latency stats"
      }
    ],
    "comments": [
      {
        "user": "Sergey P.",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Every engineer who saw this was blown away by the terminal feel."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Quantum \u2014 Fullstack Engineer Interactive Terminal",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-020",
    "image": "assets/t20.jpg",
    "title": "Sphere \u2014 Motion Graphics & Cinema 4D Reel System",
    "likes": 13900,
    "duplicates": 47200,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Creative Director",
      "Agency"
    ],
    "description": "Engineered with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this signature portfolio is custom-tailored for Creative directors, agency partners, and executive brand visionaries aiming to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Sphere \u2014 Motion Graphics & Cinema 4D Reel System. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 22,
    "componentsCount": 150,
    "fileSize": "49.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-rose-600 to-orange-500",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Cinematic Showreel",
        "subtitle": "Frameless 4K showreel player with timeline scrubbers"
      },
      {
        "title": "Lighting & Shading Breakdown",
        "subtitle": "Clay vs Wireframe vs Final Render comparison"
      }
    ],
    "comments": [
      {
        "user": "Nathan Drake",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "6 hours ago",
        "text": "The clay vs render breakdown slider is pure magic. Outstanding work!"
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Sphere \u2014 Motion Graphics & Cinema 4D Reel System",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-021",
    "image": "assets/t21.jpg",
    "title": "Sphere \u2014 Motion Graphics & Cinema 4D Reel System",
    "likes": 13900,
    "duplicates": 47200,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Creative Director",
      "Agency"
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, Sphere \u2014 Motion Graphics & Cinema 4D Reel System delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Under the hood, an ultra-fast Next.js, Tailwind CSS, Cinema 4D foundation powers responsive interactions, highlighting real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Sphere \u2014 Motion Graphics & Cinema 4D Reel System. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 22,
    "componentsCount": 150,
    "fileSize": "49.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-rose-600 to-orange-500",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Cinematic Showreel",
        "subtitle": "Frameless 4K showreel player with timeline scrubbers"
      },
      {
        "title": "Lighting & Shading Breakdown",
        "subtitle": "Clay vs Wireframe vs Final Render comparison"
      }
    ],
    "comments": [
      {
        "user": "Nathan Drake",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "6 hours ago",
        "text": "The clay vs render breakdown slider is pure magic. Outstanding work!"
      }
    ],
    "originalPrice": 3999,
    "discount": 30,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Sphere \u2014 Motion Graphics & Cinema 4D Reel System",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-022",
    "image": "assets/t22.jpg",
    "title": "Vanguard \u2014 Senior Product Design & Strategy Folio",
    "likes": 14254,
    "duplicates": 48878,
    "type": "files",
    "tags": [
      "Developer",
      "Minimalist",
      "Dark Mode"
    ],
    "description": "Engineered with a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this signature portfolio is custom-tailored for Software developers, open-source maintainers, and polyglot programmers aiming to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Vanguard \u2014 Senior Product Design & Strategy Folio. Complete with custom modules for Live Terminal Hero, Featured Repositories, Architecture Diagrams, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 8,
    "componentsCount": 68,
    "fileSize": "14.2 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-400 via-orange-500 to-red-600",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell View",
        "subtitle": "Monospaced interactive code showcase"
      },
      {
        "title": "Project Matrix",
        "subtitle": "Card layout with stack badges and live demo links"
      },
      {
        "title": "Experience Timeline",
        "subtitle": "Git-commit style career trajectory"
      }
    ],
    "comments": [
      {
        "user": "David Zhou",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Best tech portfolio template on FolioForge hands down. Monospace styling is immaculate."
      }
    ],
    "originalPrice": 2499,
    "discount": 20,
    "category": "Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Vanguard \u2014 Senior Product Design & Strategy Folio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-023",
    "image": "assets/t23.jpg",
    "title": "Chronicle \u2014 Architecture & Spatial Design Monograph",
    "likes": 22101,
    "duplicates": 70437,
    "type": "files",
    "tags": [
      "Editorial",
      "Creative Director",
      "Agency"
    ],
    "description": "Built with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this turnkey showcase provides Three.js engineers, WebXR creators, and spatial web architects the competitive edge required to deliver browser-based 3D simulations, photorealistic GLTF model inspections, and spatial computing demos. Leveraging modern Three.js, React Three Fiber, WebXR, the architecture elevates your brand through real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Chronicle \u2014 Architecture & Spatial Design Monograph. The production-ready layout comes loaded with Interactive 3D Stage Hero, Real-Time Model Viewer, Spatial Lighting Controls, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 22,
    "componentsCount": 180,
    "fileSize": "46.1 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-stone-800 via-neutral-900 to-black",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Editorial Cover & Index",
        "subtitle": "Editorial serif display with refined grid"
      },
      {
        "title": "Visual Narrative Spread",
        "subtitle": "Full-bleed imagery paired with thoughtful prose"
      },
      {
        "title": "Client Archival Index",
        "subtitle": "Chronological table of high-profile commissions"
      }
    ],
    "comments": [
      {
        "user": "Siddharth Rao",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Well worth the investment. Used this to build my fashion photography portfolio and got featured on Awwwards."
      }
    ],
    "originalPrice": 3999,
    "discount": 25,
    "category": "3D Developer",
    "style": "3D",
    "targetAudience": "Three.js engineers, WebXR creators, and spatial web architects",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Chronicle \u2014 Architecture & Spatial Design Monograph",
    "sections": [
      "Interactive 3D Stage Hero",
      "Real-Time Model Viewer",
      "Spatial Lighting Controls",
      "Shader Performance Benchmarks",
      "Client 3D Installations",
      "Start 3D Project"
    ],
    "technology": [
      "Three.js",
      "React Three Fiber",
      "WebXR",
      "GLTF",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-024",
    "image": "assets/t24.jpg",
    "title": "Hyperion \u2014 Game UI & Interactive Experience Showcase",
    "likes": 12968,
    "duplicates": 40526,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Crafted around a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Leveraging modern React, TypeScript, Tailwind CSS, the architecture elevates your brand through real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Hyperion \u2014 Game UI & Interactive Experience Showcase. Includes dedicated sections for Live Terminal Hero, Featured Repositories, Architecture Diagrams, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 12,
    "componentsCount": 94,
    "fileSize": "38.7 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-purple-900 via-violet-800 to-cyan-700",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Luminous Spatial Hero",
        "subtitle": "Deep neon gradient with wireframe perspective"
      },
      {
        "title": "Interactive Reel Showcase",
        "subtitle": "Framed 60fps video player components"
      },
      {
        "title": "3D Asset Specs",
        "subtitle": "Polygon count, shaders, and lighting rig documentation"
      }
    ],
    "comments": [
      {
        "user": "Chloe Nguyen",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The glass blur styling in this file is next level."
      }
    ],
    "originalPrice": 3499,
    "discount": 20,
    "category": "Developer",
    "style": "3D",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Hyperion \u2014 Game UI & Interactive Experience Showcase",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-025",
    "image": "assets/t25.jpg",
    "title": "Synthetix \u2014 FinTech Product & Design Systems Folio",
    "likes": 19845,
    "duplicates": 66825,
    "type": "files",
    "tags": [
      "Minimalist",
      "UX/UI",
      "Case Study"
    ],
    "description": "Crafted around a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this high-performance system empowers Principal product designers, UX leads, and digital venture builders to effortlessly showcase end-to-end product strategy, commercial revenue impact, and polished digital experiences. Powered by Figma, Next.js, Framer, the interface provides a seamless interactive experience featuring distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Synthetix \u2014 FinTech Product & Design Systems Folio. Includes dedicated sections for Strategic Vision Hero, End-to-End Product Roadmaps, Measurable ROI Case Studies, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 14,
    "componentsCount": 110,
    "fileSize": "18.3 MB",
    "updatedAt": "5 days ago",
    "license": "Standard Commercial",
    "gradient": "from-zinc-100 via-stone-200 to-neutral-300",
    "coverType": "minimalist",
    "gallery": [
      {
        "title": "Clean Index Grid",
        "subtitle": "2-column uncluttered project listing"
      },
      {
        "title": "Typography Specimen",
        "subtitle": "Carefully proportioned optical scale"
      },
      {
        "title": "Client Testimonial Row",
        "subtitle": "Subtle quotes with authentic layout balance"
      }
    ],
    "comments": [
      {
        "user": "Freja Lind",
        "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=80",
        "time": "6 days ago",
        "text": "Pure perfection. Simple, elegant, and frictionless to duplicate."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "Product Designer",
    "style": "Minimal",
    "targetAudience": "Principal product designers, UX leads, and digital venture builders",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Synthetix \u2014 FinTech Product & Design Systems Folio",
    "sections": [
      "Strategic Vision Hero",
      "End-to-End Product Roadmaps",
      "Measurable ROI Case Studies",
      "Design Ops System",
      "Client Testimonials",
      "Schedule Discovery Call"
    ],
    "technology": [
      "Figma",
      "Next.js",
      "Framer",
      "Tailwind CSS",
      "TypeScript"
    ]
  },
  {
    "id": "ff-026",
    "image": "assets/t26.jpg",
    "title": "Lumina \u2014 Editorial Fashion & Art Direction Folio",
    "likes": 17312,
    "duplicates": 58874,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Built with a high-fashion editorial typography grid reminiscent of contemporary print publications, this turnkey showcase provides Creative directors, agency partners, and executive brand visionaries the competitive edge required to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Lumina \u2014 Editorial Fashion & Art Direction Folio. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 28,
    "componentsCount": 240,
    "fileSize": "52.3 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-600 via-teal-700 to-cyan-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Executive Overview",
        "subtitle": "KPI metric indicators and business outcome charts"
      },
      {
        "title": "Figma Component Architecture",
        "subtitle": "Nested design system variants showcase"
      },
      {
        "title": "User Journey Maps",
        "subtitle": "Friction point maps and persona breakdowns"
      }
    ],
    "comments": [
      {
        "user": "Jonathan Bell",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "This is the most comprehensive system on the entire community. Worth every penny."
      }
    ],
    "originalPrice": 4999,
    "discount": 30,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Lumina \u2014 Editorial Fashion & Art Direction Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-027",
    "image": "assets/t27.jpg",
    "title": "DevCraft \u2014 Fullstack OSS & Systems Engineering Resume",
    "likes": 12019,
    "duplicates": 39223,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Featuring a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, DevCraft \u2014 Fullstack OSS & Systems Engineering Resume delivers an unmissable digital presence tailored for Senior software engineers, distributed systems builders, and algorithms specialists who demand to showcase scalable microservices, low-latency architectures, and mission-critical engineering accomplishments. Powered by Next.js, Go, Docker, the interface provides a seamless interactive experience featuring distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for DevCraft \u2014 Fullstack OSS & Systems Engineering Resume. Equipped with Engineering Philosophy Hero, Distributed Systems Case Studies, Performance Benchmarks, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 6,
    "componentsCount": 42,
    "fileSize": "8.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-500 via-teal-500 to-green-500",
    "coverType": "resume",
    "gallery": [
      {
        "title": "A4 / US Letter Resume",
        "subtitle": "ATS optimized dual column layout"
      },
      {
        "title": "Web Interactive CV",
        "subtitle": "Clickable skills and expandable work history"
      }
    ],
    "comments": [
      {
        "user": "Nathalie Dupont",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Cleanest resume template I have used. Exported directly to PDF and got interviews right away."
      }
    ],
    "originalPrice": 1999,
    "discount": 15,
    "category": "Software Engineer",
    "style": "Minimal",
    "targetAudience": "Senior software engineers, distributed systems builders, and algorithms specialists",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for DevCraft \u2014 Fullstack OSS & Systems Engineering Resume",
    "sections": [
      "Engineering Philosophy Hero",
      "Distributed Systems Case Studies",
      "Performance Benchmarks",
      "System Architecture",
      "Patent & Publications",
      "Get in Touch"
    ],
    "technology": [
      "Next.js",
      "Go",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-028",
    "image": "assets/t28.jpg",
    "title": "Prismix \u2014 Multi-Disciplinary Brand & Visual Identity Kit",
    "likes": 11326,
    "duplicates": 34072,
    "type": "files",
    "tags": [
      "Agency",
      "Creative Director",
      "3D & Visual"
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, Prismix \u2014 Multi-Disciplinary Brand & Visual Identity Kit delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Prismix \u2014 Multi-Disciplinary Brand & Visual Identity Kit. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 18,
    "componentsCount": 128,
    "fileSize": "34.6 MB",
    "updatedAt": "2 weeks ago",
    "license": "Standard Commercial",
    "gradient": "from-fuchsia-600 via-pink-600 to-rose-600",
    "coverType": "agency",
    "gallery": [
      {
        "title": "Agency Showcase Reel",
        "subtitle": "Wide-format project cards with hover states"
      },
      {
        "title": "Services & Retainer Matrix",
        "subtitle": "Clear client deliverables table"
      }
    ],
    "comments": [
      {
        "user": "Leo Gomez",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Saved our boutique agency at least 40 hours of layout design."
      }
    ],
    "originalPrice": 3799,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Prismix \u2014 Multi-Disciplinary Brand & Visual Identity Kit",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-029",
    "image": "assets/t29.jpg",
    "title": "Zenith \u2014 Mobile Design System & Interaction Hub",
    "likes": 16073,
    "duplicates": 54421,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Interactive"
    ],
    "description": "Crafted around a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, this high-performance system empowers Interaction designers, digital product animators, and tactile UX engineers to effortlessly bring static design to life through fluid physics-based gestures, haptic feedback, and delightful storytelling. Built for speed and fluid responsiveness on Framer Motion, GSAP, React, it captivates visitors with fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Zenith \u2014 Mobile Design System & Interaction Hub. Equipped with Kinetic Interaction Hero, Gesture Playground, Interactive Micro-Delights, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 20,
    "componentsCount": 165,
    "fileSize": "41.2 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-sky-400 via-blue-500 to-indigo-600",
    "coverType": "mobile",
    "gallery": [
      {
        "title": "Device Carousel",
        "subtitle": "iPhone 16 Pro photorealistic clay mockups"
      },
      {
        "title": "Interactive Flow Noodles",
        "subtitle": "Visualized decision tree user states"
      }
    ],
    "comments": [
      {
        "user": "Tariq Mansour",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 week ago",
        "text": "The clay mockups alone are worth downloading this file!"
      }
    ],
    "originalPrice": 2899,
    "discount": 20,
    "category": "Interactive Designer",
    "style": "Interactive",
    "targetAudience": "Interaction designers, digital product animators, and tactile UX engineers",
    "visualConcept": "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Zenith \u2014 Mobile Design System & Interaction Hub",
    "sections": [
      "Kinetic Interaction Hero",
      "Gesture Playground",
      "Interactive Micro-Delights",
      "Fluid Scroll Case Studies",
      "Design System Interactions",
      "Let's Collaborate"
    ],
    "technology": [
      "Framer Motion",
      "GSAP",
      "React",
      "Lenis Scroll",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-030",
    "image": "assets/t30.jpg",
    "title": "NeonForge \u2014 Web3 & Cyberspace Product Folio",
    "likes": 11000,
    "duplicates": 30270,
    "type": "files",
    "tags": [
      "Dark Mode",
      "Developer",
      "3D & Visual"
    ],
    "description": "Engineered with a high-octane neo-Tokyo cyberpunk visual language with acidic neon glows, chromatic aberration, and glitch accents, this signature portfolio is custom-tailored for Software developers, open-source maintainers, and polyglot programmers aiming to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for NeonForge \u2014 Web3 & Cyberspace Product Folio. Includes dedicated sections for Live Terminal Hero, Featured Repositories, Architecture Diagrams, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 14,
    "componentsCount": 88,
    "fileSize": "26.8 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-cyan-500 via-blue-700 to-purple-900",
    "coverType": "cyberpunk",
    "gallery": [
      {
        "title": "Neon Cyber Deck",
        "subtitle": "HUD inspired dark interface elements"
      },
      {
        "title": "Protocol Metrics",
        "subtitle": "TVL, gas optimization, and smart contract flows"
      }
    ],
    "comments": [
      {
        "user": "Alex V.",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "Super crisp aesthetic for decentralized tech portfolios."
      }
    ],
    "originalPrice": 3199,
    "discount": 25,
    "category": "Developer",
    "style": "Cyberpunk",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for NeonForge \u2014 Web3 & Cyberspace Product Folio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-031",
    "image": "assets/t31.jpg",
    "title": "TypoCraft \u2014 Swiss Typographic & Print Monograph",
    "likes": 13187,
    "duplicates": 42019,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Built with a high-fashion editorial typography grid reminiscent of contemporary print publications, this turnkey showcase provides Creative directors, agency partners, and executive brand visionaries the competitive edge required to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for TypoCraft \u2014 Swiss Typographic & Print Monograph. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 16,
    "componentsCount": 92,
    "fileSize": "19.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-neutral-900 via-zinc-800 to-neutral-700",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Typographic Monograph",
        "subtitle": "Grid systems with dramatic scale ratios"
      },
      {
        "title": "Columnar Essay Layout",
        "subtitle": "Long-form design criticism structure"
      }
    ],
    "comments": [
      {
        "user": "Emma Watson-Lee",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "A masterclass in baseline grids and typography."
      }
    ],
    "originalPrice": 2299,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for TypoCraft \u2014 Swiss Typographic & Print Monograph",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-032",
    "image": "assets/t32.jpg",
    "title": "Cortex \u2014 Deep Learning & AI Research Portfolio",
    "likes": 19704,
    "duplicates": 63268,
    "type": "files",
    "tags": [
      "Developer",
      "3D & Visual",
      "UX/UI"
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, Cortex \u2014 Deep Learning & AI Research Portfolio delivers an unmissable digital presence tailored for Product designers, interaction designers, and user experience researchers who demand to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Powered by Figma, Design Tokens, React, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Cortex \u2014 Deep Learning & AI Research Portfolio. Includes dedicated sections for Bento UX Hero, In-Depth Case Studies, Design System Specimen, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 24,
    "componentsCount": 195,
    "fileSize": "44.9 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-indigo-600 via-pink-600 to-amber-400",
    "coverType": "ai",
    "gallery": [
      {
        "title": "Multimodal Agent Showcase",
        "subtitle": "Interactive reasoning traces and prompt chains"
      },
      {
        "title": "Benchmark Comparison",
        "subtitle": "Model latency and accuracy evaluation charts"
      }
    ],
    "comments": [
      {
        "user": "Rohan Gupta",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "18 hours ago",
        "text": "So timely and relevant! Everyone hiring in AI was impressed by this layout."
      }
    ],
    "originalPrice": 4499,
    "discount": 25,
    "category": "UI/UX Designer",
    "style": "3D",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Cortex \u2014 Deep Learning & AI Research Portfolio",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-033",
    "image": "assets/t33.jpg",
    "title": "Foundry \u2014 Design Tokens & UI Architecture System",
    "likes": 14361,
    "duplicates": 45417,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Developer"
    ],
    "description": "Crafted around a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, this high-performance system empowers Product designers, interaction designers, and user experience researchers to effortlessly articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Leveraging modern Figma, Design Tokens, React, the architecture elevates your brand through dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Foundry \u2014 Design Tokens & UI Architecture System. Includes dedicated sections for Bento UX Hero, In-Depth Case Studies, Design System Specimen, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 20,
    "componentsCount": 178,
    "fileSize": "36.2 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-700 via-indigo-800 to-slate-900",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Token Architecture",
        "subtitle": "Semantic color and spacing scales"
      },
      {
        "title": "Component Anatomy",
        "subtitle": "Interactive state and variant breakdown"
      }
    ],
    "comments": [
      {
        "user": "Liam Scott",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Essential for any designer showcasing scalable component libraries."
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Foundry \u2014 Design Tokens & UI Architecture System",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-034",
    "image": "assets/t34.jpg",
    "title": "Velvet \u2014 Boutique Brand Agency & Studio Showreel",
    "likes": 16078,
    "duplicates": 50566,
    "type": "files",
    "tags": [
      "Agency",
      "Editorial",
      "Creative Director"
    ],
    "description": "Engineered with a high-fashion editorial typography grid reminiscent of contemporary print publications, this signature portfolio is custom-tailored for Creative directors, agency partners, and executive brand visionaries aiming to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Velvet \u2014 Boutique Brand Agency & Studio Showreel. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 26,
    "componentsCount": 160,
    "fileSize": "48.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-200 via-rose-300 to-purple-400",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Brand Guidelines",
        "subtitle": "Grid systems, logo mark construction, clearspace"
      },
      {
        "title": "Collateral Grid",
        "subtitle": "Business cards, packaging, and sign mockups"
      }
    ],
    "comments": [
      {
        "user": "Zoe Kravitz",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Brought my client pitch win-rate to 100%. Beautifully organized."
      }
    ],
    "originalPrice": 3599,
    "discount": 20,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Velvet \u2014 Boutique Brand Agency & Studio Showreel",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-035",
    "image": "assets/t35.jpg",
    "title": "Metric \u2014 Data Visualization & BI Product Resume",
    "likes": 12445,
    "duplicates": 27615,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Crafted around a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Built for speed and fluid responsiveness on React, TypeScript, Tailwind CSS, it captivates visitors with distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Metric \u2014 Data Visualization & BI Product Resume. Includes dedicated sections for Live Terminal Hero, Featured Repositories, Architecture Diagrams, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 4,
    "componentsCount": 36,
    "fileSize": "6.8 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-slate-100 via-gray-200 to-zinc-300",
    "coverType": "resume",
    "gallery": [
      {
        "title": "Technical Resume View",
        "subtitle": "ATS-friendly monospace & sans-serif hierarchy"
      }
    ],
    "comments": [
      {
        "user": "Kenji Sato",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Crisp, concise, no fluff. Exactly what hiring managers want to see."
      }
    ],
    "originalPrice": 1999,
    "discount": 10,
    "category": "Developer",
    "style": "Minimal",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Metric \u2014 Data Visualization & BI Product Resume",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-036",
    "image": "assets/t36.jpg",
    "title": "Obsidian Pro \u2014 Immersive Dark 3D Motion Portfolio",
    "likes": 17822,
    "duplicates": 43664,
    "type": "files",
    "tags": [
      "Dark Mode",
      "3D & Visual",
      "Interactive"
    ],
    "description": "Crafted around a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Obsidian Pro \u2014 Immersive Dark 3D Motion Portfolio. Equipped with Live Terminal Hero, Featured Repositories, Architecture Diagrams, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 16,
    "componentsCount": 115,
    "fileSize": "39.4 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-zinc-900 via-neutral-900 to-black",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Obsidian Hero Canvas",
        "subtitle": "Deep dark aesthetic with high-fidelity lighting"
      },
      {
        "title": "Showreel Player",
        "subtitle": "Aspect ratio 21:9 ultra-wide video embed frame"
      }
    ],
    "comments": [
      {
        "user": "Elena Vance",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Looks like an Apple Pro website. Incredible polish."
      }
    ],
    "originalPrice": 3299,
    "discount": 20,
    "category": "Developer",
    "style": "3D",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Obsidian Pro \u2014 Immersive Dark 3D Motion Portfolio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-037",
    "image": "assets/t37.jpg",
    "title": "Apex UX \u2014 Lead Product & Design Strategy Case Studies",
    "likes": 10609,
    "duplicates": 37713,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Featuring a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, Apex UX \u2014 Lead Product & Design Strategy Case Studies delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Apex UX \u2014 Lead Product & Design Strategy Case Studies. The production-ready layout comes loaded with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 24,
    "componentsCount": 210,
    "fileSize": "54.1 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-violet-600 via-purple-700 to-indigo-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Strategic Leadership Overview",
        "subtitle": "Vision docs, OKR attainment, and team growth metrics"
      },
      {
        "title": "Deep Dive Case Studies",
        "subtitle": "End-to-end multi-quarter product evolutions"
      }
    ],
    "comments": [
      {
        "user": "Brian K.",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Land VP/Head of Design positions with this template. Superbly comprehensive."
      }
    ],
    "originalPrice": 4299,
    "discount": 25,
    "category": "Creative Director",
    "style": "Minimal",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Apex UX \u2014 Lead Product & Design Strategy Case Studies",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-038",
    "image": "assets/t38.jpg",
    "title": "Basel \u2014 Modernist Helvetica Graphic Folio",
    "likes": 8966,
    "duplicates": 31462,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Basel \u2014 Modernist Helvetica Graphic Folio. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 18,
    "componentsCount": 124,
    "fileSize": "22.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-red-600 via-orange-600 to-amber-500",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Grid Composition",
        "subtitle": "Mathematical column and module balance"
      },
      {
        "title": "Poster Exhibition View",
        "subtitle": "Large format print mockups"
      }
    ],
    "comments": [
      {
        "user": "Lara Croft",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The grid system alone is worth double the price."
      }
    ],
    "originalPrice": 3499,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Basel \u2014 Modernist Helvetica Graphic Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-039",
    "image": "assets/t39.jpg",
    "title": "Kernel \u2014 Terminal & Cloud Infrastructure Showcase",
    "likes": 9493,
    "duplicates": 35711,
    "type": "files",
    "tags": [
      "Developer",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Built with a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this turnkey showcase provides Cloud infrastructure engineers, backend architects, and API specialists the competitive edge required to visualize complex serverless workflows, high-throughput pipelines, and robust data integrity solutions. Leveraging modern Node.js, Python, Rust, the architecture elevates your brand through playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Kernel \u2014 Terminal & Cloud Infrastructure Showcase. Includes dedicated sections for Architecture Graph Hero, API Documentation Demos, Throughput Benchmarks, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 10,
    "componentsCount": 82,
    "fileSize": "16.5 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-950 via-teal-900 to-slate-900",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell",
        "subtitle": "Interactive CLI project explorer"
      },
      {
        "title": "System Architecture",
        "subtitle": "Distributed systems diagrams and latency stats"
      }
    ],
    "comments": [
      {
        "user": "Sergey P.",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Every engineer who saw this was blown away by the terminal feel."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "Backend Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Cloud infrastructure engineers, backend architects, and API specialists",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Kernel \u2014 Terminal & Cloud Infrastructure Showcase",
    "sections": [
      "Architecture Graph Hero",
      "API Documentation Demos",
      "Throughput Benchmarks",
      "Cloud Infrastructure Topology",
      "Security Protocols",
      "Technical Contact"
    ],
    "technology": [
      "Node.js",
      "Python",
      "Rust",
      "GraphQL",
      "Redis",
      "AWS"
    ]
  },
  {
    "id": "ff-040",
    "image": "assets/t40.jpg",
    "title": "Spectra \u2014 3D Motion & VFX Cinematics Reel",
    "likes": 14380,
    "duplicates": 49160,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Creative Director",
      "Agency"
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, Spectra \u2014 3D Motion & VFX Cinematics Reel delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Spectra \u2014 3D Motion & VFX Cinematics Reel. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 22,
    "componentsCount": 150,
    "fileSize": "49.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-rose-600 to-orange-500",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Cinematic Showreel",
        "subtitle": "Frameless 4K showreel player with timeline scrubbers"
      },
      {
        "title": "Lighting & Shading Breakdown",
        "subtitle": "Clay vs Wireframe vs Final Render comparison"
      }
    ],
    "comments": [
      {
        "user": "Nathan Drake",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "6 hours ago",
        "text": "The clay vs render breakdown slider is pure magic. Outstanding work!"
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Spectra \u2014 3D Motion & VFX Cinematics Reel",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-041",
    "image": "assets/t41.jpg",
    "title": "Modular \u2014 Bento Grid Case Studies & Product Kit",
    "likes": 15437,
    "duplicates": 57239,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Case Study"
    ],
    "description": "Crafted around a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, this high-performance system empowers Product designers, interaction designers, and user experience researchers to effortlessly articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Under the hood, an ultra-fast Figma, Design Tokens, React foundation powers responsive interactions, highlighting dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Modular \u2014 Bento Grid Case Studies & Product Kit. The production-ready layout comes loaded with Bento UX Hero, In-Depth Case Studies, Design System Specimen, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 16,
    "componentsCount": 142,
    "fileSize": "28.4 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-600 via-indigo-600 to-purple-700",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Bento Overview",
        "subtitle": "Desktop 1440px viewport with dynamic modular cards"
      },
      {
        "title": "Case Study Breakdown",
        "subtitle": "Structured problem-solution framework with metrics"
      },
      {
        "title": "Mobile Responsive",
        "subtitle": "Fluid 390px layout optimized for mobile recruiters"
      },
      {
        "title": "Design System Tokens",
        "subtitle": "Pre-linked color variables and auto-layout typography"
      }
    ],
    "comments": [
      {
        "user": "Marcus Vance",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Helped me land my Senior Product Design role at Stripe! Incredible attention to typography and whitespace."
      },
      {
        "user": "Aisha Patel",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "The bento cards are so easy to remix. Beautiful use of auto-layout 5.0."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Modular \u2014 Bento Grid Case Studies & Product Kit",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-042",
    "image": "assets/t42.jpg",
    "title": "ForgeDev \u2014 Neo-Brutalist Software Engineer Showcase",
    "likes": 11994,
    "duplicates": 43858,
    "type": "files",
    "tags": [
      "Developer",
      "Minimalist",
      "Dark Mode"
    ],
    "description": "Crafted around a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this high-performance system empowers Senior software engineers, distributed systems builders, and algorithms specialists to effortlessly showcase scalable microservices, low-latency architectures, and mission-critical engineering accomplishments. Powered by Next.js, Go, Docker, the interface provides a seamless interactive experience featuring playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for ForgeDev \u2014 Neo-Brutalist Software Engineer Showcase. Includes dedicated sections for Engineering Philosophy Hero, Distributed Systems Case Studies, Performance Benchmarks, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 8,
    "componentsCount": 68,
    "fileSize": "14.2 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-400 via-orange-500 to-red-600",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell View",
        "subtitle": "Monospaced interactive code showcase"
      },
      {
        "title": "Project Matrix",
        "subtitle": "Card layout with stack badges and live demo links"
      },
      {
        "title": "Experience Timeline",
        "subtitle": "Git-commit style career trajectory"
      }
    ],
    "comments": [
      {
        "user": "David Zhou",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Best tech portfolio template on FolioForge hands down. Monospace styling is immaculate."
      }
    ],
    "originalPrice": 2499,
    "discount": 20,
    "category": "Software Engineer",
    "style": "Neo-Brutalist",
    "targetAudience": "Senior software engineers, distributed systems builders, and algorithms specialists",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for ForgeDev \u2014 Neo-Brutalist Software Engineer Showcase",
    "sections": [
      "Engineering Philosophy Hero",
      "Distributed Systems Case Studies",
      "Performance Benchmarks",
      "System Architecture",
      "Patent & Publications",
      "Get in Touch"
    ],
    "technology": [
      "Next.js",
      "Go",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-043",
    "image": "assets/t43.jpg",
    "title": "Elegance \u2014 Creative Direction & Haute Couture Folio",
    "likes": 19841,
    "duplicates": 65417,
    "type": "files",
    "tags": [
      "Editorial",
      "Creative Director",
      "Agency"
    ],
    "description": "Built with a ultra-premium haute couture styling adorned with champagne-gold accents, rich blacks, and restrained elegance, this turnkey showcase provides Creative directors, agency partners, and executive brand visionaries the competitive edge required to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through discreet bespoke craftsmanship with refined letter-spacing and opulent metallic undertones crafted specifically for Elegance \u2014 Creative Direction & Haute Couture Folio. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 22,
    "componentsCount": 180,
    "fileSize": "46.1 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-stone-800 via-neutral-900 to-black",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Editorial Cover & Index",
        "subtitle": "Editorial serif display with refined grid"
      },
      {
        "title": "Visual Narrative Spread",
        "subtitle": "Full-bleed imagery paired with thoughtful prose"
      },
      {
        "title": "Client Archival Index",
        "subtitle": "Chronological table of high-profile commissions"
      }
    ],
    "comments": [
      {
        "user": "Siddharth Rao",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Well worth the investment. Used this to build my fashion photography portfolio and got featured on Awwwards."
      }
    ],
    "originalPrice": 3999,
    "discount": 25,
    "category": "Creative Director",
    "style": "Luxury",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "discreet bespoke craftsmanship with refined letter-spacing and opulent metallic undertones crafted specifically for Elegance \u2014 Creative Direction & Haute Couture Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-044",
    "image": "assets/t44.jpg",
    "title": "SpatialCraft \u2014 AR/VR & 3D Spatial Interface Showreel",
    "likes": 10708,
    "duplicates": 35506,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Crafted around a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this high-performance system empowers Three.js engineers, WebXR creators, and spatial web architects to effortlessly deliver browser-based 3D simulations, photorealistic GLTF model inspections, and spatial computing demos. Powered by Three.js, React Three Fiber, WebXR, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for SpatialCraft \u2014 AR/VR & 3D Spatial Interface Showreel. Equipped with Interactive 3D Stage Hero, Real-Time Model Viewer, Spatial Lighting Controls, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 12,
    "componentsCount": 94,
    "fileSize": "38.7 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-purple-900 via-violet-800 to-cyan-700",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Luminous Spatial Hero",
        "subtitle": "Deep neon gradient with wireframe perspective"
      },
      {
        "title": "Interactive Reel Showcase",
        "subtitle": "Framed 60fps video player components"
      },
      {
        "title": "3D Asset Specs",
        "subtitle": "Polygon count, shaders, and lighting rig documentation"
      }
    ],
    "comments": [
      {
        "user": "Chloe Nguyen",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The glass blur styling in this file is next level."
      }
    ],
    "originalPrice": 3499,
    "discount": 20,
    "category": "3D Developer",
    "style": "3D",
    "targetAudience": "Three.js engineers, WebXR creators, and spatial web architects",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for SpatialCraft \u2014 AR/VR & 3D Spatial Interface Showreel",
    "sections": [
      "Interactive 3D Stage Hero",
      "Real-Time Model Viewer",
      "Spatial Lighting Controls",
      "Shader Performance Benchmarks",
      "Client 3D Installations",
      "Start 3D Project"
    ],
    "technology": [
      "Three.js",
      "React Three Fiber",
      "WebXR",
      "GLTF",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-045",
    "image": "assets/t45.jpg",
    "title": "Nordic \u2014 Minimalist Clean Design & Typography Folio",
    "likes": 17585,
    "duplicates": 61805,
    "type": "files",
    "tags": [
      "Minimalist",
      "UX/UI",
      "Case Study"
    ],
    "description": "Engineered with a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this signature portfolio is custom-tailored for Product designers, interaction designers, and user experience researchers aiming to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Built for speed and fluid responsiveness on Figma, Design Tokens, React, it captivates visitors with distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Nordic \u2014 Minimalist Clean Design & Typography Folio. Equipped with Bento UX Hero, In-Depth Case Studies, Design System Specimen, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 14,
    "componentsCount": 110,
    "fileSize": "18.3 MB",
    "updatedAt": "5 days ago",
    "license": "Standard Commercial",
    "gradient": "from-zinc-100 via-stone-200 to-neutral-300",
    "coverType": "minimalist",
    "gallery": [
      {
        "title": "Clean Index Grid",
        "subtitle": "2-column uncluttered project listing"
      },
      {
        "title": "Typography Specimen",
        "subtitle": "Carefully proportioned optical scale"
      },
      {
        "title": "Client Testimonial Row",
        "subtitle": "Subtle quotes with authentic layout balance"
      }
    ],
    "comments": [
      {
        "user": "Freja Lind",
        "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=80",
        "time": "6 days ago",
        "text": "Pure perfection. Simple, elegant, and frictionless to duplicate."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Minimal",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Nordic \u2014 Minimalist Clean Design & Typography Folio",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-046",
    "image": "assets/t46.jpg",
    "title": "Kite \u2014 SaaS Growth & Product Experience Folio",
    "likes": 15052,
    "duplicates": 53854,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Engineered with a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this signature portfolio is custom-tailored for Creative directors, agency partners, and executive brand visionaries aiming to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Kite \u2014 SaaS Growth & Product Experience Folio. Equipped with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 28,
    "componentsCount": 240,
    "fileSize": "52.3 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-600 via-teal-700 to-cyan-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Executive Overview",
        "subtitle": "KPI metric indicators and business outcome charts"
      },
      {
        "title": "Figma Component Architecture",
        "subtitle": "Nested design system variants showcase"
      },
      {
        "title": "User Journey Maps",
        "subtitle": "Friction point maps and persona breakdowns"
      }
    ],
    "comments": [
      {
        "user": "Jonathan Bell",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "This is the most comprehensive system on the entire community. Worth every penny."
      }
    ],
    "originalPrice": 4999,
    "discount": 30,
    "category": "Creative Director",
    "style": "Minimal",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Kite \u2014 SaaS Growth & Product Experience Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-047",
    "image": "assets/t47.jpg",
    "title": "ResumeLab \u2014 Visual Interactive Career Profile & CV",
    "likes": 9759,
    "duplicates": 34203,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Built with a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, this turnkey showcase provides Software developers, open-source maintainers, and polyglot programmers the competitive edge required to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for ResumeLab \u2014 Visual Interactive Career Profile & CV. Equipped with Live Terminal Hero, Featured Repositories, Architecture Diagrams, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 6,
    "componentsCount": 42,
    "fileSize": "8.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-500 via-teal-500 to-green-500",
    "coverType": "resume",
    "gallery": [
      {
        "title": "A4 / US Letter Resume",
        "subtitle": "ATS optimized dual column layout"
      },
      {
        "title": "Web Interactive CV",
        "subtitle": "Clickable skills and expandable work history"
      }
    ],
    "comments": [
      {
        "user": "Nathalie Dupont",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Cleanest resume template I have used. Exported directly to PDF and got interviews right away."
      }
    ],
    "originalPrice": 1999,
    "discount": 15,
    "category": "Developer",
    "style": "Interactive",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for ResumeLab \u2014 Visual Interactive Career Profile & CV",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-048",
    "image": "assets/t48.jpg",
    "title": "Signal \u2014 Creative Studio & Digital Experience Agency",
    "likes": 9066,
    "duplicates": 29052,
    "type": "files",
    "tags": [
      "Agency",
      "Creative Director",
      "3D & Visual"
    ],
    "description": "Built with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this turnkey showcase provides Creative directors, agency partners, and executive brand visionaries the competitive edge required to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Signal \u2014 Creative Studio & Digital Experience Agency. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 18,
    "componentsCount": 128,
    "fileSize": "34.6 MB",
    "updatedAt": "2 weeks ago",
    "license": "Standard Commercial",
    "gradient": "from-fuchsia-600 via-pink-600 to-rose-600",
    "coverType": "agency",
    "gallery": [
      {
        "title": "Agency Showcase Reel",
        "subtitle": "Wide-format project cards with hover states"
      },
      {
        "title": "Services & Retainer Matrix",
        "subtitle": "Clear client deliverables table"
      }
    ],
    "comments": [
      {
        "user": "Leo Gomez",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Saved our boutique agency at least 40 hours of layout design."
      }
    ],
    "originalPrice": 3799,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Signal \u2014 Creative Studio & Digital Experience Agency",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-049",
    "image": "assets/t49.jpg",
    "title": "Pulse UX \u2014 Mobile First HealthTech & App Portfolio",
    "likes": 13813,
    "duplicates": 49401,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Interactive"
    ],
    "description": "Built with a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, this turnkey showcase provides Product designers, interaction designers, and user experience researchers the competitive edge required to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Under the hood, an ultra-fast Figma, Design Tokens, React foundation powers responsive interactions, highlighting fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Pulse UX \u2014 Mobile First HealthTech & App Portfolio. Equipped with Bento UX Hero, In-Depth Case Studies, Design System Specimen, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 20,
    "componentsCount": 165,
    "fileSize": "41.2 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-sky-400 via-blue-500 to-indigo-600",
    "coverType": "mobile",
    "gallery": [
      {
        "title": "Device Carousel",
        "subtitle": "iPhone 16 Pro photorealistic clay mockups"
      },
      {
        "title": "Interactive Flow Noodles",
        "subtitle": "Visualized decision tree user states"
      }
    ],
    "comments": [
      {
        "user": "Tariq Mansour",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 week ago",
        "text": "The clay mockups alone are worth downloading this file!"
      }
    ],
    "originalPrice": 2899,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Interactive",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Pulse UX \u2014 Mobile First HealthTech & App Portfolio",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-050",
    "image": "assets/t50.jpg",
    "title": "CyberPulse \u2014 Futuristic Web3 & Blockchain Showcase",
    "likes": 8740,
    "duplicates": 25250,
    "type": "files",
    "tags": [
      "Dark Mode",
      "Developer",
      "3D & Visual"
    ],
    "description": "Crafted around a high-octane neo-Tokyo cyberpunk visual language with acidic neon glows, chromatic aberration, and glitch accents, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for CyberPulse \u2014 Futuristic Web3 & Blockchain Showcase. Complete with custom modules for Live Terminal Hero, Featured Repositories, Architecture Diagrams, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 14,
    "componentsCount": 88,
    "fileSize": "26.8 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-cyan-500 via-blue-700 to-purple-900",
    "coverType": "cyberpunk",
    "gallery": [
      {
        "title": "Neon Cyber Deck",
        "subtitle": "HUD inspired dark interface elements"
      },
      {
        "title": "Protocol Metrics",
        "subtitle": "TVL, gas optimization, and smart contract flows"
      }
    ],
    "comments": [
      {
        "user": "Alex V.",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "Super crisp aesthetic for decentralized tech portfolios."
      }
    ],
    "originalPrice": 3199,
    "discount": 25,
    "category": "Developer",
    "style": "Cyberpunk",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for CyberPulse \u2014 Futuristic Web3 & Blockchain Showcase",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-051",
    "image": "assets/t51.jpg",
    "title": "Garamond \u2014 Editorial Magazine & Book Design Monograph",
    "likes": 10927,
    "duplicates": 36999,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Built with a high-fashion editorial typography grid reminiscent of contemporary print publications, this turnkey showcase provides Creative directors, agency partners, and executive brand visionaries the competitive edge required to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Garamond \u2014 Editorial Magazine & Book Design Monograph. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 16,
    "componentsCount": 92,
    "fileSize": "19.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-neutral-900 via-zinc-800 to-neutral-700",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Typographic Monograph",
        "subtitle": "Grid systems with dramatic scale ratios"
      },
      {
        "title": "Columnar Essay Layout",
        "subtitle": "Long-form design criticism structure"
      }
    ],
    "comments": [
      {
        "user": "Emma Watson-Lee",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "A masterclass in baseline grids and typography."
      }
    ],
    "originalPrice": 2299,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Garamond \u2014 Editorial Magazine & Book Design Monograph",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-052",
    "image": "assets/t52.jpg",
    "title": "Synapse \u2014 AI Product Designer & Neural UX Folio",
    "likes": 17444,
    "duplicates": 58248,
    "type": "files",
    "tags": [
      "Developer",
      "3D & Visual",
      "UX/UI"
    ],
    "description": "Featuring a neural-network inspired architecture featuring animated synaptic particle nodes and glowing bioluminescent hues, Synapse \u2014 AI Product Designer & Neural UX Folio delivers an unmissable digital presence tailored for Artificial intelligence engineers, model fine-tuners, and intelligent systems builders who demand to demonstrate enterprise AI deployments, inference pipelines, and production-grade agentic systems. Under the hood, an ultra-fast Python, PyTorch, FastAPI foundation powers responsive interactions, highlighting computational intelligence aesthetic highlighted by glowing neural synapses and prompt terminal overlays crafted specifically for Synapse \u2014 AI Product Designer & Neural UX Folio. Includes dedicated sections for Neural Canvas Hero, Agentic Workflow Demos, Model Latency Benchmarks, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 24,
    "componentsCount": 195,
    "fileSize": "44.9 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-indigo-600 via-pink-600 to-amber-400",
    "coverType": "ai",
    "gallery": [
      {
        "title": "Multimodal Agent Showcase",
        "subtitle": "Interactive reasoning traces and prompt chains"
      },
      {
        "title": "Benchmark Comparison",
        "subtitle": "Model latency and accuracy evaluation charts"
      }
    ],
    "comments": [
      {
        "user": "Rohan Gupta",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "18 hours ago",
        "text": "So timely and relevant! Everyone hiring in AI was impressed by this layout."
      }
    ],
    "originalPrice": 4499,
    "discount": 25,
    "category": "AI Engineer",
    "style": "AI-inspired",
    "targetAudience": "Artificial intelligence engineers, model fine-tuners, and intelligent systems builders",
    "visualConcept": "computational intelligence aesthetic highlighted by glowing neural synapses and prompt terminal overlays crafted specifically for Synapse \u2014 AI Product Designer & Neural UX Folio",
    "sections": [
      "Neural Canvas Hero",
      "Agentic Workflow Demos",
      "Model Latency Benchmarks",
      "Fine-Tuning Experiments",
      "Interactive Prompt Playground",
      "Book AI Consultation"
    ],
    "technology": [
      "Python",
      "PyTorch",
      "FastAPI",
      "Next.js",
      "LangChain",
      "Vector DB"
    ]
  },
  {
    "id": "ff-053",
    "image": "assets/t53.jpg",
    "title": "ComponentKit \u2014 Atomic Design System & Documentation",
    "likes": 12101,
    "duplicates": 40397,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Developer"
    ],
    "description": "Crafted around a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, this high-performance system empowers Product designers, interaction designers, and user experience researchers to effortlessly articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Built for speed and fluid responsiveness on Figma, Design Tokens, React, it captivates visitors with dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for ComponentKit \u2014 Atomic Design System & Documentation. Complete with custom modules for Bento UX Hero, In-Depth Case Studies, Design System Specimen, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 20,
    "componentsCount": 178,
    "fileSize": "36.2 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-700 via-indigo-800 to-slate-900",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Token Architecture",
        "subtitle": "Semantic color and spacing scales"
      },
      {
        "title": "Component Anatomy",
        "subtitle": "Interactive state and variant breakdown"
      }
    ],
    "comments": [
      {
        "user": "Liam Scott",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Essential for any designer showcasing scalable component libraries."
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for ComponentKit \u2014 Atomic Design System & Documentation",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-054",
    "image": "assets/t54.jpg",
    "title": "Flora \u2014 Organic Brand Identity & Packaging Showcase",
    "likes": 13818,
    "duplicates": 45546,
    "type": "files",
    "tags": [
      "Agency",
      "Editorial",
      "Creative Director"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Flora \u2014 Organic Brand Identity & Packaging Showcase. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 26,
    "componentsCount": 160,
    "fileSize": "48.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-200 via-rose-300 to-purple-400",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Brand Guidelines",
        "subtitle": "Grid systems, logo mark construction, clearspace"
      },
      {
        "title": "Collateral Grid",
        "subtitle": "Business cards, packaging, and sign mockups"
      }
    ],
    "comments": [
      {
        "user": "Zoe Kravitz",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Brought my client pitch win-rate to 100%. Beautifully organized."
      }
    ],
    "originalPrice": 3599,
    "discount": 20,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Flora \u2014 Organic Brand Identity & Packaging Showcase",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-055",
    "image": "assets/t55.jpg",
    "title": "TerminalPro \u2014 Monospace DevOps & Backend Portfolio",
    "likes": 10185,
    "duplicates": 34595,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Crafted around a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this high-performance system empowers Cloud infrastructure engineers, backend architects, and API specialists to effortlessly visualize complex serverless workflows, high-throughput pipelines, and robust data integrity solutions. Built for speed and fluid responsiveness on Node.js, Python, Rust, it captivates visitors with distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for TerminalPro \u2014 Monospace DevOps & Backend Portfolio. The production-ready layout comes loaded with Architecture Graph Hero, API Documentation Demos, Throughput Benchmarks, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 4,
    "componentsCount": 36,
    "fileSize": "6.8 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-slate-100 via-gray-200 to-zinc-300",
    "coverType": "resume",
    "gallery": [
      {
        "title": "Technical Resume View",
        "subtitle": "ATS-friendly monospace & sans-serif hierarchy"
      }
    ],
    "comments": [
      {
        "user": "Kenji Sato",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Crisp, concise, no fluff. Exactly what hiring managers want to see."
      }
    ],
    "originalPrice": 1999,
    "discount": 10,
    "category": "Backend Developer",
    "style": "Minimal",
    "targetAudience": "Cloud infrastructure engineers, backend architects, and API specialists",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for TerminalPro \u2014 Monospace DevOps & Backend Portfolio",
    "sections": [
      "Architecture Graph Hero",
      "API Documentation Demos",
      "Throughput Benchmarks",
      "Cloud Infrastructure Topology",
      "Security Protocols",
      "Technical Contact"
    ],
    "technology": [
      "Node.js",
      "Python",
      "Rust",
      "GraphQL",
      "Redis",
      "AWS"
    ]
  },
  {
    "id": "ff-056",
    "image": "assets/t56.jpg",
    "title": "RayTrace \u2014 Unreal Engine 5 & Blender 3D Reel",
    "likes": 15562,
    "duplicates": 50644,
    "type": "files",
    "tags": [
      "Dark Mode",
      "3D & Visual",
      "Interactive"
    ],
    "description": "Crafted around a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for RayTrace \u2014 Unreal Engine 5 & Blender 3D Reel. Includes dedicated sections for Live Terminal Hero, Featured Repositories, Architecture Diagrams, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 16,
    "componentsCount": 115,
    "fileSize": "39.4 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-zinc-900 via-neutral-900 to-black",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Obsidian Hero Canvas",
        "subtitle": "Deep dark aesthetic with high-fidelity lighting"
      },
      {
        "title": "Showreel Player",
        "subtitle": "Aspect ratio 21:9 ultra-wide video embed frame"
      }
    ],
    "comments": [
      {
        "user": "Elena Vance",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Looks like an Apple Pro website. Incredible polish."
      }
    ],
    "originalPrice": 3299,
    "discount": 20,
    "category": "Developer",
    "style": "3D",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for RayTrace \u2014 Unreal Engine 5 & Blender 3D Reel",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-057",
    "image": "assets/t57.jpg",
    "title": "Horizon \u2014 Executive Product Management & UX Folio",
    "likes": 13349,
    "duplicates": 44693,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Crafted around a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Horizon \u2014 Executive Product Management & UX Folio. Equipped with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 24,
    "componentsCount": 210,
    "fileSize": "54.1 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-violet-600 via-purple-700 to-indigo-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Strategic Leadership Overview",
        "subtitle": "Vision docs, OKR attainment, and team growth metrics"
      },
      {
        "title": "Deep Dive Case Studies",
        "subtitle": "End-to-end multi-quarter product evolutions"
      }
    ],
    "comments": [
      {
        "user": "Brian K.",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Land VP/Head of Design positions with this template. Superbly comprehensive."
      }
    ],
    "originalPrice": 4299,
    "discount": 25,
    "category": "Creative Director",
    "style": "Minimal",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Horizon \u2014 Executive Product Management & UX Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-058",
    "image": "assets/t58.jpg",
    "title": "Bauhaus \u2014 Constructivist Graphic Design Folio",
    "likes": 11706,
    "duplicates": 38442,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Under the hood, an ultra-fast Next.js, Tailwind CSS, Cinema 4D foundation powers responsive interactions, highlighting sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Bauhaus \u2014 Constructivist Graphic Design Folio. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 18,
    "componentsCount": 124,
    "fileSize": "22.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-red-600 via-orange-600 to-amber-500",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Grid Composition",
        "subtitle": "Mathematical column and module balance"
      },
      {
        "title": "Poster Exhibition View",
        "subtitle": "Large format print mockups"
      }
    ],
    "comments": [
      {
        "user": "Lara Croft",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The grid system alone is worth double the price."
      }
    ],
    "originalPrice": 3499,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Bauhaus \u2014 Constructivist Graphic Design Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-059",
    "image": "assets/t59.jpg",
    "title": "Matrix \u2014 CLI Interactive Terminal Portfolio",
    "likes": 12233,
    "duplicates": 42691,
    "type": "files",
    "tags": [
      "Developer",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Built with a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this turnkey showcase provides Software developers, open-source maintainers, and polyglot programmers the competitive edge required to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Built for speed and fluid responsiveness on React, TypeScript, Tailwind CSS, it captivates visitors with playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Matrix \u2014 CLI Interactive Terminal Portfolio. The production-ready layout comes loaded with Live Terminal Hero, Featured Repositories, Architecture Diagrams, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 10,
    "componentsCount": 82,
    "fileSize": "16.5 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-950 via-teal-900 to-slate-900",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell",
        "subtitle": "Interactive CLI project explorer"
      },
      {
        "title": "System Architecture",
        "subtitle": "Distributed systems diagrams and latency stats"
      }
    ],
    "comments": [
      {
        "user": "Sergey P.",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Every engineer who saw this was blown away by the terminal feel."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Matrix \u2014 CLI Interactive Terminal Portfolio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-060",
    "image": "assets/t60.jpg",
    "title": "CinemaFX \u2014 Motion Graphics & Commercial Showreel",
    "likes": 17120,
    "duplicates": 56140,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Creative Director",
      "Agency"
    ],
    "description": "Engineered with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this signature portfolio is custom-tailored for Creative directors, agency partners, and executive brand visionaries aiming to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for CinemaFX \u2014 Motion Graphics & Commercial Showreel. The production-ready layout comes loaded with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 22,
    "componentsCount": 150,
    "fileSize": "49.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-rose-600 to-orange-500",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Cinematic Showreel",
        "subtitle": "Frameless 4K showreel player with timeline scrubbers"
      },
      {
        "title": "Lighting & Shading Breakdown",
        "subtitle": "Clay vs Wireframe vs Final Render comparison"
      }
    ],
    "comments": [
      {
        "user": "Nathan Drake",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "6 hours ago",
        "text": "The clay vs render breakdown slider is pure magic. Outstanding work!"
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for CinemaFX \u2014 Motion Graphics & Commercial Showreel",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-061",
    "image": "assets/t61.jpg",
    "title": "BentoCraft \u2014 Modern Grid Case Study System",
    "likes": 18177,
    "duplicates": 64219,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Case Study"
    ],
    "description": "Engineered with a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, this signature portfolio is custom-tailored for Product designers, interaction designers, and user experience researchers aiming to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Under the hood, an ultra-fast Figma, Design Tokens, React foundation powers responsive interactions, highlighting dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for BentoCraft \u2014 Modern Grid Case Study System. Equipped with Bento UX Hero, In-Depth Case Studies, Design System Specimen, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 16,
    "componentsCount": 142,
    "fileSize": "28.4 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-600 via-indigo-600 to-purple-700",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Bento Overview",
        "subtitle": "Desktop 1440px viewport with dynamic modular cards"
      },
      {
        "title": "Case Study Breakdown",
        "subtitle": "Structured problem-solution framework with metrics"
      },
      {
        "title": "Mobile Responsive",
        "subtitle": "Fluid 390px layout optimized for mobile recruiters"
      },
      {
        "title": "Design System Tokens",
        "subtitle": "Pre-linked color variables and auto-layout typography"
      }
    ],
    "comments": [
      {
        "user": "Marcus Vance",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Helped me land my Senior Product Design role at Stripe! Incredible attention to typography and whitespace."
      },
      {
        "user": "Aisha Patel",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "The bento cards are so easy to remix. Beautiful use of auto-layout 5.0."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for BentoCraft \u2014 Modern Grid Case Study System",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-062",
    "image": "assets/t62.jpg",
    "title": "Hackfolio \u2014 Terminal Style Fullstack Developer Portfolio",
    "likes": 14734,
    "duplicates": 50838,
    "type": "files",
    "tags": [
      "Developer",
      "Minimalist",
      "Dark Mode"
    ],
    "description": "Featuring a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, Hackfolio \u2014 Terminal Style Fullstack Developer Portfolio delivers an unmissable digital presence tailored for Software developers, open-source maintainers, and polyglot programmers who demand to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Leveraging modern React, TypeScript, Tailwind CSS, the architecture elevates your brand through playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Hackfolio \u2014 Terminal Style Fullstack Developer Portfolio. Includes dedicated sections for Live Terminal Hero, Featured Repositories, Architecture Diagrams, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 8,
    "componentsCount": 68,
    "fileSize": "14.2 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-400 via-orange-500 to-red-600",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell View",
        "subtitle": "Monospaced interactive code showcase"
      },
      {
        "title": "Project Matrix",
        "subtitle": "Card layout with stack badges and live demo links"
      },
      {
        "title": "Experience Timeline",
        "subtitle": "Git-commit style career trajectory"
      }
    ],
    "comments": [
      {
        "user": "David Zhou",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Best tech portfolio template on FolioForge hands down. Monospace styling is immaculate."
      }
    ],
    "originalPrice": 2499,
    "discount": 20,
    "category": "Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for Hackfolio \u2014 Terminal Style Fullstack Developer Portfolio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-063",
    "image": "assets/t63.jpg",
    "title": "Maison \u2014 Luxury Brand & Art Direction Folio",
    "likes": 22581,
    "duplicates": 72397,
    "type": "files",
    "tags": [
      "Editorial",
      "Creative Director",
      "Agency"
    ],
    "description": "Engineered with a ultra-premium haute couture styling adorned with champagne-gold accents, rich blacks, and restrained elegance, this signature portfolio is custom-tailored for Creative directors, agency partners, and executive brand visionaries aiming to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with discreet bespoke craftsmanship with refined letter-spacing and opulent metallic undertones crafted specifically for Maison \u2014 Luxury Brand & Art Direction Folio. The production-ready layout comes loaded with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 22,
    "componentsCount": 180,
    "fileSize": "46.1 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-stone-800 via-neutral-900 to-black",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Editorial Cover & Index",
        "subtitle": "Editorial serif display with refined grid"
      },
      {
        "title": "Visual Narrative Spread",
        "subtitle": "Full-bleed imagery paired with thoughtful prose"
      },
      {
        "title": "Client Archival Index",
        "subtitle": "Chronological table of high-profile commissions"
      }
    ],
    "comments": [
      {
        "user": "Siddharth Rao",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Well worth the investment. Used this to build my fashion photography portfolio and got featured on Awwwards."
      }
    ],
    "originalPrice": 3999,
    "discount": 25,
    "category": "Creative Director",
    "style": "Luxury",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "discreet bespoke craftsmanship with refined letter-spacing and opulent metallic undertones crafted specifically for Maison \u2014 Luxury Brand & Art Direction Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-064",
    "image": "assets/t64.jpg",
    "title": "Dimension \u2014 3D Spatial Web & WebGL Portfolio",
    "likes": 13448,
    "duplicates": 42486,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, Dimension \u2014 3D Spatial Web & WebGL Portfolio delivers an unmissable digital presence tailored for GPU shader artists, WebGL/WebGPU specialists, and visual computing developers who demand to showcase high-framerate GPU shaders, physics-based simulations, and interactive computational graphics. Powered by WebGPU, WebGL 2.0, GLSL, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Dimension \u2014 3D Spatial Web & WebGL Portfolio. Includes dedicated sections for Real-Time Shader Viewport, Interactive Particle Physics, Mathematical Surface Generators, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 12,
    "componentsCount": 94,
    "fileSize": "38.7 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-purple-900 via-violet-800 to-cyan-700",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Luminous Spatial Hero",
        "subtitle": "Deep neon gradient with wireframe perspective"
      },
      {
        "title": "Interactive Reel Showcase",
        "subtitle": "Framed 60fps video player components"
      },
      {
        "title": "3D Asset Specs",
        "subtitle": "Polygon count, shaders, and lighting rig documentation"
      }
    ],
    "comments": [
      {
        "user": "Chloe Nguyen",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The glass blur styling in this file is next level."
      }
    ],
    "originalPrice": 3499,
    "discount": 20,
    "category": "WebGL Developer",
    "style": "3D",
    "targetAudience": "GPU shader artists, WebGL/WebGPU specialists, and visual computing developers",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Dimension \u2014 3D Spatial Web & WebGL Portfolio",
    "sections": [
      "Real-Time Shader Viewport",
      "Interactive Particle Physics",
      "Mathematical Surface Generators",
      "Frame-Timing Telemetry",
      "Commercial Work",
      "Hire WebGL Specialist"
    ],
    "technology": [
      "WebGPU",
      "WebGL 2.0",
      "GLSL",
      "Three.js",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-065",
    "image": "assets/t65.jpg",
    "title": "Sleek \u2014 Scandinavian Minimalist Designer Portfolio",
    "likes": 20325,
    "duplicates": 68785,
    "type": "files",
    "tags": [
      "Minimalist",
      "UX/UI",
      "Case Study"
    ],
    "description": "Engineered with a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this signature portfolio is custom-tailored for Product designers, interaction designers, and user experience researchers aiming to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Powered by Figma, Design Tokens, React, the interface provides a seamless interactive experience featuring distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Sleek \u2014 Scandinavian Minimalist Designer Portfolio. Complete with custom modules for Bento UX Hero, In-Depth Case Studies, Design System Specimen, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 14,
    "componentsCount": 110,
    "fileSize": "18.3 MB",
    "updatedAt": "5 days ago",
    "license": "Standard Commercial",
    "gradient": "from-zinc-100 via-stone-200 to-neutral-300",
    "coverType": "minimalist",
    "gallery": [
      {
        "title": "Clean Index Grid",
        "subtitle": "2-column uncluttered project listing"
      },
      {
        "title": "Typography Specimen",
        "subtitle": "Carefully proportioned optical scale"
      },
      {
        "title": "Client Testimonial Row",
        "subtitle": "Subtle quotes with authentic layout balance"
      }
    ],
    "comments": [
      {
        "user": "Freja Lind",
        "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=80",
        "time": "6 days ago",
        "text": "Pure perfection. Simple, elegant, and frictionless to duplicate."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Minimal",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Sleek \u2014 Scandinavian Minimalist Designer Portfolio",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-066",
    "image": "assets/t66.jpg",
    "title": "Scale \u2014 B2B Enterprise SaaS Experience System",
    "likes": 17792,
    "duplicates": 60834,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Featuring a authoritative modern enterprise aesthetic balancing institutional trustworthiness with sleek contemporary minimalism, Scale \u2014 B2B Enterprise SaaS Experience System delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with boardroom-ready polish characterized by deep navy blues, crisp data visualizations, and clear credibility metrics crafted specifically for Scale \u2014 B2B Enterprise SaaS Experience System. Equipped with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 28,
    "componentsCount": 240,
    "fileSize": "52.3 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-600 via-teal-700 to-cyan-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Executive Overview",
        "subtitle": "KPI metric indicators and business outcome charts"
      },
      {
        "title": "Figma Component Architecture",
        "subtitle": "Nested design system variants showcase"
      },
      {
        "title": "User Journey Maps",
        "subtitle": "Friction point maps and persona breakdowns"
      }
    ],
    "comments": [
      {
        "user": "Jonathan Bell",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "This is the most comprehensive system on the entire community. Worth every penny."
      }
    ],
    "originalPrice": 4999,
    "discount": 30,
    "category": "Creative Director",
    "style": "Modern Corporate",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "boardroom-ready polish characterized by deep navy blues, crisp data visualizations, and clear credibility metrics crafted specifically for Scale \u2014 B2B Enterprise SaaS Experience System",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-067",
    "image": "assets/t67.jpg",
    "title": "Curriculum \u2014 Modern Timeline Resume & Interactive CV",
    "likes": 12499,
    "duplicates": 41183,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Crafted around a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Curriculum \u2014 Modern Timeline Resume & Interactive CV. Equipped with Live Terminal Hero, Featured Repositories, Architecture Diagrams, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 6,
    "componentsCount": 42,
    "fileSize": "8.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-500 via-teal-500 to-green-500",
    "coverType": "resume",
    "gallery": [
      {
        "title": "A4 / US Letter Resume",
        "subtitle": "ATS optimized dual column layout"
      },
      {
        "title": "Web Interactive CV",
        "subtitle": "Clickable skills and expandable work history"
      }
    ],
    "comments": [
      {
        "user": "Nathalie Dupont",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Cleanest resume template I have used. Exported directly to PDF and got interviews right away."
      }
    ],
    "originalPrice": 1999,
    "discount": 15,
    "category": "Developer",
    "style": "Interactive",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for Curriculum \u2014 Modern Timeline Resume & Interactive CV",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-068",
    "image": "assets/t68.jpg",
    "title": "Echo \u2014 Digital Agency & Creative Production Folio",
    "likes": 11806,
    "duplicates": 36032,
    "type": "files",
    "tags": [
      "Agency",
      "Creative Director",
      "3D & Visual"
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, Echo \u2014 Digital Agency & Creative Production Folio delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Echo \u2014 Digital Agency & Creative Production Folio. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 18,
    "componentsCount": 128,
    "fileSize": "34.6 MB",
    "updatedAt": "2 weeks ago",
    "license": "Standard Commercial",
    "gradient": "from-fuchsia-600 via-pink-600 to-rose-600",
    "coverType": "agency",
    "gallery": [
      {
        "title": "Agency Showcase Reel",
        "subtitle": "Wide-format project cards with hover states"
      },
      {
        "title": "Services & Retainer Matrix",
        "subtitle": "Clear client deliverables table"
      }
    ],
    "comments": [
      {
        "user": "Leo Gomez",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Saved our boutique agency at least 40 hours of layout design."
      }
    ],
    "originalPrice": 3799,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Echo \u2014 Digital Agency & Creative Production Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-069",
    "image": "assets/t69.jpg",
    "title": "AppCraft \u2014 iOS & Android Mobile UX Case Studies",
    "likes": 16553,
    "duplicates": 44381,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Interactive"
    ],
    "description": "Built with a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, this turnkey showcase provides Product designers, interaction designers, and user experience researchers the competitive edge required to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Powered by Figma, Design Tokens, React, the interface provides a seamless interactive experience featuring fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for AppCraft \u2014 iOS & Android Mobile UX Case Studies. Complete with custom modules for Bento UX Hero, In-Depth Case Studies, Design System Specimen, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 20,
    "componentsCount": 165,
    "fileSize": "41.2 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-sky-400 via-blue-500 to-indigo-600",
    "coverType": "mobile",
    "gallery": [
      {
        "title": "Device Carousel",
        "subtitle": "iPhone 16 Pro photorealistic clay mockups"
      },
      {
        "title": "Interactive Flow Noodles",
        "subtitle": "Visualized decision tree user states"
      }
    ],
    "comments": [
      {
        "user": "Tariq Mansour",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 week ago",
        "text": "The clay mockups alone are worth downloading this file!"
      }
    ],
    "originalPrice": 2899,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Interactive",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for AppCraft \u2014 iOS & Android Mobile UX Case Studies",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-070",
    "image": "assets/t70.jpg",
    "title": "Vortex \u2014 Decentralized Web3 Protocol Portfolio",
    "likes": 11480,
    "duplicates": 20230,
    "type": "files",
    "tags": [
      "Dark Mode",
      "Developer",
      "3D & Visual"
    ],
    "description": "Featuring a high-octane neo-Tokyo cyberpunk visual language with acidic neon glows, chromatic aberration, and glitch accents, Vortex \u2014 Decentralized Web3 Protocol Portfolio delivers an unmissable digital presence tailored for Creative technologists, shaders developers, and experimental web artisans who demand to push the boundaries of web interaction with generative graphics, custom GLSL shaders, and audio-visual experiments. Under the hood, an ultra-fast Three.js, WebGL, GLSL foundation powers responsive interactions, highlighting dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for Vortex \u2014 Decentralized Web3 Protocol Portfolio. The production-ready layout comes loaded with Interactive 3D Stage, GLSL Shader Sandbox, Generative Art Gallery, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 14,
    "componentsCount": 88,
    "fileSize": "26.8 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-cyan-500 via-blue-700 to-purple-900",
    "coverType": "cyberpunk",
    "gallery": [
      {
        "title": "Neon Cyber Deck",
        "subtitle": "HUD inspired dark interface elements"
      },
      {
        "title": "Protocol Metrics",
        "subtitle": "TVL, gas optimization, and smart contract flows"
      }
    ],
    "comments": [
      {
        "user": "Alex V.",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "Super crisp aesthetic for decentralized tech portfolios."
      }
    ],
    "originalPrice": 3199,
    "discount": 25,
    "category": "Creative Developer",
    "style": "Cyberpunk",
    "targetAudience": "Creative technologists, shaders developers, and experimental web artisans",
    "visualConcept": "dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for Vortex \u2014 Decentralized Web3 Protocol Portfolio",
    "sections": [
      "Interactive 3D Stage",
      "GLSL Shader Sandbox",
      "Generative Art Gallery",
      "Commercial Experiences",
      "Technical Awards",
      "Start Collab"
    ],
    "technology": [
      "Three.js",
      "WebGL",
      "GLSL",
      "GSAP",
      "Next.js"
    ]
  },
  {
    "id": "ff-071",
    "image": "assets/t71.jpg",
    "title": "GridType \u2014 Swiss International Typographic Style",
    "likes": 13667,
    "duplicates": 31979,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for GridType \u2014 Swiss International Typographic Style. Equipped with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 16,
    "componentsCount": 92,
    "fileSize": "19.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-neutral-900 via-zinc-800 to-neutral-700",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Typographic Monograph",
        "subtitle": "Grid systems with dramatic scale ratios"
      },
      {
        "title": "Columnar Essay Layout",
        "subtitle": "Long-form design criticism structure"
      }
    ],
    "comments": [
      {
        "user": "Emma Watson-Lee",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "A masterclass in baseline grids and typography."
      }
    ],
    "originalPrice": 2299,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for GridType \u2014 Swiss International Typographic Style",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-072",
    "image": "assets/t72.jpg",
    "title": "Cognitive \u2014 Generative AI Interfaces & Interaction Kit",
    "likes": 20184,
    "duplicates": 53228,
    "type": "files",
    "tags": [
      "Developer",
      "3D & Visual",
      "UX/UI"
    ],
    "description": "Built with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this turnkey showcase provides GenAI engineers, prompt engineers, and synthetic media creators the competitive edge required to unveil cutting-edge multimodal generative workflows, diffusion models, and real-time LLM orchestrations. Leveraging modern Next.js, Stable Diffusion, OpenAI API, the architecture elevates your brand through real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Cognitive \u2014 Generative AI Interfaces & Interaction Kit. The production-ready layout comes loaded with Multimodal Generative Canvas, Real-Time AI Playground, Prompt Architecture Showcase, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 24,
    "componentsCount": 195,
    "fileSize": "44.9 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-indigo-600 via-pink-600 to-amber-400",
    "coverType": "ai",
    "gallery": [
      {
        "title": "Multimodal Agent Showcase",
        "subtitle": "Interactive reasoning traces and prompt chains"
      },
      {
        "title": "Benchmark Comparison",
        "subtitle": "Model latency and accuracy evaluation charts"
      }
    ],
    "comments": [
      {
        "user": "Rohan Gupta",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "18 hours ago",
        "text": "So timely and relevant! Everyone hiring in AI was impressed by this layout."
      }
    ],
    "originalPrice": 4499,
    "discount": 25,
    "category": "Generative AI",
    "style": "3D",
    "targetAudience": "GenAI engineers, prompt engineers, and synthetic media creators",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Cognitive \u2014 Generative AI Interfaces & Interaction Kit",
    "sections": [
      "Multimodal Generative Canvas",
      "Real-Time AI Playground",
      "Prompt Architecture Showcase",
      "Diffusion Gallery",
      "Production Use Cases",
      "Start Project"
    ],
    "technology": [
      "Next.js",
      "Stable Diffusion",
      "OpenAI API",
      "Three.js",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-073",
    "image": "assets/t73.jpg",
    "title": "Systema \u2014 Enterprise Design System & Guidelines",
    "likes": 9841,
    "duplicates": 35377,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Developer"
    ],
    "description": "Featuring a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, Systema \u2014 Enterprise Design System & Guidelines delivers an unmissable digital presence tailored for Product designers, interaction designers, and user experience researchers who demand to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Leveraging modern Figma, Design Tokens, React, the architecture elevates your brand through dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Systema \u2014 Enterprise Design System & Guidelines. Complete with custom modules for Bento UX Hero, In-Depth Case Studies, Design System Specimen, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 20,
    "componentsCount": 178,
    "fileSize": "36.2 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-700 via-indigo-800 to-slate-900",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Token Architecture",
        "subtitle": "Semantic color and spacing scales"
      },
      {
        "title": "Component Anatomy",
        "subtitle": "Interactive state and variant breakdown"
      }
    ],
    "comments": [
      {
        "user": "Liam Scott",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Essential for any designer showcasing scalable component libraries."
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Systema \u2014 Enterprise Design System & Guidelines",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-074",
    "image": "assets/t74.jpg",
    "title": "Botanical \u2014 Eco Brand & Sustainable Visual Identity",
    "likes": 11558,
    "duplicates": 40526,
    "type": "files",
    "tags": [
      "Agency",
      "Editorial",
      "Creative Director"
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Under the hood, an ultra-fast Next.js, Tailwind CSS, Cinema 4D foundation powers responsive interactions, highlighting sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Botanical \u2014 Eco Brand & Sustainable Visual Identity. Equipped with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 26,
    "componentsCount": 160,
    "fileSize": "48.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-200 via-rose-300 to-purple-400",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Brand Guidelines",
        "subtitle": "Grid systems, logo mark construction, clearspace"
      },
      {
        "title": "Collateral Grid",
        "subtitle": "Business cards, packaging, and sign mockups"
      }
    ],
    "comments": [
      {
        "user": "Zoe Kravitz",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Brought my client pitch win-rate to 100%. Beautifully organized."
      }
    ],
    "originalPrice": 3599,
    "discount": 20,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Botanical \u2014 Eco Brand & Sustainable Visual Identity",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-075",
    "image": "assets/t75.jpg",
    "title": "Codebase \u2014 Tech Lead & Staff Engineer Visual CV",
    "likes": 7925,
    "duplicates": 29575,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Built with a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this turnkey showcase provides Software developers, open-source maintainers, and polyglot programmers the competitive edge required to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Codebase \u2014 Tech Lead & Staff Engineer Visual CV. Equipped with Live Terminal Hero, Featured Repositories, Architecture Diagrams, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 4,
    "componentsCount": 36,
    "fileSize": "6.8 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-slate-100 via-gray-200 to-zinc-300",
    "coverType": "resume",
    "gallery": [
      {
        "title": "Technical Resume View",
        "subtitle": "ATS-friendly monospace & sans-serif hierarchy"
      }
    ],
    "comments": [
      {
        "user": "Kenji Sato",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Crisp, concise, no fluff. Exactly what hiring managers want to see."
      }
    ],
    "originalPrice": 1999,
    "discount": 10,
    "category": "Developer",
    "style": "Minimal",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Codebase \u2014 Tech Lead & Staff Engineer Visual CV",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-076",
    "image": "assets/t76.jpg",
    "title": "Shader \u2014 GLSL & Realtime 3D Graphics Showreel",
    "likes": 13302,
    "duplicates": 45624,
    "type": "files",
    "tags": [
      "Dark Mode",
      "3D & Visual",
      "Interactive"
    ],
    "description": "Crafted around a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this high-performance system empowers GPU shader artists, WebGL/WebGPU specialists, and visual computing developers to effortlessly showcase high-framerate GPU shaders, physics-based simulations, and interactive computational graphics. Powered by WebGPU, WebGL 2.0, GLSL, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Shader \u2014 GLSL & Realtime 3D Graphics Showreel. Equipped with Real-Time Shader Viewport, Interactive Particle Physics, Mathematical Surface Generators, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 16,
    "componentsCount": 115,
    "fileSize": "39.4 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-zinc-900 via-neutral-900 to-black",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Obsidian Hero Canvas",
        "subtitle": "Deep dark aesthetic with high-fidelity lighting"
      },
      {
        "title": "Showreel Player",
        "subtitle": "Aspect ratio 21:9 ultra-wide video embed frame"
      }
    ],
    "comments": [
      {
        "user": "Elena Vance",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Looks like an Apple Pro website. Incredible polish."
      }
    ],
    "originalPrice": 3299,
    "discount": 20,
    "category": "WebGL Developer",
    "style": "3D",
    "targetAudience": "GPU shader artists, WebGL/WebGPU specialists, and visual computing developers",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Shader \u2014 GLSL & Realtime 3D Graphics Showreel",
    "sections": [
      "Real-Time Shader Viewport",
      "Interactive Particle Physics",
      "Mathematical Surface Generators",
      "Frame-Timing Telemetry",
      "Commercial Work",
      "Hire WebGL Specialist"
    ],
    "technology": [
      "WebGPU",
      "WebGL 2.0",
      "GLSL",
      "Three.js",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-077",
    "image": "assets/t77.jpg",
    "title": "Catalyst \u2014 Strategic Design Leadership & Systems",
    "likes": 11089,
    "duplicates": 39673,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Featuring a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, Catalyst \u2014 Strategic Design Leadership & Systems delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Catalyst \u2014 Strategic Design Leadership & Systems. The production-ready layout comes loaded with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 24,
    "componentsCount": 210,
    "fileSize": "54.1 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-violet-600 via-purple-700 to-indigo-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Strategic Leadership Overview",
        "subtitle": "Vision docs, OKR attainment, and team growth metrics"
      },
      {
        "title": "Deep Dive Case Studies",
        "subtitle": "End-to-end multi-quarter product evolutions"
      }
    ],
    "comments": [
      {
        "user": "Brian K.",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Land VP/Head of Design positions with this template. Superbly comprehensive."
      }
    ],
    "originalPrice": 4299,
    "discount": 25,
    "category": "Creative Director",
    "style": "Minimal",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Catalyst \u2014 Strategic Design Leadership & Systems",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-078",
    "image": "assets/t78.jpg",
    "title": "Zurich \u2014 Swiss Modernist Grid & Typography Folio",
    "likes": 9446,
    "duplicates": 33422,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Featuring a high-fashion editorial typography grid reminiscent of contemporary print publications, Zurich \u2014 Swiss Modernist Grid & Typography Folio delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Zurich \u2014 Swiss Modernist Grid & Typography Folio. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 18,
    "componentsCount": 124,
    "fileSize": "22.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-red-600 via-orange-600 to-amber-500",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Grid Composition",
        "subtitle": "Mathematical column and module balance"
      },
      {
        "title": "Poster Exhibition View",
        "subtitle": "Large format print mockups"
      }
    ],
    "comments": [
      {
        "user": "Lara Croft",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The grid system alone is worth double the price."
      }
    ],
    "originalPrice": 3499,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Zurich \u2014 Swiss Modernist Grid & Typography Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-079",
    "image": "assets/t79.jpg",
    "title": "ShellFolio \u2014 Unix Terminal Engineer Portfolio",
    "likes": 9973,
    "duplicates": 37671,
    "type": "files",
    "tags": [
      "Developer",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Crafted around a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for ShellFolio \u2014 Unix Terminal Engineer Portfolio. The production-ready layout comes loaded with Live Terminal Hero, Featured Repositories, Architecture Diagrams, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 10,
    "componentsCount": 82,
    "fileSize": "16.5 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-950 via-teal-900 to-slate-900",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell",
        "subtitle": "Interactive CLI project explorer"
      },
      {
        "title": "System Architecture",
        "subtitle": "Distributed systems diagrams and latency stats"
      }
    ],
    "comments": [
      {
        "user": "Sergey P.",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Every engineer who saw this was blown away by the terminal feel."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for ShellFolio \u2014 Unix Terminal Engineer Portfolio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-080",
    "image": "assets/t80.jpg",
    "title": "RenderLab \u2014 3D Octane & Cinema 4D Motion System",
    "likes": 14860,
    "duplicates": 51120,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Creative Director",
      "Agency"
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, RenderLab \u2014 3D Octane & Cinema 4D Motion System delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for RenderLab \u2014 3D Octane & Cinema 4D Motion System. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 22,
    "componentsCount": 150,
    "fileSize": "49.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-rose-600 to-orange-500",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Cinematic Showreel",
        "subtitle": "Frameless 4K showreel player with timeline scrubbers"
      },
      {
        "title": "Lighting & Shading Breakdown",
        "subtitle": "Clay vs Wireframe vs Final Render comparison"
      }
    ],
    "comments": [
      {
        "user": "Nathan Drake",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "6 hours ago",
        "text": "The clay vs render breakdown slider is pure magic. Outstanding work!"
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for RenderLab \u2014 3D Octane & Cinema 4D Motion System",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-081",
    "image": "assets/t81.jpg",
    "title": "Aspect \u2014 Modular Bento Grid Product Folio",
    "likes": 15917,
    "duplicates": 59199,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Case Study"
    ],
    "description": "Engineered with a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, this signature portfolio is custom-tailored for Product designers, interaction designers, and user experience researchers aiming to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Under the hood, an ultra-fast Figma, Design Tokens, React foundation powers responsive interactions, highlighting dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Aspect \u2014 Modular Bento Grid Product Folio. The production-ready layout comes loaded with Bento UX Hero, In-Depth Case Studies, Design System Specimen, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 16,
    "componentsCount": 142,
    "fileSize": "28.4 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-600 via-indigo-600 to-purple-700",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Bento Overview",
        "subtitle": "Desktop 1440px viewport with dynamic modular cards"
      },
      {
        "title": "Case Study Breakdown",
        "subtitle": "Structured problem-solution framework with metrics"
      },
      {
        "title": "Mobile Responsive",
        "subtitle": "Fluid 390px layout optimized for mobile recruiters"
      },
      {
        "title": "Design System Tokens",
        "subtitle": "Pre-linked color variables and auto-layout typography"
      }
    ],
    "comments": [
      {
        "user": "Marcus Vance",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Helped me land my Senior Product Design role at Stripe! Incredible attention to typography and whitespace."
      },
      {
        "user": "Aisha Patel",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "The bento cards are so easy to remix. Beautiful use of auto-layout 5.0."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for Aspect \u2014 Modular Bento Grid Product Folio",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-082",
    "image": "assets/t82.jpg",
    "title": "StackDev \u2014 High Performance Fullstack Engineer Folio",
    "likes": 12474,
    "duplicates": 45818,
    "type": "files",
    "tags": [
      "Developer",
      "Minimalist",
      "Dark Mode"
    ],
    "description": "Built with a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this turnkey showcase provides Software developers, open-source maintainers, and polyglot programmers the competitive edge required to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for StackDev \u2014 High Performance Fullstack Engineer Folio. The production-ready layout comes loaded with Live Terminal Hero, Featured Repositories, Architecture Diagrams, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 8,
    "componentsCount": 68,
    "fileSize": "14.2 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-400 via-orange-500 to-red-600",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell View",
        "subtitle": "Monospaced interactive code showcase"
      },
      {
        "title": "Project Matrix",
        "subtitle": "Card layout with stack badges and live demo links"
      },
      {
        "title": "Experience Timeline",
        "subtitle": "Git-commit style career trajectory"
      }
    ],
    "comments": [
      {
        "user": "David Zhou",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Best tech portfolio template on FolioForge hands down. Monospace styling is immaculate."
      }
    ],
    "originalPrice": 2499,
    "discount": 20,
    "category": "Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for StackDev \u2014 High Performance Fullstack Engineer Folio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-083",
    "image": "assets/t83.jpg",
    "title": "Atelier Noir \u2014 Monochrome Art Direction & Design",
    "likes": 20321,
    "duplicates": 67377,
    "type": "files",
    "tags": [
      "Editorial",
      "Creative Director",
      "Agency"
    ],
    "description": "Engineered with a high-fashion editorial typography grid reminiscent of contemporary print publications, this signature portfolio is custom-tailored for Creative directors, agency partners, and executive brand visionaries aiming to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Atelier Noir \u2014 Monochrome Art Direction & Design. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 22,
    "componentsCount": 180,
    "fileSize": "46.1 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-stone-800 via-neutral-900 to-black",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Editorial Cover & Index",
        "subtitle": "Editorial serif display with refined grid"
      },
      {
        "title": "Visual Narrative Spread",
        "subtitle": "Full-bleed imagery paired with thoughtful prose"
      },
      {
        "title": "Client Archival Index",
        "subtitle": "Chronological table of high-profile commissions"
      }
    ],
    "comments": [
      {
        "user": "Siddharth Rao",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Well worth the investment. Used this to build my fashion photography portfolio and got featured on Awwwards."
      }
    ],
    "originalPrice": 3999,
    "discount": 25,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Atelier Noir \u2014 Monochrome Art Direction & Design",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-084",
    "image": "assets/t84.jpg",
    "title": "Holo \u2014 Spatial Computing & VisionOS Experience Kit",
    "likes": 11188,
    "duplicates": 37466,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Built with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this turnkey showcase provides Three.js engineers, WebXR creators, and spatial web architects the competitive edge required to deliver browser-based 3D simulations, photorealistic GLTF model inspections, and spatial computing demos. Built for speed and fluid responsiveness on Three.js, React Three Fiber, WebXR, it captivates visitors with real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Holo \u2014 Spatial Computing & VisionOS Experience Kit. Equipped with Interactive 3D Stage Hero, Real-Time Model Viewer, Spatial Lighting Controls, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 12,
    "componentsCount": 94,
    "fileSize": "38.7 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-purple-900 via-violet-800 to-cyan-700",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Luminous Spatial Hero",
        "subtitle": "Deep neon gradient with wireframe perspective"
      },
      {
        "title": "Interactive Reel Showcase",
        "subtitle": "Framed 60fps video player components"
      },
      {
        "title": "3D Asset Specs",
        "subtitle": "Polygon count, shaders, and lighting rig documentation"
      }
    ],
    "comments": [
      {
        "user": "Chloe Nguyen",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The glass blur styling in this file is next level."
      }
    ],
    "originalPrice": 3499,
    "discount": 20,
    "category": "3D Developer",
    "style": "3D",
    "targetAudience": "Three.js engineers, WebXR creators, and spatial web architects",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Holo \u2014 Spatial Computing & VisionOS Experience Kit",
    "sections": [
      "Interactive 3D Stage Hero",
      "Real-Time Model Viewer",
      "Spatial Lighting Controls",
      "Shader Performance Benchmarks",
      "Client 3D Installations",
      "Start 3D Project"
    ],
    "technology": [
      "Three.js",
      "React Three Fiber",
      "WebXR",
      "GLTF",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-085",
    "image": "assets/t85.jpg",
    "title": "Simplicity \u2014 Ultra Minimalist Clean Portfolio",
    "likes": 18065,
    "duplicates": 63765,
    "type": "files",
    "tags": [
      "Minimalist",
      "UX/UI",
      "Case Study"
    ],
    "description": "Crafted around a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this high-performance system empowers Product designers, interaction designers, and user experience researchers to effortlessly articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Leveraging modern Figma, Design Tokens, React, the architecture elevates your brand through distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Simplicity \u2014 Ultra Minimalist Clean Portfolio. The production-ready layout comes loaded with Bento UX Hero, In-Depth Case Studies, Design System Specimen, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 14,
    "componentsCount": 110,
    "fileSize": "18.3 MB",
    "updatedAt": "5 days ago",
    "license": "Standard Commercial",
    "gradient": "from-zinc-100 via-stone-200 to-neutral-300",
    "coverType": "minimalist",
    "gallery": [
      {
        "title": "Clean Index Grid",
        "subtitle": "2-column uncluttered project listing"
      },
      {
        "title": "Typography Specimen",
        "subtitle": "Carefully proportioned optical scale"
      },
      {
        "title": "Client Testimonial Row",
        "subtitle": "Subtle quotes with authentic layout balance"
      }
    ],
    "comments": [
      {
        "user": "Freja Lind",
        "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=80",
        "time": "6 days ago",
        "text": "Pure perfection. Simple, elegant, and frictionless to duplicate."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Minimal",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for Simplicity \u2014 Ultra Minimalist Clean Portfolio",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-086",
    "image": "assets/t86.jpg",
    "title": "CloudSaaS \u2014 Enterprise Cloud Dashboard & UX Folio",
    "likes": 15532,
    "duplicates": 55814,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Featuring a authoritative modern enterprise aesthetic balancing institutional trustworthiness with sleek contemporary minimalism, CloudSaaS \u2014 Enterprise Cloud Dashboard & UX Folio delivers an unmissable digital presence tailored for Cloud infrastructure engineers, backend architects, and API specialists who demand to visualize complex serverless workflows, high-throughput pipelines, and robust data integrity solutions. Leveraging modern Node.js, Python, Rust, the architecture elevates your brand through boardroom-ready polish characterized by deep navy blues, crisp data visualizations, and clear credibility metrics crafted specifically for CloudSaaS \u2014 Enterprise Cloud Dashboard & UX Folio. The production-ready layout comes loaded with Architecture Graph Hero, API Documentation Demos, Throughput Benchmarks, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 28,
    "componentsCount": 240,
    "fileSize": "52.3 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-600 via-teal-700 to-cyan-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Executive Overview",
        "subtitle": "KPI metric indicators and business outcome charts"
      },
      {
        "title": "Figma Component Architecture",
        "subtitle": "Nested design system variants showcase"
      },
      {
        "title": "User Journey Maps",
        "subtitle": "Friction point maps and persona breakdowns"
      }
    ],
    "comments": [
      {
        "user": "Jonathan Bell",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "This is the most comprehensive system on the entire community. Worth every penny."
      }
    ],
    "originalPrice": 4999,
    "discount": 30,
    "category": "Backend Developer",
    "style": "Modern Corporate",
    "targetAudience": "Cloud infrastructure engineers, backend architects, and API specialists",
    "visualConcept": "boardroom-ready polish characterized by deep navy blues, crisp data visualizations, and clear credibility metrics crafted specifically for CloudSaaS \u2014 Enterprise Cloud Dashboard & UX Folio",
    "sections": [
      "Architecture Graph Hero",
      "API Documentation Demos",
      "Throughput Benchmarks",
      "Cloud Infrastructure Topology",
      "Security Protocols",
      "Technical Contact"
    ],
    "technology": [
      "Node.js",
      "Python",
      "Rust",
      "GraphQL",
      "Redis",
      "AWS"
    ]
  },
  {
    "id": "ff-087",
    "image": "assets/t87.jpg",
    "title": "OnePage \u2014 Executive Technical Resume & Bio",
    "likes": 10239,
    "duplicates": 36163,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Featuring a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, OnePage \u2014 Executive Technical Resume & Bio delivers an unmissable digital presence tailored for Software developers, open-source maintainers, and polyglot programmers who demand to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Built for speed and fluid responsiveness on React, TypeScript, Tailwind CSS, it captivates visitors with distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for OnePage \u2014 Executive Technical Resume & Bio. Equipped with Live Terminal Hero, Featured Repositories, Architecture Diagrams, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 6,
    "componentsCount": 42,
    "fileSize": "8.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-500 via-teal-500 to-green-500",
    "coverType": "resume",
    "gallery": [
      {
        "title": "A4 / US Letter Resume",
        "subtitle": "ATS optimized dual column layout"
      },
      {
        "title": "Web Interactive CV",
        "subtitle": "Clickable skills and expandable work history"
      }
    ],
    "comments": [
      {
        "user": "Nathalie Dupont",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Cleanest resume template I have used. Exported directly to PDF and got interviews right away."
      }
    ],
    "originalPrice": 1999,
    "discount": 15,
    "category": "Developer",
    "style": "Minimal",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for OnePage \u2014 Executive Technical Resume & Bio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-088",
    "image": "assets/t88.jpg",
    "title": "Omni \u2014 Full-Service Digital Innovation Agency Folio",
    "likes": 9546,
    "duplicates": 31012,
    "type": "files",
    "tags": [
      "Agency",
      "Creative Director",
      "3D & Visual"
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, Omni \u2014 Full-Service Digital Innovation Agency Folio delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Omni \u2014 Full-Service Digital Innovation Agency Folio. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 18,
    "componentsCount": 128,
    "fileSize": "34.6 MB",
    "updatedAt": "2 weeks ago",
    "license": "Standard Commercial",
    "gradient": "from-fuchsia-600 via-pink-600 to-rose-600",
    "coverType": "agency",
    "gallery": [
      {
        "title": "Agency Showcase Reel",
        "subtitle": "Wide-format project cards with hover states"
      },
      {
        "title": "Services & Retainer Matrix",
        "subtitle": "Clear client deliverables table"
      }
    ],
    "comments": [
      {
        "user": "Leo Gomez",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Saved our boutique agency at least 40 hours of layout design."
      }
    ],
    "originalPrice": 3799,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Omni \u2014 Full-Service Digital Innovation Agency Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-089",
    "image": "assets/t89.jpg",
    "title": "TouchUX \u2014 Micro-Interactions & Mobile Design Kit",
    "likes": 14293,
    "duplicates": 51361,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Interactive"
    ],
    "description": "Built with a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, this turnkey showcase provides Frontend architects, UI engineers, and design-system practitioners the competitive edge required to highlight micro-interactions, responsive fluid typography, and accessible high-performance interfaces. Powered by React, Vue.js, Tailwind CSS, the interface provides a seamless interactive experience featuring fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for TouchUX \u2014 Micro-Interactions & Mobile Design Kit. Equipped with Interactive Micro-Interactions Hero, Component Gallery, Lighthouse 100/100 Audits, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 20,
    "componentsCount": 165,
    "fileSize": "41.2 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-sky-400 via-blue-500 to-indigo-600",
    "coverType": "mobile",
    "gallery": [
      {
        "title": "Device Carousel",
        "subtitle": "iPhone 16 Pro photorealistic clay mockups"
      },
      {
        "title": "Interactive Flow Noodles",
        "subtitle": "Visualized decision tree user states"
      }
    ],
    "comments": [
      {
        "user": "Tariq Mansour",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 week ago",
        "text": "The clay mockups alone are worth downloading this file!"
      }
    ],
    "originalPrice": 2899,
    "discount": 20,
    "category": "Frontend Developer",
    "style": "Interactive",
    "targetAudience": "Frontend architects, UI engineers, and design-system practitioners",
    "visualConcept": "fluid tactile interactions that respond instantaneously to hover, drag, and scrolling gestures crafted specifically for TouchUX \u2014 Micro-Interactions & Mobile Design Kit",
    "sections": [
      "Interactive Micro-Interactions Hero",
      "Component Gallery",
      "Lighthouse 100/100 Audits",
      "State Management Deep Dives",
      "Live Code Previews",
      "Collaborate CTA"
    ],
    "technology": [
      "React",
      "Vue.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-090",
    "image": "assets/t90.jpg",
    "title": "Metaverse \u2014 3D Interactive Web3 Showcase",
    "likes": 9220,
    "duplicates": 27210,
    "type": "files",
    "tags": [
      "Dark Mode",
      "Developer",
      "3D & Visual"
    ],
    "description": "Engineered with a high-octane neo-Tokyo cyberpunk visual language with acidic neon glows, chromatic aberration, and glitch accents, this signature portfolio is custom-tailored for Software developers, open-source maintainers, and polyglot programmers aiming to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for Metaverse \u2014 3D Interactive Web3 Showcase. Includes dedicated sections for Live Terminal Hero, Featured Repositories, Architecture Diagrams, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 14,
    "componentsCount": 88,
    "fileSize": "26.8 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-cyan-500 via-blue-700 to-purple-900",
    "coverType": "cyberpunk",
    "gallery": [
      {
        "title": "Neon Cyber Deck",
        "subtitle": "HUD inspired dark interface elements"
      },
      {
        "title": "Protocol Metrics",
        "subtitle": "TVL, gas optimization, and smart contract flows"
      }
    ],
    "comments": [
      {
        "user": "Alex V.",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "Super crisp aesthetic for decentralized tech portfolios."
      }
    ],
    "originalPrice": 3199,
    "discount": 25,
    "category": "Developer",
    "style": "Cyberpunk",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "dystopian high-tech edge featuring CRT scanlines, terminal diagnostics, and luminous electric accents crafted specifically for Metaverse \u2014 3D Interactive Web3 Showcase",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-091",
    "image": "assets/t91.jpg",
    "title": "FolioPrint \u2014 Editorial Publishing & Typography Kit",
    "likes": 11407,
    "duplicates": 38959,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Featuring a high-fashion editorial typography grid reminiscent of contemporary print publications, FolioPrint \u2014 Editorial Publishing & Typography Kit delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for FolioPrint \u2014 Editorial Publishing & Typography Kit. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 16,
    "componentsCount": 92,
    "fileSize": "19.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-neutral-900 via-zinc-800 to-neutral-700",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Typographic Monograph",
        "subtitle": "Grid systems with dramatic scale ratios"
      },
      {
        "title": "Columnar Essay Layout",
        "subtitle": "Long-form design criticism structure"
      }
    ],
    "comments": [
      {
        "user": "Emma Watson-Lee",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "A masterclass in baseline grids and typography."
      }
    ],
    "originalPrice": 2299,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for FolioPrint \u2014 Editorial Publishing & Typography Kit",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-092",
    "image": "assets/t92.jpg",
    "title": "NeuroDesign \u2014 AI Research & Agentic Workflow UX",
    "likes": 17924,
    "duplicates": 60208,
    "type": "files",
    "tags": [
      "Developer",
      "3D & Visual",
      "UX/UI"
    ],
    "description": "Engineered with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this signature portfolio is custom-tailored for Artificial intelligence engineers, model fine-tuners, and intelligent systems builders aiming to demonstrate enterprise AI deployments, inference pipelines, and production-grade agentic systems. Leveraging modern Python, PyTorch, FastAPI, the architecture elevates your brand through real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for NeuroDesign \u2014 AI Research & Agentic Workflow UX. Complete with custom modules for Neural Canvas Hero, Agentic Workflow Demos, Model Latency Benchmarks, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 24,
    "componentsCount": 195,
    "fileSize": "44.9 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-indigo-600 via-pink-600 to-amber-400",
    "coverType": "ai",
    "gallery": [
      {
        "title": "Multimodal Agent Showcase",
        "subtitle": "Interactive reasoning traces and prompt chains"
      },
      {
        "title": "Benchmark Comparison",
        "subtitle": "Model latency and accuracy evaluation charts"
      }
    ],
    "comments": [
      {
        "user": "Rohan Gupta",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "18 hours ago",
        "text": "So timely and relevant! Everyone hiring in AI was impressed by this layout."
      }
    ],
    "originalPrice": 4499,
    "discount": 25,
    "category": "AI Engineer",
    "style": "3D",
    "targetAudience": "Artificial intelligence engineers, model fine-tuners, and intelligent systems builders",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for NeuroDesign \u2014 AI Research & Agentic Workflow UX",
    "sections": [
      "Neural Canvas Hero",
      "Agentic Workflow Demos",
      "Model Latency Benchmarks",
      "Fine-Tuning Experiments",
      "Interactive Prompt Playground",
      "Book AI Consultation"
    ],
    "technology": [
      "Python",
      "PyTorch",
      "FastAPI",
      "Next.js",
      "LangChain",
      "Vector DB"
    ]
  },
  {
    "id": "ff-093",
    "image": "assets/t93.jpg",
    "title": "PatternLab \u2014 Multi-Brand Design Token System",
    "likes": 12581,
    "duplicates": 42357,
    "type": "files",
    "tags": [
      "UX/UI",
      "Bento Grid",
      "Developer"
    ],
    "description": "Featuring a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, PatternLab \u2014 Multi-Brand Design Token System delivers an unmissable digital presence tailored for Product designers, interaction designers, and user experience researchers who demand to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Built for speed and fluid responsiveness on Figma, Design Tokens, React, it captivates visitors with dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for PatternLab \u2014 Multi-Brand Design Token System. Equipped with Bento UX Hero, In-Depth Case Studies, Design System Specimen, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 20,
    "componentsCount": 178,
    "fileSize": "36.2 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-blue-700 via-indigo-800 to-slate-900",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Token Architecture",
        "subtitle": "Semantic color and spacing scales"
      },
      {
        "title": "Component Anatomy",
        "subtitle": "Interactive state and variant breakdown"
      }
    ],
    "comments": [
      {
        "user": "Liam Scott",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Essential for any designer showcasing scalable component libraries."
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "UI/UX Designer",
    "style": "Bento Grid",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "dynamic masonry grid composed of adaptive widgets, live stats, and preview thumbnails crafted specifically for PatternLab \u2014 Multi-Brand Design Token System",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-094",
    "image": "assets/t94.jpg",
    "title": "StudioKomorebi \u2014 Visual Identity & Spatial Branding",
    "likes": 14298,
    "duplicates": 47506,
    "type": "files",
    "tags": [
      "Agency",
      "Editorial",
      "Creative Director"
    ],
    "description": "Built with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this turnkey showcase provides Three.js engineers, WebXR creators, and spatial web architects the competitive edge required to deliver browser-based 3D simulations, photorealistic GLTF model inspections, and spatial computing demos. Powered by Three.js, React Three Fiber, WebXR, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for StudioKomorebi \u2014 Visual Identity & Spatial Branding. Equipped with Interactive 3D Stage Hero, Real-Time Model Viewer, Spatial Lighting Controls, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 26,
    "componentsCount": 160,
    "fileSize": "48.5 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-amber-200 via-rose-300 to-purple-400",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Brand Guidelines",
        "subtitle": "Grid systems, logo mark construction, clearspace"
      },
      {
        "title": "Collateral Grid",
        "subtitle": "Business cards, packaging, and sign mockups"
      }
    ],
    "comments": [
      {
        "user": "Zoe Kravitz",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
        "time": "3 days ago",
        "text": "Brought my client pitch win-rate to 100%. Beautifully organized."
      }
    ],
    "originalPrice": 3599,
    "discount": 20,
    "category": "3D Developer",
    "style": "3D",
    "targetAudience": "Three.js engineers, WebXR creators, and spatial web architects",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for StudioKomorebi \u2014 Visual Identity & Spatial Branding",
    "sections": [
      "Interactive 3D Stage Hero",
      "Real-Time Model Viewer",
      "Spatial Lighting Controls",
      "Shader Performance Benchmarks",
      "Client 3D Installations",
      "Start 3D Project"
    ],
    "technology": [
      "Three.js",
      "React Three Fiber",
      "WebXR",
      "GLTF",
      "Tailwind CSS"
    ]
  },
  {
    "id": "ff-095",
    "image": "assets/t95.jpg",
    "title": "DevPulse \u2014 Software Architect & Systems Resume",
    "likes": 10665,
    "duplicates": 36555,
    "type": "files",
    "tags": [
      "Resume & CV",
      "Minimalist",
      "Developer"
    ],
    "description": "Crafted around a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this high-performance system empowers Software developers, open-source maintainers, and polyglot programmers to effortlessly exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Under the hood, an ultra-fast React, TypeScript, Tailwind CSS foundation powers responsive interactions, highlighting distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for DevPulse \u2014 Software Architect & Systems Resume. The production-ready layout comes loaded with Live Terminal Hero, Featured Repositories, Architecture Diagrams, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 4,
    "componentsCount": 36,
    "fileSize": "6.8 MB",
    "updatedAt": "3 days ago",
    "license": "Standard Commercial",
    "gradient": "from-slate-100 via-gray-200 to-zinc-300",
    "coverType": "resume",
    "gallery": [
      {
        "title": "Technical Resume View",
        "subtitle": "ATS-friendly monospace & sans-serif hierarchy"
      }
    ],
    "comments": [
      {
        "user": "Kenji Sato",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
        "time": "5 days ago",
        "text": "Crisp, concise, no fluff. Exactly what hiring managers want to see."
      }
    ],
    "originalPrice": 1999,
    "discount": 10,
    "category": "Developer",
    "style": "Minimal",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for DevPulse \u2014 Software Architect & Systems Resume",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-096",
    "image": "assets/t96.jpg",
    "title": "Poly3D \u2014 Low Poly & Stylized 3D Motion Portfolio",
    "likes": 16042,
    "duplicates": 52604,
    "type": "files",
    "tags": [
      "Dark Mode",
      "3D & Visual",
      "Interactive"
    ],
    "description": "Engineered with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this signature portfolio is custom-tailored for Software developers, open-source maintainers, and polyglot programmers aiming to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Poly3D \u2014 Low Poly & Stylized 3D Motion Portfolio. Includes dedicated sections for Live Terminal Hero, Featured Repositories, Architecture Diagrams, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "pagesCount": 16,
    "componentsCount": 115,
    "fileSize": "39.4 MB",
    "updatedAt": "Yesterday",
    "license": "Standard Commercial",
    "gradient": "from-zinc-900 via-neutral-900 to-black",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Obsidian Hero Canvas",
        "subtitle": "Deep dark aesthetic with high-fidelity lighting"
      },
      {
        "title": "Showreel Player",
        "subtitle": "Aspect ratio 21:9 ultra-wide video embed frame"
      }
    ],
    "comments": [
      {
        "user": "Elena Vance",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Looks like an Apple Pro website. Incredible polish."
      }
    ],
    "originalPrice": 3299,
    "discount": 20,
    "category": "Developer",
    "style": "3D",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for Poly3D \u2014 Low Poly & Stylized 3D Motion Portfolio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-097",
    "image": "assets/t97.jpg",
    "title": "StrategyUX \u2014 Principal Product Designer Case Studies",
    "likes": 13829,
    "duplicates": 46653,
    "type": "files",
    "tags": [
      "UX/UI",
      "Case Study",
      "Agency"
    ],
    "description": "Engineered with a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this signature portfolio is custom-tailored for Creative directors, agency partners, and executive brand visionaries aiming to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for StrategyUX \u2014 Principal Product Designer Case Studies. Equipped with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "pagesCount": 24,
    "componentsCount": 210,
    "fileSize": "54.1 MB",
    "updatedAt": "4 days ago",
    "license": "Standard Commercial",
    "gradient": "from-violet-600 via-purple-700 to-indigo-800",
    "coverType": "saas",
    "gallery": [
      {
        "title": "Strategic Leadership Overview",
        "subtitle": "Vision docs, OKR attainment, and team growth metrics"
      },
      {
        "title": "Deep Dive Case Studies",
        "subtitle": "End-to-end multi-quarter product evolutions"
      }
    ],
    "comments": [
      {
        "user": "Brian K.",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80",
        "time": "2 days ago",
        "text": "Land VP/Head of Design positions with this template. Superbly comprehensive."
      }
    ],
    "originalPrice": 4299,
    "discount": 25,
    "category": "Creative Director",
    "style": "Minimal",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "distraction-free monochromatic aesthetic emphasizing clarity and typographic balance crafted specifically for StrategyUX \u2014 Principal Product Designer Case Studies",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-098",
    "image": "assets/t98.jpg",
    "title": "Helvetica \u2014 Pure Swiss International Style Folio",
    "likes": 12186,
    "duplicates": 40402,
    "type": "files",
    "tags": [
      "Editorial",
      "Minimalist",
      "Creative Director"
    ],
    "description": "Featuring a high-fashion editorial typography grid reminiscent of contemporary print publications, Helvetica \u2014 Pure Swiss International Style Folio delivers an unmissable digital presence tailored for Creative directors, agency partners, and executive brand visionaries who demand to demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, Cinema 4D, it captivates visitors with sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Helvetica \u2014 Pure Swiss International Style Folio. The production-ready layout comes loaded with Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 18,
    "componentsCount": 124,
    "fileSize": "22.7 MB",
    "updatedAt": "1 week ago",
    "license": "Standard Commercial",
    "gradient": "from-red-600 via-orange-600 to-amber-500",
    "coverType": "typography",
    "gallery": [
      {
        "title": "Grid Composition",
        "subtitle": "Mathematical column and module balance"
      },
      {
        "title": "Poster Exhibition View",
        "subtitle": "Large format print mockups"
      }
    ],
    "comments": [
      {
        "user": "Lara Croft",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
        "time": "4 days ago",
        "text": "The grid system alone is worth double the price."
      }
    ],
    "originalPrice": 3499,
    "discount": 15,
    "category": "Creative Director",
    "style": "Editorial",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "sophisticated serif headlines, multi-column storytelling flows, and artistic imagery frames crafted specifically for Helvetica \u2014 Pure Swiss International Style Folio",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-099",
    "image": "assets/t99.jpg",
    "title": "ByteTerminal \u2014 Interactive Hacker Terminal Portfolio",
    "likes": 12713,
    "duplicates": 44651,
    "type": "files",
    "tags": [
      "Developer",
      "Dark Mode",
      "Interactive"
    ],
    "description": "Built with a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this turnkey showcase provides Software developers, open-source maintainers, and polyglot programmers the competitive edge required to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Powered by React, TypeScript, Tailwind CSS, the interface provides a seamless interactive experience featuring playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for ByteTerminal \u2014 Interactive Hacker Terminal Portfolio. The production-ready layout comes loaded with Live Terminal Hero, Featured Repositories, Architecture Diagrams, engineered to convert hiring managers and high-ticket clients on contact.",
    "pagesCount": 10,
    "componentsCount": 82,
    "fileSize": "16.5 MB",
    "updatedAt": "2 days ago",
    "license": "Standard Commercial",
    "gradient": "from-emerald-950 via-teal-900 to-slate-900",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Terminal Shell",
        "subtitle": "Interactive CLI project explorer"
      },
      {
        "title": "System Architecture",
        "subtitle": "Distributed systems diagrams and latency stats"
      }
    ],
    "comments": [
      {
        "user": "Sergey P.",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        "time": "1 day ago",
        "text": "Every engineer who saw this was blown away by the terminal feel."
      }
    ],
    "originalPrice": 2999,
    "discount": 20,
    "category": "Developer",
    "style": "Neo-Brutalist",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "playful raw aesthetic with chunky 4px borders, tactile isometric elevation, and vibrant accent pops crafted specifically for ByteTerminal \u2014 Interactive Hacker Terminal Portfolio",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ]
  },
  {
    "id": "ff-100",
    "image": "assets/t100.jpg",
    "title": "AuraMotion \u2014 3D Visual Experience & Creative Direction",
    "likes": 17600,
    "duplicates": 58100,
    "type": "files",
    "tags": [
      "3D & Visual",
      "Creative Director",
      "Agency"
    ],
    "description": "Crafted around a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Leveraging modern Next.js, Tailwind CSS, Cinema 4D, the architecture elevates your brand through real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for AuraMotion \u2014 3D Visual Experience & Creative Direction. Complete with custom modules for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, your work is presented with the clarity and authority needed to close premium opportunities.",
    "pagesCount": 22,
    "componentsCount": 150,
    "fileSize": "49.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-rose-600 to-orange-500",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "Cinematic Showreel",
        "subtitle": "Frameless 4K showreel player with timeline scrubbers"
      },
      {
        "title": "Lighting & Shading Breakdown",
        "subtitle": "Clay vs Wireframe vs Final Render comparison"
      }
    ],
    "comments": [
      {
        "user": "Nathan Drake",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80",
        "time": "6 hours ago",
        "text": "The clay vs render breakdown slider is pure magic. Outstanding work!"
      }
    ],
    "originalPrice": 3999,
    "discount": 20,
    "category": "Creative Director",
    "style": "3D",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "real-time WebGL canvas with physically-based rendering (PBR), ambient occlusion, and dynamic lighting crafted specifically for AuraMotion \u2014 3D Visual Experience & Creative Direction",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ]
  },
  {
    "id": "ff-101",
    "image": "assets/t101.jpg",
    "title": "SynapseAI \u2014 Deep Learning & Agentic Systems Folio",
    "category": "AI Engineer",
    "style": "AI-inspired",
    "targetAudience": "Artificial intelligence engineers, model fine-tuners, and intelligent systems builders",
    "visualConcept": "Bioluminescent neural synapse graph with interactive prompt terminal and model latency telemetry",
    "sections": [
      "Neural Canvas Hero",
      "Agentic Workflow Demos",
      "Model Latency Benchmarks",
      "Fine-Tuning Experiments",
      "Interactive Prompt Playground",
      "Book AI Consultation"
    ],
    "technology": [
      "Python",
      "PyTorch",
      "FastAPI",
      "Next.js",
      "LangChain"
    ],
    "originalPrice": 3999,
    "discount": 20,
    "tags": [
      "AI Engineer",
      "AI-inspired",
      "Deep Learning",
      "Agents"
    ],
    "likes": 1949,
    "duplicates": 34890,
    "type": "files",
    "pagesCount": 17,
    "componentsCount": 134,
    "fileSize": "37.2 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-violet-900 via-indigo-950 to-neutral-950",
    "coverType": "ai",
    "gallery": [
      {
        "title": "AI-inspired Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Bioluminescent neural synapse graph with interactive prompt terminal and model latency telemetry"
      },
      {
        "title": "Agentic Workflow Demos Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Model Latency Benchmarks & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Built with a neural-network inspired architecture featuring animated synaptic particle nodes and glowing bioluminescent hues, this turnkey showcase provides Artificial intelligence engineers, model fine-tuners, and intelligent systems builders the competitive edge required to demonstrate enterprise AI deployments, inference pipelines, and production-grade agentic systems. Under the hood, an ultra-fast Python, PyTorch, FastAPI, Next.js, LangChain foundation powers responsive interactions, highlighting Bioluminescent neural synapse graph with interactive prompt terminal and model latency telemetry. Equipped with Neural Canvas Hero, Agentic Workflow Demos, Model Latency Benchmarks, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this AI-inspired design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-102",
    "image": "assets/t102.jpg",
    "title": "Monolith \u2014 High-Throughput Full Stack Architecture",
    "category": "Full Stack Developer",
    "style": "Bento Grid",
    "targetAudience": "End-to-end web application developers and full-stack product engineers",
    "visualConcept": "Tactile bento masonry grid with live API schema viewers and responsive auto-layout components",
    "sections": [
      "Full-Lifecycle Project Showcase",
      "Live Demo Embeds",
      "Database & API Schemas",
      "Performance Metrics",
      "Client Recommendations",
      "Consultation Scheduler"
    ],
    "technology": [
      "Next.js",
      "TypeScript",
      "Prisma",
      "TRPC",
      "Tailwind CSS"
    ],
    "originalPrice": 3499,
    "discount": 20,
    "tags": [
      "Full Stack Developer",
      "Bento Grid",
      "Next.js",
      "Web App"
    ],
    "likes": 5174,
    "duplicates": 44921,
    "type": "files",
    "pagesCount": 17,
    "componentsCount": 114,
    "fileSize": "35.6 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-blue-600 via-indigo-600 to-purple-700",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Bento Grid Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Tactile bento masonry grid with live API schema viewers and responsive auto-layout components"
      },
      {
        "title": "Live Demo Embeds Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Database & API Schemas & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Built with a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, this turnkey showcase provides End-to-end web application developers and full-stack product engineers the competitive edge required to demonstrate full-lifecycle application delivery spanning pixel-perfect frontends to robust cloud backends. Built for speed and fluid responsiveness on Next.js, TypeScript, Prisma, TRPC, Tailwind CSS, it captivates visitors with Tactile bento masonry grid with live API schema viewers and responsive auto-layout components. The production-ready layout comes loaded with Full-Lifecycle Project Showcase, Live Demo Embeds, Database & API Schemas, engineered to convert hiring managers and high-ticket clients on contact.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Bento Grid design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-103",
    "image": "assets/t103.jpg",
    "title": "Vortex \u2014 WebGL GLSL Shader & Spatial Stage",
    "category": "Creative Developer",
    "style": "3D",
    "targetAudience": "Creative technologists, shaders developers, and experimental web artisans",
    "visualConcept": "Interactive 3D particle vortex with dynamic physics simulation, orbit controls, and real-time bloom",
    "sections": [
      "Interactive 3D Stage",
      "GLSL Shader Sandbox",
      "Generative Art Gallery",
      "Commercial Experiences",
      "Technical Awards",
      "Start Collab"
    ],
    "technology": [
      "Three.js",
      "WebGL",
      "GLSL",
      "React Three Fiber",
      "GSAP"
    ],
    "originalPrice": 4499,
    "discount": 25,
    "tags": [
      "Creative Developer",
      "3D",
      "WebGL",
      "Interactive"
    ],
    "likes": 11573,
    "duplicates": 13401,
    "type": "files",
    "pagesCount": 17,
    "componentsCount": 62,
    "fileSize": "18.7 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-rose-600 to-orange-500",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "3D Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Interactive 3D particle vortex with dynamic physics simulation, orbit controls, and real-time bloom"
      },
      {
        "title": "GLSL Shader Sandbox Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Generative Art Gallery & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Featuring a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, Vortex \u2014 WebGL GLSL Shader & Spatial Stage delivers an unmissable digital presence tailored for Creative technologists, shaders developers, and experimental web artisans who demand to push the boundaries of web interaction with generative graphics, custom GLSL shaders, and audio-visual experiments. Under the hood, an ultra-fast Three.js, WebGL, GLSL, React Three Fiber, GSAP foundation powers responsive interactions, highlighting Interactive 3D particle vortex with dynamic physics simulation, orbit controls, and real-time bloom. The production-ready layout comes loaded with Interactive 3D Stage, GLSL Shader Sandbox, Generative Art Gallery, engineered to convert hiring managers and high-ticket clients on contact.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this 3D design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-104",
    "image": "assets/t104.jpg",
    "title": "K\u014ddo \u2014 Minimalist Polyglot Developer Showcase",
    "category": "Developer",
    "style": "Minimal",
    "targetAudience": "Software developers, open-source maintainers, and polyglot programmers",
    "visualConcept": "Distraction-free Swiss monospace typography with automated GitHub repository commit telemetry",
    "sections": [
      "Live Terminal Hero",
      "Featured Repositories",
      "Architecture Diagrams",
      "Tech Stack Matrix",
      "Interactive Playground",
      "Contact & Inquiries"
    ],
    "technology": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub REST API"
    ],
    "originalPrice": 2499,
    "discount": 15,
    "tags": [
      "Developer",
      "Minimal",
      "Open Source",
      "Codebase"
    ],
    "likes": 10863,
    "duplicates": 47094,
    "type": "files",
    "pagesCount": 10,
    "componentsCount": 77,
    "fileSize": "22.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-neutral-900 via-neutral-800 to-neutral-700",
    "coverType": "minimal",
    "gallery": [
      {
        "title": "Minimal Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Distraction-free Swiss monospace typography with automated GitHub repository commit telemetry"
      },
      {
        "title": "Featured Repositories Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Architecture Diagrams & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Engineered with a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this signature portfolio is custom-tailored for Software developers, open-source maintainers, and polyglot programmers aiming to exhibit complex codebases, open-source repositories, and technical mastery to tier-1 engineering leads. Leveraging modern React, TypeScript, Tailwind CSS, GitHub REST API, the architecture elevates your brand through Distraction-free Swiss monospace typography with automated GitHub repository commit telemetry. Equipped with Live Terminal Hero, Featured Repositories, Architecture Diagrams, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Minimal design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-105",
    "image": "assets/t105.jpg",
    "title": "Distributed \u2014 Senior Systems Engineering Portfolio",
    "category": "Software Engineer",
    "style": "Dark",
    "targetAudience": "Senior software engineers, distributed systems builders, and algorithms specialists",
    "visualConcept": "Low-latency obsidian server dashboard with interactive microservice topology maps",
    "sections": [
      "Engineering Philosophy Hero",
      "Distributed Systems Case Studies",
      "Performance Benchmarks",
      "System Architecture",
      "Patent & Publications",
      "Get in Touch"
    ],
    "technology": [
      "Go",
      "Next.js",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "originalPrice": 3299,
    "discount": 20,
    "tags": [
      "Software Engineer",
      "Dark",
      "Systems",
      "Performance"
    ],
    "likes": 8926,
    "duplicates": 11712,
    "type": "files",
    "pagesCount": 21,
    "componentsCount": 120,
    "fileSize": "21.3 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-neutral-950 via-neutral-900 to-neutral-800",
    "coverType": "dark",
    "gallery": [
      {
        "title": "Dark Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Low-latency obsidian server dashboard with interactive microservice topology maps"
      },
      {
        "title": "Distributed Systems Case Studies Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Performance Benchmarks & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Built with a refined obsidian dark-mode interface with subtle luminous borders and deep charcoal surfaces, this turnkey showcase provides Senior software engineers, distributed systems builders, and algorithms specialists the competitive edge required to showcase scalable microservices, low-latency architectures, and mission-critical engineering accomplishments. Powered by Go, Next.js, Docker, PostgreSQL, Tailwind CSS, the interface provides a seamless interactive experience featuring Low-latency obsidian server dashboard with interactive microservice topology maps. Includes dedicated sections for Engineering Philosophy Hero, Distributed Systems Case Studies, Performance Benchmarks, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Dark design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-106",
    "image": "assets/t106.jpg",
    "title": "KineticUI \u2014 Micro-Interactions & Frontend Architecture",
    "category": "Frontend Developer",
    "style": "Interactive",
    "targetAudience": "Frontend architects, UI engineers, and design-system practitioners",
    "visualConcept": "Physics-based magnetic button controls, spring animations, and 100/100 Lighthouse performance meters",
    "sections": [
      "Interactive Micro-Interactions Hero",
      "Component Gallery",
      "Lighthouse 100/100 Audits",
      "State Management Deep Dives",
      "Live Code Previews",
      "Collaborate CTA"
    ],
    "technology": [
      "React",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Lenis"
    ],
    "originalPrice": 2899,
    "discount": 20,
    "tags": [
      "Frontend Developer",
      "Interactive",
      "UI Engineering",
      "Micro-Interactions"
    ],
    "likes": 13408,
    "duplicates": 22711,
    "type": "files",
    "pagesCount": 11,
    "componentsCount": 134,
    "fileSize": "37.0 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-teal-600 via-emerald-600 to-cyan-700",
    "coverType": "interactive",
    "gallery": [
      {
        "title": "Interactive Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Physics-based magnetic button controls, spring animations, and 100/100 Lighthouse performance meters"
      },
      {
        "title": "Component Gallery Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Lighthouse 100/100 Audits & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Featuring a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, KineticUI \u2014 Micro-Interactions & Frontend Architecture delivers an unmissable digital presence tailored for Frontend architects, UI engineers, and design-system practitioners who demand to highlight micro-interactions, responsive fluid typography, and accessible high-performance interfaces. Leveraging modern React, Tailwind CSS, GSAP, Framer Motion, Lenis, the architecture elevates your brand through Physics-based magnetic button controls, spring animations, and 100/100 Lighthouse performance meters. Includes dedicated sections for Interactive Micro-Interactions Hero, Component Gallery, Lighthouse 100/100 Audits, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Interactive design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-107",
    "image": "assets/t107.jpg",
    "title": "CipherCloud \u2014 High-Availability Cloud Infrastructure",
    "category": "Backend Developer",
    "style": "Futuristic",
    "targetAudience": "Cloud infrastructure engineers, backend architects, and API specialists",
    "visualConcept": "Aerospace telemetry HUD displaying real-time database shards, query planners, and Kafka throughput",
    "sections": [
      "Architecture Graph Hero",
      "API Documentation Demos",
      "Throughput Benchmarks",
      "Cloud Infrastructure Topology",
      "Security Protocols",
      "Technical Contact"
    ],
    "technology": [
      "Node.js",
      "Rust",
      "GraphQL",
      "Redis",
      "AWS CloudFormation"
    ],
    "originalPrice": 3199,
    "discount": 15,
    "tags": [
      "Backend Developer",
      "Futuristic",
      "API",
      "Cloud Infra"
    ],
    "likes": 4193,
    "duplicates": 7431,
    "type": "files",
    "pagesCount": 15,
    "componentsCount": 108,
    "fileSize": "37.5 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-cyan-900 via-blue-950 to-neutral-950",
    "coverType": "futuristic",
    "gallery": [
      {
        "title": "Futuristic Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Aerospace telemetry HUD displaying real-time database shards, query planners, and Kafka throughput"
      },
      {
        "title": "API Documentation Demos Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Throughput Benchmarks & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a sleek sci-fi cockpit aesthetic with HUD telemetry readouts, neon line work, and angular geometry, this high-performance system empowers Cloud infrastructure engineers, backend architects, and API specialists to effortlessly visualize complex serverless workflows, high-throughput pipelines, and robust data integrity solutions. Built for speed and fluid responsiveness on Node.js, Rust, GraphQL, Redis, AWS CloudFormation, it captivates visitors with Aerospace telemetry HUD displaying real-time database shards, query planners, and Kafka throughput. Complete with custom modules for Architecture Graph Hero, API Documentation Demos, Throughput Benchmarks, your work is presented with the clarity and authority needed to close premium opportunities.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Futuristic design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-108",
    "image": "assets/t108.jpg",
    "title": "NeuralDrift \u2014 High-Throughput MLOps & Vision Models",
    "category": "ML Engineer",
    "style": "Cyberpunk",
    "targetAudience": "Machine learning engineers, computer vision specialists, and MLOps professionals",
    "visualConcept": "Acidic cyberpunk telemetry deck with model card metrics, confusion matrix heatmaps, and GPU benchmarks",
    "sections": [
      "Model Inference Hero",
      "Model Card Case Studies",
      "Hyperparameter Tuning Dashboards",
      "Data Pipeline Topology",
      "Research Papers",
      "Contact"
    ],
    "technology": [
      "TensorFlow",
      "PyTorch",
      "Kubeflow",
      "Python",
      "Tailwind CSS"
    ],
    "originalPrice": 3899,
    "discount": 25,
    "tags": [
      "ML Engineer",
      "Cyberpunk",
      "Machine Learning",
      "MLOps"
    ],
    "likes": 9768,
    "duplicates": 38449,
    "type": "files",
    "pagesCount": 21,
    "componentsCount": 133,
    "fileSize": "26.1 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-purple-900 to-cyan-500",
    "coverType": "cyberpunk",
    "gallery": [
      {
        "title": "Cyberpunk Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Acidic cyberpunk telemetry deck with model card metrics, confusion matrix heatmaps, and GPU benchmarks"
      },
      {
        "title": "Model Card Case Studies Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Hyperparameter Tuning Dashboards & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a high-octane neo-Tokyo cyberpunk visual language with acidic neon glows, chromatic aberration, and glitch accents, this high-performance system empowers Machine learning engineers, computer vision specialists, and MLOps professionals to effortlessly validate predictive models, production training pipelines, and large-scale data transformation feats. Under the hood, an ultra-fast TensorFlow, PyTorch, Kubeflow, Python, Tailwind CSS foundation powers responsive interactions, highlighting Acidic cyberpunk telemetry deck with model card metrics, confusion matrix heatmaps, and GPU benchmarks. Includes dedicated sections for Model Inference Hero, Model Card Case Studies, Hyperparameter Tuning Dashboards, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Cyberpunk design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-109",
    "image": "assets/t109.jpg",
    "title": "QuantData \u2014 Executive Predictive Modeling & Analytics",
    "category": "Data Scientist",
    "style": "Modern Corporate",
    "targetAudience": "Quantitative researchers, statistical modelers, and enterprise data scientists",
    "visualConcept": "Boardroom-ready data storytelling suite featuring interactive D3 charts, regression models, and executive summaries",
    "sections": [
      "Predictive Analytics Hero",
      "Statistical Case Studies",
      "Interactive D3 Visualizations",
      "Jupyter Notebook Previews",
      "Executive Impact Metrics",
      "Connect"
    ],
    "technology": [
      "Python",
      "D3.js",
      "Streamlit",
      "Plotly",
      "Tailwind CSS"
    ],
    "originalPrice": 3499,
    "discount": 20,
    "tags": [
      "Data Scientist",
      "Modern Corporate",
      "Analytics",
      "Visualization"
    ],
    "likes": 6436,
    "duplicates": 41496,
    "type": "files",
    "pagesCount": 12,
    "componentsCount": 92,
    "fileSize": "40.9 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-slate-900 via-blue-950 to-slate-800",
    "coverType": "corporate",
    "gallery": [
      {
        "title": "Modern Corporate Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Boardroom-ready data storytelling suite featuring interactive D3 charts, regression models, and executive summaries"
      },
      {
        "title": "Statistical Case Studies Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Interactive D3 Visualizations & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a authoritative modern enterprise aesthetic balancing institutional trustworthiness with sleek contemporary minimalism, this high-performance system empowers Quantitative researchers, statistical modelers, and enterprise data scientists to effortlessly communicate complex predictive hypotheses, statistical discoveries, and high-impact executive decision tools. Under the hood, an ultra-fast Python, D3.js, Streamlit, Plotly, Tailwind CSS foundation powers responsive interactions, highlighting Boardroom-ready data storytelling suite featuring interactive D3 charts, regression models, and executive summaries. The production-ready layout comes loaded with Predictive Analytics Hero, Statistical Case Studies, Interactive D3 Visualizations, engineered to convert hiring managers and high-ticket clients on contact.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Modern Corporate design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-110",
    "image": "assets/t110.jpg",
    "title": "InsightCore \u2014 Commercial BI Dashboards & Growth Metrics",
    "category": "Data Analyst",
    "style": "Light",
    "targetAudience": "Business intelligence analysts, reporting architects, and growth data strategists",
    "visualConcept": "Clean, sunlit business dashboard interface with cohort retention heatmaps and ARR growth timelines",
    "sections": [
      "KPI Command Center Hero",
      "Interactive Business Dashboards",
      "Revenue Optimization Stories",
      "Cohort Retention Analyses",
      "Client Reviews",
      "Hire for Analytics"
    ],
    "technology": [
      "SQL",
      "Power BI",
      "Tableau",
      "Python",
      "Tailwind CSS"
    ],
    "originalPrice": 2699,
    "discount": 15,
    "tags": [
      "Data Analyst",
      "Light",
      "BI",
      "Dashboards"
    ],
    "likes": 15295,
    "duplicates": 30933,
    "type": "files",
    "pagesCount": 21,
    "componentsCount": 119,
    "fileSize": "21.7 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-neutral-50 via-white to-neutral-100",
    "coverType": "light",
    "gallery": [
      {
        "title": "Light Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Clean, sunlit business dashboard interface with cohort retention heatmaps and ARR growth timelines"
      },
      {
        "title": "Interactive Business Dashboards Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Revenue Optimization Stories & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Featuring a crisp airy light palette bathed in soft ambient daylight and subtle tactile shadows, InsightCore \u2014 Commercial BI Dashboards & Growth Metrics delivers an unmissable digital presence tailored for Business intelligence analysts, reporting architects, and growth data strategists who demand to turn raw transactional data into high-converting commercial insights and intuitive dashboard systems. Leveraging modern SQL, Power BI, Tableau, Python, Tailwind CSS, the architecture elevates your brand through Clean, sunlit business dashboard interface with cohort retention heatmaps and ARR growth timelines. Includes dedicated sections for KPI Command Center Hero, Interactive Business Dashboards, Revenue Optimization Stories, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Light design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-111",
    "image": "assets/t111.jpg",
    "title": "OmniGen \u2014 Multimodal GenAI & Diffusion Studio",
    "category": "Generative AI",
    "style": "Gradient",
    "targetAudience": "GenAI engineers, prompt engineers, and synthetic media creators",
    "visualConcept": "Fluid chromatic gradient mesh with real-time prompt generation playground and high-res diffusion showcases",
    "sections": [
      "Multimodal Generative Canvas",
      "Real-Time AI Playground",
      "Prompt Architecture Showcase",
      "Diffusion Gallery",
      "Production Use Cases",
      "Start Project"
    ],
    "technology": [
      "Next.js",
      "Stable Diffusion",
      "OpenAI API",
      "Tailwind CSS"
    ],
    "originalPrice": 4299,
    "discount": 30,
    "tags": [
      "Generative AI",
      "Gradient",
      "LLM",
      "Synthetic Media"
    ],
    "likes": 7651,
    "duplicates": 32610,
    "type": "files",
    "pagesCount": 15,
    "componentsCount": 130,
    "fileSize": "25.9 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-fuchsia-600 via-purple-600 to-indigo-600",
    "coverType": "gradient",
    "gallery": [
      {
        "title": "Gradient Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Fluid chromatic gradient mesh with real-time prompt generation playground and high-res diffusion showcases"
      },
      {
        "title": "Real-Time AI Playground Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Prompt Architecture Showcase & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Featuring a vibrant multi-chromatic mesh gradient flows that subtly shift with user cursor movement, OmniGen \u2014 Multimodal GenAI & Diffusion Studio delivers an unmissable digital presence tailored for GenAI engineers, prompt engineers, and synthetic media creators who demand to unveil cutting-edge multimodal generative workflows, diffusion models, and real-time LLM orchestrations. Under the hood, an ultra-fast Next.js, Stable Diffusion, OpenAI API, Tailwind CSS foundation powers responsive interactions, highlighting Fluid chromatic gradient mesh with real-time prompt generation playground and high-res diffusion showcases. Complete with custom modules for Multimodal Generative Canvas, Real-Time AI Playground, Prompt Architecture Showcase, your work is presented with the clarity and authority needed to close premium opportunities.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Gradient design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-112",
    "image": "assets/t112.jpg",
    "title": "AuraDesign \u2014 Frosted Glass Design Systems & Case Studies",
    "category": "UI/UX Designer",
    "style": "Glassmorphism",
    "targetAudience": "Product designers, interaction designers, and user experience researchers",
    "visualConcept": "Multi-layered translucent frosted-glass panels with glowing accent borders and rich Figma embed prototypes",
    "sections": [
      "Bento UX Hero",
      "In-Depth Case Studies",
      "Design System Specimen",
      "User Research Artifacts",
      "Prototype Interactive Demos",
      "Contact"
    ],
    "technology": [
      "Figma",
      "Design Tokens",
      "React",
      "Framer Motion",
      "Tailwind CSS"
    ],
    "originalPrice": 2999,
    "discount": 20,
    "tags": [
      "UI/UX Designer",
      "Glassmorphism",
      "Product Design",
      "Design Systems"
    ],
    "likes": 8310,
    "duplicates": 35281,
    "type": "files",
    "pagesCount": 17,
    "componentsCount": 88,
    "fileSize": "40.1 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-sky-600/30 via-indigo-600/30 to-purple-600/30",
    "coverType": "glass",
    "gallery": [
      {
        "title": "Glassmorphism Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Multi-layered translucent frosted-glass panels with glowing accent borders and rich Figma embed prototypes"
      },
      {
        "title": "In-Depth Case Studies Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Design System Specimen & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Featuring a translucent frosted-glass backdrop panels with specular highlight borders and soft depth blurs, AuraDesign \u2014 Frosted Glass Design Systems & Case Studies delivers an unmissable digital presence tailored for Product designers, interaction designers, and user experience researchers who demand to articulate user-centered design methodologies, comprehensive design systems, and empathetic user journeys. Powered by Figma, Design Tokens, React, Framer Motion, Tailwind CSS, the interface provides a seamless interactive experience featuring Multi-layered translucent frosted-glass panels with glowing accent borders and rich Figma embed prototypes. Equipped with Bento UX Hero, In-Depth Case Studies, Design System Specimen, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Glassmorphism design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-113",
    "image": "assets/t113.jpg",
    "title": "Syllabus \u2014 End-to-End Product Strategy & Case Studies",
    "category": "Product Designer",
    "style": "Editorial",
    "targetAudience": "Principal product designers, UX leads, and digital venture builders",
    "visualConcept": "High-contrast editorial typography layout pairing product discovery frameworks with quantifiable business ROI",
    "sections": [
      "Strategic Vision Hero",
      "End-to-End Product Roadmaps",
      "Measurable ROI Case Studies",
      "Design Ops System",
      "Client Testimonials",
      "Schedule Discovery Call"
    ],
    "technology": [
      "Figma",
      "Next.js",
      "Framer",
      "Tailwind CSS"
    ],
    "originalPrice": 3599,
    "discount": 20,
    "tags": [
      "Product Designer",
      "Editorial",
      "UX Strategy",
      "SaaS"
    ],
    "likes": 4755,
    "duplicates": 31043,
    "type": "files",
    "pagesCount": 18,
    "componentsCount": 74,
    "fileSize": "18.6 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-stone-900 via-stone-800 to-stone-700",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Editorial Hero & Navigation",
        "subtitle": "Adaptive viewport featuring High-contrast editorial typography layout pairing product discovery frameworks with quantifiable business ROI"
      },
      {
        "title": "End-to-End Product Roadmaps Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Measurable ROI Case Studies & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Built with a high-fashion editorial typography grid reminiscent of contemporary print publications, this turnkey showcase provides Principal product designers, UX leads, and digital venture builders the competitive edge required to showcase end-to-end product strategy, commercial revenue impact, and polished digital experiences. Under the hood, an ultra-fast Figma, Next.js, Framer, Tailwind CSS foundation powers responsive interactions, highlighting High-contrast editorial typography layout pairing product discovery frameworks with quantifiable business ROI. Equipped with Strategic Vision Hero, End-to-End Product Roadmaps, Measurable ROI Case Studies, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Editorial design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-114",
    "image": "assets/t114.jpg",
    "title": "BoldBrand \u2014 High-Impact Visual Identity & Packaging",
    "category": "Graphic Designer",
    "style": "Neo-Brutalist",
    "targetAudience": "Brand identity designers, typographers, and visual narrative creators",
    "visualConcept": "Stark 4px neo-brutalist borders with vibrant isometric stickers, typographic specimens, and print mockups",
    "sections": [
      "Curated Visual Showreel",
      "Brand Identity Systems",
      "Packaging & Print Showcase",
      "Typography Specimen",
      "Client Retrospective",
      "Inquire Branding"
    ],
    "technology": [
      "Figma",
      "Illustrator",
      "WebGL",
      "Tailwind CSS"
    ],
    "originalPrice": 2799,
    "discount": 20,
    "tags": [
      "Graphic Designer",
      "Neo-Brutalist",
      "Branding",
      "Visual Identity"
    ],
    "likes": 13427,
    "duplicates": 26016,
    "type": "files",
    "pagesCount": 18,
    "componentsCount": 77,
    "fileSize": "36.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-amber-400 via-orange-500 to-pink-500",
    "coverType": "brutalist",
    "gallery": [
      {
        "title": "Neo-Brutalist Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Stark 4px neo-brutalist borders with vibrant isometric stickers, typographic specimens, and print mockups"
      },
      {
        "title": "Brand Identity Systems Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Packaging & Print Showcase & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a bold neo-brutalist structure featuring thick stark borders, hard drop shadows, and high-energy contrasts, this high-performance system empowers Brand identity designers, typographers, and visual narrative creators to effortlessly present striking brand systems, packaging designs, and high-impact visual communications. Built for speed and fluid responsiveness on Figma, Illustrator, WebGL, Tailwind CSS, it captivates visitors with Stark 4px neo-brutalist borders with vibrant isometric stickers, typographic specimens, and print mockups. Includes dedicated sections for Curated Visual Showreel, Brand Identity Systems, Packaging & Print Showcase, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Neo-Brutalist design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-115",
    "image": "assets/t115.jpg",
    "title": "MaisonVision \u2014 High-Fashion Creative Direction & Films",
    "category": "Creative Director",
    "style": "Luxury",
    "targetAudience": "Creative directors, agency partners, and executive brand visionaries",
    "visualConcept": "Opulent champagne-gold accents on obsidian black with full-bleed cinematic showreels and campaign retrospectives",
    "sections": [
      "Cinematic Brand Opener",
      "Flagship Global Campaigns",
      "Multi-Disciplinary Direction",
      "Press & Honors",
      "Agency Heritage",
      "Consultation"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Cinema 4D",
      "Framer Motion"
    ],
    "originalPrice": 4899,
    "discount": 20,
    "tags": [
      "Creative Director",
      "Luxury",
      "Campaigns",
      "Brand Strategy"
    ],
    "likes": 12528,
    "duplicates": 31090,
    "type": "files",
    "pagesCount": 19,
    "componentsCount": 117,
    "fileSize": "37.2 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-amber-700/80 via-neutral-900 to-black",
    "coverType": "luxury",
    "gallery": [
      {
        "title": "Luxury Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Opulent champagne-gold accents on obsidian black with full-bleed cinematic showreels and campaign retrospectives"
      },
      {
        "title": "Flagship Global Campaigns Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Multi-Disciplinary Direction & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a ultra-premium haute couture styling adorned with champagne-gold accents, rich blacks, and restrained elegance, this high-performance system empowers Creative directors, agency partners, and executive brand visionaries to effortlessly demonstrate multi-disciplinary creative direction, international campaigns, and transformative brand campaigns. Powered by Next.js, Tailwind CSS, Cinema 4D, Framer Motion, the interface provides a seamless interactive experience featuring Opulent champagne-gold accents on obsidian black with full-bleed cinematic showreels and campaign retrospectives. Includes dedicated sections for Cinematic Brand Opener, Flagship Global Campaigns, Multi-Disciplinary Direction, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Luxury design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-116",
    "image": "assets/t116.jpg",
    "title": "PrismArt \u2014 Immersive Concept Art & 3D Illustrations",
    "category": "Digital Artist",
    "style": "Photography-focused",
    "targetAudience": "Concept artists, 3D illustrators, and NFT/crypto-art visionaries",
    "visualConcept": "Darkroom-inspired deep viewport with clay/wireframe render breakdown scrubbers and zoomable art masterworks",
    "sections": [
      "Immersive Gallery Viewport",
      "Art Series Chronicles",
      "Lighting & Clay Passes",
      "Limited Editions Catalog",
      "Exhibitions & Features",
      "Collector Inquiry"
    ],
    "technology": [
      "Blender",
      "Unreal Engine",
      "React",
      "Tailwind CSS"
    ],
    "originalPrice": 3199,
    "discount": 15,
    "tags": [
      "Digital Artist",
      "Photography-focused",
      "Concept Art",
      "Illustration"
    ],
    "likes": 2241,
    "duplicates": 13611,
    "type": "files",
    "pagesCount": 20,
    "componentsCount": 81,
    "fileSize": "34.8 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-neutral-950 via-zinc-900 to-stone-900",
    "coverType": "photography",
    "gallery": [
      {
        "title": "Photography-focused Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Darkroom-inspired deep viewport with clay/wireframe render breakdown scrubbers and zoomable art masterworks"
      },
      {
        "title": "Art Series Chronicles Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Lighting & Clay Passes & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a cinematic gallery-first viewport crafted around edge-to-edge photography, deep blacks, and flawless color rendition, this high-performance system empowers Concept artists, 3D illustrators, and NFT/crypto-art visionaries to effortlessly display high-resolution digital masterworks, surreal storytelling, and immersive artistic collections. Leveraging modern Blender, Unreal Engine, React, Tailwind CSS, the architecture elevates your brand through Darkroom-inspired deep viewport with clay/wireframe render breakdown scrubbers and zoomable art masterworks. Complete with custom modules for Immersive Gallery Viewport, Art Series Chronicles, Lighting & Clay Passes, your work is presented with the clarity and authority needed to close premium opportunities.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Photography-focused design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-117",
    "image": "assets/t117.jpg",
    "title": "Academia \u2014 Modern Student & Apprentice Showcase",
    "category": "Student",
    "style": "Light",
    "targetAudience": "Undergraduate university students and aspiring technology apprentices",
    "visualConcept": "Approachable daylight interface highlighting academic lab projects, hackathon prototypes, and technical coursework",
    "sections": [
      "Aspirations Hero",
      "Academic Projects & Labs",
      "Extracurricular Hackathons",
      "Technical Skills Matrix",
      "Mentorship Feedback",
      "Connect & Hire"
    ],
    "technology": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Git",
      "Tailwind CSS"
    ],
    "originalPrice": 1999,
    "discount": 25,
    "tags": [
      "Student",
      "Light",
      "Portfolio",
      "Internship Ready"
    ],
    "likes": 15526,
    "duplicates": 25981,
    "type": "files",
    "pagesCount": 14,
    "componentsCount": 123,
    "fileSize": "20.2 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-neutral-50 via-white to-neutral-100",
    "coverType": "light",
    "gallery": [
      {
        "title": "Light Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Approachable daylight interface highlighting academic lab projects, hackathon prototypes, and technical coursework"
      },
      {
        "title": "Academic Projects & Labs Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Extracurricular Hackathons & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a crisp airy light palette bathed in soft ambient daylight and subtle tactile shadows, this high-performance system empowers Undergraduate university students and aspiring technology apprentices to effortlessly stand out to recruiters for internships, showcase coursework milestones, and demonstrate relentless passion to learn. Powered by HTML5, CSS3, JavaScript, React, Git, Tailwind CSS, the interface provides a seamless interactive experience featuring Approachable daylight interface highlighting academic lab projects, hackathon prototypes, and technical coursework. Includes dedicated sections for Aspirations Hero, Academic Projects & Labs, Extracurricular Hackathons, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Light design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-118",
    "image": "assets/t118.jpg",
    "title": "ApexEngineer \u2014 CS Capstone & Robotics Labs",
    "category": "Engineering Student",
    "style": "Minimal",
    "targetAudience": "Computer science, electronics, and software engineering university students",
    "visualConcept": "Structured minimalist blueprint grid showcasing computer science capstone code, circuit diagrams, and algorithms",
    "sections": [
      "Engineering Capstone Spotlight",
      "Robotics & Software Labs",
      "Hackathon Trophies",
      "Data Structures Portfolio",
      "Recommendation Letters",
      "Resume & Contact"
    ],
    "technology": [
      "C++",
      "Python",
      "React",
      "Git",
      "Tailwind CSS"
    ],
    "originalPrice": 2199,
    "discount": 20,
    "tags": [
      "Engineering Student",
      "Minimal",
      "Computer Science",
      "Capstone"
    ],
    "likes": 10923,
    "duplicates": 43827,
    "type": "files",
    "pagesCount": 21,
    "componentsCount": 126,
    "fileSize": "39.8 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-neutral-900 via-neutral-800 to-neutral-700",
    "coverType": "minimal",
    "gallery": [
      {
        "title": "Minimal Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Structured minimalist blueprint grid showcasing computer science capstone code, circuit diagrams, and algorithms"
      },
      {
        "title": "Robotics & Software Labs Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Hackathon Trophies & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a clean Swiss-inspired minimalist layout with generous whitespace and razor-sharp typography, this high-performance system empowers Computer science, electronics, and software engineering university students to effortlessly secure high-tier software engineering internships by highlighting capstone systems, algorithms, and lab achievements. Under the hood, an ultra-fast C++, Python, React, Git, Tailwind CSS foundation powers responsive interactions, highlighting Structured minimalist blueprint grid showcasing computer science capstone code, circuit diagrams, and algorithms. Includes dedicated sections for Engineering Capstone Spotlight, Robotics & Software Labs, Hackathon Trophies, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Minimal design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-119",
    "image": "assets/t119.jpg",
    "title": "NextStep \u2014 High-Converting Junior Dev & Graduate Folio",
    "category": "Fresh Graduate",
    "style": "Bento Grid",
    "targetAudience": "Recent university graduates and bootcamp alumni entering the tech job market",
    "visualConcept": "Polished bento matrix highlighting production-grade apps, GitHub commit velocity, and interview-ready case studies",
    "sections": [
      "Elevator Pitch Hero",
      "Production-Ready Projects",
      "Apprentice Experience",
      "Certified Skills Matrix",
      "GitHub Commit Velocity",
      "Download Resume / Contact"
    ],
    "technology": [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "GitHub API",
      "Vercel"
    ],
    "originalPrice": 2299,
    "discount": 20,
    "tags": [
      "Fresh Graduate",
      "Bento Grid",
      "Entry Level",
      "Junior Dev"
    ],
    "likes": 8061,
    "duplicates": 18822,
    "type": "files",
    "pagesCount": 21,
    "componentsCount": 65,
    "fileSize": "18.1 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-blue-600 via-indigo-600 to-purple-700",
    "coverType": "bento",
    "gallery": [
      {
        "title": "Bento Grid Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Polished bento matrix highlighting production-grade apps, GitHub commit velocity, and interview-ready case studies"
      },
      {
        "title": "Production-Ready Projects Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Apprentice Experience & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Engineered with a modular Apple-inspired bento card matrix organizing multifaceted career work into neat digestible tiles, this signature portfolio is custom-tailored for Recent university graduates and bootcamp alumni entering the tech job market aiming to present an impeccably polished entry-level showcase to convert hiring managers into interview invitations. Leveraging modern React, JavaScript, Tailwind CSS, GitHub API, Vercel, the architecture elevates your brand through Polished bento matrix highlighting production-grade apps, GitHub commit velocity, and interview-ready case studies. The production-ready layout comes loaded with Elevator Pitch Hero, Production-Ready Projects, Apprentice Experience, engineered to convert hiring managers and high-ticket clients on contact.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Bento Grid design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-120",
    "image": "assets/t120.jpg",
    "title": "SoloStudio \u2014 High-Converting Independent Contractor Folio",
    "category": "Freelancer",
    "style": "Interactive",
    "targetAudience": "Independent contractors, digital nomads, and solo agency professionals",
    "visualConcept": "Interactive pricing package calculator with client testimonials, scope breakdowns, and 1-click consultation triggers",
    "sections": [
      "Client Value Proposition Hero",
      "Client Testimonials & Case Studies",
      "Fixed-Scope Service Packages",
      "Working Process Timeline",
      "Live Availability Calendar",
      "Instant Project Inquiry"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "Calendly",
      "Framer Motion"
    ],
    "originalPrice": 2999,
    "discount": 20,
    "tags": [
      "Freelancer",
      "Interactive",
      "Independent",
      "Consulting"
    ],
    "likes": 1220,
    "duplicates": 47871,
    "type": "files",
    "pagesCount": 11,
    "componentsCount": 96,
    "fileSize": "37.9 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-teal-600 via-emerald-600 to-cyan-700",
    "coverType": "interactive",
    "gallery": [
      {
        "title": "Interactive Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Interactive pricing package calculator with client testimonials, scope breakdowns, and 1-click consultation triggers"
      },
      {
        "title": "Client Testimonials & Case Studies Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Fixed-Scope Service Packages & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Engineered with a delightful kinetic design driven by physics-based cursor interactions, magnetic buttons, and smooth inertia scroll, this signature portfolio is custom-tailored for Independent contractors, digital nomads, and solo agency professionals aiming to convert prospective inbound clients with transparent project scopes, verified outcomes, and frictionless booking. Powered by Next.js, Tailwind CSS, Calendly, Framer Motion, the interface provides a seamless interactive experience featuring Interactive pricing package calculator with client testimonials, scope breakdowns, and 1-click consultation triggers. Complete with custom modules for Client Value Proposition Hero, Client Testimonials & Case Studies, Fixed-Scope Service Packages, your work is presented with the clarity and authority needed to close premium opportunities.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Interactive design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-121",
    "image": "assets/t121.jpg",
    "title": "Vanguard \u2014 Fractional Executive & Tech Advisory",
    "category": "Consultant",
    "style": "Modern Corporate",
    "targetAudience": "Management consultants, tech advisors, and fractional executives",
    "visualConcept": "Authoritative boardroom aesthetic with strategic whitepaper downloads, executive case studies, and advisory retainers",
    "sections": [
      "Executive Strategic Thesis",
      "Advisory Case Studies & ROI",
      "Published Whitepapers",
      "Advisory Retainer Tiers",
      "Speaking Engagements",
      "Book Discovery Call"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "KaTeX",
      "Notion API"
    ],
    "originalPrice": 3899,
    "discount": 15,
    "tags": [
      "Consultant",
      "Modern Corporate",
      "Advisor",
      "Strategy"
    ],
    "likes": 1724,
    "duplicates": 12625,
    "type": "files",
    "pagesCount": 10,
    "componentsCount": 97,
    "fileSize": "22.7 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-slate-900 via-blue-950 to-slate-800",
    "coverType": "corporate",
    "gallery": [
      {
        "title": "Modern Corporate Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Authoritative boardroom aesthetic with strategic whitepaper downloads, executive case studies, and advisory retainers"
      },
      {
        "title": "Advisory Case Studies & ROI Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Published Whitepapers & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Engineered with a authoritative modern enterprise aesthetic balancing institutional trustworthiness with sleek contemporary minimalism, this signature portfolio is custom-tailored for Management consultants, tech advisors, and fractional executives aiming to establish unassailable domain authority, strategic problem-solving methodology, and executive advisory credentials. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, KaTeX, Notion API, it captivates visitors with Authoritative boardroom aesthetic with strategic whitepaper downloads, executive case studies, and advisory retainers. Includes dedicated sections for Executive Strategic Thesis, Advisory Case Studies & ROI, Published Whitepapers, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Modern Corporate design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-122",
    "image": "assets/t122.jpg",
    "title": "ThoughtLeader \u2014 Keynote Speaker & Media Headquarters",
    "category": "Personal Brand",
    "style": "Editorial",
    "targetAudience": "Keynote speakers, industry influencers, content creators, and authors",
    "visualConcept": "Media-rich editorial design uniting keynote sizzle reels, podcast appearances, published books, and newsletter subscriptions",
    "sections": [
      "Authoritative Media Hero",
      "Keynote Reel & Highlights",
      "Top Newsletter Essays",
      "Published Books & Media",
      "Podcast Episodes",
      "Book for Speaking"
    ],
    "technology": [
      "Next.js",
      "Tailwind CSS",
      "YouTube API",
      "ConvertKit"
    ],
    "originalPrice": 3499,
    "discount": 20,
    "tags": [
      "Personal Brand",
      "Editorial",
      "Keynote",
      "Creator"
    ],
    "likes": 10360,
    "duplicates": 20005,
    "type": "files",
    "pagesCount": 17,
    "componentsCount": 106,
    "fileSize": "42.7 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-stone-900 via-stone-800 to-stone-700",
    "coverType": "editorial",
    "gallery": [
      {
        "title": "Editorial Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Media-rich editorial design uniting keynote sizzle reels, podcast appearances, published books, and newsletter subscriptions"
      },
      {
        "title": "Keynote Reel & Highlights Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Top Newsletter Essays & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Crafted around a high-fashion editorial typography grid reminiscent of contemporary print publications, this high-performance system empowers Keynote speakers, industry influencers, content creators, and authors to effortlessly consolidate podcasts, newsletters, speaking engagements, and books into one authoritative digital headquarters. Built for speed and fluid responsiveness on Next.js, Tailwind CSS, YouTube API, ConvertKit, it captivates visitors with Media-rich editorial design uniting keynote sizzle reels, podcast appearances, published books, and newsletter subscriptions. The production-ready layout comes loaded with Authoritative Media Hero, Keynote Reel & Highlights, Top Newsletter Essays, engineered to convert hiring managers and high-ticket clients on contact.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Editorial design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-123",
    "image": "assets/t123.jpg",
    "title": "Lumina \u2014 Editorial & Commercial Photography Stories",
    "category": "Photographer",
    "style": "Photography-focused",
    "targetAudience": "Commercial photographers, editorial documentarians, and visual storytellers",
    "visualConcept": "Full-bleed edge-to-edge photo layout with customizable dark/light framing, EXIF metadata overlays, and client proofing",
    "sections": [
      "Cinematic Fullscreen Hero",
      "Editorial Photo Stories",
      "Commercial Lookbooks",
      "EXIF Camera Specs",
      "Client Client List",
      "Book a Shoot"
    ],
    "technology": [
      "React",
      "Next.js Image",
      "Tailwind CSS",
      "PhotoSwipe"
    ],
    "originalPrice": 3299,
    "discount": 20,
    "tags": [
      "Photographer",
      "Photography-focused",
      "Editorial",
      "Visual Stories"
    ],
    "likes": 10975,
    "duplicates": 7671,
    "type": "files",
    "pagesCount": 20,
    "componentsCount": 116,
    "fileSize": "21.8 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-neutral-950 via-zinc-900 to-stone-900",
    "coverType": "photography",
    "gallery": [
      {
        "title": "Photography-focused Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Full-bleed edge-to-edge photo layout with customizable dark/light framing, EXIF metadata overlays, and client proofing"
      },
      {
        "title": "Editorial Photo Stories Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Commercial Lookbooks & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Featuring a cinematic gallery-first viewport crafted around edge-to-edge photography, deep blacks, and flawless color rendition, Lumina \u2014 Editorial & Commercial Photography Stories delivers an unmissable digital presence tailored for Commercial photographers, editorial documentarians, and visual storytellers who demand to display high-resolution photography collections with cinematic full-bleed layouts and color-accurate viewports. Built for speed and fluid responsiveness on React, Next.js Image, Tailwind CSS, PhotoSwipe, it captivates visitors with Full-bleed edge-to-edge photo layout with customizable dark/light framing, EXIF metadata overlays, and client proofing. Equipped with Cinematic Fullscreen Hero, Editorial Photo Stories, Commercial Lookbooks, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Photography-focused design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-124",
    "image": "assets/t124.jpg",
    "title": "SpatialOrbit \u2014 Real-Time Three.js Virtual Worlds",
    "category": "3D Developer",
    "style": "3D",
    "targetAudience": "Three.js engineers, WebXR creators, and spatial web architects",
    "visualConcept": "Interactive 3D model inspection stage with dynamic PBR lighting controls, material toggles, and WebXR readiness",
    "sections": [
      "Interactive 3D Stage Hero",
      "Real-Time Model Viewer",
      "Spatial Lighting Controls",
      "Shader Performance Benchmarks",
      "Client 3D Installations",
      "Start 3D Project"
    ],
    "technology": [
      "Three.js",
      "React Three Fiber",
      "WebXR",
      "GLTF",
      "Tailwind CSS"
    ],
    "originalPrice": 4599,
    "discount": 25,
    "tags": [
      "3D Developer",
      "3D",
      "Three.js",
      "Spatial Computing"
    ],
    "likes": 13211,
    "duplicates": 12158,
    "type": "files",
    "pagesCount": 13,
    "componentsCount": 62,
    "fileSize": "23.7 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-rose-600 to-orange-500",
    "coverType": "spatial3d",
    "gallery": [
      {
        "title": "3D Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Interactive 3D model inspection stage with dynamic PBR lighting controls, material toggles, and WebXR readiness"
      },
      {
        "title": "Real-Time Model Viewer Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Spatial Lighting Controls & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Engineered with a fully interactive spatial 3D canvas allowing visitors to orbit, zoom, and inspect interactive virtual assets, this signature portfolio is custom-tailored for Three.js engineers, WebXR creators, and spatial web architects aiming to deliver browser-based 3D simulations, photorealistic GLTF model inspections, and spatial computing demos. Leveraging modern Three.js, React Three Fiber, WebXR, GLTF, Tailwind CSS, the architecture elevates your brand through Interactive 3D model inspection stage with dynamic PBR lighting controls, material toggles, and WebXR readiness. Includes dedicated sections for Interactive 3D Stage Hero, Real-Time Model Viewer, Spatial Lighting Controls, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this 3D design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-125",
    "image": "assets/t125.jpg",
    "title": "ShaderCore \u2014 WebGPU Physics & Compute Shaders",
    "category": "WebGL Developer",
    "style": "Cyberpunk",
    "targetAudience": "GPU shader artists, WebGL/WebGPU specialists, and visual computing developers",
    "visualConcept": "High-octane shader terminal running 60fps GPU compute particle physics, mathematical noise surfaces, and FPS telemetry",
    "sections": [
      "Real-Time Shader Viewport",
      "Interactive Particle Physics",
      "Mathematical Surface Generators",
      "Frame-Timing Telemetry",
      "Commercial Work",
      "Hire WebGL Specialist"
    ],
    "technology": [
      "WebGPU",
      "WebGL 2.0",
      "GLSL",
      "Three.js",
      "Tailwind CSS"
    ],
    "originalPrice": 4799,
    "discount": 20,
    "tags": [
      "WebGL Developer",
      "Cyberpunk",
      "WebGPU",
      "GLSL Shaders"
    ],
    "likes": 10633,
    "duplicates": 7204,
    "type": "files",
    "pagesCount": 11,
    "componentsCount": 97,
    "fileSize": "36.3 MB",
    "updatedAt": "Today",
    "license": "Standard Commercial",
    "gradient": "from-pink-600 via-purple-900 to-cyan-500",
    "coverType": "cyberpunk",
    "gallery": [
      {
        "title": "Cyberpunk Hero & Navigation",
        "subtitle": "Adaptive viewport featuring High-octane shader terminal running 60fps GPU compute particle physics, mathematical noise surfaces, and FPS telemetry"
      },
      {
        "title": "Interactive Particle Physics Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Mathematical Surface Generators & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Featuring a high-octane neo-Tokyo cyberpunk visual language with acidic neon glows, chromatic aberration, and glitch accents, ShaderCore \u2014 WebGPU Physics & Compute Shaders delivers an unmissable digital presence tailored for GPU shader artists, WebGL/WebGPU specialists, and visual computing developers who demand to showcase high-framerate GPU shaders, physics-based simulations, and interactive computational graphics. Under the hood, an ultra-fast WebGPU, WebGL 2.0, GLSL, Three.js, Tailwind CSS foundation powers responsive interactions, highlighting High-octane shader terminal running 60fps GPU compute particle physics, mathematical noise surfaces, and FPS telemetry. Equipped with Real-Time Shader Viewport, Interactive Particle Physics, Mathematical Surface Generators, this showcase delivers an airtight professional narrative that accelerates your career trajectory.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Cyberpunk design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-126",
    "image": "assets/t126.jpg",
    "title": "PulseMotion \u2014 Expressive Kinetic Interactions & UX",
    "category": "Interactive Designer",
    "style": "Creative",
    "targetAudience": "Interaction designers, digital product animators, and tactile UX engineers",
    "visualConcept": "Playful kinetic typography with cursor physics, tactile fluid gestures, and interactive design token demos",
    "sections": [
      "Kinetic Interaction Hero",
      "Gesture Playground",
      "Interactive Micro-Delights",
      "Fluid Scroll Case Studies",
      "Design System Interactions",
      "Let's Collaborate"
    ],
    "technology": [
      "Framer Motion",
      "GSAP",
      "React",
      "Lenis Scroll",
      "Tailwind CSS"
    ],
    "originalPrice": 3399,
    "discount": 20,
    "tags": [
      "Interactive Designer",
      "Creative",
      "Kinetic",
      "Micro-Interactions"
    ],
    "likes": 12096,
    "duplicates": 26791,
    "type": "files",
    "pagesCount": 17,
    "componentsCount": 84,
    "fileSize": "40.7 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-orange-500 via-pink-500 to-yellow-400",
    "coverType": "creative",
    "gallery": [
      {
        "title": "Creative Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Playful kinetic typography with cursor physics, tactile fluid gestures, and interactive design token demos"
      },
      {
        "title": "Gesture Playground Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Interactive Micro-Delights & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Built with a unconventional artistic canvas bursting with experimental asymmetrical layouts and vibrant expressive energy, this turnkey showcase provides Interaction designers, digital product animators, and tactile UX engineers the competitive edge required to bring static design to life through fluid physics-based gestures, haptic feedback, and delightful storytelling. Leveraging modern Framer Motion, GSAP, React, Lenis Scroll, Tailwind CSS, the architecture elevates your brand through Playful kinetic typography with cursor physics, tactile fluid gestures, and interactive design token demos. The production-ready layout comes loaded with Kinetic Interaction Hero, Gesture Playground, Interactive Micro-Delights, engineered to convert hiring managers and high-ticket clients on contact.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Creative design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  },
  {
    "id": "ff-127",
    "image": "assets/t127.jpg",
    "title": "NexSys \u2014 Experiential R&D & Physical Computing Labs",
    "category": "Creative Technologist",
    "style": "Futuristic",
    "targetAudience": "R&D engineers, physical computing innovators, and experiential media inventors",
    "visualConcept": "Sci-fi laboratory interface connecting physical IoT sensor telemetry, Web Audio synthesizers, and generative visuals",
    "sections": [
      "Experimental R&D Stage",
      "Interactive Sensor Installations",
      "Generative Audio-Visual Experiments",
      "Patents & Prototypes",
      "Lab Retrospective",
      "Inquire for R&D"
    ],
    "technology": [
      "Next.js",
      "OpenCV",
      "Web Audio API",
      "Three.js",
      "Arduino/IoT"
    ],
    "originalPrice": 4299,
    "discount": 25,
    "tags": [
      "Creative Technologist",
      "Futuristic",
      "Experiential",
      "Physical Computing"
    ],
    "likes": 13357,
    "duplicates": 44586,
    "type": "files",
    "pagesCount": 17,
    "componentsCount": 91,
    "fileSize": "40.7 MB",
    "updatedAt": "Just now",
    "license": "Standard Commercial",
    "gradient": "from-cyan-900 via-blue-950 to-neutral-950",
    "coverType": "futuristic",
    "gallery": [
      {
        "title": "Futuristic Hero & Navigation",
        "subtitle": "Adaptive viewport featuring Sci-fi laboratory interface connecting physical IoT sensor telemetry, Web Audio synthesizers, and generative visuals"
      },
      {
        "title": "Interactive Sensor Installations Breakdown",
        "subtitle": "In-depth presentation framework highlighting performance & metrics"
      },
      {
        "title": "Generative Audio-Visual Experiments & Contact",
        "subtitle": "Interactive component architecture with WhatsApp consultation trigger"
      }
    ],
    "description": "Built with a sleek sci-fi cockpit aesthetic with HUD telemetry readouts, neon line work, and angular geometry, this turnkey showcase provides R&D engineers, physical computing innovators, and experiential media inventors the competitive edge required to bridge physical sensors, generative algorithms, and digital interfaces into boundary-pushing installations. Built for speed and fluid responsiveness on Next.js, OpenCV, Web Audio API, Three.js, Arduino/IoT, it captivates visitors with Sci-fi laboratory interface connecting physical IoT sensor telemetry, Web Audio synthesizers, and generative visuals. Includes dedicated sections for Experimental R&D Stage, Interactive Sensor Installations, Generative Audio-Visual Experiments, plus an integrated 1-click WhatsApp consultation flow for immediate client conversions.",
    "isNew": true,
    "comments": [
      {
        "user": "FolioForge Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
        "time": "Recently built",
        "text": "FolioForge tailored this Futuristic design for my portfolio. Inquiries jumped significantly within the first week!"
      }
    ]
  }
];

// --- Application State ---
let currentSearch = "";
let currentTag = "All";
let currentPrice = "all";
let currentSort = "popular";
let activeModalTemplate = null;
let activePricingTemplate = null;
let currentModalSlide = 0;
const ITEMS_PER_PAGE = 21;
let currentPage = 1;

// Local storage state for favorites & bookmarks
let userLikedMap = JSON.parse(localStorage.getItem("folioforge_likes") || "{}");
let userBookmarkMap = JSON.parse(localStorage.getItem("folioforge_bookmarks") || "{}");

// --- Helper Functions ---
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}

// --- Dedicated Portfolio Pricing / Confirmation Modal Handlers ---
function openPortfolioPricingModal(id) {
  const template = TEMPLATES_DATA.find(t => t.id === id);
  if (!template) return;

  activePricingTemplate = template;

  const modal = document.getElementById("pricing-modal");
  const img = document.getElementById("pricing-modal-image");
  const title = document.getElementById("pricing-modal-title");
  const descEl = document.getElementById("pricing-modal-desc");
  const originalEl = document.getElementById("pricing-modal-original");
  const discountEl = document.getElementById("pricing-modal-discount");
  const finalEl = document.getElementById("pricing-modal-final");

  const finalPrice = calculateFinalPrice(template.originalPrice, template.discount);

  if (img) {
    img.src = template.image;
    img.style.display = "block";
    img.onerror = () => { img.style.display = "none"; };
  }
  if (title) title.innerText = template.title;
  if (descEl && template.description) descEl.innerText = template.description;
  if (originalEl) originalEl.innerText = formatINR(template.originalPrice);
  if (discountEl) discountEl.innerText = `${template.discount}% OFF`;
  if (finalEl) finalEl.innerText = formatINR(finalPrice);

  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) lucide.createIcons();
}

function closePortfolioPricingModal() {
  const modal = document.getElementById("pricing-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
  const previewModal = document.getElementById("preview-modal");
  if (!previewModal || previewModal.classList.contains("hidden")) {
    document.body.style.overflow = "auto";
  }
  activePricingTemplate = null;
}

function openWhatsAppForCurrentPricingModal() {
  if (activePricingTemplate) {
    openWhatsApp(activePricingTemplate.id);
  }
}

// --- Pagination Controls & Handlers (21 per page) ---
function goToPage(page) {
  currentPage = page;
  renderTemplates();
  const grid = document.getElementById("templates-grid");
  if (grid) {
    const yOffset = -80;
    const y = grid.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }
}

function renderPagination(totalItems, totalPages) {
  const pagContainer = document.getElementById("pagination-container");
  if (!pagContainer) return;

  if (totalPages <= 1) {
    pagContainer.innerHTML = "";
    return;
  }

  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);

  let pageNumbersHtml = "";
  for (let p = 1; p <= totalPages; p++) {
    const isActive = p === currentPage;
    pageNumbersHtml += `
      <button 
        onclick="goToPage(${p})" 
        class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
          isActive 
            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm' 
            : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
        }"
        aria-label="Go to page ${p}"
      >
        ${p}
      </button>
    `;
  }

  pagContainer.innerHTML = `
    <div class="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-neutral-200 dark:border-neutral-800">
      <!-- Info label -->
      <div class="text-xs text-neutral-500 dark:text-neutral-400 order-2 sm:order-1 text-center sm:text-left">
        Showing <span class="font-semibold text-neutral-900 dark:text-white">${startItem}–${endItem}</span> of <span class="font-semibold text-neutral-900 dark:text-white">${totalItems}</span> designs (Page ${currentPage} of ${totalPages})
      </div>

      <!-- Navigation buttons & Next Page -->
      <div class="flex items-center gap-2 order-1 sm:order-2 flex-wrap justify-center">
        <!-- Previous Button -->
        <button 
          onclick="goToPage(${currentPage - 1})" 
          ${currentPage === 1 ? 'disabled' : ''}
          class="px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentPage === 1 
              ? 'opacity-35 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800 text-neutral-400' 
              : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 active:scale-95 cursor-pointer shadow-sm'
          }"
        >
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
          <span>Previous</span>
        </button>

        <!-- Page Numbers -->
        <div class="flex items-center gap-1">
          ${pageNumbersHtml}
        </div>

        <!-- Next Page Button -->
        <button 
          onclick="goToPage(${currentPage + 1})" 
          ${currentPage === totalPages ? 'disabled' : ''}
          class="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            currentPage === totalPages 
              ? 'opacity-35 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800 text-neutral-400' 
              : 'bg-[#0D99FF] hover:bg-[#007BE5] text-white active:scale-95 cursor-pointer shadow-md shadow-[#0D99FF]/25'
          }"
        >
          <span>Next Page</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;
}

// --- Render Template Cards Feed ---
function renderTemplates() {
  const container = document.getElementById("templates-grid");
  const countBadge = document.getElementById("results-count");
  if (!container) return;

  // Filter
  const filtered = TEMPLATES_DATA.filter(t => {
    // Search query filter (matches title, tags, category, style, and description)
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const matchTitle = t.title && t.title.toLowerCase().includes(q);
      const matchTag = t.tags && t.tags.some(tag => tag.toLowerCase().includes(q));
      const matchCat = t.category && t.category.toLowerCase().includes(q);
      const matchStyle = t.style && t.style.toLowerCase().includes(q);
      const matchDesc = t.description && t.description.toLowerCase().includes(q);
      if (!matchTitle && !matchTag && !matchCat && !matchStyle && !matchDesc) return false;
    }

    // Dynamic Price Filter (using finalPrice)
    const finalPrice = calculateFinalPrice(t.originalPrice, t.discount);
    if (currentPrice === "under2500" && finalPrice >= 2500) return false;
    if (currentPrice === "2500plus" && finalPrice < 2500) return false;

    // Tag filter
    if (currentTag !== "All" && !t.tags.includes(currentTag)) return false;

    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    if (currentSort === "popular") return b.likes - a.likes;
    if (currentSort === "cloned") return b.duplicates - a.duplicates;
    const finalA = calculateFinalPrice(a.originalPrice, a.discount);
    const finalB = calculateFinalPrice(b.originalPrice, b.discount);
    if (currentSort === "price-low") return finalA - finalB;
    if (currentSort === "price-high") return finalB - finalA;
    return b.likes - a.likes;
  });

  // Update count badge
  if (countBadge) {
    countBadge.innerText = `${filtered.length} designs`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 mb-4">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-lg font-semibold mb-1">No designs found</h3>
        <p class="text-sm text-neutral-500 max-w-sm mx-auto">Try adjusting your search terms or clearing some filters to see more results.</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Reset All Filters</button>
      </div>
    `;
    const pagContainer = document.getElementById("pagination-container");
    if (pagContainer) pagContainer.innerHTML = "";
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Pagination calculation: exactly 21 designs per page
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedItems = filtered.slice(startIndex, endIndex);

  // Render 21 cards for current page
  container.innerHTML = paginatedItems.map(item => {
    const isLiked = !!userLikedMap[item.id];
    const isBookmarked = !!userBookmarkMap[item.id];
    const displayLikes = item.likes + (isLiked ? 1 : 0);
    const finalPrice = calculateFinalPrice(item.originalPrice, item.discount);

    return `
      <div class="template-card group bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E6E6] dark:border-[#2C2C2C] overflow-hidden flex flex-col cursor-pointer" onclick="openTemplateModal('${item.id}')">
        <!-- Thumbnail Cover Container -->
        <div class="preview-container relative w-full aspect-[16/10] bg-neutral-100 dark:bg-[#181818] overflow-hidden rounded-t-xl">
          <img 
            src="${item.image}" 
            alt="${item.title} portfolio design preview" 
            class="template-preview-img w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            loading="lazy"
            onerror="handleImageError(this, '${item.id}')"
          />
          
          <!-- Hover Overlay Action Bar -->
          <div class="hover-actions absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-3 p-4">
            <button onclick="event.stopPropagation(); openTemplateModal('${item.id}')" class="px-4 py-2 bg-white text-neutral-900 rounded-lg text-xs font-semibold shadow-lg hover:bg-neutral-100 flex items-center gap-1.5 transition-transform active:scale-95">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Preview
            </button>
            <button onclick="event.stopPropagation(); openPortfolioPricingModal('${item.id}')" class="px-4 py-2 bg-[#0D99FF] text-white rounded-lg text-xs font-semibold shadow-lg hover:bg-[#007BE5] flex items-center gap-1.5 transition-transform active:scale-95">
              <span>Build My Portfolio</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>

          <!-- Discount Pill Badge on Cover -->
          <div class="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-bold tracking-tight bg-neutral-950/85 dark:bg-black/85 text-emerald-400 border border-emerald-500/25 backdrop-blur-md shadow-sm">
            ${item.discount}% OFF
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-4 flex flex-col flex-1 justify-between">
          <div>
            <!-- Tag & Service Badge (NO Author info) -->
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">${item.tags[0] || 'Design'}</span>
              <span class="text-neutral-300 dark:text-neutral-700">•</span>
              <span class="text-[11px] font-medium text-[#0D99FF]">Custom Portfolio Website</span>
            </div>

            <!-- Template Title (Strictly preserved) -->
            <h3 class="font-semibold text-sm text-[#1E1E1E] dark:text-[#F5F5F5] group-hover:text-[#0D99FF] transition-colors line-clamp-1 mb-2">
              ${item.title}
            </h3>

            <!-- Template Description Preview -->
            <p class="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-3">
              ${item.description || ''}
            </p>

            <!-- Price & Discount Row -->
            <div class="flex items-baseline gap-2 mb-3">
              <span class="text-base font-extrabold text-neutral-900 dark:text-white">${formatINR(finalPrice)}</span>
              <span class="text-xs text-neutral-400 dark:text-neutral-500 line-through font-medium">${formatINR(item.originalPrice)}</span>
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                ${item.discount}% OFF
              </span>
            </div>

            <!-- Prominent Primary CTA Button -->
            <button 
              onclick="event.stopPropagation(); openPortfolioPricingModal('${item.id}')" 
              class="w-full py-2 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-900 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-[0.98] group/btn mb-2.5"
            >
              <span>Build My Portfolio</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"></i>
            </button>
          </div>

          <!-- Stats & Interaction Footer -->
          <div class="flex items-center justify-between pt-2 border-t border-[#F0F0F0] dark:border-[#2A2A2A] text-xs text-[#757575] dark:text-[#8E8E8E]">
            <div class="flex items-center gap-3">
              <!-- Projects / Duplicates count -->
              <span class="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition-colors" title="${item.duplicates} client portfolios built">
                <i data-lucide="layers" class="w-3.5 h-3.5"></i>
                <span>${formatNumber(item.duplicates)} built</span>
              </span>
              
              <!-- Likes Button -->
              <button onclick="event.stopPropagation(); toggleLike('${item.id}')" class="flex items-center gap-1 hover:text-red-500 transition-colors ${isLiked ? 'text-red-500 font-medium' : ''}">
                <i data-lucide="heart" class="w-3.5 h-3.5 ${isLiked ? 'liked-heart fill-current' : ''}"></i>
                <span>${formatNumber(displayLikes)}</span>
              </button>
            </div>

            <!-- Bookmark Button -->
            <button onclick="event.stopPropagation(); toggleBookmark('${item.id}')" class="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${isBookmarked ? 'text-[#0D99FF]' : 'text-neutral-400'}" title="Save design to favorites">
              <i data-lucide="bookmark" class="w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Render pagination controls (Next Page button)
  renderPagination(filtered.length, totalPages);

  if (window.lucide) {
    lucide.createIcons();
  }
}

// --- Toast System ---
function showToast(message, icon = "check-circle") {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");
  if (!toast || !toastMsg) return;

  toastMsg.innerText = message;
  toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 2800);
}

// --- Actions: Like, Bookmark ---
function toggleLike(id) {
  if (userLikedMap[id]) {
    delete userLikedMap[id];
    showToast("Removed from liked designs");
  } else {
    userLikedMap[id] = true;
    showToast("Liked! Added to your FolioForge favorites", "heart");
  }
  localStorage.setItem("folioforge_likes", JSON.stringify(userLikedMap));
  renderTemplates();
}

function toggleBookmark(id) {
  if (userBookmarkMap[id]) {
    delete userBookmarkMap[id];
    showToast("Removed from saved designs");
  } else {
    userBookmarkMap[id] = true;
    showToast("Saved to your FolioForge shortlist");
  }
  localStorage.setItem("folioforge_bookmarks", JSON.stringify(userBookmarkMap));
  renderTemplates();
}

// --- Filter & Search Handlers ---
function handleSearch(query) {
  currentSearch = query;
  currentPage = 1;
  renderTemplates();
}

function setTag(tag) {
  currentTag = tag;
  currentPage = 1;
  document.querySelectorAll(".tag-pill").forEach(pill => {
    if (pill.dataset.tag === tag) {
      pill.classList.remove("bg-neutral-100", "dark:bg-neutral-800", "text-neutral-700", "dark:text-neutral-300");
      pill.classList.add("bg-neutral-900", "text-white", "dark:bg-white", "dark:text-neutral-900");
    } else {
      pill.classList.add("bg-neutral-100", "dark:bg-neutral-800", "text-neutral-700", "dark:text-neutral-300");
      pill.classList.remove("bg-neutral-900", "text-white", "dark:bg-white", "dark:text-neutral-900");
    }
  });
  renderTemplates();
}

function setPrice(price) {
  currentPrice = price;
  currentPage = 1;
  document.querySelectorAll(".price-btn").forEach(btn => {
    if (btn.dataset.price === price) {
      btn.classList.add("bg-white", "dark:bg-neutral-700", "shadow-sm", "text-neutral-900", "dark:text-white");
      btn.classList.remove("text-neutral-600", "dark:text-neutral-400");
    } else {
      btn.classList.remove("bg-white", "dark:bg-neutral-700", "shadow-sm", "text-neutral-900", "dark:text-white");
      btn.classList.add("text-neutral-600", "dark:text-neutral-400");
    }
  });
  renderTemplates();
}

function setSort(sortVal) {
  currentSort = sortVal;
  currentPage = 1;
  renderTemplates();
}

function resetFilters() {
  currentSearch = "";
  currentTag = "All";
  currentPrice = "all";
  currentPage = 1;
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  setTag("All");
  setPrice("all");
  renderTemplates();
}

// --- Detail Modal Open / Close / Tabs ---
function openTemplateModal(id) {
  const t = TEMPLATES_DATA.find(x => x.id === id);
  if (!t) return;

  activeModalTemplate = t;
  currentModalSlide = 0;

  const modal = document.getElementById("preview-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalStats = document.getElementById("modal-stats");
  const modalTags = document.getElementById("modal-tags");
  const modalSpecs = document.getElementById("modal-specs");

  const finalPrice = calculateFinalPrice(t.originalPrice, t.discount);

  if (modalTitle) modalTitle.innerText = t.title;
  if (modalDesc) modalDesc.innerText = t.description;

  if (modalStats) {
    modalStats.innerHTML = `
      <div class="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
        <i data-lucide="layers" class="w-3.5 h-3.5"></i>
        <span>${formatNumber(t.duplicates)} built</span>
      </div>
      <div class="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
        <i data-lucide="heart" class="w-3.5 h-3.5"></i>
        <span>${formatNumber(t.likes)} likes</span>
      </div>
      <div class="flex items-baseline gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
        <span class="text-xs font-extrabold text-emerald-700 dark:text-emerald-300">${formatINR(finalPrice)}</span>
        <span class="text-[11px] text-neutral-400 line-through">${formatINR(t.originalPrice)}</span>
        <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">${t.discount}% OFF</span>
      </div>
    `;
  }

  if (modalTags) {
    modalTags.innerHTML = t.tags.map(tag => `
      <span class="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">
        ${tag}
      </span>
    `).join("");
  }

  if (modalSpecs) {
    modalSpecs.innerHTML = `
      <div class="flex justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800">
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
      </div>` : ''}
      <div class="flex justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800">
        <span class="text-neutral-500">Pages Included</span>
        <span class="font-medium text-neutral-900 dark:text-neutral-200">${t.pagesCount} Responsive Sections</span>
      </div>
      <div class="flex justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800">
        <span class="text-neutral-500">Components</span>
        <span class="font-medium text-neutral-900 dark:text-neutral-200">${t.componentsCount} Custom Elements</span>
      </div>
      <div class="flex justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800">
        <span class="text-neutral-500">Delivery Timeline</span>
        <span class="font-medium text-neutral-900 dark:text-neutral-200">3–5 Business Days</span>
      </div>
      <div class="flex justify-between text-xs py-1">
        <span class="text-neutral-500">Domain &amp; Hosting</span>
        <span class="font-medium text-emerald-600 dark:text-emerald-400">Included Ready</span>
      </div>
    `;
  }

  renderModalSlide();
  renderModalComments();

  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) lucide.createIcons();
}

function renderModalSlide() {
  if (!activeModalTemplate) return;
  const slideContainer = document.getElementById("modal-slide-container");
  const slideTabs = document.getElementById("modal-slide-tabs");
  if (!slideContainer) return;

  const slides = activeModalTemplate.gallery || [{ title: "Overview", subtitle: "Full preview" }];
  const current = slides[currentModalSlide] || slides[0];

  slideContainer.innerHTML = `
    <div class="w-full h-full flex flex-col items-center justify-center relative p-6">
      <div class="w-full max-w-2xl aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-neutral-700/50 bg-[#121212] flex items-center justify-center">
        <img 
          src="${activeModalTemplate.image}" 
          alt="${activeModalTemplate.title} preview slide" 
          class="w-full h-full object-cover object-top"
          onerror="handleModalImageError(this, '${activeModalTemplate.id}')"
        />
      </div>
      <div class="mt-4 text-center">
        <div class="font-medium text-sm text-white">${current.title}</div>
        <div class="text-xs text-neutral-400 mt-0.5">${current.subtitle}</div>
      </div>
    </div>
  `;

  if (slideTabs) {
    slideTabs.innerHTML = slides.map((s, idx) => `
      <button onclick="switchModalSlide(${idx})" class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
        idx === currentModalSlide 
          ? 'bg-white/20 text-white font-semibold' 
          : 'text-neutral-400 hover:text-white hover:bg-white/10'
      }">
        ${s.title}
      </button>
    `).join("");
  }
}

function switchModalSlide(idx) {
  currentModalSlide = idx;
  renderModalSlide();
}

function renderModalComments() {
  if (!activeModalTemplate) return;
  const list = document.getElementById("modal-comments-list");
  if (!list) return;

  list.innerHTML = (activeModalTemplate.comments || []).map(c => `
    <div class="flex gap-3 text-xs">
      <img src="${c.avatar}" alt="${c.user}" class="w-7 h-7 rounded-full object-cover flex-shrink-0"/>
      <div>
        <div class="flex items-center gap-2">
          <span class="font-medium text-neutral-900 dark:text-neutral-100">${c.user}</span>
          <span class="text-neutral-400 text-[10px]">${c.time}</span>
        </div>
        <p class="text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed">${c.text}</p>
      </div>
    </div>
  `).join("");
}

function submitComment() {
  const input = document.getElementById("new-comment-input");
  if (!input || !input.value.trim() || !activeModalTemplate) return;

  activeModalTemplate.comments.unshift({
    user: "You",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
    time: "Just now",
    text: input.value.trim()
  });

  input.value = "";
  renderModalComments();
  showToast("Comment posted!");
}

function closeTemplateModal() {
  const modal = document.getElementById("preview-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
  const pricingModal = document.getElementById("pricing-modal");
  if (!pricingModal || pricingModal.classList.contains("hidden")) {
    document.body.style.overflow = "auto";
  }
  activeModalTemplate = null;
}

// --- Dark/Light Theme Switching ---
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const target = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  localStorage.setItem("folioforge_theme", target);
  updateThemeIcon(target);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (theme === "dark") {
    icon.setAttribute("data-lucide", "sun");
  } else {
    icon.setAttribute("data-lucide", "moon");
  }
  if (window.lucide) lucide.createIcons();
}

// --- Initialize App on DOM Ready ---
document.addEventListener("DOMContentLoaded", () => {
  // Restore Theme
  const savedTheme = localStorage.getItem("folioforge_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Keyboard shortcut listeners
  document.addEventListener("keydown", (e) => {
    // Escape to close modals
    if (e.key === "Escape") {
      const pricingModal = document.getElementById("pricing-modal");
      if (pricingModal && !pricingModal.classList.contains("hidden")) {
        closePortfolioPricingModal();
        return;
      }
      closeTemplateModal();
    }
    // Command/Ctrl + K or '/' to focus search
    if ((e.metaKey || e.ctrlKey) && e.key === "k" || (e.key === "/" && document.activeElement.tagName !== "INPUT")) {
      e.preventDefault();
      const s = document.getElementById("search-input");
      if (s) s.focus();
    }
  });

  // Render initial contents
  renderTemplates();
});
