const usuario = {
  nombre: 'Adrian',
  edad: 28,
  amigos: ['Javi', 'Imane', 'Luis'],
  saludo: () => {
    console.log('hola');
  },
};

/*
	📌 Métodos propios
	Los objetos pueden tener métodos personalizados.
*/

usuario.saludo();

/*
	📌 Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
const resultadosKeys = Object.keys(usuario);

/*
	📌 Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/

const resultadosValues = Object.values(usuario);

// console.log(resultadosValues);

/*
	📌 Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/

const resultadosEntries = Object.entries(usuario);

console.log(`El objeto tiene ${resultadosEntries.length} valores `);
