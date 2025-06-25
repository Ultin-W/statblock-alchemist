import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const RegionalEffectsSection = ({ control, setValue }) => {
  const fieldDefinitions = [
    {
      name: 'name',
      label: 'Regional Effect Name',
      placeholder: 'e.g. Twisted Magic'
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'e.g. Magic is warped within 6 miles of the monster\'s lair.'
    }
  ];

  return (
    <FieldGroup title="Regional Effects" defaultExpanded={false}>
      <DynamicFieldArray
        control={control}
        setValue={setValue}
        name="regionalEffects"
        fieldDefinitions={fieldDefinitions}
        addButtonLabel="Add Regional Effect"
        removeButtonLabel="Remove Regional Effect"
      />
    </FieldGroup>
  );
};

export default RegionalEffectsSection;