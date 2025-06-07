import React from 'react';
import DynamicListSection from './DynamicListSection';

const ReactionsSection = ({ reactions, onReactionsChange }) => (
  <DynamicListSection
    title="Reactions"
    items={reactions}
    onItemsChange={onReactionsChange}
    nameLabel="Reaction"
    namePlaceholder="e.g. Parry"
    descLabel="Description"
    descPlaceholder="e.g. The monster adds 2 to its AC against one melee attack that would hit it."
    defaultExpanded={false}
  />
);

export default ReactionsSection;