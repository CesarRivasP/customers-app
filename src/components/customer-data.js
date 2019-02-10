import React from 'react';
import PropTypes from 'prop-types'
import CustomersActions from './customers-actions';
import '../index.css';


const CustomerData = ({ name, id, ci, age, onBack, isDeleteAllow, onDelete }) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Datos del cliente</h2>
        <div><strong>Nombre: </strong><i>{name}</i></div>
        <div><strong>C.I: </strong><i>{ci}</i></div>
        <div><strong>Edad: </strong><i>{age}</i></div>
      </div>
      <CustomersActions>
        <button onClick={onBack}>Volver</button>
        {
          isDeleteAllow && <button onClick={() => onDelete(id)}>Eliminar</button>
        }
      </CustomersActions>
    </div>
  );
}

CustomerData.proptypes = {
  ci: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,  //after
  name: PropTypes.string.isRequired,
  age: PropTypes.number,  //opcional
  onBack: PropTypes.func.isRequired,
  isDeleteAllow: PropTypes.bool,
  onDelete: PropTypes.func,
}

export default CustomerData;
