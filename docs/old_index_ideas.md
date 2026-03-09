# Old Site Summary — Reference for Redesign

## Business Identity

- **Company name:** KnowSun Consulting (also styled "Knowsun")
- **Tagline:** Data Science - Machine Learning - Software Architecture
- **Founded/active:** ~2013–2020 based on copyright and PhD date
- **Principal:** Dr. Daniel Zhou, PhD machine learning (UMich SI, 2013)
- **Offices:** Ann Arbor MI (HQ), New York NY, San Francisco CA

## Core Value Proposition

A boutique data science and software consulting firm rooted in academia (UMich) with access to top-tier talent from Michigan, Yale, Berkeley, Georgetown, Columbia, Stanford, Michigan State. Serves startups and institutional clients across retail, insurance, adtech, manufacturing. Positions itself as both a technical delivery partner and a strategic co-founder for early-stage startups.

---

## Services Offered (6 categories)

1. **Data Science & Machine Learning** — flagship service; advanced ML for industry clients
2. **WebApp Architect & Dev.** — full-stack development (RoR, Python, JS, Drupal)
3. **Drupal R&D** — module development since 2007; big data + ML integration with Drupal
4. **Recommender Systems R&D** — built on Apache Mahout and Drupal Recommender API; academic roots in Paul Resnick's lab
5. **Amazon Mechanical Turk R&D** — crowdsourcing, data labeling, Qualtrics integration
6. **Startup/Product R&D Consulting** — tech co-founder or consultant; NSF I-Corps trained

**Observation:** Services 3–5 (Drupal, MTurk, Recommender) are quite dated (2007–2015 era). The redesign should probably consolidate or modernize these, or drop them in favor of current AI/LLM-era offerings.

---

## Notable Clients / Case Studies

- **WorkitHealth** — $3.8M raised; Forbes/Fortune mentions; testimonial from CEO Robin McIntosh
- EthicShare, BrewGene, Drupal.org, Crowdentify (recommender systems)
- CourseHack, FoodStella, UrVirl, ClariLegal, Add-Savvy (web apps)

---

## Team (8 people listed)

| Name | Role | Background |
|---|---|---|
| Dr. Daniel Zhou | Principal Consultant | PhD ML, UMich SI |
| Chris Roszell | Marketing / Strategy | MBA, Ross School of Business |
| Patrick Schoeps | Web Dev | Neuroscience BS, UMich; ex-CribSpot (YC) |
| Dr. Sheng Kung | Data Science Advisor | PhD ML, UMich + Stanford |
| Sal Saia | Full-Stack Dev | CS, Stony Brook |
| Ajay Gudivada | Dev / PM | Data Science & Informatics, UMich |
| Aditya Gudibanda | ML Consultant | CS + Math BS, Yale |
| David Henslovitz | NYC Biz Dev | Economics, UMich |

**Observation:** Several team members appear to be recent graduates at time of writing. Team page may need updating or a different framing (e.g., "network of experts" vs. named individuals).

---

## Color Theme

| Element | Color |
|---|---|
| Navbar background | `rgba(17, 24, 31, 0.7)` — near-black dark navy, semi-transparent |
| Nav brand / text | White |
| Header background | Dark navy border `#0C1B3A` |
| Header text | White |
| Services section background | White (default) |
| Services heading text shadow | `#1aa3ff` — bright blue |
| Team/About section background | "success" green (Bootstrap Flatly theme — teal/green `#2ecc71` or similar) |
| Contact section | White/default |
| Send button | `#0C1B3A` dark navy |
| Footer | Dark (Bootstrap Flatly freelancer theme default) |
| Text shadow on hero | `#000000` |

**Primary palette:** Dark navy (`#0C1B3A`), bright blue accent (`#1aa3ff`), white text, Bootstrap Flatly green for team section.

---

## Technical Choices (Old Site)

### Framework / Libraries
- **Bootstrap 3** (Bootswatch Flatly theme) — the "freelancer" starter theme
- **jQuery 1.11** + jQuery UI 1.11 (very old)
- jQuery Easing 1.3
- Font Awesome 4.1.0
- cbpAnimatedHeader, classie.js (scroll-based nav animation)
- jqBootstrapValidation (contact form)

### Fonts
- **Montserrat** (400, 700) — headings, nav brand
- **Lato** (400, 700, italic variants) — body

### Backend / Forms
- **Formcarry** for contact form submission (previously Formspree)
- No apparent server-side backend; static HTML site

### Analytics
- Google Analytics UA (Universal Analytics — now sunset)

### Hosting
- Static site; likely GitHub Pages or similar

### Assets
- Background image: `img/background.png`
- Team photos: `img/team/*.jpg/.png`
- Local JS files in `/js/`
- Local CSS in `/css/`
- Font Awesome in `/font-awesome-4.1.0/`

---

## Structural / UX Notes

- Single-page layout with anchor scroll navigation
- Hero header with full-width background image + centered text overlay
- Services as icon grid (Font Awesome icons) with modal popups for detail
- Team as photo grid with short bios
- Contact form inline on page
- Three-column footer with location, social, contact

---

## Redesign Considerations

- Update copyright year (stuck at 2020)
- Modernize tech stack (Bootstrap 3 → Bootstrap 5 or Tailwind; jQuery → vanilla JS or React/Vue)
- Replace UA Google Analytics with GA4 or alternative
- Update or remove outdated services (Drupal, MTurk, Recommender circa 2007–2015)
- Add AI/LLM consulting as prominent new service given current market
- Revisit team section — some members may have moved on
- Potentially consolidate 3 office locations or update addresses
- Consider a case studies / portfolio page with richer content
- Remove dead links and outdated portfolio items (Heroku, defunct sites)
- Modernize fonts and color palette while keeping the dark navy brand identity
