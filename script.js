const close = document.getElementById("mob-menu-close");
const open = document.getElementById("mobile-menu-open");

close.addEventListener("click", () => {
  close.style.display = "none";
});

open.addEventListener("click", () => {
  close.style.display = "block";
});
