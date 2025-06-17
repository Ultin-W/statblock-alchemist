import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const SensesSection = ({ control }) => {
  const fieldDefinitions = [
    {
      name: 'value',
      label: 'Sense',
      placeholder: 'e.g. darkvision 60 ft.'
    }
  ];

  return (
    <FieldGroup title="Senses" defaultExpanded={false}>
      <DynamicFieldArray
        control={control}
        name="senses"
        fieldDefinitions={fieldDefinitions}
        addButtonLabel="Add Sense"
        removeButtonLabel="Remove Sense"
      />
    </FieldGroup>
  );
};

export default SensesSection;