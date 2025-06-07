import React from 'react';
import './InputField.scss';

const InputField = ({ label, name, value, onChange, type = 'text', placeholder }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
