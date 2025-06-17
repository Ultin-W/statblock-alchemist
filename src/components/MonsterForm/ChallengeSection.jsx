import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ChallengeSection = ({ register }) => {
  return (
    <FieldGroup title="Challenge" defaultExpanded={false}>
      <InputField
        label="Challenge Rating"
        name="challengeRating"
        {...register("challengeRating")}
        placeholder="e.g. 1/2"
      />
      <InputField
        label="XP"
        name="xp"
        type="number"
        {...register("xp")}
        placeholder="e.g. 100"
      />
    </FieldGroup>
  );
};

export default ChallengeSection;