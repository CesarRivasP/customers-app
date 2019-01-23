import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form'; //High Order Component
import { setPropsAsInitial } from '../helpers/set-props-as-initial'; //High Order Component
import '../index.css';

const isRequired = (value) => (
  //en value llega algo ?
  !value && "Este campo es requerido"
  //En el caso de que no haya error, retorna undefined
  //Con undefined indica que el campo es correcto
);

const isNumber = (value) => ( //para asegurar que venga un tipe numerico
  //si no es un numero (NOT AT NUMBER) -> mostrar un mensaje
  isNaN(Number(value)) && "El campo debe ser un numero"
);

const myField = ({ input, meta, type, label, name }) => (
  //En input viene toda la informacion del input
  //meta indica cuando hay errores y los distintos estados del campo
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      // before type="text"
      {...input} //Aqui se le estan pasando todas las propiedades de input (el campo original)
//cuando no se le pase ningun type debera asumir que viene un string, que es un tipe text
      type={ !type ? "text" : type}
  //cuando no venga nada en type, que sea text, si viene con un valor, se muestre el type que posee
    />
    { meta.touched && meta.error && <span>{ meta.error }</span> }
    {/* si viene diferente de undefined */}
    {/* meta.touched se le agrego esta validacion para que de error solo si el campo fue tocado, y asi no da error
      si el campo viene vacio  */}
  </div>
);

const CustomerEdit = ({ name, ci, age }) => {
  return (
    <div>
      <h2>Edicion del cliente</h2>
      {/* <h3>Name: {name}/ C.I: {ci} / Edad: {age}</h3> */}
      {/* form>(div>label+Field)*3  EMMET */}
      <form action="">
        {/* <label htmlFor="name">Nombre</label> */}
        <Field
          name="name"
// component="input" Para usar la validacion hay que preescindir del component input en forma directa
//Hay que generar nuestro propio componente
          component={myField}
          type="text"
          validate={isRequired} //valicacion
          label="Nombre"
        />
        <Field
          name="ci" /*component="input"*/
          type="text"
          component={myField}
          // validate={isRequired}
          //Para establecer varias validaciones
          validate={[isRequired, isNumber]}
          label="C.I"
        />
        <Field
          name="age"
          type="number"
          component={myField}
          /* - al indicar un valor numero, no permite ingresar otra cosa que no sean numeros
            - al validar un tipo numerico de la misma forma que los string, espieza a tomar el
            campo como un tipo string, por lo que debe ser validado de otro manera */
          validate={isNumber}
          label="Edad"
        />
      {/* Como ya hay un div que engloba todo en myField, se pueden borrar los div's que contienen
      a cada Field */}
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
