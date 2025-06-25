import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const ActionsSection = ({ control, setValue }) => {
  const fieldDefinitions = [
    {
      name: 'name',
      label: 'Action Name',
      placeholder: 'e.g. Multiattack'
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'e.g. The monster makes two attacks: one with its bite and one with its claws.'
    }
  ];

  return (
    <FieldGroup title="Actions" defaultExpanded={false}>
      <DynamicFieldArray
        control={control}
        setValue={setValue}
        name="actions"
        fieldDefinitions={fieldDefinitions}
        addButtonLabel="Add Action"
        removeButtonLabel="Remove Action"
      />
    </FieldGroup>
  );
};

export default ActionsSection;