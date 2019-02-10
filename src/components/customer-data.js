import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CustomersActions from './customers-actions';
import '../index.css';

const styles = theme => ({
  input: {
    display: 'none',
  },
});

const CustomerData = ({ classes, name, id, ci, age, onBack, isDeleteAllow, onDelete }) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Datos del cliente</h2>
        <div><strong>Nombre: </strong><i>{name}</i></div>
        <div><strong>C.I: </strong><i>{ci}</i></div>
        <div><strong>Edad: </strong><i>{age}</i></div>
      </div>
      <CustomersActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={onBack}
          className={classes.button}>
          Volver
        </Button>
        {
          isDeleteAllow && (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => onDelete(id)}
              className={classes.button}>
              Eliminar
            </Button>
          )
        }
      </CustomersActions>
    </div>
  );
}

CustomerData.proptypes = {
  ci: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,  //after
  name: PropTypes.string.isRequired,
  age: PropTypes.number,  //opcional
  onBack: PropTypes.func.isRequired,
  isDeleteAllow: PropTypes.bool,
  onDelete: PropTypes.func,
}

export default withStyles(styles)(CustomerData);
