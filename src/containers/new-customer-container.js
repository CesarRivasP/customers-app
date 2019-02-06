import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/app-frame';
import CustomerEdit from '../components/customer-edit';
import { insertCustomer } from '../actions/insert-customer';


class NewCustomerContainer extends Component {

  handleSubmit = (values) => {
    const { insertCustomer } = this.props;
    insertCustomer(values)
      .then((result) => {
        if(result.error){
          throw new SubmissionError(result.payload);
        }
      })
      .catch((error) => {
        throw new SubmissionError(error);
      })
  };

  handleOnSubmitSuccess = () => { //cuando el submit es exitoso
    const { history } = this.props;
    history.goBack();
  };

  handleOnBack = () => {  // al cancelar
    const { history } = this.props;
    history.goBack();
  };

  renderbody = () => {
    return (
      <CustomerEdit
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess} //cuando es exitosa la subida de los datos
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

NewCustomerContainer.propTypes = {
  insertCustomer: PropTypes.func.isRequired
}

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));
