import React from 'react';
import { useFieldArray } from 'react-hook-form';
import DynamicListItem from './DynamicListItem';
import AddButton from './AddButton';

const DynamicFieldArray = ({
  control,
  setValue,
  name,
  fieldDefinitions = [{ name: 'value', label: 'Value', placeholder: '' }],
  defaultValue = {},
  addButtonLabel = "Add Item",
  removeButtonLabel = "Remove Item"
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name
  });

  // Create default value based on field definitions
  const getDefaultValue = () => {
    if (Object.keys(defaultValue).length > 0) {
      return defaultValue;
    }

    const generated = {};
    fieldDefinitions.forEach(field => {
      generated[field.name] = '';
    });
    return generated;
  };

  const handleAdd = () => {
    append(getDefaultValue());
  };

  return (
    <div className="dynamic-field-array">
      {fields.map((field, index) => (
        <DynamicListItem
          key={field.id}
          fieldId={field.id}
          index={index}
          onRemove={remove}
          control={control}
          setValue={setValue}
          namePrefix={name}
          fieldDefinitions={fieldDefinitions}
          removeLabel={removeButtonLabel}
        />
      ))}

      <AddButton onClick={handleAdd} label={addButtonLabel} />
    </div>
  );
};

export default DynamicFieldArray;