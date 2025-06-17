import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ChallengeSection = ({ challengeRating, xp, onChallengeChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChallengeChange({
      [name]: value
    });
  };

  return (
    <FieldGroup title="Challenge" defaultExpanded={false}>
      <InputField
        label="Challenge Rating"
        name="challengeRating"
        value={challengeRating}
        onChange={handleChange}
        placeholder="e.g. 1/2"
      />
      <InputField
        label="XP"
        name="xp"
        type="number"
        value={xp}
        onChange={handleChange}
        placeholder="e.g. 100"
      />
    </FieldGroup>
  );
};

export default ChallengeSection;