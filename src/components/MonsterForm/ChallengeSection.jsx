import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ChallengeSection = ({ register, setValue }) => {
  return (
    <FieldGroup title="Challenge" defaultExpanded={false}>
      <InputField
        label="Challenge Rating"
        {...register("challengeRating")}
        setValue={setValue}
        placeholder="e.g. 1/2"
      />
      <InputField
        label="XP"
        type="number"
        {...register("xp")}
        setValue={setValue}
        placeholder="e.g. 100"
      />
    </FieldGroup>
  );
};

export default ChallengeSection;