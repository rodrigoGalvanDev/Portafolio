
const $menuNav = document.querySelector("#abrirMenu");
const $menuMobile = document.querySelector("#mobileMenu");
const $cerrarMenu = document.querySelector("#exitMenu")

$cerrarMenu.onclick = function cerrarMenu(){
      $menuMobile.classList.remove("mostrar")
      $menuMobile.classList.add("ocultar")
}

$menuNav.onclick = function abrirMenu(){

      $menuMobile.classList.remove("ocultar");
      $menuMobile.classList.add("mostrar");
}
