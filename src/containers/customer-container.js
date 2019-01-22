import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppFrame from '../components/app-frame';
import CustomerData from '../components/customer-data';
import CustomerEdit from '../components/customer-edit';
import { getCustomerById } from '../selectors/customers';


class CustomerContainer extends Component {

  renderBody = () => (
    // se indica ante que path se quiere reaccionar
    <Route
      path="/customers/:ci/edit"
      children={({ match }) => (
      //Si encuentra la url, match viene en true, si no en false
        // match ? <p>Es edicion</p> : <p>No es edicion</p>
        match ? //el valor que ofrece match es un true o false, si se corresponde con el path o no
          <CustomerEdit
            // name={this.props.customer.name}  manera normal de realizar esta tarea
            //otra manera
            { ...this.props.customer } // toma la propiedad customer, y aplica destructuring
            //es decir, toma las propiedades que lleva dentro customer y las individualmente al componente
          />
          :
          <CustomerData { ...this.props.customer} />
      )}
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
}

const mapStateToProps = (state, props) => ({
  // customer: state.customers.find((client) => client.ci === props.ci)
  customer: getCustomerById(state, props)
})

export default withRouter(connect(mapStateToProps, null)(CustomerContainer));

/*
- Usualmente mapStateToProps recibe el state. Tambien puede recibir con props de manera que
mediante la propiedad ci de estas props se pueda hacer un filtrado sobre el state y obtener Los
datos del cliente */
