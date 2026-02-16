(function () {
  function updateClock() {
    var now = new Date();
    var h = String(now.getUTCHours()).padStart(2, "0");
    var m = String(now.getUTCMinutes()).padStart(2, "0");
    var s = String(now.getUTCSeconds()).padStart(2, "0");
    var els = document.querySelectorAll(".utc-clock");
    els.forEach(function (el) {
      el.textContent = "UTC " + h + ":" + m + ":" + s;
    });
  }
  updateClock();
  setInterval(updateClock, 1000);
})();
