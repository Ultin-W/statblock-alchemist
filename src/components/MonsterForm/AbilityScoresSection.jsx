import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const AbilityScoresSection = ({ register, setValue }) => {
  return (
    <FieldGroup title="Ability Scores" defaultExpanded={false}>
      <InputField
        label="STR"
        type="number"
        {...register("abilityScores.str", { valueAsNumber: true })}
        setValue={setValue}
        placeholder="e.g. 10"
      />
      <InputField
        label="DEX"
        type="number"
        {...register("abilityScores.dex", { valueAsNumber: true })}
        setValue={setValue}
        placeholder="e.g. 10"
      />
      <InputField
        label="CON"
        type="number"
        {...register("abilityScores.con", { valueAsNumber: true })}
        setValue={setValue}
        placeholder="e.g. 10"
      />
      <InputField
        label="INT"
        type="number"
        {...register("abilityScores.int", { valueAsNumber: true })}
        setValue={setValue}
        placeholder="e.g. 10"
      />
      <InputField
        label="WIS"
        type="number"
        {...register("abilityScores.wis", { valueAsNumber: true })}
        setValue={setValue}
        placeholder="e.g. 10"
      />
      <InputField
        label="CHA"
        type="number"
        {...register("abilityScores.cha", { valueAsNumber: true })}
        setValue={setValue}
        placeholder="e.g. 10"
      />
    </FieldGroup>
  );
};

export default AbilityScoresSection;