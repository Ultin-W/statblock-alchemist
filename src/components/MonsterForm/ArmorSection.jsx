import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ArmorSection = ({ register, setValue, errors }) => {
  return (
    <FieldGroup title="Armor" defaultExpanded={false}>
      <InputField
        label="AC"
        type="number"
        {...register("ac", {
          valueAsNumber: true,
          min: { value: 1, message: "AC must be at least 1" },
          max: { value: 30, message: "AC cannot exceed 30" },
          validate: {
            isNumber: (value) => {
              const element = document.getElementById('ac');
              if (element?.validity?.badInput) {
                return "Please enter numbers only";
              }
              return true;
            },
            isInteger: value => !value || Number.isInteger(value) || "Must be a whole number"
          }
        })}
        setValue={setValue}
        placeholder="e.g. 10"
        error={errors?.ac}
      />
      <InputField
        label="Type"
        {...register("armorType")}
        setValue={setValue}
        placeholder="e.g. natural armor"
        error={errors?.armorType}
      />
    </FieldGroup>
  );
};

export default ArmorSection;