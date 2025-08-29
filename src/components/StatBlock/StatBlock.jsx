import React from 'react';
import MonsterDataFormatter from '../../services/monsterDataFormatter';
import MonsterImageGenerator from '../MonsterImageGenerator/MonsterImageGenerator';
import './StatBlock.scss';

const StatBlock = ({ monsterData }) => {
  // Use the formatter service to get standardized data
  const monster = MonsterDataFormatter.formatMonsterData(monsterData);

  const renderAbilityScores = () => {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

    return (
      <div className="ability-scores">
        {abilities.map(ability => (
          <div key={ability} className="ability">
            <div className="ability-name">{ability.toUpperCase()}</div>
            <div className="ability-score">{monster.abilityScores[ability].score}</div>
            <div className="ability-modifier">({monster.abilityScores[ability].modifierString})</div>
          </div>
        ))}
      </div>
    );
  };

    const renderProficiencies = () => {
    const { savingThrows, skills } = monster.proficiencies;
    const elements = [];

    // Check if there are any saving throw items in the original form data (even if empty)
    const hasSavingThrowFields = monsterData?.proficiencies?.savingThrows?.length > 0;
    // Check if there are any skill items in the original form data (even if empty)
    const hasSkillFields = monsterData?.proficiencies?.skills?.length > 0;

    if (hasSavingThrowFields) {
      const savingThrowsText = savingThrows.length > 0 ? savingThrows.join(', ') : '—';
      elements.push(
        <div key="saving-throws" className="stat-line">
          <strong>Saving Throws</strong> {savingThrowsText}
        </div>
      );
    }

    if (hasSkillFields) {
      const skillsText = skills.length > 0 ? skills.join(', ') : '—';
      elements.push(
        <div key="skills" className="stat-line">
          <strong>Skills</strong> {skillsText}
        </div>
      );
    }

    return elements.length > 0 ? <>{elements}</> : null;
  };

  const renderDamageRelations = () => {
    const { vulnerabilities, resistances, immunities, conditionImmunities } = monster.damageRelations;
    const elements = [];

    // Check if there are any form fields for each damage relation type
    const hasVulnerabilityFields = monsterData?.resistances?.vulnerabilities?.length > 0;
    const hasResistanceFields = monsterData?.resistances?.resistances?.length > 0;
    const hasImmunityFields = monsterData?.resistances?.immunities?.length > 0;
    const hasConditionImmunityFields = monsterData?.resistances?.conditionImmunities?.length > 0;

    if (hasVulnerabilityFields) {
      const vulnerabilitiesText = vulnerabilities.length > 0 ? vulnerabilities.join(', ') : '—';
      elements.push(
        <div key="vulnerabilities" className="stat-line">
          <strong>Damage Vulnerabilities</strong> {vulnerabilitiesText}
        </div>
      );
    }

    if (hasResistanceFields) {
      const resistancesText = resistances.length > 0 ? resistances.join(', ') : '—';
      elements.push(
        <div key="resistances" className="stat-line">
          <strong>Damage Resistances</strong> {resistancesText}
        </div>
      );
    }

    if (hasImmunityFields) {
      const immunitiesText = immunities.length > 0 ? immunities.join(', ') : '—';
      elements.push(
        <div key="immunities" className="stat-line">
          <strong>Damage Immunities</strong> {immunitiesText}
        </div>
      );
    }

    if (hasConditionImmunityFields) {
      const conditionImmunitiesText = conditionImmunities.length > 0 ? conditionImmunities.join(', ') : '—';
      elements.push(
        <div key="condition-immunities" className="stat-line">
          <strong>Condition Immunities</strong> {conditionImmunitiesText}
        </div>
      );
    }

    return elements.length > 0 ? <>{elements}</> : null;
  };

  const renderFeatures = (features, title, formFieldName) => {
    // Check if there are any form fields for this feature type
    const hasFormFields = monsterData?.[formFieldName]?.length > 0;

    if (!hasFormFields) return null;

    return (
      <div className="features-section">
        <h3 className="features-title">{title}</h3>
        {features && features.length > 0 ? (
          features.map((feature, index) => (
            <div key={index} className="feature">
              {feature.name && <strong className="feature-name">{feature.name}.</strong>}
              {feature.description && <span className="feature-description"> {feature.description}</span>}
            </div>
          ))
        ) : (
          <div className="feature">
            <span className="feature-description">—</span>
          </div>
        )}
      </div>
    );
  };

  const formatArmorClass = () => {
    const { value, type } = monster.armorClass;
    if (!value) return '—';
    return type ? `${value} (${type})` : `${value}`;
  };

  const formatHitPoints = () => {
    const { value, formula } = monster.hitPoints;
    if (!value) return '—';
    return formula ? `${value} (${formula})` : `${value}`;
  };

  return (
    <div className="stat-block">
      {/* Header */}
      <div className="stat-block-header">
        <h2 className="creature-name">{monster.name}</h2>
        {monster.tag && <div className="creature-tag">{monster.tag}</div>}
      </div>

      {/* Monster Image */}
      <MonsterImageGenerator monster={monster} />

      {/* Creature Type */}
      <div className="creature-type">
        <em>{monster.size} {monster.creatureType}, {monster.alignment}</em>
      </div>

      <div className="stat-block-divider"></div>

      {/* Basic Stats */}
      <div className="basic-stats">
        <div className="stat-line">
          <strong>Armor Class</strong> {formatArmorClass()}
        </div>
        <div className="stat-line">
          <strong>Hit Points</strong> {formatHitPoints()}
        </div>
        <div className="stat-line">
          <strong>Speed</strong> {MonsterDataFormatter.getSpeedString(monster.speed)}
        </div>
      </div>

      <div className="stat-block-divider"></div>

      {/* Ability Scores */}
      {renderAbilityScores()}

      <div className="stat-block-divider"></div>

      {/* Proficiencies */}
      {renderProficiencies()}

      {/* Damage Relations */}
      {renderDamageRelations()}

      {/* Senses */}
      {monsterData?.senses?.length > 0 && (
        <div className="stat-line">
          <strong>Senses</strong> {monster.senses.length > 0 ? MonsterDataFormatter.getSensesString(monster.senses) : '—'}
        </div>
      )}

      {/* Languages */}
      {monsterData?.languages?.length > 0 && (
        <div className="stat-line">
          <strong>Languages</strong> {monster.languages.length > 0 ? MonsterDataFormatter.getLanguagesString(monster.languages) : '—'}
        </div>
      )}

      {/* Challenge Rating */}
      <div className="stat-line">
        <strong>Challenge</strong> {monster.challengeRating.rating} ({monster.challengeRating.xp} XP)
      </div>

      <div className="stat-block-divider"></div>

      {/* Features */}
      {renderFeatures(monster.features.traits, 'Traits', 'traits')}
      {renderFeatures(monster.features.actions, 'Actions', 'actions')}
      {renderFeatures(monster.features.reactions, 'Reactions', 'reactions')}
      {renderFeatures(monster.features.legendaryActions, 'Legendary Actions', 'legendaryActions')}
      {renderFeatures(monster.features.lairActions, 'Lair Actions', 'lairActions')}
      {renderFeatures(monster.features.regionalEffects, 'Regional Effects', 'regionalEffects')}
    </div>
  );
};

export default StatBlock;