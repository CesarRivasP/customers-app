import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/app-frame';
import CustomerEdit from '../components/customer-edit';
import { insertCustomer } from '../actions/insert-customer';


class NewCustomerContainer extends Component {
  //
  // handleSubmit = (values) => {
  //   // const { insertCustomer } = this.props;
  //   // return this.props.insertCustomer(values)
  //   //         .then((result) => {
  //   //           if(result.error){
  //   //             throw new SubmissionError(result.payload);
  //   //           }
  //   //         })
  //   //         .catch((error) => {
  //   //           throw new SubmissionError(error);
  //   //         })
  //   console.log(JSON.stringify(values));
  //   console.log(`Sin metodos ${values}`);
  //
  //   //before return this.props.updateCustomer(id, values); aqui termina el proceso de submitting
  //   //UpdateCustomer es la promise, por lo que hay que hacer un return de la misma
  //
  //   //para evaluar si el resultado de la promise viene con un error o note
  //   this.props.insertCustomer(values)
  //     // .then((result) => {
  //     //   //validacion de lado del server
  //     //   if(result.error){ //result viene con error, es decir, viene en true
  //     //     throw new SubmissionError(result.payload); //toma el payload y lo pasa al SubmissionError
  //     //   }
  //     // })
  // };

  handleSubmit = (values) => {
    this.props.insertCustomer(values);
  };

  handleOnSubmitSuccess = () => { //cuando el submit es exitoso
    // const { history } = this.props;
    this.props.history.goBack();
  };

  handleOnBack = () => {  // al cancelar
    // const { history } = this.props;
    this.props.history.goBack();
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
