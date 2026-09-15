# Page Topology — https://www.plasztikkartya.hu/

Source: WordPress 7.1 + GeneratePress + Elementor / Elementor Pro (page 334, header template 547, footer template 139).
Output route: `/` (`src/app/page.tsx`). Components: `src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/`.

## Layout
- Page wrapper `#47916c4`: bg `#131B2A`, `max-width: min(100%, 2000px)`, centered, `overflow: hidden`, flex column, align center, gap 0.
- Header container `#35a158c`: margin-top 35px (mobile 25px).
- Content column `#9123ce3`: margin-top 75px (≤1050px: 0), flex column, **row gap 20px** between sections.
- `.responsive` sections: side padding 50px, 25px at ≤1340px. Boxed sections: content width 1600px.
- Breakpoints: mobile ≤767px, tablet 768–1050px, desktop ≥1051px (swiper uses ≥767 / ≥1050).
- No sticky/fixed elements except the GeneratePress back-to-top button (and third-party cookie banner + GTranslate switcher, not cloned).

## Sections (desktop y at 1536px viewport)
| # | Name | Elementor id | y / h | Interaction model | Component |
|---|------|--------------|-------|-------------------|-----------|
| 0 | Header (logo + "Megrendelés") | 04b3a05 | 35 / 50 | static (hover) | SiteHeader |
| 1 | Hero ("A plasztikkártya a jövő") | c584af8 | 160 / 804 | mouse-tilt on card image | HeroSection |
| 2 | Intro (paper cards text + image) | 7124848 | 1084 / 515 | lightbox on image | IntroSection |
| 3 | Card types carousel (9 slides) | fcf1c2f | 1719 / 641 | click-driven carousel (no autoplay) | CardTypesSection + CardTypesCarousel |
| 4 | Benefits ("Miért válassza…" + VIP card) | 0622b2b | 2500 / 590 | static | BenefitsSection |
| 5 | 5 steps | 21a7560 | 3230 / 776 | static | StepsSection |
| 6 | Card image carousel (13 images) | 30513b7 | 4126 / 332 | time-driven autoplay 5s + click + lightbox | CardGallerySection + CardGallery |
| 7 | Testimonials (3 cards + counters) | ec22820 | 4598 / 667 | scroll-triggered count-up | TestimonialsSection + Counter |
| 8 | Contact image, form, divider, footer | 785d599 | 5284 / 1153 | form (no backend) | ContactSection + ContactForm + SiteFooter |
| – | Back to top | generate-back-to-top | fixed | appears after 300px scroll | BackToTop |

## Layering
- Hero: two `graphic-element-01.png` glows (961×735, mobile 400×220) behind content (`z-index:-1`), card image `z-index:1`.
- Benefits: one glow behind the VIP card (`z-index:0`), image `z-index:1`.
- Contact section background: `graphic-element-02` bottom center, 400px wide (mobile 200px).
