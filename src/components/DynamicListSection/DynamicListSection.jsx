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

  // Create a unique identifier for this section
  const sectionId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <FieldGroup title={title} defaultExpanded={defaultExpanded}>
      {items.map((item, idx) => (
        <div key={`${sectionId}-${idx}`} className="dynamic-list-item">
          <InputField
            label={nameLabel}
            name={`${sectionId}-name-${idx}`}
            value={item.name}
            onChange={e => handleItemChange(idx, 'name', e.target.value)}
            placeholder={namePlaceholder}
          />
          <div className="input-field">
            <label htmlFor={`${sectionId}-desc-${idx}`}>{descLabel}</label>
            <textarea
              id={`${sectionId}-desc-${idx}`}
              name={`${sectionId}-desc-${idx}`}
              value={item.description}
              onChange={e => handleItemChange(idx, 'description', e.target.value)}
              placeholder={descPlaceholder}
              rows={3}
            />
          </div>
          <button type="button" onClick={() => handleRemoveItem(idx)} className="remove-button">
            -
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddItem} className="add-button">
        +
      </button>
    </FieldGroup>
  );
};

export default DynamicListSection;