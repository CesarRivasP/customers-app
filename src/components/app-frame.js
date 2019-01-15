import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './app-header';
import '../index.css';

const AppFrame = ({header, body}) => {
  return (
    <div>
      <div className="app-frame">
        <AppHeader title={ header } />
      </div>
      <div /*className="body"*/>
        { body }
      </div>
      <div /*className="footer"*/>
        Aplicacion Simple de ejemplo
      </div>
    </div>
  );
}

AppFrame.propTypes = {
  header: PropTypes.string.isRequired,
  //body es un elemento renderisable, cualquier cosa que se pueda pasar desde react que se pueda renderizar puede ser un elemento
  body: PropTypes.element.isRequired,
}

export default AppFrame;
/*
AppFrame es un contanedor que nos va a servir para no replicar codigo poniendo el titulo en cada uno de los lugares en los que
se necesita, funciona como un marco 'plantilla?'
*/
