import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/app-frame';


class CustomerContainer extends Component {
  render () {
    const { ci } = this.props;
    return (
      <div>
        <AppFrame
          header={`Cliente ${ci}`}
          body={<p>Datos del cliente</p>}
        />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  ci: PropTypes.string.isRequired,
  // customer: PropTypes.object,
}

export default withRouter(connect(null, null)(CustomerContainer));
