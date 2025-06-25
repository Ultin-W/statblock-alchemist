import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const TraitsSection = ({ control, setValue }) => {
  const fieldDefinitions = [
    {
      name: 'name',
      label: 'Trait Name',
      placeholder: 'e.g. Keen Sight'
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'e.g. The monster has advantage on Wisdom (Perception) checks that rely on sight.'
    }
  ];

  return (
    <FieldGroup title="Special Traits" defaultExpanded={false}>
      <DynamicFieldArray
        control={control}
        setValue={setValue}
        name="traits"
        fieldDefinitions={fieldDefinitions}
        addButtonLabel="Add Trait"
        removeButtonLabel="Remove Trait"
      />
    </FieldGroup>
  );
};

export default TraitsSection;