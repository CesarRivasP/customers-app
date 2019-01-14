import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const CustomerListItems = ({name, editAction, deleteAction, urlPath}) => {
  return (
    <div>
      <div className="customer-list-items">
        <div className="field">
          <Link to={`${urlPath}${ci}`}>{name}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${ci}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${ci}/delete`}>{deleteAction}</Link>
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
