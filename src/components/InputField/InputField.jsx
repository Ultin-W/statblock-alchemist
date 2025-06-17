import React from 'react';
import './InputField.scss';

const InputField = ({ label, name, value, onChange, type = 'text', placeholder, ...registerProps }) => {
  // Convert dots to dashes for HTML-safe ID (e.g., "basicInfo.name" → "basicInfo-name")
  const htmlSafeId = name?.replace(/\./g, '-');

  // If registerProps are provided (from React Hook Form), use them
  // Otherwise, use the traditional value/onChange props
  const inputProps = registerProps.ref ? {
    ...registerProps,
    type,
    id: htmlSafeId,
    placeholder
  } : {
    type,
    id: htmlSafeId,
    name,
    value,
    onChange,
    placeholder
  };

  return (
    <div className="input-field">
      <label htmlFor={htmlSafeId}>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default InputField;
