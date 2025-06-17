import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const SavingThrowsSkillsSection = ({ control }) => {
  const { fields: savingThrowFields, append: appendSavingThrow, remove: removeSavingThrow } = useFieldArray({
    control,
    name: "proficiencies.savingThrows"
  });

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: "proficiencies.skills"
  });

  const addSavingThrow = () => {
    appendSavingThrow({ name: '', description: '' });
  };

  const addSkill = () => {
    appendSkill({ name: '', description: '' });
  };

  return (
    <FieldGroup title="Saving Throws & Skills" defaultExpanded={false}>
      <div>
        <h4>Saving Throws</h4>
        {savingThrowFields.map((field, index) => (
          <div key={field.id}>
            <InputField
              label="Ability"
              name={`proficiencies.savingThrows.${index}.name`}
              {...control.register(`proficiencies.savingThrows.${index}.name`)}
              placeholder="e.g. STR"
            />
            <InputField
              label="Bonus"
              name={`proficiencies.savingThrows.${index}.description`}
              {...control.register(`proficiencies.savingThrows.${index}.description`)}
              placeholder="e.g. +3"
            />
            <button type="button" onClick={() => removeSavingThrow(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addSavingThrow}>
          Add Saving Throw
        </button>
      </div>

      <div>
        <h4>Skills</h4>
        {skillFields.map((field, index) => (
          <div key={field.id}>
            <InputField
              label="Skill"
              name={`proficiencies.skills.${index}.name`}
              {...control.register(`proficiencies.skills.${index}.name`)}
              placeholder="e.g. Perception"
            />
            <InputField
              label="Bonus"
              name={`proficiencies.skills.${index}.description`}
              {...control.register(`proficiencies.skills.${index}.description`)}
              placeholder="e.g. +4"
            />
            <button type="button" onClick={() => removeSkill(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addSkill}>
          Add Skill
        </button>
      </div>
    </FieldGroup>
  );
};

export default SavingThrowsSkillsSection;