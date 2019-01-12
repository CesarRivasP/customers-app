import React from 'react';
import PropTypes from 'prop-types';


const CustomersList = ({customers}) => {
  return (
    <div>
      <div className="customers-list">

      </div>
    </div>
  );
}

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomersList;
