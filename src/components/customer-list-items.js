import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css';


const CustomerListItems = ({ name, ci, editAction, deleteAction, urlPath }) => {
  return (
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
  );
}

CustomerListItems.propTypes = {
  ci: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  deleteAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomerListItems;
