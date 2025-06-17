import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const LairActionsSection = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lairActions"
  });

  const addLairAction = () => {
    append({ name: '', description: '' });
  };

  return (
    <FieldGroup title="Lair Actions" defaultExpanded={false}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label="Lair Action Name"
            name={`lairActions.${index}.name`}
            {...control.register(`lairActions.${index}.name`)}
            placeholder="e.g. Quake"
          />
          <InputField
            label="Description"
            name={`lairActions.${index}.description`}
            {...control.register(`lairActions.${index}.description`)}
            placeholder="e.g. The lair shakes violently, causing all creatures to make a DC 15 Dexterity saving throw or fall prone."
          />
          <button type="button" onClick={() => remove(index)}>
            Remove Lair Action
          </button>
        </div>
      ))}

      <button type="button" onClick={addLairAction}>
        Add Lair Action
      </button>
    </FieldGroup>
  );
};

export default LairActionsSection;