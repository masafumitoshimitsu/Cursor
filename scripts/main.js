document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const year = document.getElementById("year");
  const form = document.querySelector(".finder-form");
  const result = document.querySelector(".finder-result");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        nav?.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Demo store finder
  if (form && result) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='search']");
      const q = input?.value?.trim();
      if (!q) {
        result.textContent = "キーワードを入力してください。";
        return;
      }
      result.textContent = `“${q}” の近くの店舗を検索中… (デモ)\n最寄りの StarCafe Shibuya (徒歩 3 分) / 営業中 7:00 - 22:00`;
    });
  }
});