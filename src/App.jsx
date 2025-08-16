import React, { useState, useCallback } from 'react';
import MonsterForm from './components/MonsterForm/MonsterForm';
import StatBlock from './components/StatBlock/StatBlock';
import ExportModal from './components/ExportModal/ExportModal';
import { VTTExporter } from './services/vttExporter';
import { CustomMarkdownExporter } from './services/customMarkdownExporter';
import './App.scss';

function App() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportData, setExportData] = useState({});

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

    // Resistances & Immunities (object arrays for consistency)
    resistances: {
      vulnerabilities: [],
      resistances: [],
      immunities: [],
      conditionImmunities: []
    },

    // Senses & Languages (object arrays for React Hook Form compatibility)
    senses: [],
    languages: [],

    // Challenge Rating
    challengeRating: '',
    xp: '',

    // Features (object arrays with name and description)
    traits: [],
    actions: [],
    reactions: [],
    legendaryActions: [],
    lairActions: [],
    regionalEffects: []
  });

  const handleFormDataChange = useCallback((newData) => {
    setFormData(newData);
  }, []);

  const handleExport = useCallback(() => {
    const vttText = VTTExporter.exportToVTT(formData);
    const customMarkdownText = CustomMarkdownExporter.exportToCustomMarkdown(formData);
    
    setExportData({
      vtt: vttText,
      customMarkdown: customMarkdownText
    });
    setIsExportModalOpen(true);
  }, [formData]);

  const handleCloseExportModal = useCallback(() => {
    setIsExportModalOpen(false);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>StatBlock Alchemist</h1>
        <button className="export-button" onClick={handleExport}>
          Export to VTT
        </button>
      </header>

      <main className="app-main">
        <div className="form-section">
          <MonsterForm formData={formData} onFormDataChange={handleFormDataChange} />
        </div>
        <div className="statblock-section">
          <StatBlock monsterData={formData} />
        </div>
      </main>

              <ExportModal
          isOpen={isExportModalOpen}
          onClose={handleCloseExportModal}
          exportData={exportData}
        />
    </div>
  );
}

export default App;
