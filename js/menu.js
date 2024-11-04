const menuToggle = document.getElementById("toggle-open");
const sideMenu = document.getElementById("sideMenu");
const menuLinks = document.querySelectorAll(".menu-link");
const body = document.body;

document.addEventListener("DOMContentLoaded", function () {
  // Додаємо обробник для відкриття/закриття меню через чекбокс
  menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
      sideMenu.classList.add("active");
      body.style.overflowY = "hidden";
    } else {
      sideMenu.classList.remove("active");
      body.style.overflowY = "auto";
    }
  });

  // Додаємо обробник для закриття меню при кліку на кожне посилання
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Знімаємо позначку з чекбокса, щоб закрити меню
      menuToggle.checked = false;
      sideMenu.classList.remove("active");
      body.style.overflowY = "auto";
    });
  });
});
