# Section Specifications — plasztikkartya.hu

All values from `post-334.css`, `post-547.css`, `post-139.css`, `wp-custom-css` and `getComputedStyle()` at a 1536px viewport.
Font "Helvetica Neue" = self-hosted HelveticaNeueCyr (100/200/300/400/500/700/900). Colors: navy `#131B2A`, gold `#ABA37D`, gold-dark `#C7A15A`, muted text `#FFFFFF66`, divider `#FFFFFF38`, field bg `#242D40`.
Screenshots: `docs/design-references/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/`.

## SiteHeader (`SiteHeader.tsx`) — static
- Row, space-between, align center, `.responsive` padding. Logo SVG 193×22 → `/`. Button "Megrendelés" → `#contact`.
- Button: 18px bold, line-height 1, padding 17/35/15, radius 10, bg gold. Mobile: 14px, padding 17/20/15.

## HeroSection — mouse tilt
- Column, align center, gap 20. Tablet margin-top 75.
- H1 "A plasztikkártya / a jövő": 105px/1 (tablet 65, mobile 40), weight 400, white, centered; mobile margin-bottom −5px.
- Graphic container: width 660 (tablet 500, mobile 100%), margin-top −92px at ≤1050. Image widget margin-top −165 (tablet −34, mobile +10); img width 100%, max 660 (≤1050: 500), rotate 5deg.
- Glows (`graphic-element-01.png`, cover): before — right −100%, top −54%, translateX(−75%) rotate(180deg); after — right 0, top −50%, translateX(75%). ≤768: 400×220, top 23% / 25%.
- Paragraph: 18/35 white, width 800 (tablet 75%, mobile 100% 16/30), centered, `p` margin-bottom 27px desktop only.
- Button "Szerezze meg most" (mobile 14px). Screenshot: `desktop-01-hero.jpg`.

## IntroSection — lightbox
- Desktop row, center, column-gap 75, margin-top 100 (tablet 0, mobile 50). ≤1050 column.
- Left 31% (tablet/mobile 100%, tablet margin-top 75): H2 45/60 (tablet 35/55, mobile 25/40) weight 500; p 18/35 muted (tablet 16, mobile lh 30), margin-bottom 10; button (mobile 14px).
- Right 100%: `plastic-cards` image, width 100%; tablet margin-top 50, mobile 40 + bottom 50. Screenshot `desktop-02b-intro.jpg`.

## CardTypesSection + CardTypesCarousel — click-driven
- Column center, margin-top 100 (tablet 75, mobile 0). H2 65/75 (tablet 35, mobile 25/40). p width 800, margin 20/50, centered muted.
- Carousel: see BEHAVIORS. Card: padding 40 (mobile 25), radius 20, bg `card-background.webp` cover, column gap 20, align start, full height.
  - Icon 50×50 (SVG 434×296 gold rounded rect with white glyph), H3 25/35 weight 500 (mobile 20), p 15/29 weight 300 letter-spacing .2px white (mobile lh 28).
- Slides: Ajándékkártya, Transzparens, VIP, Ajtó nyitó, Egyedi grafikájú, Azonosító, Kedvezmény, Garancia, Sportbérlet. Screenshot `desktop-03-card-types.jpg`.

## BenefitsSection — static
- Desktop row, column-gap 150, margin-top 120 (tablet 50, mobile 100). ≤1050 column.
- Left (tablet margin-top 100): H2 width 631, 65/75; p width 800 margin 10/10 (tablet 0/10); two icon lists side by side, gap 50 (mobile wraps, 2nd list margin-top 20): items 18/25 weight 500 white, 20px gold check-circle (offset 2px, 5px gap), 20px between items; button margin-top 20 (mobile 10, 14px).
- Right: VIP card image width 100% (635px desktop), z 1; glow 961×735 right −180% top −20% translateX(−75%), z 0 (≤768: 400×220, top 10%, translateX(−100%)). Tablet/mobile margin-top 50. Screenshot `desktop-04-benefits.jpg`.

## StepsSection — static
- Margin-top 120 (tablet 0, mobile 50); inner column center gap 20 (tablet margin-top 100).
- H2 width 631 centered; p width 800 margin 10/10 centered.
- Grid 5 columns, column-gap 30, margin-top 20 (tablet 2 columns gap 40, mobile 1 column).
- Step: column center gap 20: 50px numbered gold circle icon, H4 25px/1 weight 500, p 16/30 muted margin 10/10.
- Button margin-top 20 (mobile 0, 14px). Screenshot `desktop-05-steps.jpg`.

## CardGallerySection + CardGallery — autoplay
- Full-width `.responsive` container, margin-top 100 (tablet inner margin-top 100, mobile section 50).
- 13 square images (card-013 … card-01), slide 325px at desktop, 7px descender space under each image.
- Arrows/lightbox: see BEHAVIORS. Screenshot `desktop-06-image-carousel.jpg`.

## TestimonialsSection — scroll-triggered counters
- Column center, margin-top 120 (mobile 100). H2 65/75 (mobile centered 25/40); p width 800 margin 20/50.
- Grid 3 columns gap 50, padding 10 (≤1050: 1 column, padding 0).
- Card: padding 35 (mobile 25), radius 20, `card-background` cover, column gap 20 align start: quote icon 50px; p 15/29 weight 300 ls .2px; H3 25/35 (mobile 20); divider 1px `#FFFFFF38` with 15px block padding; counters row gap 50 nowrap (mobile column gap 30): number 35px bold gold line-height 1 with suffix, title Roboto 15px line-height 2.5 white, number above title.
- Screenshot `desktop-07-testimonials.jpg`.

## ContactSection + ContactForm — form
- Background `graphic-element-02` bottom center 400px auto (mobile 200px). Column center, gap 0.
- Contact image (1024px, ≤1050 max 500). H2 `#contact` 65/75 (≤1050 centered, mobile 25/40). p width 950 margin 20/50.
- Form width 750, margin-top 10 (≤1050 100%, 0). Field groups padding-x 10, margin-bottom 20; 50% columns (100% on mobile): name, email, phone, select; 100%: message (6 rows), "File feltöltése (nem kötelező)" (Raleway 14/21 white), file input (50%), acceptance (Raleway 14 weight 500 `#7A7A7A`, link gold), submit.
- Inputs: bg `#242D40`, no border, color `#FFFFFF73`, Raleway 14 weight 500, min-height 40; text inputs padding 10/15 radius 0; select padding 5/20/5/14 radius 3 with caret 10×25; textarea padding 5/14 radius 3.
- Submit: 18px bold (mobile 16), padding 17/30/15, radius 10, bg gold, white.
- Divider: margin 50/50, padding 15, 1px `#FFFFFF38`. Screenshots `desktop-08-contact-image.jpg`, `desktop-09-form-footer.jpg`.

## SiteFooter — static (hover on links)
- Desktop row gap 50 align start; ≤1050 column-reverse (contacts first). Bottom margin 80 (≤1050: 100).
- Left: logo (26px line box), p margin 30/25 width 650 18/35 muted (≤1050 100% 16px, mobile lh 30), list 15px/1.5 muted, 10px spacing: "2026 @ Plasztikkartya.hu | Minden jog fenntartva.", "Adatvédelem" → `/adatvedelem/`.
- Right (align end, ≤1050 start): "Telefon:" Nunito 17 gold margin-top 5; phone 40px/35 weight 500 white margin 10/50 (mobile 28px); "E-mail:" (mobile margin-top −25); email same style, underlined in screenshot; hover gold.
