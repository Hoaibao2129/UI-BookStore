// document.addEventListener("DOMContentLoaded", function(event) {
   
//     const showNavbar = (toggleId, navId, bodyId, headerId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId),
//     bodypd = document.getElementById(bodyId),
//     headerpd = document.getElementById(headerId)
    
//     // Validate that all variables exist
//     if(toggle && nav && bodypd && headerpd){
//     toggle.addEventListener('click', ()=>{
//     // show navbar
//     nav.classList.toggle('show')
//     // change icon
//     toggle.classList.toggle('bx-x')
//     // add padding to body
//     bodypd.classList.toggle('body-pd')
//     // add padding to header
//     headerpd.classList.toggle('body-pd')
//     })
//     }
//     }
    
//     showNavbar('header-toggle','nav-bar','body-pd','header')
    
//     /*===== LINK ACTIVE =====*/
//     const linkColor = document.querySelectorAll('.nav_link')
    
//     function colorLink(){
//     if(linkColor){
//     linkColor.forEach(l=> l.classList.remove('active'))
//     this.classList.add('active')
//     }
//     }
//     linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
//      // Your code to run since DOM is loaded and ready
//     });

document.addEventListener("DOMContentLoaded", function(event) {
    const sidebar = document.querySelector(".sidebar");
    const sidebarClose = document.querySelector("#sidebar-close");
    const menu = document.querySelector(".menu-content");
    const menuItems = document.querySelectorAll(".submenu-item");
    const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
    sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));
    
    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        menu.classList.add("submenu-active");
        item.classList.add("show-submenu");
        menuItems.forEach((item2, index2) => {
          if (index !== index2) {
            item2.classList.remove("show-submenu");
          }
        });
      });
    });
    
    subMenuTitles.forEach((title) => {
      title.addEventListener("click", () => {
        menu.classList.remove("submenu-active");
      });
    });
})
  