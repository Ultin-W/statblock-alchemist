/**
 * Monster Data Formatter Service
 *
 * Transforms raw form data into a standardized monster object
 * that can be consumed by various export formats (StatBlock, JSON, Markdown)
 */

export class MonsterDataFormatter {
  /**
   * Format form data into a standardized monster object
   * @param {Object} formData - Raw form data from the monster form
   * @returns {Object} Formatted monster data
   */
  static formatMonsterData(formData) {
    if (!formData) {
      return this.getEmptyMonster();
    }

    return {
      // Basic Information
      name: this.formatString(formData.basicInfo?.name) || 'Unnamed Creature',
      tag: this.formatString(formData.basicInfo?.tag),
      size: this.formatString(formData.basicInfo?.size) || 'Medium',
      creatureType: this.formatString(formData.basicInfo?.creatureType) || 'humanoid',
      alignment: this.formatString(formData.basicInfo?.alignment) || 'neutral',

      // Armor Class & Hit Points
      armorClass: {
        value: this.formatNumber(formData.ac),
        type: this.formatString(formData.armorType)
      },
      hitPoints: {
        value: this.formatNumber(formData.hp),
        formula: this.formatString(formData.hitDice)
      },

      // Speed
      speed: this.formatSpeed(formData.speed),

      // Ability Scores
      abilityScores: this.formatAbilityScores(formData.abilityScores),

      // Proficiencies
      proficiencies: this.formatProficiencies(formData.proficiencies),

      // Damage Relations
      damageRelations: this.formatDamageRelations(formData.resistances),

      // Senses & Languages
      senses: this.formatArrayValues(formData.senses),
      languages: this.formatArrayValues(formData.languages),

      // Challenge Rating
      challengeRating: {
        rating: this.formatString(formData.challengeRating) || '0',
        xp: this.formatNumber(formData.xp) || 0
      },

      // Features
      features: {
        traits: this.formatFeatures(formData.traits),
        actions: this.formatFeatures(formData.actions),
        reactions: this.formatFeatures(formData.reactions),
        legendaryActions: this.formatFeatures(formData.legendaryActions),
        lairActions: this.formatFeatures(formData.lairActions),
        regionalEffects: this.formatFeatures(formData.regionalEffects)
      }
    };
  }

  /**
   * Format ability scores and calculate modifiers
   */
  static formatAbilityScores(abilityScores = {}) {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const formatted = {};

    abilities.forEach(ability => {
      const score = this.formatNumber(abilityScores[ability]) || 10;
      const modifier = Math.floor((score - 10) / 2);

      formatted[ability] = {
        score,
        modifier,
        modifierString: modifier >= 0 ? `+${modifier}` : `${modifier}`
      };
    });

    return formatted;
  }

  /**
   * Format speed values
   */
  static formatSpeed(speed = {}) {
    const speedTypes = ['walk', 'fly', 'swim', 'climb', 'burrow'];
    const formatted = {};

    speedTypes.forEach(type => {
      const value = this.formatNumber(speed[type]);
      if (value && value > 0) {
        formatted[type] = value;
      }
    });

    // Ensure walk speed exists with default
    if (!formatted.walk) {
      formatted.walk = 30;
    }

    return formatted;
  }

  /**
   * Format proficiencies (saving throws and skills)
   */
  static formatProficiencies(proficiencies = {}) {
    return {
      savingThrows: this.formatArrayValues(proficiencies.savingThrows),
      skills: this.formatArrayValues(proficiencies.skills)
    };
  }

  /**
   * Format damage relations (vulnerabilities, resistances, immunities)
   */
  static formatDamageRelations(resistances = {}) {
    return {
      vulnerabilities: this.formatArrayValues(resistances.vulnerabilities),
      resistances: this.formatArrayValues(resistances.resistances),
      immunities: this.formatArrayValues(resistances.immunities),
      conditionImmunities: this.formatArrayValues(resistances.conditionImmunities)
    };
  }

  /**
   * Format features (traits, actions, etc.)
   */
  static formatFeatures(features = []) {
    if (!Array.isArray(features)) return [];

    return features
      .map(feature => ({
        name: this.formatString(feature.name),
        description: this.formatString(feature.description)
      }))
      .filter(feature => feature.name || feature.description);
  }

  /**
   * Format array values (handles both object arrays and string arrays)
   */
  static formatArrayValues(array = []) {
    if (!Array.isArray(array)) return [];

    return array
      .map(item => {
        if (typeof item === 'string') return item;
        if (typeof item === 'object' && item !== null) {
          return item.name || item.value || item.label || String(item);
        }
        return String(item);
      })
      .filter(item => item && item.trim() !== '');
  }

  /**
   * Safely format string values
   */
  static formatString(value) {
    if (value === null || value === undefined) return '';
    return String(value).trim();
  }

  /**
   * Safely format number values
   */
  static formatNumber(value) {
    if (value === null || value === undefined || value === '') return null;
    const num = Number(value);
    return isNaN(num) ? null : num;
  }

  /**
   * Get empty monster template
   */
  static getEmptyMonster() {
    return {
      name: 'Unnamed Creature',
      tag: '',
      size: 'Medium',
      creatureType: 'humanoid',
      alignment: 'neutral',
      armorClass: { value: null, type: '' },
      hitPoints: { value: null, formula: '' },
      speed: { walk: 30 },
      abilityScores: {
        str: { score: 10, modifier: 0, modifierString: '+0' },
        dex: { score: 10, modifier: 0, modifierString: '+0' },
        con: { score: 10, modifier: 0, modifierString: '+0' },
        int: { score: 10, modifier: 0, modifierString: '+0' },
        wis: { score: 10, modifier: 0, modifierString: '+0' },
        cha: { score: 10, modifier: 0, modifierString: '+0' }
      },
      proficiencies: { savingThrows: [], skills: [] },
      damageRelations: {
        vulnerabilities: [],
        resistances: [],
        immunities: [],
        conditionImmunities: []
      },
      senses: [],
      languages: [],
      challengeRating: { rating: '0', xp: 0 },
      features: {
        traits: [],
        actions: [],
        reactions: [],
        legendaryActions: [],
        lairActions: [],
        regionalEffects: []
      }
    };
  }

  /**
   * Generate a formatted speed string for display
   */
  static getSpeedString(speed) {
    const speedParts = [];

    Object.entries(speed).forEach(([type, value]) => {
      if (value && value > 0) {
        if (type === 'walk') {
          speedParts.push(`${value} ft.`);
        } else {
          speedParts.push(`${type} ${value} ft.`);
        }
      }
    });

    return speedParts.join(', ') || '30 ft.';
  }

  /**
   * Generate a formatted languages string for display
   */
  static getLanguagesString(languages) {
    if (!languages || languages.length === 0) return '—';
    return languages.join(', ');
  }

  /**
   * Generate a formatted senses string for display
   */
  static getSensesString(senses) {
    if (!senses || senses.length === 0) return '—';
    return senses.join(', ');
  }
}

export default MonsterDataFormatter;