import React from 'react';
import DynamicListSection from './DynamicListSection';

const TraitsSection = ({ traits, onTraitsChange }) => (
  <DynamicListSection
    title="Special Traits / Abilities"
    items={traits}
    onItemsChange={onTraitsChange}
    nameLabel="Trait Name"
    namePlaceholder="e.g. Keen Smell"
    descLabel="Description"
    descPlaceholder="e.g. The monster has advantage on Wisdom (Perception) checks that rely on smell."
    defaultExpanded={false}
  />
);

export default TraitsSection;