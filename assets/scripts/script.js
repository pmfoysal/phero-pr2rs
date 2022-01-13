const menuButton = document.querySelector('.hamMenuIcon');
const header = document.querySelector('#header');

menuButton.addEventListener('click', function () {
   if (!header.classList.contains('active')) {
      header.classList.add('active');
   } else {
      header.classList.remove('active');
   }
});
