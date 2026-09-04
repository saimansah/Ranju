# Ranju Sah (रन्जु साह) — Official Personal & Political Website

Modern, high-performance, responsive personal website for Nepalese political leader, sociologist, and activist **Ranju Sah (रन्जु साह / Ranju Kumari Sah)**, Central Office Secretary of the **Aam Janata Party (आम जनता पार्टी - AJP)**.

Optimized for 100% static hosting on **GitHub Pages** with **zero configuration** and **strictly under 100 files**.

---

## 🌟 Modern Frontend Architecture & Layers

1. **Foundational Core (The Holy Trinity):**
   - **Semantic HTML5:** `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` landmarks with accessibility ARIA tags.
   - **Modern CSS3:** CSS Custom Properties (CSS variables) for dynamic theming, responsive CSS Grid and Flexbox engines, glassmorphism (`backdrop-filter: blur(16px)`), reading progress scroll bar, and hover micro-transitions.
   - **ES6+ JavaScript:** Client-side bilingual dictionary engine, real-time Nepal Standard Time (UTC+5:45) availability calculator, touch-friendly navigation drawer, modal lightbox with carousel navigation (`ArrowLeft` / `ArrowRight`), and clipboard API toast feedback.

2. **Styling & Theme Engine:**
   - Dual Theme Support: Instant **Light Mode** & **Dark Mode** toggle with persistent `localStorage` preference.
   - Color Palette: Deep Crimson Red (`#D32F2F`), Rich Charcoal (`#0F172A`), and Clean Slate (`#F8FAFC`).

3. **Media & Visual Assets:**
   - 6 Authentic high-resolution photo integrations:
     - Reports Club National Press address (`assets/ranju-press-mics.jpg`)
     - Bhansar Bibhag Andolan customs reform rally (`assets/bhansar-andolan.jpg`)
     - Aarti Sah family justice solidarity protest (`assets/justice-aarti-sah.png`)
     - Grassroots rural women & community dialogue (`assets/women-empowerment.jpg`)
     - Door-to-door constituency outreach in Parsa-2 (`assets/door-to-door-campaign.jpg`)
     - Official public address podium (`assets/ranju-sah.jpg`)
     - Official election symbol: mobile phone on red square backdrop (`assets/ajp-logo-red.png` & `assets/ajp-logo-clean.png`).
   - Resolution-independent SVG iconography via FontAwesome 6.
   - Lightweight typography pairing Devanagari (`Mukta`, `Noto Sans Devanagari`) with modern sans (`Plus Jakarta Sans`, `Outfit`).

4. **Browser APIs & Storage:**
   - **Progressive Web App (PWA):** `manifest.json` and `sw.js` (Service Worker) enabling offline caching, mobile home-screen installability, and fast loading on low-bandwidth rural networks.
   - **Client Storage:** `localStorage` for language and theme persistence across sessions.
   - **Clipboard API:** 1-click copy for direct phone and email access.

5. **Metadata, SEO & Structured Data:**
   - **Schema.org JSON-LD:** Full Google Knowledge Graph schema (`Person`, `PoliticalParty`, `AlumniOf`, `PostalAddress`).
   - **Social Graph:** Open Graph (`og:image`, `og:title`, `og:description`) and Twitter Cards.
   - Native GitHub Pages deployment ready with `.nojekyll` and strictly under 100 files (15 total files).

---

## 📁 Project Structure

```
Ranju/
├── .nojekyll                 # Ensures GitHub Pages serves all assets directly
├── index.html                # Main semantic single-page layout
├── README.md                 # Project documentation & deployment guide
├── css/
│   └── style.css             # Modular CSS design system, variables & responsiveness
├── js/
│   └── main.js               # Bilingual dictionary, live status & UI interactions
└── assets/
    ├── ranju-sah.jpg         # Ranju Sah official portrait (Wikimedia Commons)
    ├── ajp-logo-red.png      # Official AJP election symbol (red backdrop)
    ├── ajp-logo-clean.png    # Official election symbol (transparent)
    └── favicon.png           # Browser tab favicon
```

Total files: **8 files** (Strictly under 100 files limit).

---

## 🚀 How to Deploy on GitHub Pages

1. **Initialize Git & Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial release of Ranju Sah official website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` / folder: `/ (root)`.
   - Click **Save**.

Your website will be live in ~30 seconds at:
`https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>/`

---

## 👤 Credits & Attribution

- **Subject:** Ranju Sah (Central Office Secretary, Aam Janata Party)
- **Copyright:** Copyright claimed by Saiman. All rights reserved.
- **Design & Development:** Designed by Saiman Sah.
