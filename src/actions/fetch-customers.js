import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';
import { apiGet } from '../api';
import { urlCustomers } from '../api/urls';

// const customers = [
//   {
//     "ci": "5606048",
//     "name": "Pedro Rivas",
//     "age": 58
//   },
//   {
//     "ci": "4432815",
//     "name": "Maria Perez Bello",
//     "age": 62
//   },
//   {
//     "ci": "24205310",
//     "name": "Cesar Rivas",
//     "age": 23
//   },
//   {
//     "ci": "19194710",
//     "name": "Andres Rivas",
//     "age": 29
//   }
// ];

// export const fetchCustomers = createAction(FETCH_CUSTOMERS);
//Como el payload es null, no se le pasa

//Before
                                                  //type, payloadCreator
// export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers); la funcion no recibe parametros
//porque en la invocacion de la accion en el componentDidMount tampoc se le pasan parametros
// el retorno de customers es el retorno del payloadCreator

//after
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));
