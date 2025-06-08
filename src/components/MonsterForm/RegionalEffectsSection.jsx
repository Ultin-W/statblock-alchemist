import React from 'react';
import DynamicListSection from '../DynamicListSection/DynamicListSection';

const RegionalEffectsSection = ({ regionalEffects, onRegionalEffectsChange }) => (
  <DynamicListSection
    title="Regional Effects"
    items={regionalEffects}
    onItemsChange={onRegionalEffectsChange}
    nameLabel="Regional Effect"
    namePlaceholder="e.g. Magical Fog"
    descLabel="Description"
    descPlaceholder="e.g. A magical fog lightly obscures the land within 6 miles of the lair."
    defaultExpanded={false}
  />
);

export default RegionalEffectsSection;