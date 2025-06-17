import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const AbilityScoresSection = ({ abilityScores, onAbilityScoresChange }) => {
  const handleAbilityScoreChange = (e) => {
    const { name, value } = e.target;
    onAbilityScoresChange({
      ...abilityScores,
      [name]: parseInt(value) || 10
    });
  };

  return (
    <FieldGroup title="Ability Scores" defaultExpanded={false}>
      <InputField
        label="STR"
        name="str"
        type="number"
        value={abilityScores.str}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="DEX"
        name="dex"
        type="number"
        value={abilityScores.dex}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="CON"
        name="con"
        type="number"
        value={abilityScores.con}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="INT"
        name="int"
        type="number"
        value={abilityScores.int}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="WIS"
        name="wis"
        type="number"
        value={abilityScores.wis}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="CHA"
        name="cha"
        type="number"
        value={abilityScores.cha}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
    </FieldGroup>
  );
};

export default AbilityScoresSection;