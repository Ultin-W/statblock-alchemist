import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ArmorSection = ({ register, setValue }) => {
  return (
    <FieldGroup title="Armor" defaultExpanded={false}>
      <InputField
        label="AC"
        type="number"
        {...register("ac")}
        setValue={setValue}
        placeholder="e.g. 10"
      />
      <InputField
        label="Type"
        {...register("armorType")}
        setValue={setValue}
        placeholder="e.g. natural armor"
      />
    </FieldGroup>
  );
};

export default ArmorSection;