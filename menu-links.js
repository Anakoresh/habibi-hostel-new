document.addEventListener('DOMContentLoaded', () => {
  const links = [
    'home',
    'rooms',
    'areas',
    'services',
    'around-hostel',
    'faq'
  ];

  function updateMenuLinks() {
    const isMobile = window.innerWidth <= 1023;

    links.forEach(id => {
      const link = document.getElementById(`link-${id}`);
      if (link) {
        const targetId = isMobile ? `/#${id}-adaptive` : `/#${id}`;
        link.setAttribute('href', targetId);
      }
    });
  }

  updateMenuLinks();
  window.addEventListener('resize', updateMenuLinks);
});