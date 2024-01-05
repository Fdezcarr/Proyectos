const personaArreglo = ["adrian", 25, "malaga", true, true];

const persona = {
  nombre: "Adrián",
  edad: 27,
  correo: "correo@correo.com",
  suscripciones: {
    web: true,
    correo: true,
  },
  coloresFvoritos: ["Negro", "Rojo"],

  saludo: function () {
    alert("hola");
  },
};

// console.log(persona);
// console.log(persona["edad"]);

const variable = "correo";

persona.pais = "España";
persona.pais = "Mexico";

// console.log(persona);

// Acceder a las funciones dentro de objetos
persona.saludo();
