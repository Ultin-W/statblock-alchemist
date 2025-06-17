import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const HitPointsSection = ({ register }) => {
  return (
    <FieldGroup title="Hit Points" defaultExpanded={false}>
      <InputField
        label="Average Hit Points"
        name="hp"
        type="number"
        {...register("hp")}
        placeholder="e.g. 100"
      />
      <InputField
        label="Hit Dice"
        name="hitDice"
        {...register("hitDice")}
        placeholder="e.g. 9d8+18"
      />
    </FieldGroup>
  );
};

export default HitPointsSection;