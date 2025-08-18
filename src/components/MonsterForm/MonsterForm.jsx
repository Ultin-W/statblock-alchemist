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
  const { register, control, watch, setValue, formState: { errors } } = useForm({
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

  // Prevent form submission which causes focus issues
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="monster-form" onSubmit={handleSubmit}>
      <BasicInfoSection register={register} setValue={setValue} errors={errors} />
      <ArmorSection register={register} setValue={setValue} errors={errors} />
      <HitPointsSection register={register} setValue={setValue} errors={errors} />
      <SpeedSection register={register} setValue={setValue} errors={errors} />
      <AbilityScoresSection register={register} setValue={setValue} errors={errors} />
      <SavingThrowsSkillsSection control={control} setValue={setValue} errors={errors} />
      <ResistancesImmunitiesSection control={control} setValue={setValue} errors={errors} />
      <SensesSection control={control} setValue={setValue} errors={errors} />
      <LanguagesSection control={control} setValue={setValue} errors={errors} />
      <ChallengeSection register={register} setValue={setValue} errors={errors} />
      <TraitsSection control={control} setValue={setValue} errors={errors} />
      <ActionsSection control={control} setValue={setValue} errors={errors} />
      <ReactionsSection control={control} setValue={setValue} errors={errors} />
      <LegendaryActionsSection control={control} setValue={setValue} errors={errors} />
      <LairActionsSection control={control} setValue={setValue} errors={errors} />
      <RegionalEffectsSection control={control} setValue={setValue} errors={errors} />
    </form>
  );
};

export default MonsterForm;
