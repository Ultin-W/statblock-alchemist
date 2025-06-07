import React from 'react';
import DynamicListSection from './DynamicListSection';

const LegendaryActionsSection = ({ legendaryActions, onLegendaryActionsChange }) => (
  <DynamicListSection
    title="Legendary Actions"
    items={legendaryActions}
    onItemsChange={onLegendaryActionsChange}
    nameLabel="Legendary Action Name"
    namePlaceholder="e.g. Tail Attack"
    descLabel="Description"
    descPlaceholder="e.g. The monster makes a tail attack."
    defaultExpanded={false}
  />
);

export default LegendaryActionsSection;