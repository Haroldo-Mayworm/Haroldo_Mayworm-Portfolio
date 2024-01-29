/*
 * Function that monitors page scroll position and adds/removes classes to create a sticky header effect.
 */
window.addEventListener('scroll', function () {
  let header = document.getElementById('header');

  if (window.innerWidth > 750) {
    if (window.scrollY > 0) {
      header.classList.add('activeScroll-header');
    } else {
      header.classList.remove('activeScroll-header');
    }
  }
});
// Final

/*
 * Function that monitors when a user clicks on one of the menu items. When clicked, it adds/removes the "active" class, changing the item's style.
 */
if (window.innerWidth > 750) {
  let itemMenu = document.querySelectorAll('.menu ul li a');
  itemMenu.forEach(function (item) {
    item.addEventListener('click', function () {
      itemMenu.forEach(function (item) {
        item.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
}
// Final

/*
 * The function aims to smooth out the scroll when the user clicks on the menu item and return to the top of the page when the "home" item has been clicked.
 */
document.addEventListener('DOMContentLoaded', function () {
  let menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let targetId = this.getAttribute('href').substring(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        if (targetId === 'header') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    });
  });
});

/*
 * The function to add animation when loading the website
 */
document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('loaded');
});
// Final

/*
 * The JavaScript function presented is responsible for toggling the visibility of a hamburger menu. When the hamburger icon is clicked, the function adds or removes the active class, which modifies the appearance of the icon, transforming it into an "x". Additionally, the function also shows or hides the navigation menu.
 */
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.menu-hbr');
  const nav = document.querySelector('.menu ul');

  hamburgerMenu.addEventListener('click', function () {
    nav.classList.toggle('show');
    hamburgerMenu.classList.toggle('active');
  });

  const menuItems = document.querySelectorAll('.menu ul li a');
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      nav.classList.remove('show');
      hamburgerMenu.classList.remove('active');
    });
  });
});
