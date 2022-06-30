//Menu para responsive design
const $menuNav = document.querySelector("#abrirMenu");
const $menuMobile = document.querySelector("#mobileMenu");
const $cerrarMenu = document.querySelector("#exitMenu")

$cerrarMenu.onclick = function closeMenuCross(){
      $menuMobile.classList.remove("show")
      $menuMobile.classList.add("hide")
}

$menuNav.onclick = function openMenu(){
      $menuMobile.classList.remove("hide");
      $menuMobile.classList.add("show");
}


//Botones del menu mobile
const $buttonsMobile = document.querySelector('#button-mb-menu')

$buttonsMobile.onclick = function closeMenuButton(){
      $menuMobile.classList.remove("show")
      $menuMobile.classList.add("hide")
}