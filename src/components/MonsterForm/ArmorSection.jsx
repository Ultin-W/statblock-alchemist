import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ArmorSection = ({ data, onChange }) => (
  <FieldGroup title="Armor" defaultExpanded={true}>
    <InputField
      label="AC"
      name="ac"
      value={data.ac}
      onChange={onChange}
    />
    <InputField
      label="Type"
      name="type"
      value={data.type}
      onChange={onChange}
    />
  </FieldGroup>
);

export default ArmorSection;