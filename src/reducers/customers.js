import { handleAction, handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

// with handleAction
// const customers = handleAction(FETCH_CUSTOMERS, (state) => state);

// with handleActions
export const customers = handleActions(
  { //1 param: objeto donde se mapean las pure actions del reducer
    [FETCH_CUSTOMERS]: (state, action) =>  [...action.payload]
  },
  [] //2 param: array de customers
);
//con la accion se va a modificar el estado de tal manera que muestre los clientes que se estan cargando Dentro
//del action creator
//De primer parametro se hace una copia del array y en el segundo se genera un nuevo valor
// Declarado asi, solo funciona para un reducer con un unico estado
