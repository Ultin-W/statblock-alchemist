import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const BasicInfoSection = ({ basicInfo, onBasicInfoChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onBasicInfoChange({
      ...basicInfo,
      [name]: value
    });
  };

  return (
    <FieldGroup title="Basic Information" defaultExpanded={true}>
      <InputField
        label="Name"
        name="name"
        value={basicInfo.name}
        onChange={handleChange}
        placeholder="e.g. Goblin"
      />
      <InputField
        label="Tag"
        name="tag"
        value={basicInfo.tag}
        onChange={handleChange}
        placeholder="e.g. Scout, Elite"
      />
      <InputField
        label="Type"
        name="creatureType"
        value={basicInfo.creatureType}
        onChange={handleChange}
        placeholder="e.g. Humanoid"
      />
      <InputField
        label="Size"
        name="size"
        value={basicInfo.size}
        onChange={handleChange}
        placeholder="e.g. Small"
      />
      <InputField
        label="Alignment"
        name="alignment"
        value={basicInfo.alignment}
        onChange={handleChange}
        placeholder="e.g. Neutral Evil"
      />
    </FieldGroup>
  );
};

export default BasicInfoSection;