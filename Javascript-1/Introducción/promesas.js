/*📌 Las promesas son estructuras que nosotros vamos a poder definir, para decirle al navegador, que queremos que espere a que nosotros terminemos de hacer una operación y que cuando termine le vamos a dar esos datos. */

const promesa = new Promise((resolve, reject) => {
  //Accion que se Realizará.
  setTimeout(() => {
    const exito = false;
    if (exito) {
      resolve('La operación tuvo exito');
    } else {
      reject('La operación no tuvo éxito');
    }
  }, 4000);
});

//para decirle al navegador que se qude atento a mi respuesta

promesa.then((mensaje) => {
  alert(mensaje);
});
//En caso de que haya algún error en la promesa usamos catch
promesa.catch((mensaje) => {
  alert(mensaje);
});
