(function () {
  const clockEls = document.querySelectorAll(".utc-clock");

  function updateClock() {
    const now = new Date();
    const h = String(now.getUTCHours()).padStart(2, "0");
    const m = String(now.getUTCMinutes()).padStart(2, "0");
    const s = String(now.getUTCSeconds()).padStart(2, "0");
    clockEls.forEach(function (el) {
      el.textContent = "UTC " + h + ":" + m + ":" + s;
    });
  }

  updateClock();
  setInterval(updateClock, 1000);
})();

(function () {
  const phrases = [
    "Complex Websites",
    "A11y",
    "AI Tools",
    "Digital Branding"
  ];
  const el = document.querySelector(".rotate-text");
  if (!el) return;
  let i = 0;
  setInterval(function () {
    i = (i + 1) % phrases.length;
    el.textContent = phrases[i];
  }, 3000);
})();
