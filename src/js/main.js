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

  if(id === 'history' || id === 'specialties-slider') {
    const SLIDE_DURATION_MS = 2000;
    const slidesCount = document.querySelectorAll('.swiper-slide').length;
      const progressContainer = document.getElementById('progressContainer');

      for (let i = 0; i < slidesCount; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'progress-bar-wrapper';

        const bar = document.createElement('div');
        bar.className = 'progress-bar';
        bar.id = `progress-${i}`;

        wrapper.appendChild(bar);
        progressContainer.appendChild(wrapper);
      }

      const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
          delay: SLIDE_DURATION_MS,
          disableOnInteraction: false,
        },
        on: {
          slideChangeTransitionStart: function () {

            for (let i = 0; i < slidesCount; i++) {
              const bar = document.getElementById(`progress-${i}`);
              bar.style.transition = "none";
              bar.style.width = "0%";

              void bar.offsetWidth;
              bar.style.transition = "none";
            }

            const realIndex = swiper.realIndex;
            const activeBar = document.getElementById(`progress-${realIndex}`);
            activeBar.style.transition = "width 1s linear";
            activeBar.style.width = "100%";
          },
        },
      });

      window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("progress-0").style.transition = `width ${SLIDE_DURATION_MS}ms linear`;
        document.getElementById("progress-0").style.width = "100%";
      });
  }
  if(id === 'shura-slider') {
    const slides = document.querySelectorAll('.slide');
    const slideContents = document.querySelectorAll('.slide-content');
  
    function setActiveSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('inactive', i !== index);
        slide.classList.toggle('active', i === index);
      });
      slideContents.forEach((content, i) => {
        content.style.display = i === index ? 'flex' : 'none';
      });
    }
  
    // İndi orta slide-ı seçək (indeks 1, yəni ikinci slide)
    setActiveSlide(1);
  
  }
}


loadComponent('header', '/templates/partials/header.html');

// Main page
loadComponent('hero', '/templates/partials/hero.html');
loadComponent('news', '/templates/partials/news.html');
loadComponent('specialties', '/templates/partials/specialties.html');
loadComponent('application', '/templates/partials/application.html');
loadComponent('apply', '/templates/partials/apply.html');
loadComponent('students-opinions', '/templates/partials/students-opinions.html');
loadComponent('partners', '/templates/partials/partners.html');

// About page
loadComponent('breadcrumbs', '/templates/partials/breadcrumbs.html');
loadComponent('history', '/templates/partials/history.html');
loadComponent('education', '/templates/partials/education.html')
loadComponent('accept', '/templates/partials/accept.html')
loadComponent('az-turkiye-terefi', '/templates/partials/az-turkiye-terefi.html')
loadComponent('diplom', '/templates/partials/diplom.html')
loadComponent('structure', '/templates/partials/structure.html')

// Academic page
loadComponent('academic-card', '/templates/partials/academic-card.html');

// Specialties page
loadComponent('specialties-slider', '/templates/partials/specialties-slider.html');
loadComponent('specialties-card', '/templates/partials/specialties-card.html'); 
loadComponent('specialties-program', '/templates/partials/specialties-program.html');
loadComponent('specialties-professor', '/templates/partials/specialties-professor.html');

// Shura-uzvleri
loadComponent('himayechiler-shurasi', '/templates/partials/himayechiler-shurasi.html');
loadComponent('shura-slider', '/templates/partials/shura-slider.html');


loadComponent('footer', '/templates/partials/footer.html');
