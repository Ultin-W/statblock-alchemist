import React, { useRef, useEffect } from 'react';
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
  const timeoutRef = useRef(null);
  const onFormDataChangeRef = useRef(onFormDataChange);

  // Keep the callback reference updated
  useEffect(() => {
    onFormDataChangeRef.current = onFormDataChange;
  }, [onFormDataChange]);

  // Use React Hook Form as the single source of truth
  const { register, control, watch, setValue } = useForm({
    defaultValues: formData,
    mode: 'onChange'
  });

  // Watch all form data with subscription approach
  useEffect(() => {
    const subscription = watch((data) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onFormDataChangeRef.current(data);
      }, 300);
    });

    return () => {
      subscription.unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [watch]);

  return (
    <form className="monster-form">
      <BasicInfoSection register={register} setValue={setValue} />
      <ArmorSection register={register} setValue={setValue} />
      <HitPointsSection register={register} setValue={setValue} />
      <SpeedSection register={register} setValue={setValue} />
      <AbilityScoresSection register={register} setValue={setValue} />
      <SavingThrowsSkillsSection control={control} setValue={setValue} />
      <ResistancesImmunitiesSection control={control} setValue={setValue} />
      <SensesSection control={control} setValue={setValue} />
      <LanguagesSection control={control} setValue={setValue} />
      <ChallengeSection register={register} setValue={setValue} />
      <TraitsSection control={control} setValue={setValue} />
      <ActionsSection control={control} setValue={setValue} />
      <ReactionsSection control={control} setValue={setValue} />
      <LegendaryActionsSection control={control} setValue={setValue} />
      <LairActionsSection control={control} setValue={setValue} />
      <RegionalEffectsSection control={control} setValue={setValue} />
    </form>
  );
};

export default MonsterForm;
