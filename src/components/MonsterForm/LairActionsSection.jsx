import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const LairActionsSection = ({ control, setValue }) => {
  const fieldDefinitions = [
    {
      name: 'name',
      label: 'Lair Action Name',
      placeholder: 'e.g. Tremor'
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'e.g. The ground shakes within 60 feet of the monster.'
    }
  ];

  return (
    <FieldGroup title="Lair Actions" defaultExpanded={false}>
      <DynamicFieldArray
        control={control}
        setValue={setValue}
        name="lairActions"
        fieldDefinitions={fieldDefinitions}
        addButtonLabel="Add Lair Action"
        removeButtonLabel="Remove Lair Action"
      />
    </FieldGroup>
  );
};

export default LairActionsSection;