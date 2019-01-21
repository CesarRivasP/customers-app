import { createSelector } from 'reselect';


export const getCustomers = (state) => state.customers;
                  //retorna el array customers que pertenece al reducer

export const getCustomerById = createSelector(
  (state, props) => state.customers.find((client) => client.ci === props.ci), //esta funcion es un customer
  // result func -- se toma el customer que retorna la funcion anterior y retorna el mismo customer
  (customer) => customer //aqui se retorna lo mismo que viene como parametro
)
