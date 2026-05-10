# RSVP → Google Sheet setup

Step-by-step. ~10 minutes.

## 1. Create the sheet

1. Go to [sheets.new](https://sheets.new) — it makes a blank Google Sheet.
2. Rename it, e.g. `Nunta Laura & Razvan — RSVP`.

## 2. Open the bound Apps Script editor

From the sheet: **Extensions → Apps Script**. A new tab opens with an empty `Code.gs`.

## 3. Paste the script

1. Select all of the existing `Code.gs` content and delete it.
2. Open `apps-script/Code.gs` from this project and copy the entire contents.
3. Paste into the Apps Script editor.
4. Click the save icon (or Ctrl+S). Give the project a name when prompted, e.g. `RSVP`.

## 4. Run `setup` once (optional but recommended)

1. In the function dropdown (top bar), select `setup`.
2. Click **Run**.
3. Google will ask for permissions — review and allow. Use the same Google account that owns the sheet.
4. After it completes, switch to the sheet — you should see a styled header row.

## 5. Deploy as a Web App

1. Top-right, click **Deploy → New deployment**.
2. Gear icon next to "Select type" → choose **Web app**.
3. Fill in:
   - **Description:** `RSVP v1`
   - **Execute as:** *Me (your account)*
   - **Who has access:** **Anyone** *(this is required — guests need to POST anonymously)*
4. Click **Deploy**. Authorize if prompted.
5. Copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 6. Wire it into the site

Open `config.js` in the project root and replace:

```js
rsvpEndpoint: "REPLACE_WITH_APPS_SCRIPT_WEB_APP_URL",
```

with your URL:

```js
rsvpEndpoint: "https://script.google.com/macros/s/AKfycb.../exec",
```

Commit and push. Done.

## 7. Test

1. Open the deployed site.
2. Fill in the RSVP form with a test entry and submit.
3. Check the Google Sheet — a new row should appear within ~2 seconds.

## Updating the script later

If you edit `Code.gs`:
1. Save in the Apps Script editor.
2. **Deploy → Manage deployments → pencil icon → Version: New version → Deploy.**
3. The URL stays the same.

## Troubleshooting

- **No row arriving** — open DevTools Network tab in the browser, submit, and check the response from the Apps Script URL. 401/403 = access setting is wrong (must be "Anyone"). 500 = check the Apps Script **Executions** log.
- **CORS error** — you should not see one, because the client sends `application/x-www-form-urlencoded`, which is a "simple" request. If it appears, something intercepted the request type; verify no code changed the `Content-Type`.
- **Headers wrong language** — delete the header row in the sheet and run `setup` again.
