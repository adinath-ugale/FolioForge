# FolioForge ⚡

> **Choose a design. We build the portfolio.**  
> A high-converting, premier custom portfolio building service tailored for software engineers, designers, AI practitioners, creative technologists, and ambitious professionals.

---

## 🌟 Overview

**FolioForge** bridges the gap between static design templates and production-ready personal websites. Rather than selling downloadable design files that require complex setup, FolioForge provides an end-to-end custom development and deployment service:

1. **Browse & Choose**: Clients select from **127 original portfolio designs** spanning 27 categories and 17 design aesthetics.
2. **Instant Consultation**: One-click integration with WhatsApp initiates a direct conversation with pre-calculated transparent pricing, discounts, and selected template metadata.
3. **Turnkey Delivery**: FolioForge custom-builds, personalizes, optimizes (100/100 Lighthouse performance), and deploys the portfolio with custom domain setup in 3–5 business days.

---

## 🚀 Key Features

### 1. 127 Original Portfolio Designs
- **27 Professional Categories**: Developer, Software Engineer, Full Stack Developer, Frontend Developer, Backend Developer, AI Engineer, ML Engineer, Data Scientist, Data Analyst, Generative AI, UI/UX Designer, Product Designer, Graphic Designer, Creative Developer, Creative Director, Digital Artist, Student, Engineering Student, Fresh Graduate, Freelancer, Consultant, Personal Brand, Photographer, 3D Developer, WebGL Developer, Interactive Designer, Creative Technologist.
- **17 Design Styles**: Minimal, Dark, Light, Editorial, Glassmorphism, Bento Grid, Neo-Brutalist, Gradient, Luxury, Futuristic, AI-inspired, 3D, Interactive, Cyberpunk, Modern Corporate, Creative, Photography-focused.

### 2. Automated Template & Description Generation Engine
- **Programmatic Generator (`templateGenerator.js`)**: Dynamic engine that can generate new original portfolio templates on demand.
- **Algorithmic Description Synthesizer**: Produces tailored, professional, 2–3 sentence descriptions based on title, category, design style, target audience, visual concept, sections, and tech stack—ensuring **100% unique descriptions** with zero boilerplate duplication.
- **Live In-Browser Studio Action**: "Auto-Generate Design" button in the header toolbar dynamically creates new templates on the fly and integrates them directly into the catalog.

### 3. WhatsApp Click-to-Chat Order Flow
- **Direct Conversion Pipeline**: Seamlessly triggers WhatsApp (`+91 92263 93146`) using standard `wa.me` URL schemes.
- **Dynamic Pricing & Discount Calculation**:
  $$\text{Final Price} = \text{round}\left(\text{Original Price} - \frac{\text{Original Price} \times \text{Discount}}{100}\right)$$
- Pre-filled message includes selected template title, original price, discount percentage, and final price in Indian Rupee (`₹`).

### 4. High-Performance Pagination & UX
- **Strict 21 Cards Per Page**: Clean, uncluttered layout with dynamic multi-page navigation controls and `Next Page →` button.
- **Instant Search & Filter**: Real-time filtering across titles, tags, categories, design styles, and descriptions.
- **Light & Dark Mode**: Ergonomic obsidian dark mode and crisp sunlit light mode with localStorage persistence.
- **Interactive Modals**: Full-screen slide inspection, design tokens, technical specifications, and dedicated pricing confirmation modal.

---

## 📁 Project Structure

```text
folioforge/
├── index.html               # Main application markup & Tailwind UI layout
├── app.js                   # State management, 127-template dataset, modals & pagination
├── templateGenerator.js     # Template generator & algorithmic description synthesizer
├── styles.css               # Custom design system styling, dark mode tokens & animations
├── run_server.py            # Zero-dependency local HTTP development server
├── README.md                # Comprehensive documentation
└── assets/                  # High-quality preview images for all 127 templates
    ├── t1.png               # Template 1 preview
    ├── t2.jpg               # Template 2 preview
    ├── ...
    └── t127.jpg             # Template 127 preview
```

---

## 🛠️ Getting Started

### Prerequisites
- Any modern web browser (Chrome, Edge, Firefox, Safari)
- Optional: Python 3.x (for local development server) or Node.js

### Running Locally

1. **Clone or navigate to the directory**:
   ```bash
   cd folioforge
   ```

2. **Start the local server**:
   ```bash
   python run_server.py
   ```
   *The server will start at `http://localhost:8080/`.*

3. **Verify the server**:
   ```bash
   python run_server.py --test
   ```

---

## ⚡ Template Generation API (`FolioForgeGenerator`)

The generator engine exposes `window.FolioForgeGenerator` for browser and Node.js environments:

```javascript
// 1. Programmatically generate a new portfolio template
const newTemplate = FolioForgeGenerator.generatePortfolioTemplate({
  id: "ff-128",
  category: "AI Engineer",
  style: "Cyberpunk",
  title: "AcrobatAI — Multi-Agent Systems Folio"
});

// 2. Synthesize a bespoke matching description
const description = FolioForgeGenerator.generateTemplateDescription({
  id: "ff-128",
  title: "AcrobatAI — Multi-Agent Systems Folio",
  category: "AI Engineer",
  style: "Cyberpunk",
  targetAudience: "Autonomous AI Agent Researchers",
  technology: ["Next.js", "LangGraph", "Python", "Tailwind CSS"]
});

// 3. Dynamically add to the live FolioForge catalog
FolioForgeGenerator.addDynamicTemplate();
```

---

## 💼 Business & Pricing Model

| Metric | Range |
| :--- | :--- |
| **Price Point** | ₹1,999 – ₹4,999 |
| **Discounts** | 10% – 30% OFF |
| **Delivery Timeline** | 3 – 5 Business Days |
| **Includes** | Custom Development, Responsive Design, Domain & Hosting Setup, 100/100 Lighthouse Optimization |
| **Consultation** | Direct WhatsApp (`+91 92263 93146`) |

---

## 📄 License
Commercial License & Proprietary Design System © FolioForge. All rights reserved.
