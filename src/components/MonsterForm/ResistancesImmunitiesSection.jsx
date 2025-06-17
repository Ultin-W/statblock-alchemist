import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ResistancesImmunitiesSection = ({ control }) => {
  const { fields: vulnFields, append: appendVuln, remove: removeVuln } = useFieldArray({
    control,
    name: "resistances.vulnerabilities"
  });

  const { fields: resistFields, append: appendResist, remove: removeResist } = useFieldArray({
    control,
    name: "resistances.resistances"
  });

  const { fields: immuneFields, append: appendImmune, remove: removeImmune } = useFieldArray({
    control,
    name: "resistances.immunities"
  });

  const { fields: conditionFields, append: appendCondition, remove: removeCondition } = useFieldArray({
    control,
    name: "resistances.conditionImmunities"
  });

  return (
    <FieldGroup title="Vulnerabilities, Resistances & Immunities" defaultExpanded={false}>
      <div>
        <h4>Damage Vulnerabilities</h4>
        {vulnFields.map((field, index) => (
          <div key={field.id}>
            <InputField
              label="Vulnerability"
              name={`resistances.vulnerabilities.${index}.value`}
              {...control.register(`resistances.vulnerabilities.${index}.value`)}
              placeholder="e.g. radiant"
            />
            <button type="button" onClick={() => removeVuln(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendVuln({ value: '' })}>
          Add Vulnerability
        </button>
      </div>

      <div>
        <h4>Damage Resistances</h4>
        {resistFields.map((field, index) => (
          <div key={field.id}>
            <InputField
              label="Resistance"
              name={`resistances.resistances.${index}.value`}
              {...control.register(`resistances.resistances.${index}.value`)}
              placeholder="e.g. cold"
            />
            <button type="button" onClick={() => removeResist(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendResist({ value: '' })}>
          Add Resistance
        </button>
      </div>

      <div>
        <h4>Damage Immunities</h4>
        {immuneFields.map((field, index) => (
          <div key={field.id}>
            <InputField
              label="Immunity"
              name={`resistances.immunities.${index}.value`}
              {...control.register(`resistances.immunities.${index}.value`)}
              placeholder="e.g. poison"
            />
            <button type="button" onClick={() => removeImmune(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendImmune({ value: '' })}>
          Add Immunity
        </button>
      </div>

      <div>
        <h4>Condition Immunities</h4>
        {conditionFields.map((field, index) => (
          <div key={field.id}>
            <InputField
              label="Condition Immunity"
              name={`resistances.conditionImmunities.${index}.value`}
              {...control.register(`resistances.conditionImmunities.${index}.value`)}
              placeholder="e.g. charmed"
            />
            <button type="button" onClick={() => removeCondition(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendCondition({ value: '' })}>
          Add Condition Immunity
        </button>
      </div>
    </FieldGroup>
  );
};

export default ResistancesImmunitiesSection;