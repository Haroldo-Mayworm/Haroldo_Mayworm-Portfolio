/*
 * Function that monitors page scroll position and adds/removes classes to create a sticky header effect.
 */
window.addEventListener('scroll', function () {
  var header = document.getElementById('header');

  if (window.scrollY > 0) {
    header.classList.add('activeScroll-header');
  } else {
    header.classList.remove('activeScroll-header');
  }
});
// Final

/*
 * Function that monitors when a user clicks on one of the menu items. When clicked, it adds/removes the "active" class, changing the item's style.
 */
var itemMenu = document.querySelectorAll('.menu ul li a');
itemMenu.forEach(function (item) {
  item.addEventListener('click', function () {
    itemMenu.forEach(function (item) {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});
// Final

/*
 * The function aims to smooth out the scroll when the user clicks on the menu item and return to the top of the page when the "home" item has been clicked.
 */
document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

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
