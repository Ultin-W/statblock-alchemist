import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const AbilityScoresSection = ({ register, setValue, errors }) => {
  // Create validation function for each ability score
  const createAbilityValidation = (fieldName) => ({
    valueAsNumber: true,
    min: { value: 1, message: "Ability scores must be at least 1" },
    max: { value: 30, message: "Ability scores cannot exceed 30" },
    validate: {
      isNumber: (value) => {
        // Check if the specific input element has badInput (text in number field)
        const element = document.getElementById(fieldName.replace('.', '-'));
        if (element?.validity?.badInput) {
          return "Please enter numbers only";
        }
        return true;
      },
      isInteger: value => !value || Number.isInteger(value) || "Must be a whole number"
    }
  });

  return (
    <FieldGroup title="Ability Scores" defaultExpanded={false}>
      <InputField
        label="STR"
        type="number"
        {...register("abilityScores.str", createAbilityValidation("abilityScores.str"))}
        setValue={setValue}
        placeholder="e.g. 10"
        error={errors?.abilityScores?.str}
      />
      <InputField
        label="DEX"
        type="number"
        {...register("abilityScores.dex", createAbilityValidation("abilityScores.dex"))}
        setValue={setValue}
        placeholder="e.g. 10"
        error={errors?.abilityScores?.dex}
      />
      <InputField
        label="CON"
        type="number"
        {...register("abilityScores.con", createAbilityValidation("abilityScores.con"))}
        setValue={setValue}
        placeholder="e.g. 10"
        error={errors?.abilityScores?.con}
      />
      <InputField
        label="INT"
        type="number"
        {...register("abilityScores.int", createAbilityValidation("abilityScores.int"))}
        setValue={setValue}
        placeholder="e.g. 10"
        error={errors?.abilityScores?.int}
      />
      <InputField
        label="WIS"
        type="number"
        {...register("abilityScores.wis", createAbilityValidation("abilityScores.wis"))}
        setValue={setValue}
        placeholder="e.g. 10"
        error={errors?.abilityScores?.wis}
      />
      <InputField
        label="CHA"
        type="number"
        {...register("abilityScores.cha", createAbilityValidation("abilityScores.cha"))}
        setValue={setValue}
        placeholder="e.g. 10"
        error={errors?.abilityScores?.cha}
      />
    </FieldGroup>
  );
};

export default AbilityScoresSection;