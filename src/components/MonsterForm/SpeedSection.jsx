import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SpeedSection = ({ register, setValue }) => {
  return (
    <FieldGroup title="Speed" defaultExpanded={false}>
      <InputField
        label="Walk Speed (ft.)"
        type="number"
        {...register("speed.walk")}
        setValue={setValue}
        placeholder="e.g. 30"
      />
      <InputField
        label="Fly Speed (ft.)"
        type="number"
        {...register("speed.fly")}
        setValue={setValue}
        placeholder="e.g. 30"
      />
      <InputField
        label="Swim Speed (ft.)"
        type="number"
        {...register("speed.swim")}
        setValue={setValue}
        placeholder="e.g. 30"
      />
      <InputField
        label="Climb Speed (ft.)"
        type="number"
        {...register("speed.climb")}
        setValue={setValue}
        placeholder="e.g. 30"
      />
      <InputField
        label="Burrow Speed (ft.)"
        type="number"
        {...register("speed.burrow")}
        setValue={setValue}
        placeholder="e.g. 30"
      />
    </FieldGroup>
  );
};

export default SpeedSection;