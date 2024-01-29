class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }
  // con el metodo static podemos usar un método , sin tener que inicializar un objeto --> (new Usuario)
  static borrarUsuario(id_usuario) {
    console.log(
      `El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`
    );
  }

  static registrados = 1000;
}
//Nos ahorramos lo siguiente a traves del método static
// const usuario = new Usuario('Adrián', 'correo@correo.com');
// usuario.borrarUsuario(1);

Usuario.borrarUsuario(1);
console.log(Usuario.registrados);
