import React, { useState } from 'react';
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
  type = 'textarea', // 'textarea' or 'input'
  singleField = false // New prop to control if we only show one field
}) => {
  const [announcement, setAnnouncement] = useState('');
  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    onItemsChange(updatedItems);
  };

  const handleAddItem = () => {
    onItemsChange([...items, { name: '', description: '' }]);
    setAnnouncement(`New ${title.toLowerCase().slice(0, -1)} item added`);
    setTimeout(() => setAnnouncement(''), 1000);
  };

  const handleRemoveItem = (index) => {
    const itemName = items[index]?.name || `item ${index + 1}`;
    const updatedItems = items.filter((_, i) => i !== index);
    onItemsChange(updatedItems);
    setAnnouncement(`${itemName ? `"${itemName}"` : `Item ${index + 1}`} removed from ${title.toLowerCase()}`);
    setTimeout(() => setAnnouncement(''), 1000);
  };

  // Create a unique identifier for this section
  const sectionId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <FieldGroup title={title} defaultExpanded={defaultExpanded}>
      {/* Live region for announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="visually-hidden"
        role="status"
      >
        {announcement}
      </div>

      {items.map((item, idx) => (
        <div key={`${sectionId}-${idx}`} className="dynamic-list-item">
          <InputField
            label={nameLabel}
            name={`${sectionId}-name-${idx}`}
            value={item.name}
            onChange={e => handleItemChange(idx, 'name', e.target.value)}
            placeholder={namePlaceholder}
          />
          {!singleField && (
            <div className="input-field">
              <label htmlFor={`${sectionId}-desc-${idx}`}>{descLabel}</label>
              {type === 'textarea' ? (
                <textarea
                  id={`${sectionId}-desc-${idx}`}
                  name={`${sectionId}-desc-${idx}`}
                  value={item.description}
                  onChange={e => handleItemChange(idx, 'description', e.target.value)}
                  placeholder={descPlaceholder}
                  rows={3}
                />
              ) : (
                <input
                  type="text"
                  id={`${sectionId}-desc-${idx}`}
                  name={`${sectionId}-desc-${idx}`}
                  value={item.description}
                  onChange={e => handleItemChange(idx, 'description', e.target.value)}
                  placeholder={descPlaceholder}
                />
              )}
            </div>
          )}
          <button
            type="button"
            onClick={() => handleRemoveItem(idx)}
            className="remove-button"
            aria-label={`Remove ${item.name || `${nameLabel} ${idx + 1}`} from ${title.toLowerCase()}`}
          >
            ×
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddItem}
        className="add-button"
        aria-label={`Add new ${title.toLowerCase().slice(0, -1)} item`}
      >
        + Add {title.slice(0, -1)}
      </button>
    </FieldGroup>
  );
};

export default DynamicListSection;