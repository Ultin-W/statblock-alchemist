import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';

const TraitsSection = ({ traits, onTraitsChange }) => (
  <DynamicListSection
    title="Special Traits / Abilities"
    items={traits}
    onItemsChange={onTraitsChange}
    nameLabel="Trait"
    namePlaceholder="e.g. Keen Smell"
    descLabel="Description"
    descPlaceholder="e.g. The monster has advantage on Wisdom (Perception) checks that rely on smell."
    defaultExpanded={false}
  />
);

export default TraitsSection;