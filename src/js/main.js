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

    const searchIcon = document.getElementById("search-icon");
    const searchBox = document.getElementById("search-box");
    const searchClose = document.getElementById("search-close");

    function toggleSearch() {
      const isOpen = searchBox.classList.contains("scale-y-100");

      if (isOpen) {
        searchBox.classList.remove("scale-y-100", "opacity-100");
        searchBox.classList.add("scale-y-0", "opacity-0");
      } else {
        searchBox.classList.add("scale-y-100", "opacity-100");
        searchBox.classList.remove("scale-y-0", "opacity-0");
      }
    }

    function closeSearch() {
      searchBox.classList.remove("scale-y-100", "opacity-100");
      searchBox.classList.add("scale-y-0", "opacity-0");
    }

    searchIcon.addEventListener("click", toggleSearch);
    searchClose.addEventListener("click", closeSearch);
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

  if(id === 'history' || id === 'specialties-slider' || id ==='himayechiler-shurasi') {
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
  
  function initializeSlider(sliderId) {
    const container = document.querySelector(`#${sliderId} .carousel-container`) || 
                      document.querySelector('.carousel-container');
    const slides = document.querySelectorAll(`#${sliderId} .slide`) || 
                   document.querySelectorAll('.slide');
    const slideContents = document.querySelectorAll(`#${sliderId} ~ .slide-content`) || 
                          document.querySelectorAll('.slide-content');
    const slideWrappers = document.querySelectorAll(`#${sliderId} .slide-wrapper`) || 
                          document.querySelectorAll('.slide-wrapper');

    let indicatorSpans, indicatorsWrapper, prevBtn, nextBtn, slideNumberEl;
    
    if (sliderId === 'shura-slider') {
        indicatorSpans = document.querySelectorAll('#indicators-wrapper .indicator-span');
        indicatorsWrapper = document.getElementById('indicators-wrapper');
        prevBtn = document.getElementById('prev-btn');
        nextBtn = document.getElementById('next-btn');
        slideNumberEl = document.getElementById('slide-number');
    } else if (sliderId === 'elmi-shura-slider') {
        indicatorSpans = document.querySelectorAll('#indicators-wrapper-two .indicator-span');
        indicatorsWrapper = document.getElementById('indicators-wrapper-two');
        prevBtn = document.getElementById('prev-btn-two');
        nextBtn = document.getElementById('next-btn-two');
        slideNumberEl = document.getElementById('slide-number-two');
    }
    
    let count = 1;
    const targetNumber = sliderId === 'shura-slider' ? 14 : 5;
    const duration = 1500;
    const stepTime = Math.floor(duration / targetNumber);
    
    function animateSlideNumber() {
        const interval = setInterval(() => {
            if (slideNumberEl) {
                slideNumberEl.textContent = String(count).padStart(2, '0');
            }
            count++;
            if (count > targetNumber) {
                clearInterval(interval);
            }
        }, stepTime);
    }

    animateSlideNumber();
    
    let currentActiveIndex = -1;
    let scrollTimeout;
    
    function updateIndicatorPosition(activeIndex) {
        if (!indicatorsWrapper || !indicatorSpans.length) return;
        
        const middlePosition = 2;
        const totalIndicators = indicatorSpans.length;
        let offset = activeIndex - middlePosition;
        offset = Math.max(0, Math.min(offset, totalIndicators - 5));
        const translateY = -offset * 36;
        indicatorsWrapper.style.transform = `translateY(${translateY}px)`;
    }
    
    function setActiveSlide(index) {
        if (index === currentActiveIndex) return;
    
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        slideContents.forEach((content, i) => {
            content.classList.toggle('active', i === index);
        });
        indicatorSpans.forEach((span, i) => {
            span.classList.toggle('active', i === index);
        });
        slideWrappers.forEach((wrapper, i) => {
            wrapper.classList.toggle('active', i === index);
        });
    
        updateIndicatorPosition(index);
        currentActiveIndex = index;
    }
    
    function findCenteredSlide() {
        if (!container || !slideWrappers.length) return 0;
        
        const containerRect = container.getBoundingClientRect();
        const centerY = containerRect.top + containerRect.height / 2;
        
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        slideWrappers.forEach((wrapper, idx) => {
            const rect = wrapper.getBoundingClientRect();
            const wrapperCenterY = rect.top + rect.height / 2;
            const distance = Math.abs(wrapperCenterY - centerY);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = idx;
            }
        });
        return closestIndex;
    }
    
    function scrollToSlide(index) {
        if (!container || !slideWrappers[index]) return;
        
        const wrapper = slideWrappers[index];
        const offset = wrapper.offsetTop - (container.clientHeight / 2) + (wrapper.clientHeight / 2);
        container.scrollTo({ top: offset, behavior: 'smooth' });
    }
    
    const middleIndex = 2;
    setTimeout(() => {
        setActiveSlide(middleIndex);
        scrollToSlide(middleIndex);
    }, 100);

    if (container) {
        container.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const idx = findCenteredSlide();
                setActiveSlide(idx);
            }, 50);
        });
    }
    
    slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
            scrollToSlide(idx);
        });
    });

    indicatorSpans.forEach((span, idx) => {
        span.addEventListener('click', () => {
            scrollToSlide(idx);
        });
    });
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            let newIndex = currentActiveIndex - 1;
            if (newIndex < 0) newIndex = 0;
            scrollToSlide(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            let newIndex = currentActiveIndex + 1;
            if (newIndex > slides.length - 1) newIndex = slides.length - 1;
            scrollToSlide(newIndex);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('shura-slider')) {
        initializeSlider('shura-slider');
    }
    
    if (document.getElementById('elmi-shura-slider')) {
        initializeSlider('elmi-shura-slider');
    }
});

function handleSliderById(id) {
    if (id === 'shura-slider' || id === 'elmi-shura-slider') {
        initializeSlider(id);
    }
}

handleSliderById('shura-slider');
handleSliderById('elmi-shura-slider');

// Contact
if ( id === 'contact' ) {
 const form = document.getElementById('myForm');
  const fields = form.querySelectorAll('input, textarea');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let hasError = false;

    fields.forEach(field => {
      field.classList.remove(
        'border-red-500',
        'focus:border-red-500',
        'border-[#DBDBDB]',
        'focus:border-[#ADADAD]'
      );

      const isInvalid = field.value.trim() === '' || !field.checkValidity();

      if (isInvalid) {
        field.classList.add('border-red-500', 'focus:border-red-500');
        hasError = true;
      } else {
        field.classList.add('border-[#DBDBDB]', 'focus:border-[#ADADAD]');
      }
    });
  });

  fields.forEach(field => {
    field.addEventListener('input', () => {
      if (field.value.trim() !== '' && field.checkValidity()) {
        field.classList.remove('border-red-500', 'focus:border-red-500');
        field.classList.add('border-[#DBDBDB]', 'focus:border-[#ADADAD]');
      }
    });
  });
}
}


loadComponent('header', '/templates/partials/header.html');

// Main page
loadComponent('hero', '/templates/partials/hero.html');
loadComponent('xəbərlər-elanlar', '/templates/partials/xəbərlər-elanlar.html');
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
loadComponent('elmi-shura-slider', '/templates/partials/elmi-shura-slider.html');

// Xəbərlər
loadComponent('xəbərlər', '/templates/partials/xəbərlər.html');
loadComponent('xəbərlər-daxili', '/templates/partials/xəbərlər-daxili.html');

// Elanlar
loadComponent('elanlar', '/templates/partials/elanlar.html');
loadComponent('elanlar-daxili', '/templates/partials/elanlar-daxili.html');

// Contact
loadComponent('contact', '/templates/partials/contact.html');
loadComponent('success-modal', '/templates/partials/success-modal.html');
loadComponent('error-modal', '/templates/partials/error-modal.html');

// 404
loadComponent('404', '/templates/partials/404.html');

// Search
loadComponent('search-result', '/templates/partials/search-result.html');

// Hazırlıq
loadComponent('hazırlıq', '/templates/partials/hazırlıq.html');

loadComponent('footer', '/templates/partials/footer.html');
