/*
	📌 .length - Devuelve el número de caracteres de una cadena de texto.
*/
// const texto = 'Hola soy Adrian';
// console.log(texto.length);
/*
	📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
*/
const texto = 'Hola yo soy Adrian';
// console.log(texto.indexOf('l'));
// console.log(texto.lastIndexOf('o'));

/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/
const textoSlice = 'Hola soy Adrian ! ';
// const index = textoSlice.indexOf('A');
// const lastIndex = textoSlice.lastIndexOf('n');
// console.log(index);
// console.log(textoSlice.slice(index, lastIndex + 1));
// console.log(textoSlice.slice(9, 15));
console.log(textoSlice.slice(9, 15));
console.log(texto.slice(-9, 0));

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/

const metodoReplace = 'Hola soy Adrian !';
console.log(metodoReplace.replace('Adrian', 'Imane'));

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
const metodoSplit = 'Hola soy Adrian ! ';
console.log(metodoSplit.split(' '));

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
// console.log(texto.toUpperCase());
// console.log(texto.toLowerCase());

const metodoToUpperCase = 'Hola soy Adrian ! ';
const metodoToLowerCase = 'Hola soy Adrian ! ';

console.log(metodoToUpperCase.toUpperCase());
console.log(metodoToUpperCase.toLowerCase());

/*
	📌 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
console.log(texto);
console.log(texto.trim());
console.log(texto.trimStart());
console.log(texto.trimEnd());
