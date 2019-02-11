import React, { Component } from 'react';
import { connect } from 'react-redux';

export const accessControl = (permissionsRequire) => (WrappepComponent) => {
  const securedControl = class extends Component {
    //en base a los permisos es que se decide si se muestra o no el componente
    render () {
      const { permissions } = this.props.user;  //array de los permisos del usuario

      const isAllow = permissionsRequire.every((permission) => permissions.indexOf(permission) >= 0);

      if(!isAllow){
        return (<div><i>No tiene permisos de acceso</i></div>);
      }
      return <WrappepComponent { ...this.props }/>;
      //aqui le pasamos al componente decorado las propiedades que vienen para
      // el componente original
    }
  }
  //Para obtener los datos del usuario del store, desde el reducer 'user'
  return connect((state) =>({ user: state.user }))(securedControl)
}

// En permissionsRequire va a venir el listado de  permisos requeridos para mostrar
// las vistas que van a estar envueltas por el high order component
// WrappepComponent son las vistas, los componentes a recibir
// securedControl va a ser el resultado del control decorado (componente decorado)
//every() por cada uno de los items del array, va a verificar que dentro de los indices de
// permissions exista un determinado permiso
// si es mayor o igual que 0 tiene permiso
