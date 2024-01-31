// href - Retorna la URL de la página actual
console.log(window.location.href);

// hostname - Retorna el host de la página actual
console.log(window.location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(window.location.pathname);

// procotol - Retorna el protocolo utilizado

console.log(window.location.protocol);

//Redireccionar la página assign

const cargarDocumento = () => {
  location.assign('https://google.com');
};

const regresar = () => {
  history.back();
};

const irAdelante = () => {
  history.forward();
};
