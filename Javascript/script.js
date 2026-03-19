// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("sideMenu");
  const openBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
  }

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

});
