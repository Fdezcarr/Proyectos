const operacion = (tipo, numero1, numero2) => {
  let resultado;
  if (tipo === 'suma') {
    resultado = numero1 + numero2;
  } else if (tipo === 'resta') {
    resultado = numero1 - numero2;
  }
  return resultado;
};

const miVariable = operacion('resta', 100, 200);
console.log(miVariable);
