import React from 'react';
import InputField from '../InputField/InputField';
import RemoveButton from './RemoveButton';

const DynamicListItem = ({
  fieldId, // React Hook Form's field.id for the key
  index,
  onRemove,
  control,
  setValue,
  namePrefix,
  fieldDefinitions = [{ name: 'value', label: 'Value', placeholder: '' }],
  removeLabel = "Remove Item"
}) => {
  return (
    <div key={fieldId} className="dynamic-list-item">
      {fieldDefinitions.map((fieldDef) => (
        <InputField
          key={fieldDef.name}
          label={fieldDef.label || `${fieldDef.name} ${index + 1}`}
          name={`${namePrefix}.${index}.${fieldDef.name}`}
          {...control.register(`${namePrefix}.${index}.${fieldDef.name}`)}
          setValue={setValue}
          placeholder={fieldDef.placeholder}
        />
      ))}
      <RemoveButton
        onClick={onRemove}
        index={index}
        label={removeLabel}
      />
    </div>
  );
};

export default DynamicListItem;