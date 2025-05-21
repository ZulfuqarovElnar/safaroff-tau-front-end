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

  // Hero slider
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
  
  if(id === 'specialties') {
    AOS.init();
      
      // Tab switching functionality
      const btnPrograms = el.querySelector('#btn-programs');
      const btnEnglish = el.querySelector('#btn-english');
      const contentPrograms = el.querySelector('#content-programs');
      const contentEnglish = el.querySelector('#content-english');
      
      btnPrograms.addEventListener('click', function() {
        // Update active tab
        btnPrograms.classList.add('active-tab');
        btnEnglish.classList.remove('active-tab');
        
        // Show/hide content
        contentPrograms.style.display = 'flex';
        contentEnglish.style.display = 'none';
      });
      
      btnEnglish.addEventListener('click', function() {
        // Update active tab
        btnEnglish.classList.add('active-tab');
        btnPrograms.classList.remove('active-tab');
        
        // Show/hide content
        contentPrograms.style.display = 'none';
        contentEnglish.style.display = 'flex';
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
