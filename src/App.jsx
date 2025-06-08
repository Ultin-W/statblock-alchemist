import React, { useState } from 'react';
import MonsterForm from './components/MonsterForm/MonsterForm';
import StatBlock from './components/StatBlock/StatBlock';
import './App.scss';

function App() {
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
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
    savingThrows: '',
    skills: '',
    damageVulnerabilities: '',
    damageResistances: '',
    damageImmunities: '',
    conditionImmunities: '',
    senses: '',
    languages: '',
    challengeRating: '',
    xp: '',
    traits: [],
    actions: [],
    reactions: [],
    legendaryActions: [],
    lairActions: [],
    regionalEffects: [],
  });

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  return (
    <div className="App">
      <header>
        <h1>StatBlock Alchemist</h1>
      </header>

      <main className="app-main">
        <div className="form-section">
          <MonsterForm formData={formData} onFormDataChange={handleFormDataChange} />
        </div>
        <div className="statblock-section">
          <StatBlock monsterData={formData} />
        </div>
      </main>
    </div>
  );
}

export default App;
