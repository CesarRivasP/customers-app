import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppFrame from '../components/app-frame';
import CustomerActions from '../components/customers-actions';

const styles = theme => ({
  input: {
    display: 'none',
  },
});

class HomeContainer extends Component {

  handleOnClick = () => {
    console.log("handle on click");
    // <Link to="/customers">Listado de clientes</Link>
    this.props.history.push('/customers');
  }

  render () {
    const { classes } = this.props;
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
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={this.handleOnClick}
                  className={classes.button}>
                  Listado de clientes
                </Button>
                {/* <Link to="/customers">Listado de clientes</Link> */}
              </CustomerActions>
            </div>
          }
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(HomeContainer));
/*
- EL componente link va direccionar hacia la url de customers (donde va a estar el control del listado de clientes)
- El appFrame nos provee un marco para la visualizacion de la aplicacion
*/
