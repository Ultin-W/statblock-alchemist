import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ResistancesImmunitiesSection = ({ data, onChange }) => (
  <FieldGroup title="Vulnerabilities, Resistances & Immunities" defaultExpanded={true}>
    <InputField
      label="Damage Vulnerabilities"
      name="damageVulnerabilities"
      value={data.damageVulnerabilities}
      onChange={onChange}
      placeholder="e.g. radiant"
    />
    <InputField
      label="Damage Resistances"
      name="damageResistances"
      value={data.damageResistances}
      onChange={onChange}
      placeholder="e.g. cold; bludgeoning, piercing, and slashing from nonmagical attacks"
    />
    <InputField
      label="Damage Immunities"
      name="damageImmunities"
      value={data.damageImmunities}
      onChange={onChange}
      placeholder="e.g. poison"
    />
    <InputField
      label="Condition Immunities"
      name="conditionImmunities"
      value={data.conditionImmunities}
      onChange={onChange}
      placeholder="e.g. charmed, frightened, poisoned"
    />
  </FieldGroup>
);

export default ResistancesImmunitiesSection;