async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(path);
  const html = await res.text();
  el.innerHTML = html;

  AOS.refresh();

  // Header menu toggle
  if (id === 'header') {
    const toggleButton = el.querySelector('#menu-toggle'); 
    const mobileMenu = el.querySelector('#mobile-menu');
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  }

  if (id === 'hero') {
    const swiper = new Swiper(".heroSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
      }
    });
  }
  
}


loadComponent('header', '/templates/partials/header.html');
loadComponent('hero', '/templates/partials/hero.html');
loadComponent('news', '/templates/partials/news.html');
loadComponent('specialties', '/templates/partials/specialties.html');
loadComponent('application', '/templates/partials/application.html');
loadComponent('apply', '/templates/partials/apply.html');
loadComponent('students-opinions', '/templates/partials/students-opinions.html');
loadComponent('partners', '/templates/partials/partners.html');
loadComponent('footer', '/templates/partials/footer.html');
