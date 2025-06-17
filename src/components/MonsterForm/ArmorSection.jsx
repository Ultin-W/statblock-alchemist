import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ArmorSection = ({ ac, armorType, onArmorChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onArmorChange({
      [name]: value
    });
  };

  return (
    <FieldGroup title="Armor" defaultExpanded={false}>
      <InputField
        label="AC"
        name="ac"
        type="number"
        value={ac}
        onChange={handleChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="Type"
        name="armorType"
        value={armorType}
        onChange={handleChange}
        placeholder="e.g. natural armor"
      />
    </FieldGroup>
  );
};

export default ArmorSection;