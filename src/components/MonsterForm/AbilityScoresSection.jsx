import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const AbilityScoresSection = ({ data, onChange }) => {
  const handleAbilityScoreChange = (e) => {
    const { name, value } = e.target;
    onChange({
      target: {
        name: 'abilityScores',
        value: {
          ...data.abilityScores,
          [name]: parseInt(value) || 10
        }
      }
    });
  };

  return (
    <FieldGroup title="Ability Scores" defaultExpanded={false}>
      <InputField
        label="STR"
        name="str"
        type="number"
        value={data.abilityScores.str}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="DEX"
        name="dex"
        type="number"
        value={data.abilityScores.dex}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="CON"
        name="con"
        type="number"
        value={data.abilityScores.con}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="INT"
        name="int"
        type="number"
        value={data.abilityScores.int}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="WIS"
        name="wis"
        type="number"
        value={data.abilityScores.wis}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
      <InputField
        label="CHA"
        name="cha"
        type="number"
        value={data.abilityScores.cha}
        onChange={handleAbilityScoreChange}
        placeholder="e.g. 10"
      />
    </FieldGroup>
  );
};

export default AbilityScoresSection;