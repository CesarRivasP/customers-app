import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './customer-list-items'
import { accessControl } from '../helpers/access-control'; //High Order Component
import { CUSTOMER_LIST } from '../constants/permissions';
import '../index.css';

const CustomersList = ({customers, urlPath}) => {
  return (
    <div className="customers-list">
      {
        customers.map(customer => (
          <CustomersListItem
            key={`${customer.ci}${customer.name}`}
            name={customer.name}
            ci={customer.ci}
            editAction={'Editar'}
            deleteAction={'Eliminar'}
            urlPath={urlPath}>
          </CustomersListItem>
        ))
      }
    </div>
  );
}

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default accessControl([CUSTOMER_LIST])(CustomersList);
