import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const TraitsSection = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "traits"
  });

  const addTrait = () => {
    append({ name: '', description: '' });
  };

  return (
    <FieldGroup title="Special Traits / Abilities" defaultExpanded={false}>
      {fields.map((field, index) => (
        <div key={field.id} className="dynamic-item">
          <div className="dynamic-item-content">
            <InputField
              label="Trait Name"
              name={`traits.${index}.name`}
              {...control.register(`traits.${index}.name`)}
              placeholder="e.g. Keen Smell"
            />
            <InputField
              label="Description"
              name={`traits.${index}.description`}
              {...control.register(`traits.${index}.description`)}
              placeholder="e.g. The monster has advantage on Wisdom (Perception) checks that rely on smell."
            />
          </div>
          <button
            type="button"
            onClick={() => remove(index)}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addTrait} className="add-button">
        Add Trait
      </button>
    </FieldGroup>
  );
};

export default TraitsSection;