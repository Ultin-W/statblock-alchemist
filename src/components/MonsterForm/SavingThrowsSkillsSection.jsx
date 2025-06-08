import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';
import FieldGroup from '../FieldGroup/FieldGroup';

const SavingThrowsSkillsSection = ({ data, onChange }) => {
  const handleSavingThrowsChange = (newSavingThrows) => {
    onChange({
      target: {
        name: 'proficiencies',
        value: {
          ...data.proficiencies,
          savingThrows: newSavingThrows
        }
      }
    });
  };

  const handleSkillsChange = (newSkills) => {
    onChange({
      target: {
        name: 'proficiencies',
        value: {
          ...data.proficiencies,
          skills: newSkills
        }
      }
    });
  };

  return (
    <FieldGroup title="Saving Throws & Skills" defaultExpanded={false}>
      <DynamicListSection
        title="Saving Throws"
        items={data.proficiencies.savingThrows}
        onItemsChange={handleSavingThrowsChange}
        nameLabel="Ability"
        namePlaceholder="e.g. STR"
        descLabel="Bonus"
        descPlaceholder="e.g. +3"
        defaultExpanded={true}
        type="input"
      />
      <DynamicListSection
        title="Skills"
        items={data.proficiencies.skills}
        onItemsChange={handleSkillsChange}
        nameLabel="Skill"
        namePlaceholder="e.g. Perception"
        descLabel="Bonus"
        descPlaceholder="e.g. +4"
        defaultExpanded={true}
        type="input"
      />
    </FieldGroup>
  );
};

export default SavingThrowsSkillsSection;