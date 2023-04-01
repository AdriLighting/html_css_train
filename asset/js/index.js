function set_link() {
  var z, i, elmnt, file;

  z = document.getElementsByTagName("*");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file  = elmnt.getAttribute("link-position");
    
    if(file){
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

const navbarToggle    = navbar.querySelector('#navbar-toggle');
let isNavbarExpanded  = navbarToggle.getAttribute('aria-expanded') === 'true';
const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};
navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu            = document.querySelector('#navbar-menu');
const navbarLinksContainer  = navbarMenu.querySelector('.navbar-links');
navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);

function set_colors() {
  // var divs = document.getElementsByTagName("h3");  
  // for(var i = 0; i < divs.length; i++) {   
  //   var div = divs[i];                     
  //   div.style.textShadow = '2px 2px #333';             
  // }
  // var divs = document.getElementsByTagName("h2"); 
  // for(var i = 0; i < divs.length; i++) {  
  //   var div = divs[i];                   
  //   div.style.textShadow = '2px 2px #000000';           
  // }  

  document.documentElement.style.setProperty('--contact-bg-light', '#7e7d7d0c');
  // document.documentElement.style.setProperty('--contact-details-bg-light', '#7e7d7d1c');
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
  document.documentElement.style.setProperty('--color-container-contact-2', '#adadad');
  document.documentElement.style.setProperty('--color-container-contact-hover', '#fff');
  document.documentElement.style.setProperty('--color-container-contact-bg-light', '#ffffff0c');
  document.documentElement.style.setProperty('--color-container-contact-shadow', '2px 2px 2px #00000065');

}
function set_colors_2(){
  document.documentElement.style.setProperty('--contact-bg-light', '#ffffff0c');
  // document.documentElement.style.setProperty('--contact-details-bg-light', '#7e7d7d1c');
  document.documentElement.style.setProperty('--bg-dark', '#dfdede48');
  document.documentElement.style.setProperty('--color-body-bg', '#ffffff');
  document.documentElement.style.setProperty('--color-body', '#09003a');
  document.documentElement.style.setProperty('--color-hx', '#09003a');
  document.documentElement.style.setProperty('--color-h7', '#fefeff');
  document.documentElement.style.setProperty('--color-h7-bg', 'rgba(14, 14, 14, 0.466)');
  document.documentElement.style.setProperty('--color-footer-bg', '#00000075');
  document.documentElement.style.setProperty('--color-container-contact-bg', '#cccccc');
  document.documentElement.style.setProperty('--color-container-img-bg', 'rgba(14, 14, 14, 0.466)');
  document.documentElement.style.setProperty('--color-container-img', '#09003a');
  document.documentElement.style.setProperty('--color-container-contact', '#09003a');
  document.documentElement.style.setProperty('--color-container-contact-2', '#09003a');
  document.documentElement.style.setProperty('--color-container-contact-hover', '#0026ff');
  document.documentElement.style.setProperty('--color-container-contact-bg-light', '#d6d6d623');
  document.documentElement.style.setProperty('--color-container-contact-shadow', '2px 2px 2px #c2c2c2e5');
}






$(document).ready(function () {
  for (let index = 0; index < 7; index++) {
    var c2 = $('#gallery_creations_img_0').clone();
    c2.attr('id', 'gallery_creations_img_' + (index + 1));       
    c2.attr('title', 'gallery_creations_img_' + (index + 1));
    c2.attr('name', 'gallery_creations_img_' + (index + 1));
    c2.find('img').attr('src', 'asset/img/g1_t/g1_'+ (index + 3)+'.jpg' );   
    c2.find('img').attr('alt', 'Photos #'+ (index + 2) );   
    c2.find('a').attr('href', 'asset/img/g1/g1_'+ (index + 3)+'.jpg' );   
    c2.find('a').attr('data-caption', 'Photos #'+ (index + 2) );   
    c2.find('.grid-item-img-legend').html('Photos #'+ (index + 2) );   
    c2.find('.grid-item-img-overlay').html('+' );   
    c2.appendTo('#gallery_creations');
  }
  for (let index = 0; index < 4; index++) {
    var c2 = $('#gallery_other_img_0').clone();
    c2.attr('id', 'gallery_other_img_' + (index + 1));       
    c2.attr('title', 'gallery_other_img_' + (index + 1));
    c2.attr('name', 'gallery_other_img_' + (index + 1));
    c2.find('img').attr('src', 'asset/img/g2_t/g2_'+ (index + 2)+'.jpg' );  
    c2.find('img').attr('alt', 'Photos #'+ (index + 2));  
    c2.find('a').attr('href', 'asset/img/g2/g2_'+ (index + 2)+'.jpg' );  
    c2.find('a').attr('data-caption', 'Photos #'+ (index + 2) );  
    c2.find('.grid-item-img-legend').html('Photos #'+ (index + 2) );  
    c2.find('.grid-item-img-overlay').html('+' );  
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

set_colors_2() ;

/* document.getElementById("switch_nightmode").addEventListener('click', ()=> {
  let element       = document.getElementById('boutique');
  var elementStyle  = window.getComputedStyle(element,"");
  if ( elementStyle.getPropertyValue("background-color") == 'rgb(38, 41, 46)' ) {
    set_colors_2() ;
  } else {
    set_colors() ;
  }
} ); */
// document.getElementById("switch_nightmode").checked = true;




/*
  const table = document.getElementById("gallery_creations");
  const cells = table.getElementsByTagName("div");
  const id = cells[cells.length-1];
  console.log(id);

  const str = id.getAttribute("id");
  const words = str.split('_');

  console.log(words[words.length-1]);

  index = 8
  const el = document.createElement('div');
  el.setAttribute('id',     'gallery_creations_img_'+index);
  el.setAttribute('title',  'gallery_creations_img_'+index);
  el.setAttribute('name',   'gallery_creations_img_'+index);
  el.setAttribute('class', 'grid-item');

  index = 2
  const el_2 = document.createElement('a');
  el_2.setAttribute('href',         'asset/img/g1/g1_'+ index +'.jpg');
  el_2.setAttribute('data-caption', 'Photos #11' );
  el_2.setAttribute('data-fancybox', 'gallery_creations' );

  index = 2
  const el_3 = document.createElement('img');
  el_3.setAttribute('src',  'asset/img/g1_t/g1_'+ index +'.jpg');
  el_3.setAttribute('alt',  'Photos #'+ index );

  index = 2
  const el_4 = document.createElement('h7');
  el_4.innerHTML = "test";

  el_2.appendChild(el_3);
  el_2.appendChild(el_4);
  el.appendChild(el_2);

  const box = document.getElementById('gallery_creations');
  box.appendChild(el);
*/