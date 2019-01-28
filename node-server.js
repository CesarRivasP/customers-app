// server.js
const jsonServer = require('json-server')  //Para levantar las utilidades que provee json-server
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.listen(3001, () => { //puerto a utilizar
  console.log('JSON Server is running')
})
//simulacion de una validacion ante un put, para un cliente determinado
server.put('/customers/30000001', (req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = JSON.parse(Buffer.concat(body).toString());
    console.log(JSON.stringify(body));
    if (body.age && body.age > 18) {  //se va a determinar si la edad es mayor de 18
      console.log("error de validación"); //retorna un error de validacion
      return res.send({
        error: true,  //se genero un error si esta en true
        validation: { //se define la estructura de validacion
          age: 'Debe ser menor de edad', //campos que no cumplieron la validacion, y su explicacion
          name: 'El nombre es incorrecto'
        }
      });
    } else {
      res.send('ok');
    }
  });
})

server.use(router)
