import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';

const LairActionsSection = ({ lairActions, onLairActionsChange }) => (
  <DynamicListSection
    title="Lair Actions"
    items={lairActions}
    onItemsChange={onLairActionsChange}
    nameLabel="Lair Action"
    namePlaceholder="e.g. Quake"
    descLabel="Description"
    descPlaceholder="e.g. The lair shakes violently, causing all creatures to make a DC 15 Dexterity saving throw or fall prone."
    defaultExpanded={false}
  />
);

export default LairActionsSection;