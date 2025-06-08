import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SpeedSection = ({ data, onChange }) => {
  const handleSpeedChange = (type, value) => {
    onChange({
      target: {
        name: 'speed',
        value: {
          ...data.speed,
          [type]: value
        }
      }
    });
  };

  return (
    <FieldGroup title="Speed" defaultExpanded={false}>
      <InputField
        label="Walk Speed (ft.)"
        name="walkSpeed"
        type="number"
        value={data.speed.walk}
        onChange={(e) => handleSpeedChange('walk', e.target.value)}
        placeholder="e.g. 30"
      />
      <InputField
        label="Fly Speed (ft.)"
        name="flySpeed"
        type="number"
        value={data.speed.fly}
        onChange={(e) => handleSpeedChange('fly', e.target.value)}
        placeholder="e.g. 30"
      />
      <InputField
        label="Swim Speed (ft.)"
        name="swimSpeed"
        type="number"
        value={data.speed.swim}
        onChange={(e) => handleSpeedChange('swim', e.target.value)}
        placeholder="e.g. 30"
      />
      <InputField
        label="Climb Speed (ft.)"
        name="climbSpeed"
        type="number"
        value={data.speed.climb}
        onChange={(e) => handleSpeedChange('climb', e.target.value)}
        placeholder="e.g. 30"
      />
      <InputField
        label="Burrow Speed (ft.)"
        name="burrowSpeed"
        type="number"
        value={data.speed.burrow}
        onChange={(e) => handleSpeedChange('burrow', e.target.value)}
        placeholder="e.g. 30"
      />
    </FieldGroup>
  );
};

export default SpeedSection;