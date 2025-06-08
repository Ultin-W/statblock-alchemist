import React, { useState } from 'react';
import MonsterForm from './components/MonsterForm/MonsterForm';
import StatBlock from './components/StatBlock/StatBlock';
import './App.scss';

function App() {
  const [formData, setFormData] = useState({
    // Basic Information
    basicInfo: {
      name: '',
      tag: '',
      creatureType: '',
      size: '',
      alignment: ''
    },

    // Armor & Hit Points
    ac: '',
    armorType: '',
    hp: '',
    hitDice: '',

    // Speed
    speed: {
      walk: '',
      fly: '',
      swim: '',
      climb: '',
      burrow: ''
    },

    // Ability Scores
    abilityScores: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    },

    // Proficiencies
    proficiencies: {
      savingThrows: [],
      skills: []
    },

    // Resistances & Immunities
    resistances: {
      vulnerabilities: [],
      resistances: [],
      immunities: [],
      conditionImmunities: []
    },

    // Senses & Languages
    senses: [],
    languages: [],

    // Challenge Rating
    challengeRating: '',
    xp: '',

    // Features
    traits: [],
    actions: [],
    reactions: [],
    legendaryActions: [],
    lairActions: [],
    regionalEffects: []
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
        {/* <div className="statblock-section">
          <StatBlock monsterData={formData} />
        </div> */}
      </main>
    </div>
  );
}

export default App;
