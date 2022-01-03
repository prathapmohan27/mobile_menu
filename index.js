(() => {
  const menuButton = document.querySelector('.header-menu');
  const navContainer = document.querySelector('.nav-container');
  const close = document.querySelector('.nav-close');

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    navContainer.classList.add('active');
  });
  close.addEventListener('click', () => {
    navContainer.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (!e.target.matches('.header-menu')) {
      if (navContainer.classList.contains('active')) {
        navContainer.classList.remove('active');
      }
    }
  });
})();
