document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.counter');

  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const increment = target / 200; // Controla a velocidade do contador

    function updateCounter() {
      current += increment;
      if (current < target) {
        counter.innerText = "+" + Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = "+" + target;
      }
    }

    updateCounter();
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function checkCounters() {
    counters.forEach(counter => {
      if (isInViewport(counter) && !counter.classList.contains('animated')) {
        counter.classList.add('animated');
        animateCounter(counter);
      }
    });
  }

  window.addEventListener('scroll', checkCounters);
  checkCounters(); // Para verificar se os contadores estão visíveis inicialmente
});


/*collapse*/




 
  document.addEventListener("DOMContentLoaded", function () {
  let menuButton = document.getElementById("menuButton");
  let icon = menuButton.querySelector("i");
  let navbar = document.getElementById("navbarSupportedContent");

  navbar.addEventListener("show.bs.collapse", function () {
    icon.classList.replace("fa-bars-staggered", "fa-xmark"); // Muda o ícone
  });

  navbar.addEventListener("hidden.bs.collapse", function () {
    icon.classList.replace("fa-xmark", "fa-bars-staggered"); // Volta ao original
  });
});
