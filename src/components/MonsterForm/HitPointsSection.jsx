import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const HitPointsSection = ({ register, setValue, errors }) => {
  return (
    <FieldGroup title="Hit Points" defaultExpanded={false}>
      <InputField
        label="Average Hit Points"
        type="number"
        {...register("hp", {
          valueAsNumber: true,
          min: { value: 1, message: "Hit points must be at least 1" },
          max: { value: 9999, message: "Hit points cannot exceed 9999" },
          validate: {
            isNumber: (value) => {
              const element = document.getElementById('hp');
              if (element?.validity?.badInput) {
                return "Please enter numbers only";
              }
              return true;
            },
            isInteger: value => !value || Number.isInteger(value) || "Must be a whole number"
          }
        })}
        setValue={setValue}
        placeholder="e.g. 100"
        error={errors?.hp}
      />
      <InputField
        label="Hit Dice"
        {...register("hitDice")}
        setValue={setValue}
        placeholder="e.g. 9d8+18"
        error={errors?.hitDice}
      />
    </FieldGroup>
  );
};

export default HitPointsSection;