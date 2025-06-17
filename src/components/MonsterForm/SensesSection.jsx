import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SensesSection = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "senses"
  });

  const addSense = () => {
    append({ value: '' }); // Use object like ReactionsSection
  };

  const removeSense = (index) => {
    remove(index);
  };

  return (
    <FieldGroup title="Senses" defaultExpanded={false}>
      {fields.length === 0 && (
        <p>No senses added yet. Click "Add Sense" to add one.</p>
      )}
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label={`Sense ${index + 1}`}
            name={`senses.${index}.value`}
            {...control.register(`senses.${index}.value`)}
            placeholder="e.g. darkvision 60 ft."
          />
          <button type="button" onClick={() => removeSense(index)}>
            Remove Sense
          </button>
        </div>
      ))}

      <button type="button" onClick={addSense}>
        Add Sense
      </button>
    </FieldGroup>
  );
};

export default SensesSection;