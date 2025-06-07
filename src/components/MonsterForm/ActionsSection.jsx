import React from 'react';
import DynamicListSection from './DynamicListSection';

const ActionsSection = ({ actions, onActionsChange }) => (
  <DynamicListSection
    title="Actions"
    items={actions}
    onItemsChange={onActionsChange}
    nameLabel="Action Name"
    namePlaceholder="e.g. Multiattack"
    descLabel="Description"
    descPlaceholder="e.g. The monster makes two attacks with its claws."
    defaultExpanded={false}
  />
);

export default ActionsSection;