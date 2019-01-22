import React, { Component } from 'react';

//Creacion de un High Order Component
//Su unica funcion va a ser establecer las propiedades iniciales
export const setPropsAsInitial = (WrappedComponent) => (
  //retorna como resultado otro componente
  class extends Component {
    render () {
      return <WrappedComponent {...this.props} initialValues={this.props}/>;
    }
  }
);

/*
- Es un 'decorator', estos permiten agregar funcionalidades a un determinado objeto sin necesidad de
alterar el componente.
- El nombre WrappedComponent es simbolico
- Se le pasan las propiedades que le llegan al componente {this.props}
- Ademas de pasar las propiedades que le pasan como props al componente, tambien se le agrega la
propiedad initialValues (la que necesita el componente) y esas propiedades se van a tomar en base a
this.props, por lo que se tiene una copia de las propiedades con initialValues
- High Order Component se trata de una funcion que retorna un nuevo componente en base al componente
inicial
*/
