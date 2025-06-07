import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SensesSection = ({ data, onChange }) => (
  <FieldGroup title="Senses" defaultExpanded={false}>
    <InputField
      label="Senses"
      name="senses"
      value={data.senses}
      onChange={onChange}
      placeholder="e.g. darkvision 60 ft., passive Perception 12"
    />
  </FieldGroup>
);

export default SensesSection;