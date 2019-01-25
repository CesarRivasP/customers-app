import React, { Component } from 'react';

//Creacion de un High Order Component
//Su unica funcion va a ser establecer las propiedades iniciales
export const setPropsAsInitial = (WrappedComponent) => (
  //retorna como resultado otro componente
  class extends Component {
    render () {
      return <WrappedComponent
              {...this.props}
              initialValues={this.props}
              // enableReinitialize 1 solucion
            />;
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
** AFTER **
Este setPropsAsInitial establece las propiedades que le pasamos como inicial values.
Esto quiere decir que se copian todas las propiedades que se estan pasando (this.props.customer) y se las
esta copiando de initial values, pero cuando trabajo con initial values el form, solamente lo inicializa
una vez. Es decir, que una vez que el componente fue generado, no vuelve a tomar los datos de initial
values, entonces si no se le indica que fuerce esa accion que hace que tome los initial values (valores
que corresponden al cliente) se queda con los valores iniciales.
- enableReinitialize: con esta propiedad se permite tomar varias veces los valores iniciales.
*/
