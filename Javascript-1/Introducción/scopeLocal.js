/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/
let numero = 1;

var obtenerNumeroLetras = (nombre) => {
  let numero = nombre.length;
  console.log(`${nombre} tiene ${numero} letras `);

  var funcionAnidada = () => {
    console.log(numero);
  };

  funcionAnidada();
};

obtenerNumeroLetras('Alex');

console.log(numero);
