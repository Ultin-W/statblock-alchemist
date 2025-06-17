import React from 'react';
import InputField from '../InputField/InputField';

const DynamicListItem = ({
  field,
  index,
  onRemove,
  fields = [],
  labelPrefix = "Item",
  namePrefix = "",
  placeholder = ""
}) => {
  return (
    <div className="dynamic-list-item">
      {fields.map((fieldConfig) => (
        <InputField
          key={fieldConfig.name}
          label={fieldConfig.label || `${labelPrefix} ${index + 1} ${fieldConfig.name}`}
          name={`${namePrefix}.${index}.${fieldConfig.name}`}
          {...fieldConfig.register(`${namePrefix}.${index}.${fieldConfig.name}`)}
          placeholder={fieldConfig.placeholder || placeholder}
        />
      ))}
      <button type="button" onClick={() => onRemove(index)} className="remove-button">
        Remove {labelPrefix}
      </button>
    </div>
  );
};

export default DynamicListItem;