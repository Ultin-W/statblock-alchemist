import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const LegendaryActionsSection = ({ control, setValue }) => {
  const fieldDefinitions = [
    {
      name: 'name',
      label: 'Legendary Action Name',
      placeholder: 'e.g. Claw Attack'
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'e.g. The monster makes one claw attack.'
    }
  ];

  return (
    <FieldGroup title="Legendary Actions" defaultExpanded={false}>
      <DynamicFieldArray
        control={control}
        setValue={setValue}
        name="legendaryActions"
        fieldDefinitions={fieldDefinitions}
        addButtonLabel="Add Legendary Action"
        removeButtonLabel="Remove Legendary Action"
      />
    </FieldGroup>
  );
};

export default LegendaryActionsSection;