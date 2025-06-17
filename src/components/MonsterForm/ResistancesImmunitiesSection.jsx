import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';
import FieldGroup from '../FieldGroup/FieldGroup';

const ResistancesImmunitiesSection = ({ resistances, onResistancesChange }) => {
  const handleArrayChange = (field, newItems) => {
    onResistancesChange({
      ...resistances,
      [field]: newItems.map(item => item.name)
    });
  };

  // Convert arrays to the format expected by DynamicListSection
  const convertToItems = (arr) => {
    return arr.map(item => ({ name: item, description: '' }));
  };

  return (
    <FieldGroup title="Vulnerabilities, Resistances & Immunities" defaultExpanded={false}>
      <DynamicListSection
        title="Damage Vulnerabilities"
        items={convertToItems(resistances.vulnerabilities)}
        onItemsChange={(items) => handleArrayChange('vulnerabilities', items)}
        nameLabel="Vulnerability"
        namePlaceholder="e.g. radiant"
        singleField={true}
        defaultExpanded={true}
      />
      <DynamicListSection
        title="Damage Resistances"
        items={convertToItems(resistances.resistances)}
        onItemsChange={(items) => handleArrayChange('resistances', items)}
        nameLabel="Resistance"
        namePlaceholder="e.g. cold"
        singleField={true}
        defaultExpanded={true}
      />
      <DynamicListSection
        title="Damage Immunities"
        items={convertToItems(resistances.immunities)}
        onItemsChange={(items) => handleArrayChange('immunities', items)}
        nameLabel="Immunity"
        namePlaceholder="e.g. poison"
        singleField={true}
        defaultExpanded={true}
      />
      <DynamicListSection
        title="Condition Immunities"
        items={convertToItems(resistances.conditionImmunities)}
        onItemsChange={(items) => handleArrayChange('conditionImmunities', items)}
        nameLabel="Condition Immunity"
        namePlaceholder="e.g. charmed"
        singleField={true}
        defaultExpanded={true}
      />
    </FieldGroup>
  );
};

export default ResistancesImmunitiesSection;