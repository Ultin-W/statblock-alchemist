import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';
import FieldGroup from '../FieldGroup/FieldGroup';

const SavingThrowsSkillsSection = ({ data, onChange }) => {
  const handleSavingThrowsChange = (newSavingThrows) => {
    onChange({
      target: {
        name: 'savingThrows',
        value: newSavingThrows
      }
    });
  };

  const handleSkillsChange = (newSkills) => {
    onChange({
      target: {
        name: 'skills',
        value: newSkills
      }
    });
  };

  return (
    <FieldGroup title="Saving Throws & Skills" defaultExpanded={false}>
      <DynamicListSection
        title="Saving Throws"
        items={data.savingThrows}
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
        items={data.skills}
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