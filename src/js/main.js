  // Header menu toggle
  document.addEventListener("DOMContentLoaded", () => {
  const toggleButton =document.querySelector('#menu-toggle'); 
  const mobileMenu =document.querySelector('#mobile-menu');
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

  const searchIcon =document.querySelector("#search-icon");
  const searchBox =document.querySelector("#search-box");
  const searchClose =document.querySelector("#search-close");

  if (searchIcon && searchBox && searchClose) {
    function toggleSearch() {
      const isOpen = searchBox.classList.contains("scale-y-100");

      if (isOpen) {
        searchBox.classList.remove("scale-y-100", "opacity-100");
        searchBox.classList.add("scale-y-0", "opacity-0");
        searchInput.value = ""; 
        searchLoading.classList.add("hidden");
      } else {
        searchBox.classList.add("scale-y-100", "opacity-100");
        searchBox.classList.remove("scale-y-0", "opacity-0");
        searchInput.value = ""; 
        searchLoading.classList.add("hidden");
      }
    }

    function closeSearch() {
      searchBox.classList.remove("scale-y-100", "opacity-100");
      searchBox.classList.add("scale-y-0", "opacity-0");
      searchInput.value = ""; 
      searchLoading.classList.add("hidden");
    }

    searchIcon.addEventListener("click", toggleSearch);
    searchClose.addEventListener("click", closeSearch);
  }
  const searchInput = document.querySelector("#search-input");
  const searchLoading = document.querySelector("#search-loading-results");

if (searchInput && searchLoading) {
  let timeoutId;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();

    if (query.length > 0) {
      searchLoading.classList.remove("hidden");

      clearTimeout(timeoutId);
      // timeoutId = setTimeout(() => {
      //   fetch(`/api/search?q=${encodeURIComponent(query)}`)
      //     .then(res => res.json())
      //     .then(data => {
      //       searchLoading.classList.add("hidden");
      //     });
      // }, 1000); 
    } else {
      searchLoading.classList.add("hidden");
    }
  }); 
}
  });

// Hero slider
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
    },
     on: {
      slideChange() {
        const active = swiper.slides[swiper.activeIndex];
        const h1 = active.querySelector('h1');
        const p  = active.querySelector('p');

        document.querySelectorAll('h1, p').forEach(el => {
          el.classList.remove('text-[#383838]','text-gray-700','text-[#f5f5f5]','text-gray-200');
        });

        if (swiper.realIndex === 0) {
          h1.classList.add('text-[#383838]');
          p .classList.add('text-gray-700');
        } else {
          h1.classList.add('text-[#f5f5f5]');
          p .classList.add('text-gray-200');
        }
      }
    }

  });
  

  document.querySelectorAll('.lottie-container').forEach(container => {
    const isMobile = window.innerWidth < 375; // Tailwind sm: <768px
    const preserveRatio = isMobile ? 'xMidYMid meet' : 'xMidYMid slice';
  
    const animation = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: container.dataset.animationPath,
      rendererSettings: {
        preserveAspectRatio: preserveRatio
      }
    });
  
    container._lottie = animation;
  });
  document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    const btnPrograms = document.querySelector('#btn-programs');
    const btnEnglish = document.querySelector('#btn-english');
    const contentPrograms = document.querySelector('#content-programs');
    const contentEnglish = document.querySelector('#content-english');

    if (btnPrograms && btnEnglish && contentPrograms && contentEnglish) {
      btnPrograms.addEventListener('click', function () {
        btnPrograms.classList.add('active-tab');
        btnEnglish.classList.remove('active-tab');

        contentPrograms.style.display = 'flex';
        contentEnglish.style.display = 'none';
      });

      btnEnglish.addEventListener('click', function () {
        btnEnglish.classList.add('active-tab');
        btnPrograms.classList.remove('active-tab');

        contentPrograms.style.display = 'none';
        contentEnglish.style.display = 'flex';
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".partnersSlider .swiper-wrapper");
    const slides = wrapper.querySelectorAll(".swiper-slide");
    const totalSlides = slides.length;
    const count = 10;
    if (totalSlides > 0) {
      new Swiper(".partnersSlider", {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 40,
        slidesPerView: 4,
        breakpoints: {
          270: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1.4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
        centeredSlides: false,
      });
    } else {
      document.querySelector(".partner-swiper").classList.add("normal-view");
    }
  });


  if(true) {
    document.addEventListener("DOMContentLoaded", () => {
      const SLIDE_DURATION_MS = 2000;
      const slidesCount = document.querySelectorAll('.swiper-slide').length;
      const progressContainer = document.getElementById('progressContainer');
    
      if (!progressContainer) return;
    
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
              if (bar) {
                bar.style.transition = "none";
                bar.style.width = "0%";
    
                void bar.offsetWidth; 
                bar.style.transition = "none";
              }
            }
    
            const realIndex = swiper.realIndex;
            const activeBar = document.getElementById(`progress-${realIndex}`);
            if (activeBar) {
              activeBar.style.transition = `width ${SLIDE_DURATION_MS}ms linear`;
              activeBar.style.width = "100%";
            }
          },
        },
      });
    
      const firstBar = document.getElementById("progress-0");
      if (firstBar) {
        firstBar.style.transition = `width ${SLIDE_DURATION_MS}ms linear`;
        firstBar.style.width = "100%";
      }
    });    
  }

  // Shura slider 
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


const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

if (tabs.length > 0) {
  tabs[0].classList.add("text-[#101828]", "border-b", "border-[#E81F26]");
  tabs[0].classList.remove("text-[#A1A1A1]");
  contents.forEach(c => c.classList.add("hidden"));
  document.getElementById(tabs[0].dataset.tab).classList.remove("hidden");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("text-[#101828]", "border-b", "border-[#E81F26]");
        t.classList.add("text-[#A1A1A1]");
      });

      tab.classList.add("text-[#101828]", "border-b", "border-[#E81F26]");
      tab.classList.remove("text-[#A1A1A1]");

      contents.forEach(c => c.classList.add("hidden"));
      document.getElementById(tab.dataset.tab).classList.remove("hidden");
    });
  });
}

// Contact
if (true) {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');
  
    if (form) {
      const fields = form.querySelectorAll('input, textarea');
  
      form.addEventListener('submit', function (e) {
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
  });
  
 }

 // Academic modal
 window.openModal = function(name, position, imageUrl) {
  const modal = document.getElementById('profileModal');
  const modalContent = modal.querySelector('.modal-content');
  
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalPosition').textContent = position;
  document.getElementById('modalImage').src = imageUrl;
  
  modal.classList.remove('hidden');
  modalContent.classList.remove('modal-exit');
  
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const modal = document.getElementById('profileModal');
  const modalContent = modal.querySelector('.modal-content');
  
  modalContent.classList.add('modal-exit');
  
  setTimeout(() => {
      modal.classList.add('hidden');
      modalContent.classList.remove('modal-exit');
      document.body.style.overflow = 'auto';
  }, 300);
};

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          closeModal();
      }
  });

  const modalContent = document.querySelector('.modal-content');
  if (modalContent) {
      modalContent.addEventListener('click', function(e) {
          e.stopPropagation();
      });
  }
});
function resizeContainerToImage(img) {
  const container = document.getElementById('imageContainer');
  const aspectRatio = img.naturalHeight / img.naturalWidth;
  container.style.height = `${container.offsetWidth * aspectRatio}px`;
}

// async function loadComponent(id, path) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   const res = await fetch(path);
//   const html = await res.text();
//   el.innerHTML = html;

//   AOS.refresh();



// }


// loadComponent('header', '/templates/partials/header.html');

// Main page
// loadComponent('hero', '/templates/partials/hero.html');
// loadComponent('xəbərlər-elanlar', '/templates/partials/xəbərlər-elanlar.html');
// loadComponent('specialties', '/templates/partials/specialties.html');
// loadComponent('application', '/templates/partials/application.html');
// loadComponent('apply', '/templates/partials/apply.html');
// loadComponent('students-opinions', '/templates/partials/students-opinions.html');
// loadComponent('partners', '/templates/partials/partners.html');

// About page
// loadComponent('breadcrumbs', '/templates/partials/breadcrumbs.html');
// loadComponent('history', '/templates/partials/history.html');
// loadComponent('education', '/templates/partials/education.html')
// loadComponent('accept', '/templates/partials/accept.html')
// loadComponent('az-turkiye-terefi', '/templates/partials/az-turkiye-terefi.html')
// loadComponent('diplom', '/templates/partials/diplom.html')
// loadComponent('structure', '/templates/partials/structure.html')

// Academic page
// loadComponent('academic-card', '/templates/partials/academic-card.html');

// Specialties page
// loadComponent('specialties-slider', '/templates/partials/specialties-slider.html');
// loadComponent('specialties-card', '/templates/partials/specialties-card.html'); 
// loadComponent('specialties-program', '/templates/partials/specialties-program.html');
// loadComponent('specialties-professor', '/templates/partials/specialties-professor.html');

// Sənaye mühəndisliyi
// loadComponent('sənaye-mühəndisliyi', '/templates/partials/sənaye-mühəndisliyi.html');

// Qida mühəndisliyi
// loadComponent('qida-mühəndisliyi', '/templates/partials/qida-mühəndisliyi.html');

// Shura-uzvleri
// loadComponent('himayechiler-shurasi', '/templates/partials/himayechiler-shurasi.html');
// loadComponent('shura-slider', '/templates/partials/shura-slider.html');
// loadComponent('elmi-shura-slider', '/templates/partials/elmi-shura-slider.html');

// Xəbərlər
// loadComponent('xəbərlər', '/templates/partials/xəbərlər.html');
// loadComponent('xəbərlər-daxili', '/templates/partials/xəbərlər-daxili.html');

// Elanlar
// loadComponent('elanlar', '/templates/partials/elanlar.html');
// loadComponent('elanlar-daxili', '/templates/partials/elanlar-daxili.html');

// Contact
// loadComponent('contact', '/templates/partials/contact.html');
// loadComponent('success-modal', '/templates/partials/success-modal.html');
// loadComponent('error-modal', '/templates/partials/error-modal.html');

// 404
// loadComponent('404', '/templates/partials/404.html');

// Search
// loadComponent('search-result', '/templates/partials/search-result.html');

// Hazırlıq
// loadComponent('hazırlıq', '/templates/partials/hazırlıq.html');
// loadComponent('hazırlıq-daxili', '/templates/partials/hazırlıq-daxili.html');

// Kurikulum


// loadComponent('footer', '/templates/partials/footer.html');
