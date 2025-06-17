import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const RegionalEffectsSection = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "regionalEffects"
  });

  const addRegionalEffect = () => {
    append({ name: '', description: '' });
  };

  return (
    <FieldGroup title="Regional Effects" defaultExpanded={false}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label="Regional Effect Name"
            name={`regionalEffects.${index}.name`}
            {...control.register(`regionalEffects.${index}.name`)}
            placeholder="e.g. Magical Fog"
          />
          <InputField
            label="Description"
            name={`regionalEffects.${index}.description`}
            {...control.register(`regionalEffects.${index}.description`)}
            placeholder="e.g. A magical fog lightly obscures the land within 6 miles of the lair."
          />
          <button type="button" onClick={() => remove(index)}>
            Remove Regional Effect
          </button>
        </div>
      ))}

      <button type="button" onClick={addRegionalEffect}>
        Add Regional Effect
      </button>
    </FieldGroup>
  );
};

export default RegionalEffectsSection;