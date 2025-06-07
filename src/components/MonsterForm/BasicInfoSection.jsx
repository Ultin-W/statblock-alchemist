import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const BasicInfoSection = ({ data, onChange }) => (
  <FieldGroup title="Basic Information" defaultExpanded={true}>
    <InputField
      label="Name"
      name="name"
      value={data.name}
      onChange={onChange}
      placeholder="e.g. Goblin"
    />
    <InputField
      label="Tag"
      name="tag"
      value={data.tag}
      onChange={onChange}
      placeholder="e.g. Scout, Elite"
    />
    <InputField
      label="Type"
      name="creatureType"
      value={data.creatureType}
      onChange={onChange}
      placeholder="e.g. Humanoid"
    />
    <InputField
      label="Size"
      name="size"
      value={data.size}
      onChange={onChange}
      placeholder="e.g. Small"
    />
    <InputField
      label="Alignment"
      name="alignment"
      value={data.alignment}
      onChange={onChange}
      placeholder="e.g. Neutral Evil"
    />
  </FieldGroup>
);

export default BasicInfoSection;