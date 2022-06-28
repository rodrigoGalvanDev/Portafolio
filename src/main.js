//Menu para responsive design
const $menuNav = document.querySelector("#abrirMenu");
const $menuMobile = document.querySelector("#mobileMenu");
const $cerrarMenu = document.querySelector("#exitMenu")

$cerrarMenu.onclick = function cerrarMenuCruz(){
      $menuMobile.classList.remove("mostrar")
      $menuMobile.classList.add("ocultar")
}

$menuNav.onclick = function abrirMenu(){
      $menuMobile.classList.remove("ocultar");
      $menuMobile.classList.add("mostrar");
}


//Botones del menu mobile
const $buttonsMobile = document.querySelector('#button-mb-menu')

$buttonsMobile.onclick = function cerrarMenuButton(){
      $menuMobile.classList.remove("mostrar")
      $menuMobile.classList.add("ocultar")
}