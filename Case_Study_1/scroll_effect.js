document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section');
  const sidebarLinks = document.querySelectorAll('#sidebar-list a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 175) {
        current = section.getAttribute('id');
      }
    });

    sidebarLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
