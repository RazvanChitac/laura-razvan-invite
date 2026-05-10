This is the comprehensive style guide for **Laura & Răzvan’s** digital wedding invitation. It integrates the technical structure of your app with the botanical minimalist aesthetic, ensuring a clean, modern, and cohesive user experience.

---

## **I. Design Philosophy: "Botanical Minimalist"**

The digital invite should mimic a high-end physical stationery set. The layout prioritizes **whitespace**, **refined typography**, and **subtle organic textures** (watercolors) to create an elegant, non-cluttered interface.

### **1. Global Wrapper (`.paper`)**

- **Container:** Max-width of 600px, centered.
    
- **Surface:** A pure white or very light "eggshell" background with a large-radius, soft-blur drop shadow to simulate a paper card floating on the screen.
    
- **Framing:** The four watercolor leaf images (`assets/leaf-corner-*.png`) are positioned absolutely in each corner at **20%–30% opacity** to frame the content.
    

### **2. Typography Hierarchy**

- **Primary Script:** Fluid, elegant calligraphy for Names and "Muchas Gracias." Must support Romanian diacritics (ă, î, ș, ț, â).
    
- **Secondary Serif:** Classic, high-kerning (spaced out) serif for Section Headers and the Date Grid.
    
- **Body Sans:** Geometric, light-weight sans-serif for descriptions and form inputs.
    

---

## **II. Iconography Catalog (Nano Banana 2 Pro Prompts)**

Use these prompts to generate consistent, ultra-thin line-art icons. **Style Note:** All icons must be monochrome, centered on a white background, and use consistent hairline stroke weights.

|**Section**|**Icon Goal**|**Nano Banana 2 Pro Prompt**|
|---|---|---|
|**Hero Top**|Tiny Heart|`Minimalist vector line-art icon of a small, solid heart with a tiny hand-drawn aesthetic. Ultra-thin clean lines, centered on a pure white background. Monochrome.`|
|**Dividers**|Heart/Line|`Minimalist vector line-art icon of a tiny heart centered between two horizontal lines that taper off. Ultra-thin weight, pure white background. Monochrome.`|
|**Countdown**|Leafy Clock|`Minimalist vector line-art icon of a delicate stopwatch where the clock hands are replaced by two tiny leaves. Ultra-thin line weight, centered on white. Monochrome.`|
|**Groom Parents**|Couple Icon|`Minimalist vector line-art icon of a stylized male and female figure represented by clean geometric lines. Ultra-thin consistent weight, centered on white. Monochrome.`|
|**Bride Parents**|Single Icon|`Minimalist vector line-art icon of a stylized single female figure, represented by elegant, clean geometric lines. Ultra-thin weight, centered on white. Monochrome.`|
|**Nași**|Godparents|`Minimalist vector line-art icon of a stylized couple standing close together, symbolizing guidance. Abstract geometric forms, ultra-thin lines, centered on white. Monochrome.`|
|**Footer**|Wax Seal|`Minimalist vector line-art icon of a circular wax seal with an abstract floral vine in the center. Extremely clean lines, no shading, centered on white. Monochrome.`|

---

## **III. Section Anatomy & Layout**

### **1. Hero / Header**

- **Layout:** Vertical stack, centered.
    
- **Date Grid:** "Duminică | Oct 04 2026 | Ora 15:00" set in Secondary Serif. Use thin vertical pipes as separators.
    
- **CTA:** An outlined "Ghost" button with 2px letter spacing.
    

### **2. Invitation Message**

- **Style:** Two paragraphs of centered body text.
    
- **Dividers:** Place the "Heart/Line" icon between the two paragraphs to provide a visual break.
    

### **3. Countdown (`.section--countdown`)**

- **Title:** _"Numărăm zilele până la "DA"_ in all-caps Serif.
    
- **Timer Display:**
    
    - **Numbers:** Large, light-weight Sans-Serif (48px - 56px).
        
    - **Labels:** Tiny, bold Sans-Serif (10px), all-caps, positioned directly under numbers.
        
- **Accent:** The watercolor leaf (`assets/leaf-corner-*.png`) overlaps the bottom-right corner of the timer grid at 30% opacity.
    

### **4. Family & Godparents**

- **Grid:** 3-columns on desktop / 1-column stack on mobile.
    
- **Hierarchy:** Icon (Top) → Role Title (Serif, Small) → Names (Body Sans, Bold).
    

### **5. Church & Venue Sections**

- **Images:** Illustrations (`church.png`, `Venue.png`) should be circular or have soft-masked edges to blend into the "paper."
    
- **Buttons:** Solid rectangular buttons for Google Maps links to contrast with the Hero's ghost button.
    

### **6. RSVP Form**

- **Inputs:** Minimalist style (bottom-border only) with floating labels.
    
- **Interactivity:** Smooth fade-in transition for conditional fields (adults/kids count).
    
- **Submit:** A prominent, full-width button to finalize the confirmation.
    

### **7. Footer**

- **Closing:** "Abia așteptăm să fim împreună" in the Primary Script.
    
- **Signature:** "Laura & Răzvan" in large Script.
    
- **The Seal:** The `Seal_Transparent.png` acts as the final anchor, centered at the very bottom of the page.
    

