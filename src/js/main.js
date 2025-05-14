async function loadComponent(id, path) {
    const el = document.getElementById(id);
    if (!el) return;
  
    const res = await fetch(path);
    const html = await res.text();
    el.innerHTML = html;
  }
  
  loadComponent('header', '/templates/partials/header.html');
  loadComponent("footer", "/templates/partials/footer.html");
  loadComponent("page-content", "/pages/home.html");
  