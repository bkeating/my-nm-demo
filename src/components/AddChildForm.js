import React from 'react';
import PropTypes from 'prop-types';

import AddChildItem from './AddChildItem';

const AddChildForm = props => (
  <div>

    {props.items.map(item => (
      <AddChildItem
        key={item.id}
        item={item}
        handleRemove={props.handleRemove}
        handleInput={props.handleInput}
      />
    ))}

    <button className="add" onClick={props.handleAdd}>
      Add another Child
    </button>

  </div>
);

AddChildForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      gender: PropTypes.string,
      dateOfBirth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  ).isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired
};

export default AddChildForm;
