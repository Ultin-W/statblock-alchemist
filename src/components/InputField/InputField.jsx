import React from 'react';
import './InputField.scss';

const InputField = ({ label, placeholder, type = 'text', ...registerProps }) => {
  // Use React Hook Form's name for the HTML ID
  const rhfName = registerProps.name;
  const htmlSafeId = rhfName?.replace(/\./g, '-');

  return (
    <div className="input-field">
      <label htmlFor={htmlSafeId}>{label}</label>
      <input
        {...registerProps}
        type={type}
        id={htmlSafeId}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
