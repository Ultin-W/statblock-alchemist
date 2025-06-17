import React from 'react';
import { useForm } from 'react-hook-form';
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
  // Use React Hook Form as the single source of truth
  const { register, control, watch } = useForm({
    defaultValues: formData,
    mode: 'onChange'
  });

  // Watch all form data
  const watchedFormData = watch();

  // Debounced sync to prevent infinite loops
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFormDataChange(watchedFormData);
    }, 300); // Debounce to 300ms

    return () => clearTimeout(timeoutId);
  }, [watchedFormData, onFormDataChange]);

  return (
    <form className="monster-form">
      <BasicInfoSection register={register} />
      <ArmorSection register={register} />
      <HitPointsSection register={register} />
      <SpeedSection register={register} />
      <AbilityScoresSection register={register} />
      <SavingThrowsSkillsSection control={control} />
      <ResistancesImmunitiesSection control={control} />
      <SensesSection control={control} />
      <LanguagesSection control={control} />
      <ChallengeSection register={register} />
      <TraitsSection control={control} />
      <ActionsSection control={control} />
      <ReactionsSection control={control} />
      <LegendaryActionsSection control={control} />
      <LairActionsSection control={control} />
      <RegionalEffectsSection control={control} />
    </form>
  );
};

export default MonsterForm;
