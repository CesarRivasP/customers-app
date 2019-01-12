import React from 'react';
import PropTypes from 'prop-types';


const CustomerListItems = ({name, editAction, deleteAction}) => {
  return (
    <div>
      <div className="customer-list-items">
        <div className="field">
          <Link to={`${props.urlPath}${dni}`}>{name}</Link>
        </div>
        <div className="field">
          <Link to={`${props.urlPath}${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${props.urlPath}${dni}/delete`}>{deleteAction}</Link>
        </div>
      </div>
    </div>
  );
}

CustomerListItems.propTypes = {
  name: Proptypes.string.isRequired,
  editAction: Proptypes.string.isRequired,
  deleteAction: Proptypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomerListItems;
