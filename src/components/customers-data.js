import React from 'react';
import PropTypes from 'prop-types';


const CustomersData = ({name, dni, age}) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Datos del cliente</h2>
        <div><strong>Nombre</strong><i>{name}</i></div>
        <div><strong>C.I</strong><i>{dni}</i></div>
        <div><strong>Edad</strong><i>{age}</i></div>
      </div>
    </div>
  );
}

CustomersData.proptypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.number.isRequired,
  age: PropTypes.number,  //opcional
}

export default CustomersData;
