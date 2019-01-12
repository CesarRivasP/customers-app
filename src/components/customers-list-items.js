import React from 'react';
import PropTypes from 'prop-types';


const CustomersListItems = ({name, editAction, deleteAction, urlPath}) => {
  return (
    <div>
      <div className="customer-list-items">
        <div className="field">
          <Link to={`${urlPath}${dni}`}>{name}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${dni}/delete`}>{deleteAction}</Link>
        </div>
      </div>
    </div>
  );
}

CustomersListItems.propTypes = {
  name: Proptypes.string.isRequired,
  editAction: Proptypes.string.isRequired,
  deleteAction: Proptypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersListItems;
