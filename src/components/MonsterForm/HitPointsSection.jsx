import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const HitPointsSection = ({ register }) => {
  return (
    <FieldGroup title="Hit Points" defaultExpanded={false}>
      <InputField
        label="Average Hit Points"
        type="number"
        {...register("hp")}
        placeholder="e.g. 100"
      />
      <InputField
        label="Hit Dice"
        {...register("hitDice")}
        placeholder="e.g. 9d8+18"
      />
    </FieldGroup>
  );
};

export default HitPointsSection;