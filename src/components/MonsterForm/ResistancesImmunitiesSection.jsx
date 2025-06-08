import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ResistancesImmunitiesSection = ({ data, onChange }) => {
  const handleArrayChange = (field, value) => {
    const items = value.split(',').map(item => item.trim());
    onChange({
      target: {
        name: field,
        value: items
      }
    });
  };

  const formatArray = (arr) => {
    return arr.join(', ');
  };

  return (
    <FieldGroup title="Vulnerabilities, Resistances & Immunities" defaultExpanded={false}>
      <InputField
        label="Damage Vulnerabilities"
        name="damageVulnerabilities"
        value={formatArray(data.damageVulnerabilities)}
        onChange={(e) => handleArrayChange('damageVulnerabilities', e.target.value)}
        placeholder="e.g. radiant"
      />
      <InputField
        label="Damage Resistances"
        name="damageResistances"
        value={formatArray(data.damageResistances)}
        onChange={(e) => handleArrayChange('damageResistances', e.target.value)}
        placeholder="e.g. cold; bludgeoning, piercing, and slashing from nonmagical attacks"
      />
      <InputField
        label="Damage Immunities"
        name="damageImmunities"
        value={formatArray(data.damageImmunities)}
        onChange={(e) => handleArrayChange('damageImmunities', e.target.value)}
        placeholder="e.g. poison"
      />
      <InputField
        label="Condition Immunities"
        name="conditionImmunities"
        value={formatArray(data.conditionImmunities)}
        onChange={(e) => handleArrayChange('conditionImmunities', e.target.value)}
        placeholder="e.g. charmed, frightened, poisoned"
      />
    </FieldGroup>
  );
};

export default ResistancesImmunitiesSection;