// const apiFetchCustomers = () => (
//   fetch(url)
//     .then(v => v.json())
// )

export const apiGet = (url) => () => fetch(url).then(v => v.json())

export const apiPut = (url, id, obj) => () =>
  fetch(`${url}/${id}`, {
    method: 'PUT', // method: metodo http a utilizar
    body: JSON.stringify(obj),  //para hacer stringify del objeto
    headers: new Headers({'Content-type': 'application/json'})  //en base de lo que indica el json server new Headers()
  })
  .then(v => v.json())

// el obj es el que va a venir para ser actualizado
// url base + id del cliente -> Es una norma estandar de http rest
//Usamos el then para transformar lo que viene en el json resultante
