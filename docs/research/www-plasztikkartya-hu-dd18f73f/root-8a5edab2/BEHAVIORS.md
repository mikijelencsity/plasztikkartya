# Behaviors — https://www.plasztikkartya.hu/

- **Page fade-in:** `body { animation: fade-in-all 2s ease-in-out }` (opacity 0 → 1).
- **Smooth scroll:** `html { scroll-behavior: smooth }`; all CTA buttons link to `#contact` (the "Rendeljen plasztikkártyát most!" heading).
- **Buttons** (`.elementor-button`, gold `#ABA37D`): hover/focus → background `#FFFFFF`, text `#ABA37D`; `transition: all .3s`.
- **Hero card** (`#fae4801`, Elementor Pro Mouse Track → 3D tilt, speed 1.5): inline `transform: rotateX(var(--rotateX)) rotateY(var(--rotateY))`, `transition: transform .4s`, no perspective. Measured `rotateX ≈ 7.17deg` with the pointer near the top-left. Image itself is `rotate(5deg)`.
- **Card types carousel** (`#5231029`, Swiper): slidesPerView 1 / 2 (≥767) / 3 (≥1050), gap 50px, loop, speed 500ms, **autoplay off**. Arrows 40×40 gold circles centered below the carousel (±28px from center, 25px under the slides); hover → white background, gold chevron. Mobile arrow icon 15px.
- **Image carousel** (`#05fb124`, Swiper): slidesPerView 1 / 2 / 4, gap 40px, loop, speed 500ms, autoplay 5000ms, pause on hover, stop on interaction. Arrows inside (10px from edges), vertically centered, 38×38 gold circles with 22px white chevrons. Click on a slide → Elementor lightbox slideshow.
- **Intro image** (`plastic-cards`) → lightbox (full `plastic-cards-scaled.webp`).
- **Counters** (testimonials): from 0 to value, duration 2000ms when scrolled into view; values 98%, 9/10, 9/10 · 100%, 10/10, 9/10 · 95%, 9.5/10, 9/10.
- **Footer phone/email links:** hover color `#ABA37D`, transition .3s.
- **Back to top** (GeneratePress): fixed bottom 25px / right 25px, 40×40, radius 100px, bg `#C7A15A`, 20px arrow icon; visible after 300px scroll (opacity .1 + translateY(1000px) → 1 / 0, opacity transition 300ms); scrolls to top.
- **Form** (Elementor Pro): required name/email/phone + acceptance; honeypot text field hidden; submits to WordPress admin-ajax (not cloned).
- **Not cloned:** CookieYes consent banner, GTranslate "HU" switcher.
- **Responsive:** see component specs; sections stack at ≤1050px, font sizes step down at ≤1050px and ≤767px.
