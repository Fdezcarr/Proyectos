/*
	📌 getElementById
	Nos permite obtener un elemento en base a su atributo id
*/

const contenedor1 = document.getElementById('contenedor1')

/* console.log(contenedor1);*/


/* 
	📌 children
	Nos permite obtener los elementos hijo
*/

/* console.log(contenedor1.children);*/

/*
	📌 parentElement
	Nos permite obtener el elemento padre de un elemento
*/

/*console.log(contenedor1.parentElement);*/





/*
	📌 getElementsByTagName
	Nos permite obtener una colección de elementos en base a la etiqueta.
	Nota: Devuelve una colección HTML. Una colección no es un arreglo.
*/


 const divs =document.getElementsByTagName('div');

 console.log(`tenemos ${divs.length}  divs en nuestra página`);