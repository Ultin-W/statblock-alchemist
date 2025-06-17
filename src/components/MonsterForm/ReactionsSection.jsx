import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const ReactionsSection = ({ control }) => {
  const fieldDefinitions = [
    {
      name: 'name',
      label: 'Reaction Name',
      placeholder: 'e.g. Parry'
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'e.g. The monster adds 2 to its AC against one melee attack that would hit it.'
    }
  ];

  return (
    <FieldGroup title="Reactions" defaultExpanded={false}>
      <DynamicFieldArray
        control={control}
        name="reactions"
        fieldDefinitions={fieldDefinitions}
        addButtonLabel="Add Reaction"
        removeButtonLabel="Remove Reaction"
      />
    </FieldGroup>
  );
};

export default ReactionsSection;