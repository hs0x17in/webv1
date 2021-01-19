const toggleBtn = document.querySelector(".nav-toogleBtn");
const menu = document.querySelector(".nav-menu");
const icon = document.querySelector(".nav-icon");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
});
