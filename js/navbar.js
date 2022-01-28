const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const navLinks = document.getElementsByClassName("primary-navigation")[0];

toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.className === "primary-navigation active") {
    toggleMenu.classList.toggle("active");
  } else {
    toggleMenu.classList.remove("active");
  }
});
