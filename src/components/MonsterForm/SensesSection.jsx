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
    append("");
  };

  return (
    <FieldGroup title="Senses" defaultExpanded={false}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label="Sense"
            name={`senses.${index}`}
            {...control.register(`senses.${index}`)}
            placeholder="e.g. darkvision 60 ft."
          />
          <button type="button" onClick={() => remove(index)}>
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