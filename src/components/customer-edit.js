import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form'; //High Order Component
import '../index.css';

const CustomerEdit = ({ name, ci, age }) => {
  return (
    <div>
      <h2>Edicion del cliente</h2>
      <h3>Name: {name}/ C.I: {ci} / Edad: {age}</h3>
    </div>
  );
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  ci: PropTypes.string,
  age: PropTypes.number,
};

export default reduxForm({ form: 'customer_edit' })(CustomerEdit);
                      //  nombre de formulario
