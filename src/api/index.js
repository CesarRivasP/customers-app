// const apiFetchCustomers = () => (
//   fetch(url)
//     .then(v => v.json())
// )

export const apiGet = (url) => () => fetch(url).then(v => v.json());

export const apiPost = (url, obj) => () =>
  fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-type': 'application/json'})
  })
  .then((value) => value.json())
  .then((result) => {
    if(result.error){
      return Promise.reject(result.validation);
    }
    return result;  //retorno de los datos de cliente
  })
  .catch((error) => {
    return Promise.reject(error);
  })

export const apiPut = (url, id, obj) => () =>
  fetch(`${url}/${id}`, {
    method: 'PUT', // method: metodo http a utilizar. Aqui se indica el metodo a ejecutar
    body: JSON.stringify(obj),  //para hacer stringify del objeto
    headers: new Headers({ 'Content-type': 'application/json' })  //en base de lo que indica el json server new Headers()
    //el header tiene el 'application/json' para que el tipo de envio sea conocido
  })
  .then((value) => value.json())  //valor de retorno
  .then((result) => { //validacion de cuando se genera un error
    if (result.error) { //si tiene un error. error es un bolean
      return Promise.reject(result.validation);
    }
    return result;  //si no hay error, se retorna el resultado como estaba
  })
  .catch((error) => {
    return Promise.reject(error);
  })

/* el obj es el que va a venir para ser actualizado
- url base + id del cliente -> Es una norma estandar de http rest
- Usamos el then para transformar lo que viene en el json resultante
- result es el resultado del then anterior que transforma los valores resultantes en json
*/
