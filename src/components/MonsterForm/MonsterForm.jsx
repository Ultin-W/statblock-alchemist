import React, { useState } from 'react';
import BasicInfoSection from './BasicInfoSection';
import ArmorSection from './ArmorSection';
import HitPointsSection from './HitPointsSection';
import SpeedSection from './SpeedSection';

const MonsterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    tag: '',
    creatureType: '',
    size: '',
    alignment: '',
    ac: '',
    armorType: '',
    hp: '',
    hitDice: '',
    walkSpeed: '',
    flySpeed: '',
    swimSpeed: '',
    climbSpeed: '',
    burrowSpeed: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="monster-form">
      <BasicInfoSection data={formData} onChange={handleChange} />
      <ArmorSection data={formData} onChange={handleChange} />
      <HitPointsSection data={formData} onChange={handleChange} />
      <SpeedSection data={formData} onChange={handleChange} />
    </form>
  );
};

export default MonsterForm;
