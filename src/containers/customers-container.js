import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/app-frame';
import CustomerList from '../components/customer-list';
import CustomerActions from '../components/customers-actions';
import { fetchCustomers } from '../actions/fetch-customers';
import { getCustomers } from '../selectors/customers';

// const customers = [
//   {
//     "ci": "5606048",
//     "name": "Pedro Rivas",
//     "age": 58
//   },
//   {
//     "ci": "4432815",
//     "name": "Maria Perez Bello",
//     "age": 62
//   },
//   {
//     "ci": "24205310",
//     "name": "Cesar Rivas",
//     "age": 23
//   },
//   {
//     "ci": "19194710",
//     "name": "Andres Rivas",
//     "age": 29
//   }
// ];

class CustomersContainer extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }

  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }

  renderBody = (customers) => (
    <div>
      <CustomerList
        customers={customers}
        urlPath={'customers/'} />
      <CustomerActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomerActions>
    </div>
  );

  render () {
    const { customers } = this.props;
    return (
      <div>
        <AppFrame
          header={'Listado de clientes'}
          body={this.renderBody(customers)}
        />
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
}

//Declaracion de propiedad por defecto: nombre del componente.defaultProps
CustomersContainer.defaultProps = {
  customers: []
    // {
    //   "ci": "5606048",
    //   "name": "Pedro Rivas",
    //   "age": 58
    // },
    // {
    //   "ci": "4432815",
    //   "name": "Maria Perez Bello",
    //   "age": 62
    // },
    // {
    //   "ci": "24205310",
    //   "name": "Cesar Rivas",
    //   "age": 23
    // },
    // {
    //   "ci": "19194710",
    //   "name": "Andres Rivas",
    //   "age": 29
    // }
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchCustomers: () => dispatch(fetchCustomers())
// });

//forma simplificada
// const mapDispatchToProps = { fetchCustomers };

// export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));

const mapStateToProps = (state) => ({
  // customers: state.customers
  customers: getCustomers(state),
})

// Mas simplificado aun
export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));

/*
El app-frame es para hacer mas estandar la parte visual
El urlPath necesita el url base, por base se refiere a la base sobre la cual se va a agregar el edit o el new
- Se va a aplicar el patron selector para que el container desconozca la estructura del state
*/
