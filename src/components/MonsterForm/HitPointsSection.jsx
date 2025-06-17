import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const HitPointsSection = ({ hp, hitDice, onHitPointsChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onHitPointsChange({
      [name]: value
    });
  };

  return (
    <FieldGroup title="Hit Points" defaultExpanded={false}>
      <InputField
        label="Average Hit Points"
        name="hp"
        type="number"
        value={hp}
        onChange={handleChange}
        placeholder="e.g. 100"
      />
      <InputField
        label="Hit Dice"
        name="hitDice"
        value={hitDice}
        onChange={handleChange}
        placeholder="e.g. 9d8+18"
      />
    </FieldGroup>
  );
};

export default HitPointsSection;