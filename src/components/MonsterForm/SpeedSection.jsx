import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SpeedSection = ({ data, onChange }) => (
  <FieldGroup title="Speed" defaultExpanded={false}>
    <InputField
      label="Walk Speed (ft.)"
      name="walkSpeed"
      type="number"
      value={data.walkSpeed}
      onChange={onChange}
      placeholder="e.g. 30"
    />
    <InputField
      label="Fly Speed (ft.)"
      name="flySpeed"
      type="number"
      value={data.flySpeed}
      onChange={onChange}
      placeholder="e.g. 30"
    />
    <InputField
      label="Swim Speed (ft.)"
      name="swimSpeed"
      type="number"
      value={data.swimSpeed}
      onChange={onChange}
      placeholder="e.g. 30"
    />
    <InputField
      label="Climb Speed (ft.)"
      name="climbSpeed"
      type="number"
      value={data.climbSpeed}
      onChange={onChange}
      placeholder="e.g. 30"
    />
    <InputField
      label="Burrow Speed (ft.)"
      name="burrowSpeed"
      type="number"
      value={data.burrowSpeed}
      onChange={onChange}
      placeholder="e.g. 30"
    />
  </FieldGroup>
);

export default SpeedSection;