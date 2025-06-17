import React from 'react';
import DynamicFieldArray from '../DynamicListSection/DynamicFieldArray';
import FieldGroup from '../FieldGroup/FieldGroup';

const SavingThrowsSkillsSection = ({ control }) => {
  const savingThrowsFieldDefinitions = [
    {
      name: 'value',
      label: 'Saving Throw',
      placeholder: 'e.g. Dex +6'
    }
  ];

  const skillsFieldDefinitions = [
    {
      name: 'value',
      label: 'Skill',
      placeholder: 'e.g. Perception +4'
    }
  ];

  return (
    <FieldGroup title="Saving Throws & Skills" defaultExpanded={false}>
      <div>
        <h4>Saving Throws</h4>
        <DynamicFieldArray
          control={control}
          name="proficiencies.savingThrows"
          fieldDefinitions={savingThrowsFieldDefinitions}
          addButtonLabel="Add Saving Throw"
          removeButtonLabel="Remove Saving Throw"
        />
      </div>

      <div>
        <h4>Skills</h4>
        <DynamicFieldArray
          control={control}
          name="proficiencies.skills"
          fieldDefinitions={skillsFieldDefinitions}
          addButtonLabel="Add Skill"
          removeButtonLabel="Remove Skill"
        />
      </div>
    </FieldGroup>
  );
};

export default SavingThrowsSkillsSection;