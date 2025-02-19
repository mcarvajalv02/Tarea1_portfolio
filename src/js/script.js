// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Añadir clases de animación al hero
  const heroImage = document.querySelector('#hero img');
  const heroContent = document.querySelector('#hero div:last-child');

  heroImage.classList.add('animate-hero-image');
  heroContent.classList.add('animate-hero-content');

  // Configurar el observer para animaciones de scroll
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show-element');
          }
      });
  });

  // Que aparezcan las tecnologías
  const techItems = document.querySelectorAll('#tecnologias img');
  techItems.forEach((item, index) => {
      item.classList.add('hidden-element');
      item.style.setProperty('--order', index);
      item.classList.add('tech-item');
      observer.observe(item);
  });

  // Que aparezcan los proyectos
  const projectCards = document.querySelectorAll('#proyectos .grid > div');
  projectCards.forEach((card, index) => {
      card.classList.add('project-card');
      observer.observe(card);
  });

  // ---- Funcionalidad del menú  ----
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Modificar el estilo del menú móvil para que sea vertical
  const mobileMenuList = document.querySelector('#mobile-menu ul');
  mobileMenuList.classList.remove('flex', 'justify-between');
  mobileMenuList.classList.add('flex-col', 'space-y-3');

  // Ajustar los elementos del menú para vertical
  const mobileMenuItems = document.querySelectorAll('#mobile-menu li');
  mobileMenuItems.forEach(item => {
    item.classList.remove('text-center');
    const link = item.querySelector('a');
    link.classList.add('flex', 'items-center');
    const icon = link.querySelector('svg');
    icon.classList.remove('mx-auto', 'mb-1');
    icon.classList.add('mr-3');
  });

  menuToggle.addEventListener('click', () => {
    // Alternar entre mostrar y ocultar el menú móvil
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    } else {
      mobileMenu.style.maxHeight = '0';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300); 
    }
  });
});