document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("toggle-open");
  const sideMenu = document.getElementById("sideMenu");
  const body = document.body;

  menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
      sideMenu.classList.add("active");
      body.style.overflowY = "hidden";
    } else {
      sideMenu.classList.remove("active");
      body.style.overflowY = "auto";
    }
  });
});
