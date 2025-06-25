import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const LanguagesSection = ({ control, setValue }) => {
  const fieldDefinitions = [
    {
      name: 'value',
      label: 'Language',
      placeholder: 'e.g. Common'
    }
  ];

  return (
    <FieldGroup title="Languages" defaultExpanded={false}>
      <DynamicFieldArray
        control={control}
        setValue={setValue}
        name="languages"
        fieldDefinitions={fieldDefinitions}
        addButtonLabel="Add Language"
        removeButtonLabel="Remove Language"
      />
    </FieldGroup>
  );
};

export default LanguagesSection;