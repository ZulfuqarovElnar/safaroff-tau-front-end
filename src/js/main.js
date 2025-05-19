async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(path);
  const html = await res.text();
  el.innerHTML = html;

  if (id === 'header') {
    const toggleButton = el.querySelector('#menu-toggle'); 
    const mobileMenu = el.querySelector('#mobile-menu');
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) { // lg breakpoint: 1024px
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
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
