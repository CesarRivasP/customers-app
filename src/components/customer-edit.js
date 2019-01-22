import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form'; //High Order Component
import { setPropsAsInitial } from '../helpers/set-props-as-initial'; //High Order Component
import '../index.css';

const CustomerEdit = ({ name, ci, age }) => {
  return (
    <div>
      <h2>Edicion del cliente</h2>
      {/* <h3>Name: {name}/ C.I: {ci} / Edad: {age}</h3> */}
      {/* form>(div>label+Field)*3  EMMET */}
      <form action="">
        <div>
          <label htmlFor="name">Nombre</label>
          <Field name="name" component="input" type="text">

          </Field>
        </div>
        <div>
          <label htmlFor="ci">C.I</label>
          <Field name="ci" component="input" type="text">

          </Field>
        </div>
        <div>
          <label htmlFor="age">Edad</label>
          <Field name="age" component="input" type="number">
            {/* al indicar un valor numero, no permite ingresar otra cosa que no sean numeros */}

          </Field>
        </div>
      </form>
    </div>
  );
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  ci: PropTypes.string,
  age: PropTypes.number,
};

// before
// export default reduxForm({ form: 'customer_edit' })(CustomerEdit);
//before 2
// export default connect(
//   (state,props) => ({ initialValues: props }))(reduxForm({ form: 'customer_edit' })(CustomerEdit));
// mapStateToProps                                           nombre de formulario
//after
const CustomerEditForm = reduxForm({ form: 'customer_edit' })(CustomerEdit);
// before               (             mapStateToProps               )
//export default connect((state,props) => ( { initialValues: props }))(CustomerEditForm)

export default setPropsAsInitial(CustomerEditForm); //es equivalente al uso del connect anterior

/* el htmlFor es para indicar que el label trabaja en conjunto con un determinado input
el type se refiere al tipo de contenido que va a esperar
- initialValues: props -> props lo mapee a initial values
- La funcion (state,props) espera un objeto que mapea el estado y las props a otro valor
 ( { initialValues: props }) -> props lo mapea a initial values
- Si bien parece un componente conectado, no lo es porque no se esta utilizando el state, sino la
segunda propiedad que viene en la funcion que es 'props', y se esta estableciendo a initialValues,
es decir, que se esta transformando la propiedades que vienen al componente en las propiedades que
se necesitan (name,ci,age)
*/
