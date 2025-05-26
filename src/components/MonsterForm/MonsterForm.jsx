import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const MonsterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    size: '',
    alignment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="monster-form">
      <FieldGroup title="Basic Information">
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
        <InputField
          label="Size"
          name="size"
          value={formData.size}
          onChange={handleChange}
        />
        <InputField
          label="Alignment"
          name="alignment"
          value={formData.alignment}
          onChange={handleChange}
        />
      </FieldGroup>
    </form>
  );
};

export default MonsterForm;
