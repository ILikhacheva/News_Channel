// Открытие вкладки по якорю (hash) при загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
  // Запускать вкладки только если это index.html (чтобы не мешать sport-news1.html)
  const path = window.location.pathname.replace(/\\/g, "/");
  if (!document.querySelector(".tabs")) return;
  if (!path.endsWith("index.html") && !path.endsWith("/")) return;
  const hash = location.hash.replace("#", "");
  let tabBtn = null;
  if (hash) {
    tabBtn = document.querySelector('.tab-link[data-tab="' + hash + '"]');
  }
  if (!tabBtn) {
    tabBtn = document.querySelector(".tab-link"); // первая вкладка
  }
  if (tabBtn) tabBtn.click();
});
// Theme toggle logic
const themeBtn = document.getElementById("theme-toggle");
function setTheme(dark) {
  document.body.classList.toggle("dark-theme", dark);
  themeBtn.textContent = dark ? "☀️ Light mode" : "🌙 Dark mode";
}
// Load theme from localStorage
const dark = localStorage.getItem("theme") === "dark";
setTheme(dark);
themeBtn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-theme");
  setTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

document.querySelectorAll(".tab-link").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-link")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    const tab = this.getAttribute("data-tab");
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.style.display = "none";
    });
    document.getElementById("tab-" + tab).style.display = "block";
  });
});
function toggleFullText(btn, event) {
  event.stopPropagation();
  const card = btn.closest(".life-news-card");
  const fullText = card.querySelector(".full-text");
  if (fullText.style.display === "none" || !fullText.style.display) {
    fullText.style.display = "block";
    btn.textContent = "Collapse";
  } else {
    fullText.style.display = "none";
    btn.textContent = "Read more";
  }
}
