import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';
import FieldGroup from '../FieldGroup/FieldGroup';

const ResistancesImmunitiesSection = ({ data, onChange }) => {
  const handleArrayChange = (field, newItems) => {
    onChange({
      target: {
        name: field,
        value: newItems.map(item => item.name)
      }
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
        items={convertToItems(data.damageVulnerabilities)}
        onItemsChange={(items) => handleArrayChange('damageVulnerabilities', items)}
        nameLabel="Vulnerability"
        namePlaceholder="e.g. radiant"
        singleField={true}
        defaultExpanded={true}
      />
      <DynamicListSection
        title="Damage Resistances"
        items={convertToItems(data.damageResistances)}
        onItemsChange={(items) => handleArrayChange('damageResistances', items)}
        nameLabel="Resistance"
        namePlaceholder="e.g. cold"
        singleField={true}
        defaultExpanded={true}
      />
      <DynamicListSection
        title="Damage Immunities"
        items={convertToItems(data.damageImmunities)}
        onItemsChange={(items) => handleArrayChange('damageImmunities', items)}
        nameLabel="Immunity"
        namePlaceholder="e.g. poison"
        singleField={true}
        defaultExpanded={true}
      />
      <DynamicListSection
        title="Condition Immunities"
        items={convertToItems(data.conditionImmunities)}
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