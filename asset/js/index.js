function set_link() {
  var z, i, elmnt, file;

  z = document.getElementsByTagName("*");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("link-position");
    
    if(file){
      console.log(elmnt)

      let split = file.split(" ");

      document.getElementById(elmnt.id).addEventListener("click", () => {
          let pos = document.getElementById(split[0]).offsetTop;
          
          window.scroll({
            top: pos - split[1] ,
            left: 0,
            behavior: 'smooth'
          })

          let navbarToggle = navbar.querySelector('#navbar-toggle');
          let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
          if (isNavbarExpanded) toggleNavbarVisibility();

        });
      
        elmnt.removeAttribute("link-position");
      
    }
  }
}

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
  for (let index = 0; index < 7; index++) {
    var c2 = $('#gallery_creations_img_0').clone();
    c2.attr('id', 'gallery_creations_img_' + (index + 1));        // modifiy dom attribut
    c2.attr('title', 'gallery_creations_img_' + (index + 1));
    c2.attr('name', 'gallery_creations_img_' + (index + 1));
    c2.find('img').attr('src', 'asset/img/g1_t/g1_'+ (index + 3)+'.jpg' );   //
    c2.find('img').attr('alt', 'Photos #'+ (index + 2) );   //
    c2.find('a').attr('href', 'asset/img/g1/g1_'+ (index + 3)+'.jpg' );   //
    c2.find('a').attr('data-caption', 'Photos #'+ (index + 2) );   //
    c2.find('h7').html('Photos #'+ (index + 2) );   //
    c2.appendTo('#gallery_creations');
  }
  for (let index = 0; index < 4; index++) {
    var c2 = $('#gallery_other_img_0').clone();
    c2.attr('id', 'gallery_other_img_' + (index + 1));        // modifiy dom attribut
    c2.attr('title', 'gallery_other_img_' + (index + 1));
    c2.attr('name', 'gallery_other_img_' + (index + 1));
    c2.find('img').attr('src', 'asset/img/g2_t/g2_'+ (index + 2)+'.jpg' );   //
    c2.find('img').attr('alt', 'Photos #'+ (index + 2));   //
    c2.find('a').attr('href', 'asset/img/g2/g2_'+ (index + 2)+'.jpg' );   //
    c2.find('a').attr('data-caption', 'Photos #'+ (index + 2) );   //
    c2.find('h7').html('Photos #'+ (index + 2) );   //

    c2.appendTo('#gallery_other');
  }  
});


Fancybox.bind('[data-fancybox="gallery_creations"]', {
  //
});   
Fancybox.bind('[data-fancybox="gallery_other"]', {
  //
});   

set_link();

function set_colors() {
  document.documentElement.style.setProperty('--contact-bg-light', '#7e7d7d0c');
  document.documentElement.style.setProperty('--contact-details-bg-light', '#7e7d7d1c');
  document.documentElement.style.setProperty('--bg-dark', '#26292E');
  document.documentElement.style.setProperty('--color-body-bg', '#2f3238');
  document.documentElement.style.setProperty('--color-body', '#7f8289');
  document.documentElement.style.setProperty('--color-hx', '#fff');
  document.documentElement.style.setProperty('--color-h7', '#fff');
  document.documentElement.style.setProperty('--color-h7-bg', 'rgba(14, 14, 14, 0.466)');
  document.documentElement.style.setProperty('--color-footer-bg', '#00000075');
  document.documentElement.style.setProperty('--color-container-contact-bg', '#2F3238');
  document.documentElement.style.setProperty('--color-container-img-bg', 'rgba(14, 14, 14, 0.466)');
  document.documentElement.style.setProperty('--color-container-img', '#fff');
  document.documentElement.style.setProperty('--color-container-contact', '#fff');
}
function set_colors_2(){
/*   const element = document.querySelectorAll('h7');
  element.style.textShadow  = '0px 0px #0';   */

  var divs = document.getElementsByTagName("h3");  // Access all <H1> present in your body.
  for(var i = 0; i < divs.length; i++) {   //divs.length contain number of <h1> elements
    var div = divs[i];                     // Now access Each <H1> one-by-one
    div.style.textShadow = '0 0';             // Set Color Style of each <h1>
  }
  var divs = document.getElementsByTagName("h2");  // Access all <H1> present in your body.
  for(var i = 0; i < divs.length; i++) {   //divs.length contain number of <h1> elements
    var div = divs[i];                     // Now access Each <H1> one-by-one
    div.style.textShadow = '0 0';             // Set Color Style of each <h1>
  }  
}

set_colors_2();