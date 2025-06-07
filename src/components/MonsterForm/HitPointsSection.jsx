import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const HitPointsSection = ({ data, onChange }) => (
  <FieldGroup title="Hit Points" defaultExpanded={true}>
    <InputField
      label="Average Hit Points"
      name="hp"
      type="number"
      value={data.hp}
      onChange={onChange}
      placeholder="e.g. 100"
    />
    <InputField
      label="Hit Dice"
      name="hitDice"
      value={data.hitDice}
      onChange={onChange}
      placeholder="e.g. 9d8+18"
    />
  </FieldGroup>
);

export default HitPointsSection;