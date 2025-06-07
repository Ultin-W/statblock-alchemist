import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SavingThrowsSkillsSection = ({ data, onChange }) => (
  <FieldGroup title="Saving Throws & Skills" defaultExpanded={true}>
    <InputField
      label="Saving Throws"
      name="savingThrows"
      value={data.savingThrows}
      onChange={onChange}
      placeholder="e.g. STR +3, DEX +2"
    />
    <InputField
      label="Skills"
      name="skills"
      value={data.skills}
      onChange={onChange}
      placeholder="e.g. Perception +4, Stealth +6"
    />
  </FieldGroup>
);

export default SavingThrowsSkillsSection;