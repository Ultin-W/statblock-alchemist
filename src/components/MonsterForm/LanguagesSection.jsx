import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const LanguagesSection = ({ data, onChange }) => (
  <FieldGroup title="Languages" defaultExpanded={false}>
    <InputField
      label="Languages"
      name="languages"
      value={data.languages}
      onChange={onChange}
      placeholder="e.g. Common, Goblin"
    />
  </FieldGroup>
);

export default LanguagesSection;