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
├── index.html                # Main semantic single-page layout & SEO schema
├── sitemap.xml               # Search engine XML sitemap with Google Image metadata
├── robots.txt                # Search crawler configuration & sitemap pointer
├── README.md                 # Project documentation & deployment guide
├── manifest.json             # PWA web manifest
├── sw.js                     # Progressive web app service worker & cache
├── css/
│   └── style.css             # Modular CSS design system, variables & responsiveness
├── js/
│   └── main.js               # Bilingual dictionary, live status & UI interactions
└── assets/
    ├── ranju-sah.jpg         # Ranju Sah official portrait
    ├── ranju-press-mics.jpg  # Reporters Club national press conference
    ├── bhansar-andolan.jpg   # Bhansar customs movement rally
    ├── justice-aarti-sah.png # Aarti Sah justice protest
    ├── women-empowerment.jpg # Grassroots rural women dialogue
    ├── door-to-door-campaign.jpg # Parsa-2 constituency campaign
    ├── ajp-logo-red.png      # Official AJP election symbol (red backdrop)
    ├── ajp-logo-clean.png    # Official election symbol (transparent)
    └── favicon.png           # Browser tab favicon
```

---

## 🌐 Live Production & Search Engine URLs

- **Official Website:** `https://saimansah.github.io/Ranju/`
- **XML Sitemap:** `https://saimansah.github.io/Ranju/sitemap.xml`
- **Robots.txt:** `https://saimansah.github.io/Ranju/robots.txt`

---

## 👤 Credits & Attribution

- **Subject:** Ranju Sah (Central Office Secretary, Aam Janata Party)
- **Copyright:** Copyright claimed by Saiman. All rights reserved.
- **Design & Development:** Designed by Saiman Sah.
