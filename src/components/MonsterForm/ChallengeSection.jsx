import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ChallengeSection = ({ register, setValue, errors }) => {
  return (
    <FieldGroup title="Challenge" defaultExpanded={false}>
      <InputField
        label="Challenge Rating"
        {...register("challengeRating")}
        setValue={setValue}
        placeholder="e.g. 1/2"
        error={errors?.challengeRating}
      />
      <InputField
        label="XP"
        type="number"
        {...register("xp", {
          valueAsNumber: true,
          min: { value: 0, message: "XP cannot be negative" },
          max: { value: 999999, message: "XP cannot exceed 999,999" },
          validate: {
            isNumber: (value) => {
              const element = document.getElementById('xp');
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
        error={errors?.xp}
      />
    </FieldGroup>
  );
};

export default ChallengeSection;