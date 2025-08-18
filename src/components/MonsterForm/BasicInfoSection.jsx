import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const BasicInfoSection = ({ register, setValue, errors }) => {
  return (
    <FieldGroup title="Basic Information" defaultExpanded={true}>
      <InputField
        label="Name"
        {...register("basicInfo.name")}
        setValue={setValue}
        placeholder="e.g. Goblin"
      />
      <InputField
        label="Tag"
        {...register("basicInfo.tag")}
        setValue={setValue}
        placeholder="e.g. Scout, Elite"
      />
      <InputField
        label="Type"
        {...register("basicInfo.creatureType")}
        setValue={setValue}
        placeholder="e.g. Humanoid"
      />
      <InputField
        label="Size"
        {...register("basicInfo.size")}
        setValue={setValue}
        placeholder="e.g. Small"
      />
      <InputField
        label="Alignment"
        {...register("basicInfo.alignment")}
        setValue={setValue}
        placeholder="e.g. Neutral Evil"
      />
    </FieldGroup>
  );
};

export default BasicInfoSection;