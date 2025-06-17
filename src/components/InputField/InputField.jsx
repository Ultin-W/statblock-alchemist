import React from 'react';
import './InputField.scss';

const InputField = ({ label, name, value, onChange, type = 'text', placeholder, ...registerProps }) => {
  // If registerProps are provided (from React Hook Form), use them
  // Otherwise, use the traditional value/onChange props
  const inputProps = registerProps.ref ? {
    ...registerProps,
    type,
    id: name,
    placeholder
  } : {
    type,
    id: name,
    name,
    value,
    onChange,
    placeholder
  };

  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default InputField;
