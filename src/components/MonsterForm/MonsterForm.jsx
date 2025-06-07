import React, { useState } from 'react';
import BasicInfoSection from './BasicInfoSection';
import ArmorSection from './ArmorSection';

const MonsterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    tag: '',
    type: '',
    size: '',
    alignment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="monster-form">
      <BasicInfoSection data={formData} onChange={handleChange} />
      <ArmorSection data={formData} onChange={handleChange} />
    </form>
  );
};

export default MonsterForm;
