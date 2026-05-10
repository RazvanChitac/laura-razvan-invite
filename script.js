/* =========================================================
   Laura & Răzvan — invitation behaviour
   - countdown (days / hours / minutes — no seconds)
   - conditional RSVP fields
   - RSVP submission to Google Apps Script Web App
   ========================================================= */
(function () {
  "use strict";

  const CFG    = window.WEDDING_CONFIG || {};
  const target = CFG.weddingDate instanceof Date ? CFG.weddingDate : new Date(CFG.weddingDate);

  /* ── Countdown ── */
  const numEls = {
    days:    document.querySelector('[data-unit="days"]'),
    hours:   document.querySelector('[data-unit="hours"]'),
    minutes: document.querySelector('[data-unit="minutes"]'),
  };

  function pad(n) { return String(Math.max(0, n)).padStart(2, "0"); }

  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      Object.values(numEls).forEach(el => { if (el) el.textContent = "00"; });
      const box = document.getElementById("countdown");
      if (box && !box.dataset.done) {
        box.dataset.done = "1";
        const msg = document.createElement("p");
        msg.textContent = 'Astăzi ne spunem «DA»!';
        msg.style.cssText = "font-family:var(--font-script);font-size:1.6rem;color:var(--rust);margin-top:16px;width:100%;";
        box.appendChild(msg);
      }
      return;
    }
    const totalSec = Math.floor(diff / 1000);
    if (numEls.days)    numEls.days.textContent    = pad(Math.floor(totalSec / 86400));
    if (numEls.hours)   numEls.hours.textContent   = pad(Math.floor((totalSec % 86400) / 3600));
    if (numEls.minutes) numEls.minutes.textContent = pad(Math.floor((totalSec % 3600) / 60));
  }

  tick();
  setInterval(tick, 10000); // refresh every 10 s (minutes-only display)

  /* ── Form conditional fields ── */
  const form = document.getElementById("rsvp-form");
  if (!form) return;

  function showEl(el, show) {
    el.classList.toggle("is-visible", !!show);
    el.querySelectorAll("input, select, textarea").forEach(f => { f.disabled = !show; });
  }

  function refreshConditionals() {
    const attending = (form.querySelector('input[name="attending"]:checked') || {}).value || "";

    form.querySelectorAll("[data-show-if-attending]").forEach(el => {
      const allowed = el.dataset.showIfAttending.split(",").map(s => s.trim());
      showEl(el, !!attending && allowed.includes(attending));
    });
  }

  form.addEventListener("change", refreshConditionals);
  refreshConditionals();

  /* ── Colour placeholder select on change ── */
  const companion = form.querySelector('[name="companion"]');
  if (companion) {
    companion.addEventListener("change", () => {
      companion.classList.toggle("has-value", companion.value !== "");
    });
  }

  /* ── RSVP submission ── */
  const statusEl  = document.getElementById("form-status");
  const submitBtn = document.getElementById("rsvp-submit");

  function setStatus(msg, kind) {
    statusEl.textContent = msg;
    statusEl.className   = "form-status" + (kind ? " is-" + kind : "");
  }

  function validate() {
    let ok = true;
    form.querySelectorAll("[required]").forEach(f => {
      if (f.disabled) { f.removeAttribute("aria-invalid"); return; }
      const valid = f.type === "radio"
        ? !!form.querySelector(`input[name="${f.name}"]:checked`)
        : f.value.trim().length > 0 && f.checkValidity();
      f.setAttribute("aria-invalid", valid ? "false" : "true");
      if (!valid) ok = false;
    });
    return ok;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    setStatus("", null);

    if (!validate()) {
      setStatus("Te rugăm să completezi câmpurile obligatorii.", "error");
      return;
    }

    const endpoint = CFG.rsvpEndpoint;
    if (!endpoint || endpoint.indexOf("REPLACE_WITH") === 0) {
      setStatus("Formularul nu este conectat încă. (Configurează rsvpEndpoint în config.js.)", "error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.querySelector(".btn__icon") && (submitBtn.querySelector(".btn__icon").style.opacity = "0.5");
    const origText = submitBtn.textContent.trim();
    submitBtn.lastChild.textContent = " Se trimite…";

    const params = new URLSearchParams(new FormData(form));

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });

      let ok = res.ok;
      try { const data = await res.json(); ok = ok && data && data.ok !== false; } catch (_) {}

      if (ok) {
        setStatus("Mulțumim! Ne bucurăm că veți fi alături de noi.", "success");
        form.reset();
        refreshConditionals();
        submitBtn.disabled = false;
        submitBtn.lastChild.textContent = " " + origText;
      } else throw new Error("not-ok");
    } catch {
      setStatus("Ceva n-a mers. Te rugăm să încerci din nou sau să ne contactezi direct.", "error");
      submitBtn.disabled = false;
      submitBtn.lastChild.textContent = " " + origText;
    }
  });
})();
