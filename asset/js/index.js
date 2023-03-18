const navbarToggle = navbar.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);

$(document).ready(function () {
  for (let index = 0; index < 8; index++) {
    var c2 = $('#gallery_creations_img_0').clone();
    c2.attr('id', 'gallery_creations_img_' + (index + 1));        // modifiy dom attribut
    c2.attr('title', 'gallery_creations_img_' + (index + 1));
    c2.attr('name', 'gallery_creations_img_' + (index + 1));
    c2.find('h2').html('gallery_creations_img_ ' + (index + 2));   // modify h2 > html (value)
    c2.appendTo('#section_creations');
  }
});

$(document).ready(function () {
  for (let index = 0; index < 8; index++) {
    var c2 = $('#gallery_ventes_img_0').clone();
    c2.attr('id', 'gallery_ventes_img_' + (index + 1));        // modifiy dom attribut
    c2.attr('title', 'gallery_ventes_img_' + (index + 1));
    c2.attr('name', 'gallery_ventes_img_' + (index + 1));
    c2.find('h2').html('gallery_ventes_img_ ' + (index + 2));   // modify h2 > html (value)
    c2.appendTo('#section_ventes');
  }
});

Fancybox.bind('[data-fancybox="gallery_creations"]', {
  //
});   
Fancybox.bind('[data-fancybox="gallery_ventes"]', {
  //
});   

