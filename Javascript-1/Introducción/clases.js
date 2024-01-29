/*
	📌 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/

const nombre = 'carlos';
const edad = 25;

const nombre2 = 'Adrian';
const edad2 = 24;

class Usuario {
  tipo = 'usuario';

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    console.log('Nuevo usuario registrado');
  }
  //creamos un metodo para hacer interactivo, encapsulamos codigo dentro de una clase  --> tipo.
  obtenerNombreCompleto() {
    console.log('Obteniendo datos...');
    return `${this.nombre} ${this.apellido}`;
  }
}

const usuario = new Usuario('Adrian', 'Fernández');
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new Usuario('Adrian', 'Fernández');
console.log(usuario2.obtenerNombreCompleto());
