import React, { useState } from 'react';
import MonsterForm from './components/MonsterForm/MonsterForm';
import StatBlock from './components/StatBlock/StatBlock';
import './App.scss';

function App() {
  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    tag: '',
    creatureType: '',
    size: '',
    alignment: '',

    // Armor & Hit Points
    ac: '',
    armorType: '',
    hp: '',
    hitDice: '',

    // Speed (restructured as an object)
    speed: {
      walk: '',
      fly: '',
      swim: '',
      climb: '',
      burrow: ''
    },

    // Ability Scores
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,

    // Saving Throws & Skills (restructured as arrays of objects)
    savingThrows: [],
    skills: [],

    // Damage Types (restructured as arrays)
    damageVulnerabilities: [],
    damageResistances: [],
    damageImmunities: [],
    conditionImmunities: [],

    // Senses & Languages
    senses: [],
    languages: [],

    // Challenge Rating
    challengeRating: '',
    xp: '',

    // Dynamic Lists
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
