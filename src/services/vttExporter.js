/**
 * VTT Exporter Service
 *
 * Exports monster data in standard WotC 5e statblock format
 * Compatible with Foundry VTT's 5e-statblock-importer module
 */

import { MonsterDataFormatter } from './monsterDataFormatter.js';

export class VTTExporter {
  /**
   * Export monster data as VTT-compatible text
   * @param {Object} formData - Raw form data from the monster form
   * @returns {string} Formatted statblock text
   */
  static exportToVTT(formData) {
    const monster = MonsterDataFormatter.formatMonsterData(formData);
    const sections = [];

    // Name
    sections.push(monster.name);

    // Size type (alignment)
    const sizeTypeAlignment = this.formatSizeTypeAlignment(monster);
    sections.push(sizeTypeAlignment);

    // Armor Class
    const armorClass = this.formatArmorClass(monster.armorClass);
    sections.push(armorClass);

    // Hit Points
    const hitPoints = this.formatHitPoints(monster.hitPoints);
    sections.push(hitPoints);

    // Speed
    const speed = this.formatSpeed(monster.speed);
    sections.push(speed);

    // Ability Scores (table format)
    const abilityScores = this.formatAbilityScores(monster.abilityScores);
    sections.push(abilityScores);

    // Saving Throws
    const savingThrows = this.formatSavingThrows(monster.proficiencies.savingThrows);
    if (savingThrows) sections.push(savingThrows);

    // Skills
    const skills = this.formatSkills(monster.proficiencies.skills);
    if (skills) sections.push(skills);

    // Damage Vulnerabilities
    const vulnerabilities = this.formatDamageVulnerabilities(monster.damageRelations.vulnerabilities);
    if (vulnerabilities) sections.push(vulnerabilities);

    // Damage Resistances
    const resistances = this.formatDamageResistances(monster.damageRelations.resistances);
    if (resistances) sections.push(resistances);

    // Damage Immunities
    const immunities = this.formatDamageImmunities(monster.damageRelations.immunities);
    if (immunities) sections.push(immunities);

    // Condition Immunities
    const conditionImmunities = this.formatConditionImmunities(monster.damageRelations.conditionImmunities);
    if (conditionImmunities) sections.push(conditionImmunities);

    // Senses
    const senses = this.formatSenses(monster.senses);
    if (senses) sections.push(senses);

    // Languages
    const languages = this.formatLanguages(monster.languages);
    if (languages) sections.push(languages);

    // Challenge Rating
    const challengeRating = this.formatChallengeRating(monster.challengeRating);
    sections.push(challengeRating);

    // Traits/Features
    const traits = this.formatTraits(monster.features.traits);
    if (traits) sections.push(traits);

    // Actions
    const actions = this.formatActions(monster.features.actions);
    if (actions) sections.push(actions);

    // Reactions
    const reactions = this.formatReactions(monster.features.reactions);
    if (reactions) sections.push(reactions);

    // Legendary Actions
    const legendaryActions = this.formatLegendaryActions(monster.features.legendaryActions);
    if (legendaryActions) sections.push(legendaryActions);

    // Lair Actions
    const lairActions = this.formatLairActions(monster.features.lairActions);
    if (lairActions) sections.push(lairActions);

    // Regional Effects
    const regionalEffects = this.formatRegionalEffects(monster.features.regionalEffects);
    if (regionalEffects) sections.push(regionalEffects);

    return sections.join('\n');
  }

  /**
   * Format size, type, and alignment line
   */
  static formatSizeTypeAlignment(monster) {
    const size = monster.size || 'Medium';
    const type = monster.creatureType || 'humanoid';
    const alignment = monster.alignment || 'neutral';
    const tag = monster.tag ? ` (${monster.tag})` : '';

    return `${size} ${type}${tag}, ${alignment}`;
  }

  /**
   * Format armor class
   */
  static formatArmorClass(armorClass) {
    const ac = armorClass.value || 10;
    const type = armorClass.type ? ` (${armorClass.type})` : '';
    return `Armor Class ${ac}${type}`;
  }

  /**
   * Format hit points
   */
  static formatHitPoints(hitPoints) {
    const hp = hitPoints.value || 1;
    const formula = hitPoints.formula ? ` (${hitPoints.formula})` : '';
    return `Hit Points ${hp}${formula}`;
  }

  /**
   * Format speed
   */
  static formatSpeed(speed) {
    const speedParts = [];

    if (speed.walk) speedParts.push(`${speed.walk} ft.`);
    if (speed.fly) speedParts.push(`fly ${speed.fly} ft.`);
    if (speed.swim) speedParts.push(`swim ${speed.swim} ft.`);
    if (speed.climb) speedParts.push(`climb ${speed.climb} ft.`);
    if (speed.burrow) speedParts.push(`burrow ${speed.burrow} ft.`);

    return `Speed ${speedParts.join(', ')}`;
  }

  /**
   * Format ability scores in table format
   */
  static formatAbilityScores(abilityScores) {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const headerRow = abilities.map(ability => ability.toUpperCase()).join('\t');
    const scoreRow = abilities.map(ability => {
      const score = abilityScores[ability]?.score || 10;
      const modifier = abilityScores[ability]?.modifierString || '+0';
      return `${score} (${modifier})`;
    }).join(' ');

    return `${headerRow}\n${scoreRow}`;
  }

  /**
   * Format saving throws
   */
  static formatSavingThrows(savingThrows) {
    if (!savingThrows || savingThrows.length === 0) return null;
    return `Saving Throws ${savingThrows.join(', ')}`;
  }

  /**
   * Format skills
   */
  static formatSkills(skills) {
    if (!skills || skills.length === 0) return null;
    return `Skills ${skills.join(', ')}`;
  }

  /**
   * Format damage vulnerabilities
   */
  static formatDamageVulnerabilities(vulnerabilities) {
    if (!vulnerabilities || vulnerabilities.length === 0) return null;
    return `Damage Vulnerabilities ${vulnerabilities.join(', ')}`;
  }

  /**
   * Format damage resistances
   */
  static formatDamageResistances(resistances) {
    if (!resistances || resistances.length === 0) return null;
    return `Damage Resistances ${resistances.join(', ')}`;
  }

  /**
   * Format damage immunities
   */
  static formatDamageImmunities(immunities) {
    if (!immunities || immunities.length === 0) return null;
    return `Damage Immunities ${immunities.join(', ')}`;
  }

  /**
   * Format condition immunities
   */
  static formatConditionImmunities(conditionImmunities) {
    if (!conditionImmunities || conditionImmunities.length === 0) return null;
    return `Condition Immunities ${conditionImmunities.join(', ')}`;
  }

  /**
   * Format senses
   */
  static formatSenses(senses) {
    if (!senses || senses.length === 0) return null;
    return `Senses ${senses.join(', ')}`;
  }

  /**
   * Format languages
   */
  static formatLanguages(languages) {
    if (!languages || languages.length === 0) return null;
    return `Languages ${languages.join(', ')}`;
  }

  /**
   * Format challenge rating
   */
  static formatChallengeRating(challengeRating) {
    const rating = challengeRating.rating || '0';
    const xp = challengeRating.xp || 0;
    return `Challenge ${rating} (${xp.toLocaleString()} XP)`;
  }

  /**
   * Format traits/features
   */
  static formatTraits(traits) {
    if (!traits || traits.length === 0) return null;

    const formatted = traits.map(trait => {
      if (!trait.name && !trait.description) return null;
      if (!trait.name) return trait.description;
      if (!trait.description) return trait.name;
      return `${trait.name}. ${trait.description}`;
    }).filter(Boolean);

    return formatted.length > 0 ? formatted.join('\n') : null;
  }

  /**
   * Format actions
   */
  static formatActions(actions) {
    if (!actions || actions.length === 0) return null;

    const formatted = actions.map(action => {
      if (!action.name && !action.description) return null;
      if (!action.name) return action.description;
      if (!action.description) return action.name;
      return `${action.name}. ${action.description}`;
    }).filter(Boolean);

    if (formatted.length === 0) return null;

    return `Actions\n${formatted.join('\n')}`;
  }

  /**
   * Format reactions
   */
  static formatReactions(reactions) {
    if (!reactions || reactions.length === 0) return null;

    const formatted = reactions.map(reaction => {
      if (!reaction.name && !reaction.description) return null;
      if (!reaction.name) return reaction.description;
      if (!reaction.description) return reaction.name;
      return `${reaction.name}. ${reaction.description}`;
    }).filter(Boolean);

    if (formatted.length === 0) return null;

    return `Reactions\n${formatted.join('\n')}`;
  }

  /**
   * Format legendary actions
   */
  static formatLegendaryActions(legendaryActions) {
    if (!legendaryActions || legendaryActions.length === 0) return null;

    const formatted = legendaryActions.map(action => {
      if (!action.name && !action.description) return null;
      if (!action.name) return action.description;
      if (!action.description) return action.name;
      return `${action.name}. ${action.description}`;
    }).filter(Boolean);

    if (formatted.length === 0) return null;

    return `Legendary Actions\n${formatted.join('\n')}`;
  }

  /**
   * Format lair actions
   */
  static formatLairActions(lairActions) {
    if (!lairActions || lairActions.length === 0) return null;

    const formatted = lairActions.map(action => {
      if (!action.name && !action.description) return null;
      if (!action.name) return action.description;
      if (!action.description) return action.name;
      return `${action.name}. ${action.description}`;
    }).filter(Boolean);

    if (formatted.length === 0) return null;

    return `Lair Actions\n${formatted.join('\n')}`;
  }

  /**
   * Format regional effects
   */
  static formatRegionalEffects(regionalEffects) {
    if (!regionalEffects || regionalEffects.length === 0) return null;

    const formatted = regionalEffects.map(effect => {
      if (!effect.name && !effect.description) return null;
      if (!effect.name) return effect.description;
      if (!effect.description) return effect.name;
      return `${effect.name}. ${effect.description}`;
    }).filter(Boolean);

    if (formatted.length === 0) return null;

    return `Regional Effects\n${formatted.join('\n')}`;
  }
}