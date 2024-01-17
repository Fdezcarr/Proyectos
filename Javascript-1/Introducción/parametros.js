/*
 - Parametros: los valores especificados en la definición
 - Argumentos: los valores que le pasamos a la función cuando la invocamos.
*/

// const saludo = (nombre = 'amigo') => {
//   console.log(`Hola ${nombre}`);
// };

// saludo('carlos');
// saludo('Adrián');
// saludo('Javi');
// saludo();

/*
	📌 Multiples parametros
*/

const operacion = (tipo, numero1, numero2) => {
  //   console.log(numero1 + numero2);
  if (tipo === 'suma') {
    console.log(numero1 + numero2);
  } else if (tipo === 'resta') {
    console.log(numero1 - numero2);
  } else if (tipo === 'multiplicar') {
    console.log(numero1 * numero2);
  }
};

operacion('suma', 100, 200);
operacion('resta', 200, 300);
operacion('multiplicar', 100, 400);
