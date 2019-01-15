import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css';

const CustomerListItems = ({name, ci, editAction, deleteAction, urlPath,}) => {
  return (
    <div>
      <div className="customers-list-item">
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
  name: PropTypes.string.isRequired,
  ci: PropTypes.number.isRequired,
  editAction: PropTypes.string.isRequired,
  deleteAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomerListItems;
