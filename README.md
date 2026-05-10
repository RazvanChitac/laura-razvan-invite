# Laura & Răzvan — Invitație digitală

Single-page wedding invitation. Static HTML/CSS/JS. RSVPs land in a Google Sheet via Apps Script.

## Structure

```
Wedding-Invite/
├── index.html          # all sections
├── styles.css          # autumn palette, responsive
├── script.js           # countdown + form logic
├── config.js           # wedding date + RSVP endpoint (edit this)
├── apps-script/
│   ├── Code.gs         # paste into Google Apps Script
│   └── README.md       # step-by-step sheet + deploy guide
└── assets/             # drop hero/background images here if you add them
```

## Local preview

No build step. Open `index.html` in a browser, or from the folder:

```bash
# any of these works
python3 -m http.server 8000
# then open http://localhost:8000
```

The form will refuse to submit until `config.js` points at a deployed Apps Script URL — this is intentional.

## Before going live — checklist

1. **Set up the Google Sheet + Apps Script** — follow `apps-script/README.md`.
2. **Paste the Web App URL** into `config.js` → `rsvpEndpoint`.
3. **Verify the wedding date** in `config.js` (currently `2026-10-04 15:00`, local time).
4. **(Optional)** Drop a hero photo at `assets/hero.jpg` — right now the hero uses a CSS autumn gradient only. If you add a photo, edit `styles.css` → `.hero { background: ... }` to layer it in.
5. **Favicons / share preview** — add an `<link rel="icon">` and Open Graph tags if you plan to share the link on WhatsApp (the link preview will look nicer).

## Deploy to GitHub Pages

One-time, ~5 minutes.

1. Create a new public GitHub repository, e.g. `laura-razvan-invite`.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial invitation site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/laura-razvan-invite.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages**.
   - **Source:** *Deploy from a branch*.
   - **Branch:** `main`, folder `/ (root)`. Save.
4. Wait ~1 minute. The URL appears at the top of the Pages settings:
   `https://<your-user>.github.io/laura-razvan-invite/`
5. Test the RSVP end-to-end: open the URL, submit a test entry, confirm the row arrives in the sheet.

## Custom domain (optional)

If you own a domain (e.g. `lauraSiRazvan.ro`):

1. In your DNS provider, add a CNAME record:
   - Host: `invitatie` (or `www`, or `@` with an ALIAS if supported)
   - Target: `<your-user>.github.io`
2. In the repo, add a `CNAME` file at the root containing just your domain, e.g.:
   ```
   invitatie.laurasirazvan.ro
   ```
3. GitHub Pages → Custom domain → paste the same value → Save → check "Enforce HTTPS" after the TLS cert is issued (5-20 min).

## Generate a QR code for WhatsApp

Once the final URL is live, run either:

- `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=<URL-ENCODED>` — loads a PNG in the browser, right-click → save.
- Or any QR generator site. Embed the PNG in a save-the-date message.

## Updating content later

- **Copy changes** → edit `index.html`, commit, push. GitHub Pages redeploys in ~30 s.
- **Style changes** → edit `styles.css`, same flow.
- **Move the date** → edit `config.js` (`weddingDate`) *and* the visible strings in `index.html` and `footer`.

## Known trade-offs

- **No server-side validation beyond the Apps Script.** A determined person could submit junk entries. For a wedding invite, the risk is low; if it becomes a problem, add a honeypot field.
- **No email confirmation to the guest.** If you want one, extend `Code.gs` with `MailApp.sendEmail(...)` after `appendRow`.
- **Accessibility:** tested for keyboard nav and reduced-motion. Screen-reader labels are in place but have not been audited with NVDA/VoiceOver — worth a pass if any guests rely on AT.
