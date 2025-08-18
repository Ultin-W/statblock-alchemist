import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SpeedSection = ({ register, setValue, errors }) => {
  const createSpeedValidation = (fieldName) => ({
    valueAsNumber: true,
    min: { value: 0, message: "Speed cannot be negative" },
    max: { value: 999, message: "Speed cannot exceed 999" },
    validate: {
      isNumber: (value) => {
        const element = document.getElementById(fieldName.replace('.', '-'));
        if (element?.validity?.badInput) {
          return "Please enter numbers only";
        }
        return true;
      },
      isInteger: value => !value || Number.isInteger(value) || "Must be a whole number"
    }
  });

  return (
    <FieldGroup title="Speed" defaultExpanded={false}>
      <InputField
        label="Walk Speed (ft.)"
        type="number"
        {...register("speed.walk", createSpeedValidation("speed.walk"))}
        setValue={setValue}
        placeholder="e.g. 30"
        error={errors?.speed?.walk}
      />
      <InputField
        label="Fly Speed (ft.)"
        type="number"
        {...register("speed.fly", createSpeedValidation("speed.fly"))}
        setValue={setValue}
        placeholder="e.g. 30"
        error={errors?.speed?.fly}
      />
      <InputField
        label="Swim Speed (ft.)"
        type="number"
        {...register("speed.swim", createSpeedValidation("speed.swim"))}
        setValue={setValue}
        placeholder="e.g. 30"
        error={errors?.speed?.swim}
      />
      <InputField
        label="Climb Speed (ft.)"
        type="number"
        {...register("speed.climb", createSpeedValidation("speed.climb"))}
        setValue={setValue}
        placeholder="e.g. 30"
        error={errors?.speed?.climb}
      />
      <InputField
        label="Burrow Speed (ft.)"
        type="number"
        {...register("speed.burrow", createSpeedValidation("speed.burrow"))}
        setValue={setValue}
        placeholder="e.g. 30"
        error={errors?.speed?.burrow}
      />
    </FieldGroup>
  );
};

export default SpeedSection;