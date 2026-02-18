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

(function () {
  const els = document.querySelectorAll("[data-typewriter]");
  if (!els.length) return;
  const speed = 45;
  let queue = 0;

  function typeIn(el) {
    const text = el.getAttribute("data-typewriter-text");
    el.textContent = "";
    el.classList.add("typing");
    let i = 0;
    var interval = setInterval(function () {
      i++;
      el.textContent = text.substring(0, i);
      if (i >= text.length) {
        clearInterval(interval);
        el.classList.remove("typing");
        el.classList.add("typed");
      }
    }, speed);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      var delay = queue * 200;
      queue++;
      setTimeout(function () { typeIn(entry.target); }, delay);
    });
  }, { threshold: 0.1 });

  els.forEach(function (el) {
    el.setAttribute("data-typewriter-text", el.textContent);
    el.textContent = "";
    observer.observe(el);
  });
})();

(function () {
  const preview = document.getElementById("hover-preview");
  if (!preview) return;
  const rows = document.querySelectorAll("[data-hover-img]");
  const offset = 20;

  rows.forEach(function (row) {
    row.addEventListener("mouseenter", function () {
      preview.src = row.dataset.hoverImg;
      preview.classList.add("visible");
    });

    row.addEventListener("mousemove", function (e) {
      const imgW = 320;
      const imgH = preview.offsetHeight || 200;
      let x = e.clientX + offset;
      let y = e.clientY + offset;

      if (x + imgW > window.innerWidth) x = e.clientX - imgW - offset;
      if (y + imgH > window.innerHeight) y = e.clientY - imgH - offset;

      preview.style.left = x + "px";
      preview.style.top = y + "px";
    });

    row.addEventListener("mouseleave", function () {
      preview.classList.remove("visible");
    });
  });
})();
