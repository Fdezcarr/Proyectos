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
  edad: 27,
  pais: "España",
  ticket: true,
};

// if (usuario.edad > 17) {
//   console.log("El usuario es mayor de edad y puede entrar al concierto");
// } else {
//   console.log("No puedes entrar el usuario es menor de edad");
// }

// 📌 Ejemplo #2 - combinando operadores

if (usuario.edad > 17 && usuario.ticket) {
  console.log("Puede entrar, tiene edad y ticket");
} else {
  console.log("No tiene edad, pero si ticket");
}
