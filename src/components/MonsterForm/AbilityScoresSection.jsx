import React from 'react';
import InputField from '../InputField/InputField';
import FieldGroup from '../FieldGroup/FieldGroup';

const AbilityScoresSection = ({ data, onChange }) => (
  <FieldGroup title="Ability Scores" defaultExpanded={true}>
    <InputField
      label="STR"
      name="str"
      type="number"
      value={data.str}
      onChange={onChange}
      placeholder="e.g. 10"
    />
    <InputField
      label="DEX"
      name="dex"
      type="number"
      value={data.dex}
      onChange={onChange}
      placeholder="e.g. 14"
    />
    <InputField
      label="CON"
      name="con"
      type="number"
      value={data.con}
      onChange={onChange}
      placeholder="e.g. 12"
    />
    <InputField
      label="INT"
      name="int"
      type="number"
      value={data.int}
      onChange={onChange}
      placeholder="e.g. 8"
    />
    <InputField
      label="WIS"
      name="wis"
      type="number"
      value={data.wis}
      onChange={onChange}
      placeholder="e.g. 11"
    />
    <InputField
      label="CHA"
      name="cha"
      type="number"
      value={data.cha}
      onChange={onChange}
      placeholder="e.g. 9"
    />
  </FieldGroup>
);

export default AbilityScoresSection;