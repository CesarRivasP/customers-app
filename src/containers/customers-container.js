import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CustomerActions from '../components/customers-actions';
import AppFrame from '../components/app-frame';
import CustomerList from '../components/customer-list';
import { fetchCustomers } from '../actions/fetch-customers';
import { getCustomers } from '../selectors/customers';


const styles = theme => ({
  input: {
    display: 'none',
  },
});


class CustomersContainer extends Component {

  componentDidMount() {
    const { fetchCustomers, customers } = this.props;
    if (customers.length === 0){  //si tiene un customer grabado, es decir, si esta en 0
    //no tiene cargado un cliente, por lo que asume que nunca se hizo el fetchCustomers
    // y lo ejecuta
      fetchCustomers();
    }
    // si ya tiene clientes en el listado, no se debe buscar mas datos del servidor
  }

  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }

  renderBody = (customers) => {
    const { classes } = this.props;
    return (
      <div>
        <CustomerList
          customers={customers}
          urlPath={'customers/'} />
        <CustomerActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleAddNew}
            className={classes.button}>
            Nuevo Cliente
          </Button>
        </CustomerActions>
      </div>
    )
  }

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
  classes: PropTypes.object.isRequired,
}

//Declaracion de propiedad por defecto: nombre del componente.defaultProps
CustomersContainer.defaultProps = {
  customers: []
};

const mapStateToProps = (state) => ({
  // customers: state.customers
  customers: getCustomers(state),
})

// Mas simplificado aun
export default withRouter(
  compose(
    connect(mapStateToProps, { fetchCustomers }),
    withStyles(styles)
)(CustomersContainer));


// export default compose(
//   translate('translationILMADMIN'),
//   connect(mapStateToProps, mapDispatchToProps),
//   reduxForm({ form: 'CentralMarket_filter' }))(CentralMarketFilter);
/*
El app-frame es para hacer mas estandar la parte visual
El urlPath necesita el url base, por base se refiere a la base sobre la cual se va a agregar el edit o el new
- Se va a aplicar el patron selector para que el container desconozca la estructura del state
*/
