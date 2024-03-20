/*
	📌 Modificar estilos CSS mediante "inline styles".
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');

ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

//Aumentar y disminuir el tamaño mediante estilos en linea a través de una función.

const cajas = document.querySelectorAll('.caja');

let tamaño = 25;

const incrementarFuente = () => {
  cajas.forEach((caja) => {
    tamaño++;
    caja.style.fontSize = `${tamaño}px`;
  });
};

const disminuirFuente = () => {
  cajas.forEach((caja) => {
    tamaño--;
    caja.style.fontSize = `${tamaño}px`;
  });
};
