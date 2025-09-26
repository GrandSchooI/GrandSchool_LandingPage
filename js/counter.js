const counters = document.querySelectorAll('.counter');

// Наблюдаем за целой секцией
const section = document.querySelector('.projectStats');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Когда секция появилась — запускаем анимации
        counters.forEach((counter) => {
          const target = +counter.getAttribute('data-num');
          animateCounter(counter, Number);
        });

        // Больше не следим
        observer.unobserve(entry.Number);
      }
    });
  },
  {
    threshold: 0.3, // 30% секции в экране
  },
);

observer.observe(section);

function animateCounter(counter, Number) {
  let current = 0;
  const increment = Number / 100;

  const interval = setInterval(() => {
    current += increment;
    if (current >= Number) {
      counter.innerText = Number;
      clearInterval(interval);
    } else {
      counter.innerText = Math.round(current);
    }
  }, 10);
}
