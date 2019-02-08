import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppFrame from '../components/app-frame';
import CustomerData from '../components/customer-data';
import CustomerEdit from '../components/customer-edit';
import { getCustomerById } from '../selectors/customers';
import { fetchCustomers } from '../actions/fetch-customers';
import { updateCustomer } from '../actions/update-customer';


class CustomerContainer extends Component {

  componentDidMount(){
    // Cuando no existe un customer (el state viene vacio) y por lo tanto este queda en null
    if(!this.props.customer){
      this.props.fetchCustomers();
    }
  }

  handleSubmit = (values) => {
    // cada uno de los campos del formulario {name,ci,age}
    console.log(JSON.stringify(values));
    console.log(`Sin metodos ${values}`);
    const { id } = values;
    //before return this.props.updateCustomer(id, values); aqui termina el proceso de submitting
    //UpdateCustomer es la promise, por lo que hay que hacer un return de la misma

    //para evaluar si el resultado de la promise viene con un error o note
    return this.props.updateCustomer(id, values)
      .then((result) => {
        //validacion de lado del server
        if(result.error){ //result viene con error, es decir, viene en true
          throw new SubmissionError(result.payload); //toma el payload y lo pasa al SubmissionError
        }
      })
      .catch((error) => {
        throw new SubmissionError(error);
      });
  }

  handleOnBack = () => {
    this.props.history.goBack();  // goBack nos permite desplazarnos hacia atras
    //similar a ir hacia atras en el navegador
  };

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();  //Para indicar a que ruta se debe devolver
  };

  handleOnDelete = () => {
    console.log('handleOnDelete');
  };

  renderCustomerControl = (isEdit, isDelete) => { //El match es un objeto, y eso es lo que viene como parametro
    // const { customer } = this.props;

    if(this.props.customer){ //cuando no venga en nulo
      const CustomerControl = isEdit ? CustomerEdit : CustomerData;
      return <CustomerControl
              {...this.props.customer}
              onSubmit={this.handleSubmit}
              onBack={this.handleOnBack}
              onSubmitSuccess={this.handleOnSubmitSuccess}
              isDeleteAllow={!!isDelete} //isDeleteAllow debe ser un booleano, y para lograr que lo sea
              // se usa la doble negacion. Si viene un valor thuthy, se transforma en true
              onDelete={this.handleOnDelete}
            />
    }
    return null;
  };

  renderBody = () => (
    // se indica ante que path se quiere reaccionar
    //Se tienen dos evaluaciones de ruta, si es edicion o eliminacion
    <Route
      path="/customers/:ci/edit"
      //after
      //Para poder usar rutas anidadas
      //Se puede definir rutas dinamicamente, y que estan esten anidadas
      children={({ match: isEdit }) => (
        <Route
          path="/customers/:ci/delete"
          children={
            ({ match: isDelete }) => (  //--> alias
              // this.renderCustomerControl(match)
              this.renderCustomerControl(isEdit, isDelete)  //Se va a hacer una doble evaluacion
            )
          }
        />
      )

      // children={({ match }) => this.renderCustomerControl(match)  {
      //Si encuentra la url, match viene en true, si no en false
        // match ? <p>Es edicion</p> : <p>No es edicion</p>
        //match ? //el valor que ofrece match es un true o false, si se corresponde con el path o no
          // <CustomerEdit
          //   // name={this.props.customer.name}  manera normal de realizar esta tarea
          //   //otra manera
          //   { ...this.props.customer } // toma la propiedad customer, y aplica destructuring
          //   //es decir, toma las propiedades que lleva dentro customer y las individualmente al componente
          // />
          // :
          // <CustomerData { ...this.props.customer} />

          // -- Definicion de controles dinamicamente --
          // const CustomerControl = CustomerEdit; unciona como un alias
          //before
          // const CustomerControl = match ? CustomerEdit : CustomerData;
          // return <CustomerControl
          //         // initialValues={this.props.customer}  para pasar valores iniciales
          //         { ...this.props.customer}
          //         onSubmit={this.handleSubmit}  //funcion manejadora del evento
          //         onBack={this.handleOnBack} />

          //Before - 2 forma
          // if(this.props.customer){ //cuando no venga en nulo
          //   const CustomerControl = match ? CustomerEdit : CustomerData;
          //   return <CustomerControl
          //           {...this.props.customer}
          //           onSubmit={this.handleSubmit}
          //           onBack={this.handleOnBack}
          //           onSubmitSuccess={this.handleOnSubmitSuccess}
          //         />
          // }
          // return null;
          // Con esta solucion, se renderiza solamente cuando tiene un cliente.
          //Como la 1 vez que se genera, no se esta estableciendo, solo se establece el
          //initial value cuando en efecto hay un customer.

      //}
    } />
  );

  render () {
    const { ci } = this.props;
    return (
      <div>
        <AppFrame
          header={`Cliente ${ci}`}
          body={
            // <p>Datos del cliente: {this.props.customer.name}</p>
            this.renderBody() }
        />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  ci: PropTypes.string.isRequired,
  customer: PropTypes.object,
  //customer la primera vez que se renderiza esta en null, no es necesario que permanezca como required
  fetchCustomers: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  // customer: state.customers.find((client) => client.ci === props.ci)
  customer: getCustomerById(state, props)
})

export default withRouter(connect(mapStateToProps, { fetchCustomers, updateCustomer })(CustomerContainer));

/*
- Usualmente mapStateToProps recibe el state. Tambien puede recibir con props de manera que
mediante la propiedad ci de estas props se pueda hacer un filtrado sobre el state y obtener Los
datos del cliente
- DRY: DONT REPEAT YOURSELF (NO REPETIR)
- Definicion de controles dinamicamente: en tiempo de ejecucion se puede definir cual es el control de
lo que se quiere mostrar
- InitialValues solo se inicializa una unica vez.
- error es parte de la nomenclatura propia de las promises
- SubmissionError, lo provee redux-form
*/
/* -- Doble condicion --
path="/customers/:dni/edit"
  -> isEdit ?
(si no isEdit)
  path="/customers/:dni/del"
    -> isDelete ?
*/
