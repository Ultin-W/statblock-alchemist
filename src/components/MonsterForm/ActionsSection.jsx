import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ActionsSection = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "actions"
  });

  const addAction = () => {
    append({ name: '', description: '' });
  };

  return (
    <FieldGroup title="Actions" defaultExpanded={false}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label="Action Name"
            name={`actions.${index}.name`}
            {...control.register(`actions.${index}.name`)}
            placeholder="e.g. Multiattack"
          />
          <InputField
            label="Description"
            name={`actions.${index}.description`}
            {...control.register(`actions.${index}.description`)}
            placeholder="e.g. The monster makes two attacks with its claws."
          />
          <button type="button" onClick={() => remove(index)}>
            Remove Action
          </button>
        </div>
      ))}

      <button type="button" onClick={addAction}>
        Add Action
      </button>
    </FieldGroup>
  );
};

export default ActionsSection;