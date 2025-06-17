import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const LanguagesSection = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages"
  });

  const addLanguage = () => {
    append({ value: '' });
  };

  const removeLanguage = (index) => {
    remove(index);
  };

  return (
    <FieldGroup title="Languages" defaultExpanded={false}>
      {fields.length === 0 && (
        <p>No languages added yet. Click "Add Language" to add one.</p>
      )}
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label={`Language ${index + 1}`}
            name={`languages.${index}.value`}
            {...control.register(`languages.${index}.value`)}
            placeholder="e.g. Common"
          />
          <button type="button" onClick={() => removeLanguage(index)}>
            Remove Language
          </button>
        </div>
      ))}

      <button type="button" onClick={addLanguage}>
        Add Language
      </button>
    </FieldGroup>
  );
};

export default LanguagesSection;