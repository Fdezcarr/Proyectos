/* 📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

// Tenemos una página para vender entradas de concierto solo a personas mayores de edad

const nombre = "Adrian";
const edad = 17;
const tieneEntrada = true;
const permisoPadres = true;

//Ejemplo #1 - &&
// const permitirAcceso = edad >= 18 && tieneEntrada;
// console.log("Acceso permitido al concierto: " + permitirAcceso);

// Ejemplo #2 - OR
// const permitirAcceso =
//   (edad >= 18 && tieneEntrada) || (permisoPadres && tieneEntrada);
// console.log("Acceso permitido al concierto: " + permitirAcceso);

// Ejemplo #3 - !
const variable = true;
console.log(!variable);
