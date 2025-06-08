import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';
import './DynamicListSection.scss';

const DynamicListSection = ({
  title,
  items,
  onItemsChange,
  nameLabel = 'Name',
  namePlaceholder = '',
  descLabel = 'Description',
  descPlaceholder = '',
  defaultExpanded = false,
}) => {
  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    onItemsChange(updatedItems);
  };

  const handleAddItem = () => {
    onItemsChange([...items, { name: '', description: '' }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    onItemsChange(updatedItems);
  };

  return (
    <FieldGroup title={title} defaultExpanded={defaultExpanded}>
      {items.map((item, idx) => (
        <div key={idx} className="dynamic-list-item">
          <InputField
            label={nameLabel}
            name={`item-name-${idx}`}
            value={item.name}
            onChange={e => handleItemChange(idx, 'name', e.target.value)}
            placeholder={namePlaceholder}
          />
          <div className="input-field">
            <label htmlFor={`item-desc-${idx}`}>{descLabel}</label>
            <textarea
              id={`item-desc-${idx}`}
              name={`item-desc-${idx}`}
              value={item.description}
              onChange={e => handleItemChange(idx, 'description', e.target.value)}
              placeholder={descPlaceholder}
              rows={3}
            />
          </div>
          <button type="button" onClick={() => handleRemoveItem(idx)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddItem}>
        Add {nameLabel}
      </button>
    </FieldGroup>
  );
};

export default DynamicListSection;