/*
	📌 Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

// const frutas = ['Manzana', 'Pera', 'Piña', 'Melon', 'uvas'];
// const comidaFavorita = ['Pizza', 'Sushi', ...frutas];

// console.log(comidaFavorita);

// const datosLogin = {
//   nombre: 'Arturo',
//   correo: 'correo@correo.com',
//   password: '123',
// };

// const usuario = {
//   nombre: 'carlos',
//   ...datosLogin,
//   edad: 27,
// };

// console.log(usuario);

/*
	📌 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/

// const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
//   console.log(nombre, correo, datosAdicionales);
// };

// registrarUsuario('carlos', 'correo@correo.com');
// registrarUsuario('carlos', 'correo@correo.com', 25, 'España');

/*
	📌 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;

console.log(segundoAmigo);

const persona = {
  nombre: 'Carlos',
  edad: 27,
  pais: 'México',
};

const { nombre, pais } = persona;

console.log(nombre, pais);

const mostrarEdad = ({ nombre, edad }) => {
  console.log(`${nombre} tiene ${edad} años`);
};

mostrarEdad(persona);
