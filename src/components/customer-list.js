import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './customersListItems'
import '../index.css';

const CustomersList = ({customers, urlPath}) => {
  return (
    <div>
      <div className="customers-list">
        {
          customers.map(customer => {
            <CustomersListItem
              key={customer.ci}
              name={customer.name}
              editAction={'Editar'}
              deleteAction={'Eliminar'}
              urlPath={urlPath}>
            </CustomersListItem>
          })
        }
      </div>
    </div>
  );
}

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default CustomersList;
