# Design System Document: Academic Premium UI

## 1. Overview & Creative North Star
The vision for this design system is **"The Digital Curator."** 

We are moving away from the standard, boxed-in institutional layout. Instead, we are treating the Nowgong Polytechnic digital experience as a high-end academic journal—clean, authoritative, and sophisticated. The "Academic Premium" aesthetic is achieved not through more decoration, but through more intentional restraint. We utilize massive whitespace, high-contrast serif-to-sans typography, and a "layered paper" philosophy that replaces rigid borders with tonal depth.

**The Creative North Star:** *Institutional Authority meets Editorial Fluidity.* 
Every page should feel like a custom-designed spread, utilizing asymmetrical layouts where text and imagery overlap slightly to create a sense of bespoke craftsmanship.

---

## 2. Colors & Surface Philosophy

The palette is anchored in deep, intellectual blues and crisp, airy neutrals. We use color to define structure, never lines.

### The Palette (Material Design Mapping)
*   **Primary (`#00236f` / `primary`):** The foundation. Used for core branding and high-emphasis headers.
*   **Secondary (`#0058be` / `secondary`):** The interactive layer. Reserved for sub-headers and active UI states.
*   **Tertiary (`#003211` / `tertiary`):** The growth accent. Used for placement metrics and success states.
*   **Background (`#f7f9fb` / `surface`):** The primary canvas.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. Boundaries must be defined solely through background color shifts. 
*   A `surface-container-low` section should sit directly against a `surface` background to define its edge.
*   Visual separation is achieved through padding and tonal contrast, keeping the UI "breathable."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the Surface Container tiers to create depth:
1.  **Level 0 (Base):** `surface` (#f7f9fb)
2.  **Level 1 (Sections):** `surface-container-low` (#f2f4f6)
3.  **Level 2 (Cards/Containers):** `surface-container-lowest` (#ffffff) - This creates a "lifted paper" effect.

### Signature Textures & Glassmorphism
To avoid a flat, "template" look:
*   **Hero Sections:** Use a subtle linear gradient from `primary` (#00236f) to `primary-container` (#1e3a8a).
*   **Floating Navigation:** Use **Glassmorphism**. Apply `surface-container-lowest` at 80% opacity with a `24px` backdrop-blur. This ensures the academic content "bleeds" through, making the experience feel integrated.

---

## 3. Typography: The Editorial Voice

Typography is our most powerful tool for conveying the Polytechnic’s heritage. We pair the intellectual weight of a serif with the modern efficiency of a sans-serif.

*   **Display & Headlines (Newsreader):** Use this for all high-level storytelling. The Newsreader font (or Playfair Display fallback) should have generous letter spacing in lowercase and tighter tracking for large-scale titles.
    *   *Visual Tip:* Use `display-lg` for hero statements to create a "magazine" feel.
*   **Body & Labels (Inter):** Inter provides the functional "engine" of the site. It is highly legible and neutral.
*   **Hierarchy as Identity:** 
    *   **Academic Titles:** Use `headline-sm` in `primary` color for department names.
    *   **Body Text:** Use `body-lg` with a line-height of 1.6 for long-form academic descriptions to ensure high readability.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**. Depth should feel like ambient light hitting fine paper.

### The Layering Principle
Instead of a shadow, place a `surface-container-lowest` card on top of a `surface-container` background. The subtle shift from `#eceef0` to `#ffffff` is enough to signal a change in importance.

### Ambient Shadows
If a floating element (like a Modal or FAB) requires a shadow, it must follow these rules:
*   **Color:** Use a tinted shadow. Instead of black, use `primary` (#00236f) at 8% opacity.
*   **Diffusion:** Large blur values (20px to 40px) with 0px spread. The goal is an "organic glow," not a "dark edge."

### The "Ghost Border" Fallback
If accessibility requirements demand a border (e.g., in high-contrast modes), use a **Ghost Border**:
*   Token: `outline-variant` (#c5c5d3) at **15% opacity**.
*   This provides a hint of a container without breaking the "No-Line" rule.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background. Use `rounded-md` (0.375rem). Apply a very subtle top-down gradient (5%) to give the button a "pressed" physical quality.
*   **Secondary:** Ghost style. No background, `secondary` text color, with a `0.5px` Ghost Border on hover only.
*   **States:** On hover, primary buttons should shift to `on_primary_fixed_variant` (#264191) with a soft ambient shadow.

### Cards (Placement & Departments)
*   **Structure:** No borders. Background: `surface-container-lowest`. 
*   **Spacing:** Use `2rem` (32px) internal padding to maintain the "Premium" feel.
*   **Interaction:** On hover, the card should scale slightly (1.02x) and the background should shift to `surface-bright`.

### Input Fields
*   **Style:** Minimalist. Use `surface-container-low` as a subtle fill.
*   **Focus:** A 2px bottom-border using `secondary` (#3b82f6). Avoid full-box focus rings to keep the "Academic Editorial" look.

### Metric Chips (Growth & Placements)
*   **Style:** Use `tertiary_container` (#004b1e) with `on_tertiary_container` (#22c55e) text.
*   **Shape:** `rounded-full` (9999px) for a modern, tech-forward contrast against the serif headers.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Let a headline overlap a photo or sit slightly off-center from the body text.
*   **Use Generous Whitespace:** If you think there’s enough space, add 16px more. Space is the ultimate "Premium" indicator.
*   **Tint Your Neutrals:** Always use the `surface` tokens. Never use pure `#FFFFFF` for backgrounds; it feels "default" and unconsidered.

### Don’t:
*   **Don't use Dividers:** Never use a horizontal rule (`<hr>`) to separate list items. Use vertical padding and `surface-container` shifts.
*   **Don't use Pure Black:** Body text should be `dark charcoal` (#1F2937). Pure black is too harsh for an elegant academic UI.
*   **Don't Over-Round:** Stick to `lg` (0.5rem) or `md` (0.375rem) for cards. "Pill" shapes should be reserved strictly for small chips and tags, not large containers.