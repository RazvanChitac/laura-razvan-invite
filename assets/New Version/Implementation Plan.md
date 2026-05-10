This is a beautiful and elegant design for a digital wedding invitation! Converting this static mockup into a fully functional, shareable, and interactive web page is completely achievable.

Since you want a cost-effective, easily shareable solution with Google Sheets integration, a **static website with a serverless form handler** is the best approach. Here is a comprehensive technical solution and step-by-step implementation plan.

### **1. Technical Architecture & Tech Stack**

- **Frontend (The Visuals & UI):** HTML5, CSS3 (Tailwind CSS is highly recommended here to quickly match the specific spacing, colors, and typography), and Vanilla JavaScript (for the countdown timer and form submission).
    
- **Data Collection (RSVP):** **Google Apps Script**. This is a free and powerful way to connect a simple HTML form directly to a Google Sheet without needing a dedicated backend server or paying for third-party form services.
    
- **Hosting:** **GitHub Pages** or **Netlify**. Both are completely free, provide SSL certificates (HTTPS is mandatory for modern web sharing), and are perfect for static sites.
    
- **WhatsApp Preview Integration:** Open Graph (`og:`) meta tags.
    

---

### **2. Step-by-Step Implementation Plan**

#### **Phase 1: Frontend Development (HTML/CSS/JS)**

1. **Structure the Page:** Break the image down into semantic HTML sections (Header, Intro, Countdown, Parents/Godparents, Locations, RSVP Form).
    
2. **Styling & Assets:** * Extract the watercolor floral assets and icons as transparent PNGs or WebPs to keep the site loading fast.
    
    - Import the specific cursive fonts (like the one used for "Laura & Răzvan") via Google Fonts or custom web fonts.
        
3. **The Countdown Timer:** Write a short JavaScript function that takes the target date (e.g., August 15, 2026, based on the RSVP text) and dynamically calculates the remaining days, hours, and minutes, updating the DOM every second.
    
4. **Mobile Optimization:** Since 99% of your guests will open this from WhatsApp on their phones, the design must be built **mobile-first**. The layout in your mockup is already well-suited for a vertical mobile scroll.
    

#### **Phase 2: RSVP Data Collection (Google Sheets Integration)**

Since GitHub Pages only hosts _static_ files, it cannot process database requests natively. We will use Google Apps Script to act as our bridge.

1. **Create the Destination Sheet:** Set up a new Google Sheet with columns matching your form inputs: _Nume (Name), Telefon (Phone), Email, Însoțitor/copil (Plus one/child), Da/Nu (Yes/No), Câți? (How many?), Preferințe alimentare (Dietary preferences)._
    
2. **Write the Apps Script:** In the Google Sheet, go to _Extensions > Apps Script_. You will write a short `doPost(e)` function that takes the incoming web request and appends it as a new row in your sheet.
    
3. **Deploy as Web App:** Deploy the script and set access to "Anyone". This gives you a specific URL.
    
4. **Connect the Frontend:** In your HTML file, use JavaScript's `fetch()` API to send the form data as a POST request to that Apps Script URL when the "Confirm Participarea" button is clicked. Show a "Thank You" message upon success.
    

#### **Phase 3: WhatsApp Pre-click Preview (Open Graph)**

To ensure that a beautiful thumbnail, title, and description appear when you paste the link into a WhatsApp chat, you need to add specific meta tags to the `<head>` of your HTML document:

- `<meta property="og:title" content="Laura & Răzvan - Ne Căsătorim!" />`
    
- `<meta property="og:description" content="Vă invităm să ne fiți alături în ziua noastră specială. Confirmați prezența aici." />`
    
- `<meta property="og:image" content="URL_TO_A_THUMBNAIL_IMAGE" />` _(Note: WhatsApp prefers images smaller than 300KB and roughly square or 1.91:1 ratio for the preview to work reliably)._
    
- `<meta property="og:url" content="YOUR_WEBSITE_URL" />`
    

#### **Phase 4: Hosting & Deployment**

1. **GitHub Setup:** Create a free GitHub account and a new repository.
    
2. **Upload Code:** Push your HTML, CSS, JS, and image files to this repository.
    
3. **Enable GitHub Pages:** Go to the repository settings, navigate to "Pages," and enable deployment from the main branch. Within minutes, your site will be live at `https://[your-username].github.io/[repo-name]`.
    
4. **(Optional) Custom Domain:** If you prefer a cleaner link (e.g., `laurasirazvan.ro`), you can buy a domain for a few dollars and link it directly to your GitHub Pages or Netlify account.
    

---

### **3. Key Considerations & Potential Gotchas**

- **Spam Prevention:** Since the Google Apps Script URL is public, you might get bot spam. Adding a simple hidden field (a "honeypot") or basic client-side validation can help mitigate this.
    
- **CORS Issues:** When sending data from your website to Google Scripts, you might encounter Cross-Origin Resource Sharing (CORS) errors. Ensure your Apps Script returns a proper JSONP or text response with the correct headers to avoid the browser blocking the submission.
    
- **Map Links:** For the "Vezi Locația" (See Location) buttons, simply link them directly to Google Maps URLs so they automatically open the maps app on the user's phone.
    

This is a fantastic project that perfectly blends modern web sharing with a highly personal touch.

Would you like me to start by drafting the HTML/CSS structure for the layout, or would you prefer the Google Apps Script code to get the database connection working first?