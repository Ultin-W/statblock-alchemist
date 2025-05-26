import React from 'react';
import './FieldGroup.scss';

const FieldGroup = ({ title, children }) => {
  return (
    <fieldset className="field-group">
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};

export default FieldGroup;
