import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const ChallengeSection = ({ data, onChange }) => (
  <FieldGroup title="Challenge" defaultExpanded={false}>
    <InputField
      label="Challenge Rating"
      name="challengeRating"
      value={data.challengeRating}
      onChange={onChange}
      placeholder="e.g. 1/2"
    />
    <InputField
      label="XP"
      name="xp"
      type="number"
      value={data.xp}
      onChange={onChange}
      placeholder="e.g. 100"
    />
  </FieldGroup>
);

export default ChallengeSection;