// var menu_btn = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const container = document.querySelector(".my-container");
// menu_btn.addEventListener("click", () => {
//   sidebar.classList.toggle("active-nav");
//   container.classList.toggle("active-cont");
// });

var colorPicker = new iro.ColorPicker(".colorPicker", {
    // color picker options
    // Option guide: https://iro.js.org/guide.html#color-picker-options
    width: 280,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
  });
  

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.side-navbar .side-navbar-nav-link').forEach(function(element){
    element.addEventListener('click', function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;  
      if(nextEl) {
        e.preventDefault(); 
        let mycollapse = new bootstrap.Collapse(nextEl);
        if(nextEl.classList.contains('show')){
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
          // if it exists, then close all of them
          if(opened_submenu){
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    });
  })
});

// sidebar.classList.toggle("active-nav");
// container.classList.toggle("active-cont");


