---
name: Invitatie Nunta Laura & Razvan
colors:
  surface: '#fff8f6'
  surface-dim: '#e6d7d3'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#faebe6'
  surface-container-high: '#f4e5e1'
  surface-container-highest: '#eedfdb'
  on-surface: '#211a17'
  on-surface-variant: '#54433d'
  inverse-surface: '#372f2c'
  inverse-on-surface: '#fdeee9'
  outline: '#86736c'
  outline-variant: '#d9c2ba'
  surface-tint: '#914b30'
  primary: '#8e492e'
  on-primary: '#ffffff'
  primary-container: '#ab6144'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59a'
  secondary: '#6e5a53'
  on-secondary: '#ffffff'
  secondary-container: '#f8ddd4'
  on-secondary-container: '#746059'
  tertiary: '#006860'
  on-tertiary: '#ffffff'
  tertiary-container: '#18827a'
  on-tertiary-container: '#f3fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#73341c'
  secondary-fixed: '#f8ddd4'
  secondary-fixed-dim: '#dac1b8'
  on-secondary-fixed: '#261813'
  on-secondary-fixed-variant: '#55433c'
  tertiary-fixed: '#97f3e8'
  tertiary-fixed-dim: '#7ad6cc'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#fff8f6'
  on-background: '#211a17'
  surface-variant: '#eedfdb'
  background-base: '#FDFBF7'
  background-surface: '#F6EDE3'
  divider: '#EADCCC'
  input-border: '#D8CFC4'
  button-hover: '#A65E44'
  text-primary: '#3E2E28'
  text-accent: '#C67658'
typography:
  display-script:
    fontFamily: Pinyon Script
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: normal
  headline-section:
    fontFamily: Playfair Display
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.15em
  body-lg:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: normal
  body-md:
    fontFamily: Playfair Display
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: normal
  label-caps:
    fontFamily: Source Serif 4
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.2em
  countdown-value:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: normal
  display-script-mobile:
    fontFamily: Pinyon Script
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1000px
  section-gap: 80px
  inner-padding: 32px
  gutter: 16px
  stack-gap: 24px
---

# Wedding Invitation Design Specification

## 1. Global Styles

### 1.1 Color Palette
* **Background Base:** `#FDFBF7` (Light warm parchment/cream)
* **Primary Text:** `#3E2E28` (Dark charcoal/espresso brown for readability)
* **Accent/Brand Color:** `#C67658` (Terracotta/rust orange - used for cursive text, icons, and buttons)
* **Card Background (Countdown/RSVP):** `#F6EDE3` (Slightly darker, warm beige with low opacity/watercolor texture)
* **Divider Lines:** `#EADCCC` (Light warm tan)

### 1.2 Typography
* **Primary Font (Headings/Names):** Elegant, flowing calligraphy/script font (e.g., *Great Vibes*, *Alex Brush*, or *Pinyon Script*).
    * Color: Accent (`#C67658`)
* **Secondary Font (Body Text/Subtitles):** Classic, readable serif font (e.g., *Playfair Display*, *Cormorant Garamond*, or *Lora*).
    * Color: Primary Text (`#3E2E28`)
* **Tertiary Font (Buttons/Labels):** Clean serif or subtle sans-serif, all-caps with wide letter-spacing.

### 1.3 Background Assets & Textures
* **Texture:** Subtle watercolor paper grain applied to the `body` or main wrapper.
* **Floral Frames:** High-quality watercolor autumn leaves and branches (browns, muted greens, burnt oranges).
    * *Top:* Corner overlays (top-left framing downward, top-right minimal).
    * *Bottom:* Heavy border framing upward from the bottom corners.

---

## 2. Layout Structure & Components

The page is a single-column, centered layout with a maximum width (approx. `800px` to `1000px`) to maintain readability on desktop, scaling down gracefully for mobile.

### 2.1 Hero Section
* **Top Icon:** Small minimalist heart icon (`#C67658`).
* **Intro Text:** "Cu inimile pline de emoție..." (Serif, centered, normal weight).
* **Main Title:** "Laura & Răzvan" (Script font, very large, center-aligned, `#C67658`).
* **Divider:** A horizontal decorative element consisting of a small branch, a heart, and another branch (`#C67658`).

### 2.2 Story Section
* **Heading:** "O ZI CARE NE ADUNĂ PE TOȚI" (Serif, all-caps, letter-spaced, smaller font size).
* **Paragraphs:** Two paragraphs of text (Serif, centered, line-height approx `1.6`, standard font size).

### 2.3 Countdown Component
* **Container:** Rounded rectangle (`border-radius: 12px`), light beige background (`#F6EDE3`) with a subtle watercolor edge effect, padding (`approx 32px`).
* **Heading:** "Numărăm zilele până la «DA»" (Script font, center-aligned).
* **Grid Layout:** 3 columns flexbox or CSS Grid.
    * **Data Pairs:**
        * Value: "221", "14", "37" (Serif, very large, `#C67658`).
        * Label: "ZILE", "ORE", "MINUTE" (Serif, small, all-caps, letter-spaced).
    * **Separators:** Thin vertical lines between the columns with a tiny diamond/dot in the center of the line (`#C67658`).

### 2.4 Important People Section
* **Heading:** "Pentru că nimic nu se construiește singur" followed by a hand-drawn heart icon (Script font, centered).
* **Grid Layout:** 3 columns.
* **Column Items (x3):**
    * **Icon:** Minimalist line-art vector icons (`#C67658`). Left: Group of 3 people (Groom's parents). Center: Leaf branch (Bride's parent). Right: Interlocking wedding rings (Godparents).
    * **Role:** "Părinții mirelui", "Părinții miresei", "Nași" (Serif, standard size).
    * **Names:** "Ilie & Cătălina", "Elena", "Tiberiu & Nicoleta" (Serif, bold or semi-bold).
* **Bottom Divider:** Thin horizontal line (`#EADCCC`).

### 2.5 Event Locations (Church & Venue)
* **Layout:** Two distinct blocks. Each block is a 2-column flex row (Image on left, Text on right). On mobile, this should stack vertically (Image top, text bottom).
* **Block 1 (Ceremony):**
    * *Left:* Circular/oval masked watercolor illustration of a church in autumn.
    * *Right:* Text description ("Ne vedem la Biserica...").
    * *Button:* Solid background (`#C67658`), white text, rounded corners (`border-radius: 20px`), map pin icon + "VEZI LOCAȚIA".
* **Separator:** Thin horizontal line (`#EADCCC`) between Block 1 and Block 2.
* **Block 2 (Reception):**
    * *Left:* Circular/oval masked watercolor illustration of an event venue/barn.
    * *Right:* Text description ("Apoi ne mutăm...").
    * *Button:* Same style as Block 1 button.

### 2.6 RSVP Form
* **Container:** Same styling as the Countdown component (Rounded rectangle, beige background, padded).
* **Header:**
    * Title: "Ne-ar bucura enorm să știm că veți fi alături de noi" (Script font).
    * Subtitle: "Vă rugăm să ne confirmați prezența până pe 15 august 2026." (Serif, small).
* **Form Grid:** CSS Grid layout with a gap of `16px`.
    * **Row 1:** 2 columns. Input "Nume" (Name) and Input "Email".
    * **Row 2:** 2 columns. Input "Telefon" (Phone) and Select Dropdown "Însoțitor / copil" (Companion/child).
    * **Row 3 (Attendance & Guests):** Flex row right-aligned under the second column.
        * Radio buttons: "Da" (Yes) / "Nu" (No).
        * Number input: "Câți?" (How many?) with a small numeric input box.
    * **Row 4:** 1 column (Full width). Textarea or large Input "Preferințe alimentare" (Dietary preferences).
* **Input Field Styling:** Transparent backgrounds with thin solid borders (`1px solid #D8CFC4`), rounded corners (`border-radius: 8px`), serif placeholder text.
* **Submit Button:** Center-aligned, solid background (`#C67658`), white text, rounded pill shape. Content: White heart icon + "CONFIRM PARTICIPAREA".

### 2.7 Footer Section
* **Closing Text:** "Abia așteptăm să fim împreună," (Serif, centered).
* **Names:** "Laura & Răzvan" (Script font, very large, `#C67658`).
* **Bottom Icon:** Small minimalist heart icon (`#C67658`).
* **Background Integration:** Anchored by heavy watercolor floral illustrations flanking the bottom left and right.

---

## 3. Interaction & States (Recommendations)
* **Buttons:** On `:hover`, background color should transition to a slightly darker shade (e.g., `#A65E44`).
* **Form Fields:** On `:focus`, border color should change to the accent color (`#C67658`) and outline should be removed.
* **Animations:** Consider a gentle fade-in-up animation for the sections as the user scrolls down the page.