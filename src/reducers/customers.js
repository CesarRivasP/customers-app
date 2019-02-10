import { /*handleAction,*/ handleActions } from 'redux-actions';
import {
  FETCH_CUSTOMERS,
  INSERT_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER
} from '../constants';

// with handleAction
// const customers = handleAction(FETCH_CUSTOMERS, (state) => state);

// with handleActions
//BEFORE
// export const customers = handleActions(
//   { //1 param: objeto donde se mapean las pure actions del reducer
//     [FETCH_CUSTOMERS]: (state, action) =>  [...action.payload]
//   },
//   [] //2 param: array de customers
// );
//con la accion se va a modificar el estado de tal manera que muestre los clientes que se estan cargando Dentro
//del action creator
//De primer parametro se hace una copia del array y en el segundo se genera un nuevo valor
// Declarado asi, solo funciona para un reducer con un unico estado

//AFTER
//Hay que incorporar el nuevo cliente al array ya existente de clientes
 export const customers = handleActions(
   {
      [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload ],
      // -- Insert de un cliente --
      //tomamos lo que ya existia en el state -> state + el nuevo cliente
      // que viene en el payload de la action
      [INSERT_CUSTOMER]: (state, action) => [ ...state, action.payload ],
      //Asi se obtiene el nuevo cliente de forma instantanea

      // -- Update de un cliente --
      [UPDATE_CUSTOMER]: (state, action) => { //Utilizacion de la funcion reduce
        // es propia de ecmascript 6, para arrays y listas
        const customerPayload = action.payload;  //datos de un cliente
        //este customer debe reemplazar al cliente correcto dentro del array de objetos, y eso es mediante el id
        const { id } = customerPayload;  //id = 2 name = 'new name'

        const customers = state;  //renombrarlo para visualizarlo mejor
        const initialValue = [];
        //nueva lista de customers = Vieja lista de customers, a la cual se le va a aplicar reduce
        //reduce((funcion que tenga lo acumulado, y cada uno de los items que conforma el array), valor inicial)
        // customer es el item actual de la iteracion
        const newCustomers = customers.reduce((acumulate, customer) => {
          if (customer.id === id){  //si el id del customer que viene es igual al
            //id del customer que pasan como parametro
            //si es igual se debe dejar el nuevo valor en vez del anterior
            //el array se va a conformar del anterior valor (acumulado)
            return [ ...acumulate, customerPayload ]; //como la primera vez acumulate va a estar vacio,
            //este no va a ser el flujo a ser utilizado
          }
          else {  //el flujo a utilizar va a ser el que toma el acumulado,
            //y se le pasa el customer (valor que estaba originalmente)
            return [ ...acumulate, customer ]
          }
        },initialValue);
        //Valor inicial = [], de manera que vamos a obtener un array nuevo en base a este array vacio (inicial)
        //en acumulado viene el initialValue ( [] ), y en customer cada uno de los clientes
        return newCustomers;
      },
      [DELETE_CUSTOMER]: (state, action) => state.filter((customer) => customer.id !== action.payload)
      //al array de los clientes se le aplica un filtro en el que cual se indica que cuando el
      //id del cliente sea diferente de lo que viene en el payload, lo va a dejar dentro del array
      //cuando sea igual el id no lo va a poner dentro del array, lo va a filtrar
      //el resultado va a ser un array donde haya excluido el cliente con el id que venga en el payload
   },
   []
 );

 // primera iteracion
 /*
[ un cliente -> {id:1, name: '', ....},
{id:2, name: '', ....}, {id:3, name: '', ....}]
acumulate = []
{ id= 1 , name= '', ... }
return -> [{ id= 1 , name= '', ... }]
 */
 // segunda iteracion
/*
acumulate = [{ id= 1 , name= '', ... }]
{ id= 2 , name= '', ... }
si es igual el id, vamos a dejar el customer que viene como parametro en reduce
se va a reemplazar por { id= 2 , name= 'viejo name', ... } -> { id= 2 , name= 'new name', ... }
return [{ id= 1 , name= '', ... }, { id= 2 , name= 'new name', ... }]
*/
