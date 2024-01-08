/*
	📌 Operadores de Comparación:
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en tipo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario

	📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

// 📌 Estructura de una condicional
// if (true) {
// Código a ejecutar
// }

// 📌 Ejemplo #1:

const usuario = {
  edad: 17,
  pais: "Perú",
  ticket: false,
};

// if (usuario.edad > 17) {
//   console.log("El usuario es mayor de edad y puede entrar al concierto");
// } else {
//   console.log("No puedes entrar el usuario es menor de edad");
// }

// 📌 Ejemplo #2 - combinando operadores

// if (usuario.edad >= 18 && usuario.ticket) {
//   console.log("Puede entrar, tiene edad y ticket");
// } else {
//   console.log("No es mayor de edad o no tiene ticket");
// }

// 📌 Ejemplo #3 - Anindando condicionales

// if (usuario.edad >= 18) {
//   if (usuario.ticket) {
//     console.log("El usuario es mayor de edad y tiene ticket");
//   } else {
//     console.log("El usuario es mayor de edad pero no tiene ticket");
//   }
// } else {
//   console.log("El usuario es menor de edad");
// }

// 📌 Ejemplo #4 - elseif

if (usuario.pais === "España") {
  console.log("El usuario es de España");
} else if (usuario.pais === "Colombia") {
  console.log("El usuario es de Colombia");
} else if (usuario.pais === "Perú") {
  console.log("El usuario es de Perú");
} else {
  console.log("El usuario es de otro país");
}
