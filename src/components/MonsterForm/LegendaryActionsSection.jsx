import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';

const LegendaryActionsSection = ({ legendaryActions, onLegendaryActionsChange }) => (
  <DynamicListSection
    title="Legendary Actions"
    items={legendaryActions}
    onItemsChange={onLegendaryActionsChange}
    nameLabel="Legendary Action"
    namePlaceholder="e.g. Tail Attack"
    descLabel="Description"
    descPlaceholder="e.g. The monster makes a tail attack."
    defaultExpanded={false}
  />
);

export default LegendaryActionsSection;