import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ArmorSection = ({ data, onChange }) => (
  <FieldGroup title="Armor" defaultExpanded={false}>
    <InputField
      label="AC"
      name="ac"
      type="number"
      value={data.ac}
      onChange={onChange}
      placeholder="e.g. 10"
    />
    <InputField
      label="Type"
      name="armorType"
      value={data.armorType}
      onChange={onChange}
      placeholder="e.g. natural armor"
    />
  </FieldGroup>
);

export default ArmorSection;