import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    this.props.updateCustomer(id, values);
  }

  handleOnBack = () => {
    this.props.history.goBack();  // goBack nos permite desplazarnos hacia atras
    //similar a ir hacia atras en el navegador
  };

  renderBody = () => (
    // se indica ante que path se quiere reaccionar
    <Route
      path="/customers/:ci/edit"
      children={({ match }) => {
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
          //AFTER - 2 forma
          if(this.props.customer){ //cuando no venga en nulo
            const CustomerControl = match ? CustomerEdit : CustomerData;
            return <CustomerControl
                    {...this.props.customer}
                    onSubmit={this.handleSubmit}
                    onBack={this.handleOnBack}
                  />
          }
          return null;
          // Con esta solucion, se renderiza solamente cuando tiene un cliente.
          //Como la 1 vez que se genera, no se esta estableciendo, solo se establece el
          //initial value cuando en efecto hay un customer.
      }}
    />
  )

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
*/
