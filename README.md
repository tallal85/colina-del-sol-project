# Colina del Sol – Graffiti‑to‑Murals (GitHub Pages Site)

A lightweight, bilingual (EN/ES) advocacy site for the Smart Cities & Sustainability project.

## Quick Start (5 minutes)
1. **Create repo** `colina-del-sol-project` on GitHub.
2. Upload all files in this folder to the repo.
3. In **Settings → Pages**, set **Source = main / root**.
4. Visit your site at `https://YOUR_USERNAME.github.io/colina-del-sol-project/`.

## Customize
- **ArcGIS Dashboard**: in `index.html`, search for `YOUR_DASHBOARD_ID` and paste your dashboard embed URL.
- **YouTube Video**: replace `VIDEO_ID` with your video’s ID.
- **CTA links**: replace the dummy links under `#cta` with your volunteer/donate/petition URLs.
- **Images**: put JPG/PNG files in `/images` and update `<img>` sources as needed.
- **Text**: edit the English/Spanish copy directly in `index.html` (look for elements with `class="lang en"` and `class="lang es"`).

## Structure
```
/index.html         # single-page site with sections
/css/style.css      # theme
/js/main.js         # language toggle, mobile nav, year
/images/            # assets
```

## Notes
- The language toggle swaps visibility between English and Spanish content.
- Site is responsive and works on mobile.
- For SDG icons, you can add images under `/images` and insert them in the Data section.
