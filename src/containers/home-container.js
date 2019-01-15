import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/app-frame';
import CustomerActions from '../components/customers-actions';



class HomeContainer extends Component {

  handleOnClick = () => {
    console.log("handle on click");
    // <Link to="/customers">Listado de clientes</Link>
    this.props.history.push('/customers');
  }

  render () {
    return (
      <div>
        {/* <h1>Home</h1>
        <Link to="/customers">Listado de clientes</Link> */}
        {/* Otra manera de hacer esta parte, mediante el app-frame */}
        <AppFrame
          header="Home"
          body={  // acciones disponibles
            <div>
              Esta es la pantalla inicial
              <CustomerActions>
                <button onClick={this.handleOnClick}></button>
                {/* <Link to="/customers">Listado de clientes</Link> */}
              </CustomerActions>
            </div>
          }
        />
      </div>
    );
  }
}

HomeContainer.proptypes = {

};

export default withRouter(HomeContainer);
/*
- EL componente link va direccionar hacia la url de customers (donde va a estar el control del listado de clientes)
- El appFrame nos provee un marco para la visualizacion de la aplicacion
- Si se quiere hacer una transicion entre url se puede hacer mediante 'Link', pero si se quiere hacer Mediante
un evento y a raiz de esa funcion ejecutar la navegacion u alguna otra condicion, se puede hacer mediante el
elemento 'History', el cual nos permite acceder siempre y cuando el componente este dentro de el router, y dentro
history se maneja un stack 'pila de navegacion' en la cual si se quiere navegar hacia otra pantalla, se puede
hacer un push y de esta manera se agrega un elemento al stack y luego cuando el usuario sale de esa ventana
se saca el elemento del stacl, de manera que se termina navegando a el elemento anterior
en el stack.
La propiedad history existe dentro del contenedor, a pesar de que no este declarada o importada
El componente Route es el encargado de pasarle las variable de entorno (match, location, history) a los
componentes indicados.
  * Nota: para que route le pueda pasar las propiedades al componente indicado, debe ser declarado directamente
  el componente en el atributo component de Route, si esto se hace por medio de una funcion no pasa las
  propiedades.
  Para que esto funcione indistintamente de la forma en la que fue declarado, se puede aplicar withRouter y dentro
  se coloca el componente a exportar. Esto le agrega funcionalidades al componente y le agrega las tres propiedades
  que antes solo se pasaban dependiendo de como habia sido invocado o declarado el componente
*/
