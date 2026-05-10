/**
 * Laura & Răzvan — RSVP collector
 *
 * Deploy this script as a Web App bound to a Google Sheet.
 * Copy the Web App URL into config.js → rsvpEndpoint.
 *
 * See ./README.md for step-by-step setup.
 */

const HEADERS = [
  'Timestamp',
  'Nume',
  'Email',
  'Telefon',
  'Participare',
  'Număr adulți',
  'Vin cu copii',
  'Număr copii',
  'Restricții alimentare',
  'Mesaj',
  'User-Agent'
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    ensureHeaders_(sheet);

    const p = (e && e.parameter) ? e.parameter : {};
    const ua = (e && e.parameter && e.parameter['User-Agent']) || '';

    sheet.appendRow([
      new Date(),
      (p.name     || '').toString().trim(),
      (p.email    || '').toString().trim(),
      (p.phone    || '').toString().trim(),
      (p.attending|| '').toString().trim(),
      (p.adults   || '').toString().trim(),
      (p.kids     || '').toString().trim(),
      (p.kidsCount|| '').toString().trim(),
      (p.dietary  || '').toString().trim(),
      (p.message  || '').toString().trim(),
      ua
    ]);

    return jsonOut_({ ok: true });
  } catch (err) {
    return jsonOut_({ ok: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

// Optional: lets you hit the URL in a browser to confirm it deployed.
function doGet() {
  return jsonOut_({ ok: true, service: 'rsvp', ts: new Date().toISOString() });
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
         .setFontWeight('bold')
         .setBackground('#5A5F37')
         .setFontColor('#F6EFE4');
    sheet.setFrozenRows(1);
  }
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * One-time: run this manually from the editor to pre-populate headers
 * before any submissions arrive. Optional — doPost auto-creates them too.
 */
function setup() {
  ensureHeaders_(SpreadsheetApp.getActiveSpreadsheet().getActiveSheet());
}
