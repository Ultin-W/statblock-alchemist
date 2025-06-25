import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const BasicInfoSection = ({ register }) => {
  return (
    <FieldGroup title="Basic Information" defaultExpanded={true}>
      <InputField
        label="Name"
        {...register("basicInfo.name")}
        placeholder="e.g. Goblin"
      />
      <InputField
        label="Tag"
        {...register("basicInfo.tag")}
        placeholder="e.g. Scout, Elite"
      />
      <InputField
        label="Type"
        {...register("basicInfo.creatureType")}
        placeholder="e.g. Humanoid"
      />
      <InputField
        label="Size"
        {...register("basicInfo.size")}
        placeholder="e.g. Small"
      />
      <InputField
        label="Alignment"
        {...register("basicInfo.alignment")}
        placeholder="e.g. Neutral Evil"
      />
    </FieldGroup>
  );
};

export default BasicInfoSection;