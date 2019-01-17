import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';


export const fetchCustomers = createAction(FETCH_CUSTOMERS);
//Como el payload es null, no se le pasa
