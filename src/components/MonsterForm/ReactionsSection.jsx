import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ReactionsSection = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "reactions"
  });

  const addReaction = () => {
    append({ name: '', description: '' });
  };

  return (
    <FieldGroup title="Reactions" defaultExpanded={false}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label="Reaction Name"
            name={`reactions.${index}.name`}
            {...control.register(`reactions.${index}.name`)}
            placeholder="e.g. Parry"
          />
          <InputField
            label="Description"
            name={`reactions.${index}.description`}
            {...control.register(`reactions.${index}.description`)}
            placeholder="e.g. The monster adds 2 to its AC against one melee attack that would hit it."
          />
          <button type="button" onClick={() => remove(index)}>
            Remove Reaction
          </button>
        </div>
      ))}

      <button type="button" onClick={addReaction}>
        Add Reaction
      </button>
    </FieldGroup>
  );
};

export default ReactionsSection;