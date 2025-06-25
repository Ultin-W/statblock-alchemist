import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const ResistancesImmunitiesSection = ({ control, setValue }) => {
  const vulnerabilityFieldDefinitions = [
    {
      name: 'value',
      label: 'Vulnerability',
      placeholder: 'e.g. radiant'
    }
  ];

  const resistanceFieldDefinitions = [
    {
      name: 'value',
      label: 'Resistance',
      placeholder: 'e.g. cold'
    }
  ];

  const immunityFieldDefinitions = [
    {
      name: 'value',
      label: 'Immunity',
      placeholder: 'e.g. poison'
    }
  ];

  const conditionImmunityFieldDefinitions = [
    {
      name: 'value',
      label: 'Condition Immunity',
      placeholder: 'e.g. charmed'
    }
  ];

  return (
    <FieldGroup title="Vulnerabilities, Resistances & Immunities" defaultExpanded={false}>
      <div>
        <h4>Damage Vulnerabilities</h4>
        <DynamicFieldArray
          control={control}
          setValue={setValue}
          name="resistances.vulnerabilities"
          fieldDefinitions={vulnerabilityFieldDefinitions}
          addButtonLabel="Add Vulnerability"
          removeButtonLabel="Remove"
        />
      </div>

      <div>
        <h4>Damage Resistances</h4>
        <DynamicFieldArray
          control={control}
          setValue={setValue}
          name="resistances.resistances"
          fieldDefinitions={resistanceFieldDefinitions}
          addButtonLabel="Add Resistance"
          removeButtonLabel="Remove"
        />
      </div>

      <div>
        <h4>Damage Immunities</h4>
        <DynamicFieldArray
          control={control}
          setValue={setValue}
          name="resistances.immunities"
          fieldDefinitions={immunityFieldDefinitions}
          addButtonLabel="Add Immunity"
          removeButtonLabel="Remove"
        />
      </div>

      <div>
        <h4>Condition Immunities</h4>
        <DynamicFieldArray
          control={control}
          setValue={setValue}
          name="resistances.conditionImmunities"
          fieldDefinitions={conditionImmunityFieldDefinitions}
          addButtonLabel="Add Condition Immunity"
          removeButtonLabel="Remove"
        />
      </div>
    </FieldGroup>
  );
};

export default ResistancesImmunitiesSection;