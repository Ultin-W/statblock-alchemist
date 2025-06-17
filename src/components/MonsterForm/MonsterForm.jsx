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
  // Handler for updating basic info
  const handleBasicInfoChange = (newBasicInfo) => {
    onFormDataChange({ ...formData, basicInfo: newBasicInfo });
  };

  // Handler for updating armor
  const handleArmorChange = (newArmor) => {
    onFormDataChange({ ...formData, ...newArmor });
  };

  // Handler for updating hit points
  const handleHitPointsChange = (newHitPoints) => {
    onFormDataChange({ ...formData, ...newHitPoints });
  };

  // Handler for updating speed
  const handleSpeedChange = (newSpeed) => {
    onFormDataChange({ ...formData, speed: newSpeed });
  };

  // Handler for updating ability scores
  const handleAbilityScoresChange = (newAbilityScores) => {
    onFormDataChange({ ...formData, abilityScores: newAbilityScores });
  };

  // Handler for updating proficiencies
  const handleProficienciesChange = (newProficiencies) => {
    onFormDataChange({ ...formData, proficiencies: newProficiencies });
  };

  // Handler for updating resistances
  const handleResistancesChange = (newResistances) => {
    onFormDataChange({ ...formData, resistances: newResistances });
  };

  // Handler for updating senses
  const handleSensesChange = (newSenses) => {
    onFormDataChange({ ...formData, senses: newSenses });
  };

  // Handler for updating languages
  const handleLanguagesChange = (newLanguages) => {
    onFormDataChange({ ...formData, languages: newLanguages });
  };

  // Handler for updating challenge
  const handleChallengeChange = (newChallenge) => {
    onFormDataChange({ ...formData, ...newChallenge });
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
      <BasicInfoSection basicInfo={formData.basicInfo} onBasicInfoChange={handleBasicInfoChange} />
      <ArmorSection ac={formData.ac} armorType={formData.armorType} onArmorChange={handleArmorChange} />
      <HitPointsSection hp={formData.hp} hitDice={formData.hitDice} onHitPointsChange={handleHitPointsChange} />
      <SpeedSection speed={formData.speed} onSpeedChange={handleSpeedChange} />
      <AbilityScoresSection abilityScores={formData.abilityScores} onAbilityScoresChange={handleAbilityScoresChange} />
      <SavingThrowsSkillsSection proficiencies={formData.proficiencies} onProficienciesChange={handleProficienciesChange} />
      <ResistancesImmunitiesSection resistances={formData.resistances} onResistancesChange={handleResistancesChange} />
      <SensesSection senses={formData.senses} onSensesChange={handleSensesChange} />
      <LanguagesSection languages={formData.languages} onLanguagesChange={handleLanguagesChange} />
      <ChallengeSection challengeRating={formData.challengeRating} xp={formData.xp} onChallengeChange={handleChallengeChange} />
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
