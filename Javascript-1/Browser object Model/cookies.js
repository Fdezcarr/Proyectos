// Guardan informacion y que no se pierda cuando refrescamos la página ( parecido a variables), pre ferencias o configuraciones del usurio de una web.

const crearCookie = () => {
  //   document.cookie = 'nombre=carlos';
  document.cookie = 'nombre=carlos; expires=1 jan 2025 01:00:00 UTC';
};

const iniciarSesion = () => {
  const usuario = prompt('usuario');
  document.cookie = `nombre=${usuario}; expires=1 jan 2025 01:00:00 UTC`;
  alert('sesion iniciada');
};

// console.log(document.cookie);

/*
Forma para obtener el usuario de las cookies
*/

let usuario;

const cookies = document.cookie.split(';');
// console.log(cookies);
//filtramos el elemento para obtener la cookie que tiene dicha propiedad
cookies.forEach((cookie) => {
  const propiedad = cookie.split('=')[0];
  if (propiedad === 'nombre') {
    usuario = cookie.split('=')[1];
  }
});

if (usuario) {
  console.log('Hola ' + usuario);
} else {
  console.log('Por favor inicia sesión');
}

//Eliminar cookie

const cerrarSesion = () => {
  document.cookie = 'nombre=; expires=1 jan 2020 01:00:00 UTC ';
  console.log('Hasta luego!');
};
