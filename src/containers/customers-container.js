import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/app-frame';
import CustomerList from '../components/customer-list';
import CustomerActions from '../components/customers-actions';
import { fetchCustomers } from '../actions/fetch-customers';


const customers = [
  {
    "ci": "5606048",
    "name": "Pedro Rivas",
    "age": 58
  },
  {
    "ci": "4432815",
    "name": "Maria Perez Bello",
    "age": 62
  },
  {
    "ci": "24205310",
    "name": "Cesar Rivas",
    "age": 23
  },
  {
    "ci": "19194710",
    "name": "Andres Rivas",
    "age": 29
  }
];

class CustomersContainer extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }

  handleAddNew = () => {
    this.props.history.push('customers/new');
  }

  renderBody = (customers) => (
    <div>
      <CustomerList customers={customers} urlPath={'customer/'} />
      <CustomerActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomerActions>
    </div>
  );


  render () {
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
  // customers: PropTypes.string.isRequired,
  // urlPath: PropTypes.string.isRequired,
  fetchCustomers: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  fetchCustomers: () => dispatch(fetchCustomers())
})

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));

/*
El app-frame es para hacer mas estandar la parte visual
El urlPath necesita el url base, por base se refiere a la base sobre la cual se va a agregar el edit o el new
*/