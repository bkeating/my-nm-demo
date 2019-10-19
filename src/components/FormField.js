import React from 'react';

const FormField = (props) => {
  const { label, type, name, value, handleInput, options } = props;

  const itemId = props.itemId ? props.itemId : undefined;

  const args = [name];

  if (itemId) {
    args.unshift(itemId);
  }

  return (
    <label>
      {label}:

      {(type === 'text' || type === 'date')
        && (
          <input
            type={type}
            name={name}
            onChange={(e) => handleInput(...args, e.target.value)}
            value={value}
          />
        )
      }

      {type === 'select'
        && (
          <select
            onChange={(e) => handleInput(...args, e.target.value)}
            value={(value !== '') ? value : 0 }
          >

            <option disabled value="0">
              Select...
            </option>

            {options.map(item => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}

          </select>
        )
      }

    </label>
  );
}

export default FormField;
