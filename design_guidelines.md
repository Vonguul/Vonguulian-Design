# Vonguulian Design - Design Guidelines

## Design Approach
**Selected Framework:** Reference-Based (Stripe + Apple) - Clean, minimalistic product showcase with premium positioning
**Rationale:** User explicitly requested minimalistic design; digital product sales with premium pricing point ($997 coaching) requires sophisticated, trustworthy aesthetic similar to Stripe's elegant simplicity combined with Apple's refined minimalism.

## Color Palette (User Specified)
- **Primary:** Black (#000000) - backgrounds, text
- **Accent:** Gold (#D4AF37 or similar luxury gold) - CTAs, highlights, borders
- **Neutral:** White (#FFFFFF) - backgrounds, text contrast
- **Supporting:** Charcoal (#1a1a1a) for cards/sections, Off-white (#f8f8f8) for alternating sections

## Typography Hierarchy
- **Primary Font:** Playfair Display (serif) for headings - premium, sophisticated
- **Secondary Font:** Inter (sans-serif) for body text - clean, readable
- **Sizes:**
  - Hero H1: text-6xl (60px) / text-5xl mobile
  - Section H2: text-4xl (36px) / text-3xl mobile
  - Card H3: text-2xl (24px)
  - Body: text-base (16px) / text-lg for important copy
  - Pricing: text-3xl bold

## Layout System
**Spacing Units:** Tailwind 4, 8, 12, 16, 24 (p-4, p-8, p-12, p-16, p-24)
- Section padding: py-24 desktop, py-16 mobile
- Card spacing: p-8
- Element gaps: gap-8 for grids, gap-4 for smaller components

## Page Structure

### Hero Section (80vh)
- Clean, centered layout with elegant typography
- Business name in large Playfair Display
- Tagline: "Transform your life with curated digital products and expert consultation"
- Two primary CTAs side-by-side: "Explore Products" (gold) + "Book Consultation" (outlined gold)
- Subtle gradient background from black to charcoal
- No hero image - pure typographic elegance

### Digital Products Section
- 2-column grid (stacks mobile)
- Premium card design: white background, thin gold border, subtle shadow
- Icon at top (emoji can be replaced with proper icons)
- Product name in Playfair Display
- Description in Inter, lighter weight
- Price prominent: large, bold, gold color
- "Purchase Now" button: black background, gold on hover
- Cards: rounded corners (rounded-lg), padding p-8

### Consultation Services Section
- Alternating background (charcoal #1a1a1a)
- 2-column grid similar to products
- Differentiate with larger cards (more content)
- Service title + icon
- Detailed description with bullet points for Alignment Coaching
- Price integrated with CTA button
- "Book Now - $XXX" format on gold buttons

### Contact Section
- Single column, centered form (max-w-2xl)
- White background card on black section
- Form fields: minimal borders (bottom border only in gold when focused)
- Dropdown for service interest with custom gold styling
- Large textarea for message
- Submit button: full-width gold background, black text
- Labels in small caps, letter-spacing

### Social Links Footer
- Horizontal icon bar, centered
- Modern icon set (Font Awesome or Heroicons)
- Icons in white/gold, hover effect: scale + gold glow
- Minimal footer text: "© 2024 Vonguulian Design. All rights reserved."
- Clean spacing, py-12

## Component Specifications

### Buttons
- Primary (Gold): bg-gold, black text, rounded-full, px-8 py-4, hover: slight brightness increase
- Secondary (Outlined): border-2 gold, gold text, rounded-full, px-8 py-4, hover: fill gold
- Buttons on dark backgrounds: implement backdrop blur (backdrop-blur-sm bg-black/30)

### Cards
- White cards on black sections, charcoal cards on white sections
- Border: 1px solid gold (subtle)
- Shadow: soft, minimal
- Hover: subtle lift (translateY -2px), increased shadow
- Consistent padding: p-8

### Navigation (if added)
- Fixed top navigation (optional enhancement)
- Logo left, menu right
- Transparent initially, becomes solid black on scroll
- Gold accent on active/hover menu items

## Animations (Minimal)
- Smooth scroll behavior for anchor links
- Button hover: 200ms ease transition
- Card hover: 300ms ease transform
- Form focus: 150ms border color transition
- Page load: subtle fade-in for sections (intersection observer)
- **No distracting animations** - maintain sophistication

## Accessibility
- High contrast maintained (black/white with gold accents)
- Focus states: gold outline for keyboard navigation
- Form labels properly associated
- Semantic HTML structure
- Alt text for any icons/images
- Minimum touch targets: 44x44px

## Images
**Hero Section:** No image - typographic focus maintains minimalism
**Product/Service Icons:** Use Font Awesome or Heroicons for consistency, gold color
**No photography needed** - design emphasizes clean, luxury aesthetic through typography and spacing

## Mobile Responsiveness
- Single column stacking for all grids below md breakpoint
- Hero text scales down appropriately (text-4xl mobile)
- CTAs stack vertically on mobile, full-width
- Padding reduces: py-24 → py-12
- Touch-friendly spacing maintained (min 12px gaps)

## Key Design Principles
1. **Luxury through restraint** - generous whitespace, limited color palette
2. **Typography hierarchy** - clear visual distinction between sections
3. **Intentional gold usage** - accent color for CTAs, borders, highlights only
4. **Premium positioning** - pricing displayed confidently, professional presentation
5. **Ease of use** - clear pathways to external purchase/booking links, intuitive navigation