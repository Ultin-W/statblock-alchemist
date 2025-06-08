import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const BasicInfoSection = ({ data, onChange }) => {
  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    onChange({
      target: {
        name: 'basicInfo',
        value: {
          ...data.basicInfo,
          [name]: value
        }
      }
    });
  };

  return (
    <FieldGroup title="Basic Information" defaultExpanded={true}>
      <InputField
        label="Name"
        name="name"
        value={data.basicInfo.name}
        onChange={handleBasicInfoChange}
        placeholder="e.g. Goblin"
      />
      <InputField
        label="Tag"
        name="tag"
        value={data.basicInfo.tag}
        onChange={handleBasicInfoChange}
        placeholder="e.g. Scout, Elite"
      />
      <InputField
        label="Type"
        name="creatureType"
        value={data.basicInfo.creatureType}
        onChange={handleBasicInfoChange}
        placeholder="e.g. Humanoid"
      />
      <InputField
        label="Size"
        name="size"
        value={data.basicInfo.size}
        onChange={handleBasicInfoChange}
        placeholder="e.g. Small"
      />
      <InputField
        label="Alignment"
        name="alignment"
        value={data.basicInfo.alignment}
        onChange={handleBasicInfoChange}
        placeholder="e.g. Neutral Evil"
      />
    </FieldGroup>
  );
};

export default BasicInfoSection;