/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/

const nombres = [
  'Carlos',
  'Rafael',
  'Estefania',
  'Rodrigo',
  'Rafael',
  'Gema',
  'Diana',
  'Sara',
  14,
];
// console.log(nombres.indexOf('Gema'));

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento.
*/

// console.log(nombres.lastIndexOf('Rafael'));

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento, recorre y nos muestra el elemento y su index como segundo parametro
*/
// nombres.forEach((nombre, index) => {
//   console.log(`Hola ${nombre} (${index})`);
// });

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/

// const resultado = nombres.find((nombre) => {
//   if (nombre[0] === 'R') {
//     return nombre;
//   }
// });

// console.log(resultado);

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/

// const nombresEnMayusculas = nombres.map((nombre) => {
//   return nombre.toUpperCase();
// });

// console.log(nombresEnMayusculas);

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/

// const nombres5Letras = nombres.filter((nombre) => {
//   if (nombre.length === 5) {
//     return nombre;
//   }
// });

// console.log(nombres5Letras);

/* 
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/

// console.log(nombres.includes('Gema'));
// console.log(nombres.includes('Pepe'));

/* 
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/

// const nombresValidos = nombres.every((nombre) => {
//   if (typeof nombre === 'string') {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log('¿Todos los nombres son validos? ' + nombresValidos);

/* 
	📌 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición.
*/

const algunoCumpleLaCondicion = nombres.some((nombre) => {
  if (typeof nombre !== 'string') {
    return true;
  } else {
    return false;
  }
});

console.log('¿El arreglo es invalido? ' + algunoCumpleLaCondicion);

// true si hay algun valor invalido
// false si no hay algun valor invalido
