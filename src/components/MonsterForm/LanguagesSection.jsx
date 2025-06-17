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
    append("");
  };

  return (
    <FieldGroup title="Languages" defaultExpanded={false}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputField
            label="Language"
            name={`languages.${index}`}
            {...control.register(`languages.${index}`)}
            placeholder="e.g. Common"
          />
          <button type="button" onClick={() => remove(index)}>
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