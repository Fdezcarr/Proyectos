/*📌 Funciones que podemos pasar como parametros a otra función, una función puede llamar o ejecutar en otra función ( librerias para conectar una base de datos)*/

const obtenerPostsDeUsuario = (usuario, callback) => {
  console.log(`Obteniendo los post de ${usuario} ...`);

  setTimeout(() => {
    let posts = ['post1', 'post2', 'post3'];
    callback(posts);
  }, 2000);
};

obtenerPostsDeUsuario('Adrián', (posts) => {
  console.log(posts);
});
