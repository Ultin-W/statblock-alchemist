import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SpeedSection = ({ register }) => {
  return (
    <FieldGroup title="Speed" defaultExpanded={false}>
      <InputField
        label="Walk Speed (ft.)"
        name="speed.walk"
        type="number"
        {...register("speed.walk")}
        placeholder="e.g. 30"
      />
      <InputField
        label="Fly Speed (ft.)"
        name="speed.fly"
        type="number"
        {...register("speed.fly")}
        placeholder="e.g. 30"
      />
      <InputField
        label="Swim Speed (ft.)"
        name="speed.swim"
        type="number"
        {...register("speed.swim")}
        placeholder="e.g. 30"
      />
      <InputField
        label="Climb Speed (ft.)"
        name="speed.climb"
        type="number"
        {...register("speed.climb")}
        placeholder="e.g. 30"
      />
      <InputField
        label="Burrow Speed (ft.)"
        name="speed.burrow"
        type="number"
        {...register("speed.burrow")}
        placeholder="e.g. 30"
      />
    </FieldGroup>
  );
};

export default SpeedSection;