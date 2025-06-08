import React from 'react';
import BasicInfoSection from './BasicInfoSection';
import ArmorSection from './ArmorSection';
import HitPointsSection from './HitPointsSection';
import SpeedSection from './SpeedSection';
import AbilityScoresSection from './AbilityScoresSection';
import SavingThrowsSkillsSection from './SavingThrowsSkillsSection';
import ResistancesImmunitiesSection from './ResistancesImmunitiesSection';
import SensesSection from './SensesSection';
import LanguagesSection from './LanguagesSection';
import ChallengeSection from './ChallengeSection';
import TraitsSection from './TraitsSection';
import ActionsSection from './ActionsSection';
import ReactionsSection from './ReactionsSection';
import LegendaryActionsSection from './LegendaryActionsSection';
import LairActionsSection from './LairActionsSection';
import RegionalEffectsSection from './RegionalEffectsSection';
import './MonsterForm.scss';

const MonsterForm = ({ formData, onFormDataChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ ...formData, [name]: value });
  };

  // Handler for updating traits array
  const handleTraitsChange = (newTraits) => {
    onFormDataChange({ ...formData, traits: newTraits });
  };

  // Handler for updating actions array
  const handleActionsChange = (newActions) => {
    onFormDataChange({ ...formData, actions: newActions });
  };

  // Handler for updating reactions array
  const handleReactionsChange = (newReactions) => {
    onFormDataChange({ ...formData, reactions: newReactions });
  };

  // Handler for updating legendary actions array
  const handleLegendaryActionsChange = (newLegendaryActions) => {
    onFormDataChange({ ...formData, legendaryActions: newLegendaryActions });
  };

  // Handler for updating lair actions array
  const handleLairActionsChange = (newLairActions) => {
    onFormDataChange({ ...formData, lairActions: newLairActions });
  };

  // Handler for updating regional effects array
  const handleRegionalEffectsChange = (newRegionalEffects) => {
    onFormDataChange({ ...formData, regionalEffects: newRegionalEffects });
  };

  return (
    <form className="monster-form">
      <BasicInfoSection data={formData} onChange={handleChange} />
      <ArmorSection data={formData} onChange={handleChange} />
      <HitPointsSection data={formData} onChange={handleChange} />
      <SpeedSection data={formData} onChange={handleChange} />
      <AbilityScoresSection data={formData} onChange={handleChange} />
      <SavingThrowsSkillsSection data={formData} onChange={handleChange} />
      <ResistancesImmunitiesSection data={formData} onChange={handleChange} />
      <SensesSection data={formData} onChange={handleChange} />
      <LanguagesSection data={formData} onChange={handleChange} />
      <ChallengeSection data={formData} onChange={handleChange} />
      <TraitsSection traits={formData.traits} onTraitsChange={handleTraitsChange} />
      <ActionsSection actions={formData.actions} onActionsChange={handleActionsChange} />
      <ReactionsSection reactions={formData.reactions} onReactionsChange={handleReactionsChange} />
      <LegendaryActionsSection legendaryActions={formData.legendaryActions} onLegendaryActionsChange={handleLegendaryActionsChange} />
      <LairActionsSection lairActions={formData.lairActions} onLairActionsChange={handleLairActionsChange} />
      <RegionalEffectsSection regionalEffects={formData.regionalEffects} onRegionalEffectsChange={handleRegionalEffectsChange} />
    </form>
  );
};

export default MonsterForm;
