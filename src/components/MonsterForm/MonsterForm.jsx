import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
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
  const { register, control, watch, setValue, getValues } = useForm({
    defaultValues: formData,
    mode: 'onChange'
  });

  // Watch all form data and sync with parent when it changes
  const watchedFormData = watch();

  // Sync form data with parent component
  React.useEffect(() => {
    // Use a ref to prevent infinite loops by comparing stringified data
    const currentData = JSON.stringify(watchedFormData);
    const parentData = JSON.stringify(formData);

    if (currentData !== parentData) {
      onFormDataChange(watchedFormData);
    }
  }, [watchedFormData]);

  // Update form when parent data changes (e.g., from external sources)
  React.useEffect(() => {
    const currentFormData = getValues();
    const formDataString = JSON.stringify(currentFormData);
    const parentDataString = JSON.stringify(formData);

    if (formDataString !== parentDataString) {
      // Reset form with new data
      Object.keys(formData).forEach(key => {
        setValue(key, formData[key]);
      });
    }
  }, [formData, setValue, getValues]);

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
