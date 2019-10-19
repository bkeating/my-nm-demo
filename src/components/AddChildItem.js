import React from 'react';
import PropTypes from 'prop-types';

import { CHILD_FORM_FIELDS } from '../constants';

import FormField from './FormField';

const AddChildItem = ({ item, handleRemove, handleInput }) => [
  <div
    key={item.id}
    className="child-formset-wrapper"
  >

    {CHILD_FORM_FIELDS.map(field => (
      <FormField
        itemId={item.id}
        key={field.id}
        label={field.label}
        name={field.name}
        type={field.type}
        value={item[field.name]}
        handleInput={handleInput}
        options={field.options}
      />
    ))}

    <button className="remove" onClick={() => handleRemove(item.id)}>
      Remove
    </button>

  </div>
];

AddChildItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    dateOfBirth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired
};

export default AddChildItem;
