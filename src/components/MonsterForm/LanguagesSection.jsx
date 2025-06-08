import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';

const LanguagesSection = ({ data, onChange }) => {
  const handleArrayChange = (newItems) => {
    onChange({
      target: {
        name: 'languages',
        value: newItems.map(item => item.name)
      }
    });
  };

  // Convert array to the format expected by DynamicListSection
  const convertToItems = (arr) => {
    return arr.map(item => ({ name: item, description: '' }));
  };

  return (
    <DynamicListSection
      title="Languages"
      items={convertToItems(data.languages)}
      onItemsChange={handleArrayChange}
      nameLabel="Language"
      namePlaceholder="e.g. Common"
      singleField={true}
      defaultExpanded={false}
    />
  );
};

export default LanguagesSection;