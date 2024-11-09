
(() => {

  let current = null;

  document.querySelectorAll('.menu_main > .menu__item:has(.menu_sub) > a').forEach(menuItem => {
    menuItem.addEventListener('click', function(e) {
      e.preventDefault();
      const subMenu = e.target.parentElement.querySelector('.menu_sub');
      if (subMenu.classList.contains('menu_active')) {
        subMenu.classList.remove('menu_active');
        current = null;
      } else {
        if (current !== null) {
          current.classList.remove('menu_active');
        }
        subMenu.classList.add('menu_active');
        current = subMenu;
      }
    });
  });
})();
