import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const CustomerData = ({ name, ci, age }) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Datos del cliente</h2>
        <div><strong>Nombre: </strong><i>{name}</i></div>
        <div><strong>C.I: </strong><i>{ci}</i></div>
        <div><strong>Edad: </strong><i>{age}</i></div>
      </div>
    </div>
  );
}

CustomerData.proptypes = {
  ci: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number,  //opcional
}

export default CustomerData;
