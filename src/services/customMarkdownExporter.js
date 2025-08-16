/**
 * Custom Markdown Exporter Service
 *
 * Exports monster data in the specific custom markdown format
 * required by the user's target tool
 */

import { MonsterDataFormatter } from './monsterDataFormatter.js';

export class CustomMarkdownExporter {
  /**
   * Export monster data as custom markdown
   * @param {Object} formData - Raw form data from the monster form
   * @returns {string} Formatted custom markdown text
   */
  static exportToCustomMarkdown(formData) {
    const monster = MonsterDataFormatter.formatMonsterData(formData);
    const sections = [];

    // Opening tag
    sections.push('{{monster');

    // Name as H2
    sections.push(`## ${monster.name}`);

    // Size, type, alignment
    const sizeTypeAlignment = this.formatSizeTypeAlignment(monster);
    sections.push(`*${sizeTypeAlignment}*`);

    // First separator
    sections.push('___');

    // Basic stats with :: formatting
    sections.push(this.formatArmorClass(monster.armorClass));
    sections.push(this.formatHitPoints(monster.hitPoints));
    sections.push(this.formatSpeed(monster.speed));

    // Second separator
    sections.push('___');

    // Ability scores table
    sections.push(this.formatAbilityScores(monster.abilityScores));

    // Third separator
    sections.push('___');

    // Additional stats
    const additionalStats = this.formatAdditionalStats(monster);
    sections.push(...additionalStats);

    // Challenge rating with proficiency bonus
    sections.push(this.formatChallengeRating(monster.challengeRating));

    // Fourth separator
    sections.push('___');

    // Traits
    const traits = this.formatTraits(monster.features.traits);
    if (traits.length > 0) {
      sections.push(...traits);
    }

    // Actions
    const actions = this.formatActions(monster.features.actions);
    if (actions.length > 0) {
      sections.push(...actions);
    }

    // Reactions
    const reactions = this.formatReactions(monster.features.reactions);
    if (reactions.length > 0) {
      sections.push(...reactions);
    }

    // Legendary Actions
    const legendaryActions = this.formatLegendaryActions(monster.features.legendaryActions);
    if (legendaryActions.length > 0) {
      sections.push(...legendaryActions);
    }

    // Lair Actions
    const lairActions = this.formatLairActions(monster.features.lairActions);
    if (lairActions.length > 0) {
      sections.push(...lairActions);
    }

    // Regional Effects
    const regionalEffects = this.formatRegionalEffects(monster.features.regionalEffects);
    if (regionalEffects.length > 0) {
      sections.push(...regionalEffects);
    }

    // Closing tag
    sections.push('}}');

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
   * Format armor class with :: separator
   */
  static formatArmorClass(armorClass) {
    const ac = armorClass.value || 10;
    const type = armorClass.type ? ` (${armorClass.type})` : '';
    return `**Armor Class** :: ${ac}${type}`;
  }

  /**
   * Format hit points with :: separator
   */
  static formatHitPoints(hitPoints) {
    const hp = hitPoints.value || 1;
    const formula = hitPoints.formula ? ` (${hitPoints.formula})` : '';
    return `**Hit Points**  :: ${hp}${formula}`;
  }

  /**
   * Format speed with :: separator
   */
  static formatSpeed(speed) {
    const speedParts = [];

    if (speed.walk) speedParts.push(`${speed.walk} ft.`);
    if (speed.fly) speedParts.push(`fly ${speed.fly} ft.`);
    if (speed.swim) speedParts.push(`swim ${speed.swim} ft.`);
    if (speed.climb) speedParts.push(`climb ${speed.climb} ft.`);
    if (speed.burrow) speedParts.push(`burrow ${speed.burrow} ft.`);

    const speedString = speedParts.length > 0 ? speedParts.join(', ') : '30 ft.';
    return `**Speed**       :: ${speedString}`;
  }

  /**
   * Format ability scores in markdown table format
   */
  static formatAbilityScores(abilityScores) {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

    // Header row
    const headerRow = '|  STR  |  DEX  |  CON  |  INT  |  WIS  |  CHA  |';

    // Alignment row
    const alignmentRow = '|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|';

    // Values row
    const valueRow = abilities.map(ability => {
      const score = abilityScores[ability]?.score || 10;
      const modifierString = abilityScores[ability]?.modifierString || '+0';
      return `|${score} (${modifierString})`;
    }).join('') + '|';

    return `${headerRow}\n${alignmentRow}\n${valueRow}`;
  }

  /**
   * Format additional stats (saving throws, skills, resistances, etc.)
   */
  static formatAdditionalStats(monster) {
    const stats = [];

    // Saving Throws
    if (monster.proficiencies.savingThrows?.length > 0) {
      stats.push(`**Saving Throws**        :: ${monster.proficiencies.savingThrows.join(', ')}`);
    }

    // Skills
    if (monster.proficiencies.skills?.length > 0) {
      stats.push(`**Skills**               :: ${monster.proficiencies.skills.join(', ')}`);
    }

    // Damage Vulnerabilities
    if (monster.damageRelations.vulnerabilities?.length > 0) {
      stats.push(`**Damage Vulnerabilities** :: ${monster.damageRelations.vulnerabilities.join(', ')}`);
    }

    // Damage Resistances
    if (monster.damageRelations.resistances?.length > 0) {
      stats.push(`**Damage Resistances**   :: ${monster.damageRelations.resistances.join(', ')}`);
    }

    // Damage Immunities
    if (monster.damageRelations.immunities?.length > 0) {
      stats.push(`**Damage Immunities**    :: ${monster.damageRelations.immunities.join(', ')}`);
    }

    // Condition Immunities
    const conditionImmunities = monster.damageRelations.conditionImmunities?.length > 0
      ? monster.damageRelations.conditionImmunities.join(', ')
      : 'None';
    stats.push(`**Condition Immunities** :: ${conditionImmunities}`);

    // Senses
    const senses = monster.senses?.length > 0 ? monster.senses.join(', ') : 'passive Perception 10';
    stats.push(`**Senses**               :: ${senses}`);

    // Languages
    const languages = monster.languages?.length > 0 ? monster.languages.join(', ') : '—';
    stats.push(`**Languages**            :: ${languages}`);

    return stats;
  }

  /**
   * Format challenge rating with proficiency bonus
   */
  static formatChallengeRating(challengeRating) {
    const rating = challengeRating.rating || '0';
    const xp = challengeRating.xp || 0;
    const proficiencyBonus = this.calculateProficiencyBonus(rating);

    return `**Challenge**            :: ${rating} (${xp} XP) {{bonus **Proficiency Bonus** +${proficiencyBonus}}}`;
  }

  /**
   * Calculate proficiency bonus based on challenge rating
   */
  static calculateProficiencyBonus(cr) {
    const rating = parseFloat(cr);
    if (rating >= 29) return 9;
    if (rating >= 25) return 8;
    if (rating >= 21) return 7;
    if (rating >= 17) return 6;
    if (rating >= 13) return 5;
    if (rating >= 9) return 4;
    if (rating >= 5) return 3;
    return 2;
  }

  /**
   * Format traits/features
   */
  static formatTraits(traits) {
    if (!traits || traits.length === 0) return [];

    const formatted = [];
    traits.forEach((trait, index) => {
      if (!trait.name && !trait.description) return;

      if (!trait.name) {
        formatted.push(trait.description);
      } else if (!trait.description) {
        formatted.push(`***${trait.name}.***`);
      } else {
        // Check if description has multiple paragraphs
        const lines = trait.description.split('\n').filter(line => line.trim());
        if (lines.length > 1) {
          formatted.push(`***${trait.name}.*** ${lines[0]}`);
          // Add remaining lines as separate content
          for (let i = 1; i < lines.length; i++) {
            formatted.push('');
            formatted.push(lines[i]);
          }
        } else {
          formatted.push(`***${trait.name}.*** ${trait.description}`);
        }
      }

      // Add colon separator except for the last item
      if (index < traits.length - 1) {
        formatted.push(':');
      }
    });

    return formatted;
  }

  /**
   * Format actions with header
   */
  static formatActions(actions) {
    if (!actions || actions.length === 0) return [];

    const formatted = ['### Actions'];
    actions.forEach((action, index) => {
      if (!action.name && !action.description) return;

      if (!action.name) {
        formatted.push(action.description);
      } else if (!action.description) {
        formatted.push(`***${action.name}.***`);
      } else {
        formatted.push(`***${action.name}.*** ${action.description}`);
      }

      // Add colon separator except for the last item
      if (index < actions.length - 1) {
        formatted.push(':');
      }
    });

    return formatted;
  }

  /**
   * Format reactions with header
   */
  static formatReactions(reactions) {
    if (!reactions || reactions.length === 0) return [];

    const formatted = ['### Reactions'];
    reactions.forEach((reaction, index) => {
      if (!reaction.name && !reaction.description) return;

      if (!reaction.name) {
        formatted.push(reaction.description);
      } else if (!reaction.description) {
        formatted.push(`***${reaction.name}.***`);
      } else {
        formatted.push(`***${reaction.name}.*** ${reaction.description}`);
      }

      // Add colon separator except for the last item
      if (index < reactions.length - 1) {
        formatted.push(':');
      }
    });

    return formatted;
  }

  /**
   * Format legendary actions with header
   */
  static formatLegendaryActions(legendaryActions) {
    if (!legendaryActions || legendaryActions.length === 0) return [];

    const formatted = ['### Legendary Actions'];
    legendaryActions.forEach((action, index) => {
      if (!action.name && !action.description) return;

      if (!action.name) {
        formatted.push(action.description);
      } else if (!action.description) {
        formatted.push(`***${action.name}.***`);
      } else {
        formatted.push(`***${action.name}.*** ${action.description}`);
      }

      // Add colon separator except for the last item
      if (index < legendaryActions.length - 1) {
        formatted.push(':');
      }
    });

    return formatted;
  }

  /**
   * Format lair actions with header
   */
  static formatLairActions(lairActions) {
    if (!lairActions || lairActions.length === 0) return [];

    const formatted = ['### Lair Actions'];
    lairActions.forEach((action, index) => {
      if (!action.name && !action.description) return;

      if (!action.name) {
        formatted.push(action.description);
      } else if (!action.description) {
        formatted.push(`***${action.name}.***`);
      } else {
        formatted.push(`***${action.name}.*** ${action.description}`);
      }

      // Add colon separator except for the last item
      if (index < lairActions.length - 1) {
        formatted.push(':');
      }
    });

    return formatted;
  }

  /**
   * Format regional effects with header
   */
  static formatRegionalEffects(regionalEffects) {
    if (!regionalEffects || regionalEffects.length === 0) return [];

    const formatted = ['### Regional Effects'];
    regionalEffects.forEach((effect, index) => {
      if (!effect.name && !effect.description) return;

      if (!effect.name) {
        formatted.push(effect.description);
      } else if (!effect.description) {
        formatted.push(`***${effect.name}.***`);
      } else {
        formatted.push(`***${effect.name}.*** ${effect.description}`);
      }

      // Add colon separator except for the last item
      if (index < regionalEffects.length - 1) {
        formatted.push(':');
      }
    });

    return formatted;
  }
}
