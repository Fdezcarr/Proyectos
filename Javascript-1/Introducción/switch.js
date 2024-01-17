const usuraio = {
  nombre: "Adrián",
  Pais: "Brasil",
};

// if (usuraio.Pais === "España") {
//   console.log("El usuario es Español");
// } else if (usuraio.Pais === "Mexico") {
//   console.log("El usuario es Mexicano");
// } else if (usuraio.Pais === "Argentino") {
//   console.log("El usuario es Argentino");
// } else {
//   console.log("El usuario es de otro pais");
// }

switch (usuraio.Pais) {
  case "España":
    console.log("El usuario es Español");
    break;
  case "Argentina":
    console.log("El usuario es Argentino");
    break;
  case "Peru":
    console.log("El usuario es de Peru");
    break;
  default:
    console.log("El usuario es de otro pais");
}
