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

//Calcular edad

function getAge() {
      let today = new Date()
      let birthday = new Date("11/19/1999") //Mi cumpleanios
      let age = today.getFullYear() - birthday.getFullYear()
      let monthdifference = today.getMonth() - birthday.getMonth()
      if (
        monthdifference < 0 ||
        (monthdifference === 0 && today.getDate() < birthday.getDate())
      ) {
        age--
      }
      return age
    }

//Mostrar edad

const $myAge = document.querySelector(".myAge")
$myAge.innerHTML = getAge()

