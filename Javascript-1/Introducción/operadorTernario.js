const boleto = "regular";
// let codigoDeAcceso;

// if (boleto === "vip") {
//   codigoDeAcceso = "vip-123-456";
// } else {
//   codigoDeAcceso = "regular-456-789";
// }

const codigoDeAcceso = boleto === "vip" ? "vip-123-456" : "regular-456-789";

boleto === "vip"
  ? console.log("tu boleto es vip")
  : console.log("tu boleto es regular");
