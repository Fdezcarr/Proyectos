//FORMAS DE IMPORTAR

/* 
	📌 Named Imports
*/
// import { nombre, obtenerPosts } from './nameExports';
// console.log(`Mi nombre es ${nombre}`);
// console.log(obtenerPosts());

/* 
	📌 Namespace Imports
*/
// import * as datos from './nameExports';

// console.log(datos.nombre);
// console.log(datos.obtenerPosts());

/* 
	📌 Default Imports puedes cambiar el nombre de la función, y solo importar de una en una.
*/

// import obtener from './defaultExport';

// console.log(obtener());

/* 
	📌 Empty Imports
	Carga todo el código pero sin hacer ningun objeto.
*/

import './emptyExport';

// 📌  Para importar variables, condicionales etc.

import { correo } from './emptyExport';

console.log(correo);
