import React, { useState } from 'react';
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

const MonsterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    tag: '',
    creatureType: '',
    size: '',
    alignment: '',
    ac: '',
    armorType: '',
    hp: '',
    hitDice: '',
    walkSpeed: '',
    flySpeed: '',
    swimSpeed: '',
    climbSpeed: '',
    burrowSpeed: '',
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
    savingThrows: '',
    skills: '',
    damageVulnerabilities: '',
    damageResistances: '',
    damageImmunities: '',
    conditionImmunities: '',
    senses: '',
    languages: '',
    challengeRating: '',
    xp: '',
    traits: [],
    actions: [],
    reactions: [],
    legendaryActions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler for updating traits array
  const handleTraitsChange = (newTraits) => {
    setFormData(prev => ({ ...prev, traits: newTraits }));
  };

  // Handler for updating actions array
  const handleActionsChange = (newActions) => {
    setFormData(prev => ({ ...prev, actions: newActions }));
  };

  // Handler for updating reactions array
  const handleReactionsChange = (newReactions) => {
    setFormData(prev => ({ ...prev, reactions: newReactions }));
  };

  // Handler for updating legendary actions array
  const handleLegendaryActionsChange = (newLegendaryActions) => {
    setFormData(prev => ({ ...prev, legendaryActions: newLegendaryActions }));
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
    </form>
  );
};

export default MonsterForm;
