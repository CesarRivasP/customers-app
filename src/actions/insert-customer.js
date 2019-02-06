import { createAction } from 'redux-actions';
import { INSERT_CUSTOMER } from '../constants';
import { urlCustomers } from '../api/urls';
import { apiPost } from '../api';

export const insertCustomer = createAction(
  INSERT_CUSTOMER,
  (customer) => apiPost(urlCustomers, customer)()
);
