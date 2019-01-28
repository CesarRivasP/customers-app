import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/app-frame';
import CustomerEdit from '../components/customer-edit';
// import CustomersActions from '../components/customers-actions'


class NewCustomerContainer extends Component {

  handleSubmit = () => {

  };

  handleSubmitSuccess = () => {

  };

  handleOnBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  renderbody = () => {
    return (
      <CustomerEdit
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleSubmitSuccess} //cuando es exitosa la subida de los datos
        onBack={this.handleOnBack}
      />
    );
  };

  render () {
    return (
      <div>
        <AppFrame header="Creacion de nuevo cliente"
          body={this.renderbody()}
        />
      </div>
    );
  }
}

// NewCustomerContainer.propTypes = {
//
// }

export default withRouter(connect(null, null)(NewCustomerContainer));
