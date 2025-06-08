import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';

const SensesSection = ({ data, onChange }) => {
  const handleArrayChange = (newItems) => {
    onChange({
      target: {
        name: 'senses',
        value: newItems.map(item => `${item.name} ${item.description}`.trim())
      }
    });
  };

  // Convert array to the format expected by DynamicListSection
  const convertToItems = (arr) => {
    if (!arr) return [];
    return arr.map(sense => {
      const [name, ...descParts] = sense.split(' ');
      return {
        name: name || '',
        description: descParts.join(' ') || ''
      };
    });
  };

  return (
    <DynamicListSection
      title="Senses"
      items={convertToItems(data.senses)}
      onItemsChange={handleArrayChange}
      nameLabel="Sense"
      namePlaceholder="e.g. darkvision"
      descLabel="Range/Details"
      descPlaceholder="e.g. 60 ft."
      defaultExpanded={true}
      type="input"
    />
  );
};

export default SensesSection;