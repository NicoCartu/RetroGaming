/*menu desplegable*/
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i = 0; i < subMenuBtn.length; i++) {
  subMenuBtn[i].addEventListener("click", function () {
    if (window.innerWidth < 1024) {
      const submenu = this.nextElementSibling;
      const height = submenu.scrollHeight;
      if (submenu.classList.contains("desplegar")) {
        submenu.classList.remove("desplegar");
        submenu.removeAttribute("style");
      } else {
        submenu.classList.add("desplegar");
        submenu.style.height = height + "px";
      }
    }
  });
}

/*Slider automatizado y manual*/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast );

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section") [0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement ('beforeend' , sliderSectionFirst);
        slider.style.marginleft = "-100%";
    }, 500);
}
function Prev() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section") [0];
    let sliderSectionLast = document.querySelectorAll(".slider__section") [-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast );
        slider.style.marginleft = "-100%";
    }, 500);
}

btnRight.addEventListener ('click', function(){
    Next();
});

btnLeft.addEventListener ('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 5000);

/*Formulario*/
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});