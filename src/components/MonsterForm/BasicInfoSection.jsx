import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const BasicInfoSection = ({ register }) => {
  return (
    <FieldGroup title="Basic Information" defaultExpanded={true}>
      <InputField
        label="Name"
        name="basicInfo.name"
        {...register("basicInfo.name")}
        placeholder="e.g. Goblin"
      />
      <InputField
        label="Tag"
        name="basicInfo.tag"
        {...register("basicInfo.tag")}
        placeholder="e.g. Scout, Elite"
      />
      <InputField
        label="Type"
        name="basicInfo.creatureType"
        {...register("basicInfo.creatureType")}
        placeholder="e.g. Humanoid"
      />
      <InputField
        label="Size"
        name="basicInfo.size"
        {...register("basicInfo.size")}
        placeholder="e.g. Small"
      />
      <InputField
        label="Alignment"
        name="basicInfo.alignment"
        {...register("basicInfo.alignment")}
        placeholder="e.g. Neutral Evil"
      />
    </FieldGroup>
  );
};

export default BasicInfoSection;