var close = document.querySelector(".close");
var open = document.querySelector(".open");
var popUp = document.querySelector(".popUp");
var popUpContainer = document.querySelector(".popUp-container");
var lateralInfo = document.querySelector(".lateralInfo");
var activeLateral = document.querySelector(".hambur");
var desactivarLateral = document.querySelector(".desactivar");

// calculadora importe
let inputNombre = document.querySelector(".inputNombre");
let inputPrecio = document.querySelector(".inputPrecio");
let boton = document.querySelector("#boton");
let contResultados = document.querySelector("#resultados");
let total = document.querySelector("#total");
let aporte = document.querySelector("#aporte");

window.onload = function () {
  mostrar();
};

open.addEventListener("click", function (e) {
  e.preventDefault();
  popUpContainer.style.opacity = "1";
  popUpContainer.style.visibility = "visible";
  popUp.classList.toggle("popUp-close");
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.toggle("popUp-close");
  setTimeout(() => {
    popUpContainer.style.opacity = "0";
    popUpContainer.style.visibility = "hidden";
  }, 320);
});

window.addEventListener("click", function (e) {
  if (e.target == popUpContainer) {
    popUp.classList.toggle("popUp-close");
    setTimeout(() => {
      popUpContainer.style.opacity = "0";
      popUpContainer.style.visibility = "hidden";
    }, 320);
  }
});

activeLateral.addEventListener("click", function () {
  lateralInfo.classList.toggle("activo");
  activeLateral.style.opacity = "0";
  activeLateral.style.visibility = "hidden";
});

desactivarLateral.addEventListener("click", function () {
  lateralInfo.classList.toggle("activo");
  activeLateral.style.opacity = "1";
  activeLateral.style.visibility = "visible";
});

// Calculadora
const usuarios = [];

boton.addEventListener("click", (e) => {
  e.preventDefault();
  contResultados.innerHTML = "";

  usuarios.push({
    nombre: inputNombre.value,
    precio: Number(inputPrecio.value),
  });

  let sumaTotal = 0;
  for (let i = 0; i < usuarios.length; i++) {
    contResultados.innerHTML += `<li><span class='span-calc'>${usuarios[i].nombre}</span>: $${usuarios[i].precio}</li>`;
    sumaTotal += usuarios[i].precio;
  }
  total.innerHTML = `<span class='span-calc'>Total</span>: $${sumaTotal}`;

  aporte.innerHTML = `<span class='span-calc'>Cada uno debe aportar</span>: $${
    sumaTotal / usuarios.length
  }`;

  inputNombre.value = "";
  inputPrecio.value = "";
});

// 

const data = async () => {
  const response = await fetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  );

  const data = await response.json();

  return data;
};

const mostrar = async () => {
  const dataDolar = await data();

  console.log(dataDolar);
};