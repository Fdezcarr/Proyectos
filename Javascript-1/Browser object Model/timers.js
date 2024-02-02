/*
	📌 window.setTimeOut()
	Nos permite ejecutar una funcion despues de cierto tiempo.
*/
const saludo = () => {
  console.log('Hola');
};

//Ejemplo 1
// setTimeout(() => {
//   console.log('hola');
// }, 5000);
//Ejemplo 2

// setTimeout(saludo, 5000);

// let id;
// const iniciar = () => {
//   console.log('Iniciando timer');
//   id = setTimeout(saludo, 5000);
// };

// para parar el cronometro tenemos que guardar el id en una variable para poder detenerlo identificador

// const parar = () => {
//   console.log('Parando timer');
//   clearTimeout(id);
// };

/*
	📌 window.setInterval()
	Nos permite ejecutar una funcion cada cierto tiempo.
*/

let cuenta = 0;
let id;
const iniciar = () => {
  id = setInterval(() => {
    console.log(cuenta);
    cuenta++;
  }, 1000);
};

const parar = () => {
  console.log('Paramos la cuenta');
  clearTimeout(id);
};
