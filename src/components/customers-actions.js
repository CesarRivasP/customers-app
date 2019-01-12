import React from 'react';
import PropTypes from 'prop-types';


const CustomersActions = ({children}) => {
  return (
    <div>
      <div className="customers-actions">
        <div>{children}</div>
      </div>

    </div>
  );
}

CustomersActions.proptypes = {
  //Del tipo 'nodo' involucra todo tipo de elemento renderizable que react nos permita.
  children: PropTypes.node.isRequired,
};

export default CustomersActions;

/*
La propiedad children hace referencia a todo el contenido dentro de un elemento (componente)
*/
