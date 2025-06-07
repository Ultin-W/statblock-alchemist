import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const TraitsSection = ({ traits, onTraitsChange }) => {
  const handleTraitChange = (index, field, value) => {
    const updatedTraits = traits.map((trait, i) =>
      i === index ? { ...trait, [field]: value } : trait
    );
    onTraitsChange(updatedTraits);
  };

  const handleAddTrait = () => {
    onTraitsChange([...traits, { name: '', description: '' }]);
  };

  const handleRemoveTrait = (index) => {
    const updatedTraits = traits.filter((_, i) => i !== index);
    onTraitsChange(updatedTraits);
  };

  return (
    <FieldGroup title="Special Traits / Abilities" defaultExpanded={false}>
      {traits.map((trait, idx) => (
        <div key={idx} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
          <InputField
            label="Trait Name"
            name={`trait-name-${idx}`}
            value={trait.name}
            onChange={e => handleTraitChange(idx, 'name', e.target.value)}
            placeholder="e.g. Keen Smell"
          />
          <div className="input-field">
            <label htmlFor={`trait-desc-${idx}`}>Description</label>
            <textarea
              id={`trait-desc-${idx}`}
              name={`trait-desc-${idx}`}
              value={trait.description}
              onChange={e => handleTraitChange(idx, 'description', e.target.value)}
              placeholder="e.g. The monster has advantage on Wisdom (Perception) checks that rely on smell."
              rows={3}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.4rem', border: '1px solid #ccc', fontSize: '1rem' }}
            />
          </div>
          <button type="button" onClick={() => handleRemoveTrait(idx)} style={{ marginTop: '0.5rem' }}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddTrait}>
        Add Trait
      </button>
    </FieldGroup>
  );
};

export default TraitsSection;