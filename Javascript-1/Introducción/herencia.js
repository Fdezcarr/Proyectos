class Usuario {
  constructor(usuario, contraseña) {
    this.usuario = usuario;
    this.contraseña = contraseña;
  }

  obtenerPosts() {
    const posts = ['post1', 'post2'];
    return posts;
  }
}

//Con extends heredamos la clase de usuario.Trabajar con super : nos permite copiar metodos y propiedaddes incluido el constructor
class Moderador extends Usuario {
  constructor(usuario, contraseña, permisos) {
    super(usuario, contraseña);
    this.permisos = permisos;
  }

  borrarPosts(id) {
    if (this.permisos.includes('borrar')) {
      console.log(`El post con el ${id} ha sido borrado`);
    } else {
      console.log('No tienes los permisos para borrar posts');
    }
  }
}
// creamos cuando el objeto cuando usamos la palabra new
const usuario = new Usuario('Carlos', '123');
console.log(usuario.obtenerPosts());

const usuario2 = new Moderador('Adrián', '234', ['editar', 'borrar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
console.log(usuario2.borrarPosts(7));
