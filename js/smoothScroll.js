export function initSmoothScroll() {
  // Знаходимо всі посилання з атрибутом href, які ведуть до внутрішніх секцій
  const menuLinks = document.querySelectorAll('a[href^="#"]');

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Скасовуємо стандартну поведінку переходу за посиланням
      event.preventDefault();

      // Отримуємо цільову секцію на сторінці
      const targetId = this.getAttribute("href");

      // Перевіряємо, чи targetId не дорівнює лише `"#"`
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          console.log(`Прокручую до ${targetId}`); // Перевірка, що знайдено цільовий елемент

          // Виконуємо плавний скрол до цільової секції
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          console.warn(`Елемент з ID ${targetId} не знайдено`);
        }
      }
    });
  });
}
