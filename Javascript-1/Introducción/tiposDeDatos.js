/* 📌 Tipos de datos que podemos guardar en las variables:
	string - Cadena de Texto
	number - Numero
	boolean - Booleano (verdadero o falso)
	object - Objeto
	function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/

// 📌 Cadena de Texto

const nombre = "Adrian 'Fernandez'";

// 📌 Numero

const numero = 4;
const numero2 = 4.25;

// 📌 Boleano

const usuarioConectado = true;

const mayorQue = 1 > 2;

// 📌 Arrays - Arreglos

const arreglo = [1, 10, 5, "Adrian", { propiedad: "valor" }, [1, 2, 4]];

// 📌 Objeto

const persona = {
  nombre: "Adrián",
  edad: 28,
  coche: {
    marca: "seat",
    año: 2010,
    color: "negro",
  },
};

// 📌 Function

function hola() {
  console.log("Hola");
}

hola();

// 📌 Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.

const miVariable = null;

// 📌 Undefined
// Undefined se usa para indicarnos que un valor no esta definido.

const miVariable2 = undefined;
