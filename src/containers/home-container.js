import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppFrame from '../components/app-frame';
import CustomerActions from '../components/customers-actions';



class HomeContainer extends Component {

  render () {
    return (
      <div>
        {/* <h1>Home</h1>
        <Link to="/customers">Listado de clientes</Link> */}
        {/* Otra manera de hacer esta parte, mediante el app-frame */}
        <AppFrame header="Home" body={
          // acciones disponibles
          <div>
            Esta es la pantalla inicial
            <CustomerActions>
              <Link to="/customers">Listado de clientes</Link>
            </CustomerActions>
          </div>
        }/>
      </div>
    );
  }
}

HomeContainer.proptypes = {

};

export default HomeContainer;
/*
- EL componente link va direccionar hacia la url de customers (donde va a estar el control del listado de clientes)
- El appFrame nos provee un marco para la visualizacion de la aplicacion
*/
