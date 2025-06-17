import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const AbilityScoresSection = ({ register }) => {
  return (
    <FieldGroup title="Ability Scores" defaultExpanded={false}>
      <InputField
        label="STR"
        name="abilityScores.str"
        type="number"
        {...register("abilityScores.str", { valueAsNumber: true })}
        placeholder="e.g. 10"
      />
      <InputField
        label="DEX"
        name="abilityScores.dex"
        type="number"
        {...register("abilityScores.dex", { valueAsNumber: true })}
        placeholder="e.g. 10"
      />
      <InputField
        label="CON"
        name="abilityScores.con"
        type="number"
        {...register("abilityScores.con", { valueAsNumber: true })}
        placeholder="e.g. 10"
      />
      <InputField
        label="INT"
        name="abilityScores.int"
        type="number"
        {...register("abilityScores.int", { valueAsNumber: true })}
        placeholder="e.g. 10"
      />
      <InputField
        label="WIS"
        name="abilityScores.wis"
        type="number"
        {...register("abilityScores.wis", { valueAsNumber: true })}
        placeholder="e.g. 10"
      />
      <InputField
        label="CHA"
        name="abilityScores.cha"
        type="number"
        {...register("abilityScores.cha", { valueAsNumber: true })}
        placeholder="e.g. 10"
      />
    </FieldGroup>
  );
};

export default AbilityScoresSection;