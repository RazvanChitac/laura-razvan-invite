/**
 * Laura & Răzvan — RSVP collector & Automated Emails
 *
 * This script handles:
 * 1. Receiving RSVP submissions from the website.
 * 2. Sending an immediate confirmation email to guests who say "YES".
 * 3. A daily check to send reminders 2 weeks before the wedding.
 *
 * Deploy this script as a Web App bound to a Google Sheet.
 */

const WEDDING_DATE = new Date(2026, 9, 4, 16, 0, 0); // 04 Oct 2026, 16:00
const REMINDER_DAYS_BEFORE = 14;

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
  'User-Agent',
  'Reminder Sent' // Tracking column for reminders
];

/**
 * Handles RSVP submissions from the website
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    ensureHeaders_(sheet);

    const p = (e && e.parameter) ? e.parameter : {};
    const ua = (e && e.parameter && e.parameter['User-Agent']) || '';

    const name = (p.name || '').toString().trim();
    const email = (p.email || '').toString().trim();
    const attending = (p.attending || '').toString().trim();

    // 1. Record the response
    sheet.appendRow([
      new Date(),
      name,
      email,
      (p.phone || '').toString().trim(),
      attending,
      (p.adults || '').toString().trim(),
      (p.kids || '').toString().trim(),
      (p.kidsCount || '').toString().trim(),
      (p.dietary || '').toString().trim(),
      (p.message || '').toString().trim(),
      ua,
      '' // Initial value for Reminder Sent
    ]);

    // 2. Send immediate confirmation email if attending
    if (attending === 'da' && email) {
      sendConfirmationEmail_(email, name);
    }

    return jsonOut_({ ok: true });
  } catch (err) {
    return jsonOut_({ ok: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Sends a "Thank you" email immediately after RSVP
 */
function sendConfirmationEmail_(email, name) {
  const subject = "Confirmare Participare Nuntă - Laura & Răzvan";
  const body = `Dragă ${name},

Îți mulțumim din suflet pentru confirmare! Ne bucurăm enorm că vei fi alături de noi în ziua nunții!

Salvați data: 04 Octombrie 2026, ora 16:00.
Locație: Biserica Toma Cozma / Ambio Events, Iași.

Puteți vedea detaliile oricând pe site-ul nostru:
https://razvanchitac.github.io/laura-razvan-invite/

Cu drag,
Laura & Răzvan`;

  try {
    MailApp.sendEmail(email, subject, body);
  } catch (e) {
    console.error("Failed to send confirmation email to " + email, e);
  }
}

/**
 * Logic for sending reminders.
 * This should be set up as a "Time-driven" trigger to run daily.
 */
function checkAndSendReminders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  
  // Calculate when we should start sending reminders
  const triggerDate = new Date(WEDDING_DATE);
  triggerDate.setDate(triggerDate.getDate() - REMINDER_DAYS_BEFORE);
  
  // Don't do anything until we are within 2 weeks of the wedding
  if (today < triggerDate) return;

  for (let i = 1; i < data.length; i++) {
    const name = data[i][1];
    const email = data[i][2];
    const attending = data[i][4];
    const reminderSent = data[i][11]; // Column L (Reminder Sent)

    // Send only if: confirmed "YES", has email, and hasn't been sent yet
    if (attending === 'da' && email && !reminderSent) {
      try {
        sendReminderEmail_(email, name);
        sheet.getRange(i + 1, 12).setValue('Sent: ' + today.toLocaleDateString());
      } catch (e) {
        console.error("Failed to send reminder to " + email, e);
      }
    }
  }
}

function sendReminderEmail_(email, name) {
  const subject = "Ne vedem în curând! Reminder Nuntă Laura & Răzvan";
  const body = `Dragă ${name},

Mai sunt doar 2 săptămâni până la nunta noastră și abia așteptăm să ne revedem!

Data: 04 Octombrie 2026
Ora: 16:00
Locație: Biserica Toma Cozma (Iași)
Petrecere: Ambio Events

Dacă au intervenit schimbări de ultim moment în planurile tale, te rugăm să ne anunți cât mai curând.

Cu drag,
Laura & Răzvan`;

  MailApp.sendEmail(email, subject, body);
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
         .setFontWeight('bold')
         .setBackground('#8e492e') // Using your primary color
         .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
}

function doGet() {
  return jsonOut_({ ok: true, service: 'rsvp-with-emails', ts: new Date().toISOString() });
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function setup() {
  ensureHeaders_(SpreadsheetApp.getActiveSpreadsheet().getActiveSheet());
}
