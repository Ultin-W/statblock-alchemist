import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const LegendaryActionsSection = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "legendaryActions"
  });

  const addLegendaryAction = () => {
    append({ name: '', description: '' });
  };

  return (
    <FieldGroup title="Legendary Actions" defaultExpanded={false}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label="Legendary Action Name"
            name={`legendaryActions.${index}.name`}
            {...control.register(`legendaryActions.${index}.name`)}
            placeholder="e.g. Tail Attack"
          />
          <InputField
            label="Description"
            name={`legendaryActions.${index}.description`}
            {...control.register(`legendaryActions.${index}.description`)}
            placeholder="e.g. The monster makes a tail attack."
          />
          <button type="button" onClick={() => remove(index)}>
            Remove Legendary Action
          </button>
        </div>
      ))}

      <button type="button" onClick={addLegendaryAction}>
        Add Legendary Action
      </button>
    </FieldGroup>
  );
};

export default LegendaryActionsSection;