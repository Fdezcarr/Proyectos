/*
	📌 .toString()
*/

// const numero = 10;
// console.log(numero, typeof numero);

// const numeroATexto = numero.toString();
// console.log(numeroATexto + ' string');

/*
	📌 .toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/

// const numero = 3.1415;
// console.log(numero.toFixed(2));

/*
	📌 parseInt()
	Intenta transformar un valor a un entero.
*/

// const numero1 = parseInt(prompt('Escribe un numero'));
// const numero2 = parseInt(prompt('Escribe un numero'));
// console.log(numero1 + numero2);

/*
	📌 .parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/

// const numero1 = parseFloat(prompt('Escribe un numero'));
// const numero2 = parseFloat55dd(prompt('Escribe un numero'));
// console.log(numero1 + numero2);

/*
	📌 Math.random()
	Genera un numero al azar entre 0 y 1
*/

// const numero = Math.random();
// console.log(numero);

/*
	📌 Math.floor()
	Redondea hacia abajo un numero.
*/

console.log(Math.floor(12.6));

/*
	📌 Math.ceil()
	Redondea hacia arriba un numero.
*/

console.log(Math.ceil(12.6));

/*
	📌 Math.round()
	Redondea hacia el entero mas cercano
*/

console.log(Math.round(12.6));

/*
	📌 Ejemplo de numero al azar de 0 a 100
*/

const numero = Math.random();
console.log(Math.floor(numero * 101));
