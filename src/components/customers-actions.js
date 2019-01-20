import React from 'react';
import PropTypes from 'prop-types';
// import '../index.css';


const CustomerActions = ({ children }) => {
  return (
    <div>
      <div className="customers-actions">
        <div>{children}</div>
      </div>
    </div>
  );
}

CustomerActions.proptypes = {
  //Del tipo 'nodo' involucra todo tipo de elemento renderizable que react nos permita.
  children: PropTypes.node.isRequired,
};

export default CustomerActions;

/*
La propiedad children hace referencia a todo el contenido dentro de un elemento (componente)
*/
