/*
	📌 Ciclo forEach
	Es un método de los arreglos que podemos usar para recorrer los elementos.
*/

// const amigos = ['Alejandro', 'Cesar', 'Manuel'];

// amigos.forEach((amigo, index) =>
// //   console.log(`El amigo #${index} es : ${amigo}`)
// );

/*
	📌 Ciclo for in
	Nos permite recorrer las propiedades de un objeto.
*/

// const persona = {
//   nombre: 'Carlos',
//   edad: 27,
//   correo: 'correo@correo.com',
// };

// for (propiedad in persona) {
//   persona[propiedad] = '';
// }
// console.log(persona);

/*
	📌 Ciclo for of
	Nos permite recorrer los valores de un objeto iterable.
	Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/
const etiquetas = document.head.children;
console.log(etiquetas);

//no funciona
// etiquetas.forEach((etiqueta) => {
//   console.log(etiqueta);
// });

// for (const elemento of etiquetas) {
//   console.log(elemento);
// }

// convertir a arreglo [...convertirArreglo]

[...etiquetas].forEach((elemento) => console.log(elemento));
