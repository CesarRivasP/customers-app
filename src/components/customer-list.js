import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import CustomersListItem from './customer-list-items'
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

export default CustomersList;
