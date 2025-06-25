import React from 'react';
import MonsterDataFormatter from '../../services/monsterDataFormatter';
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
    const proficiencyItems = [];

    if (savingThrows.length > 0) {
      proficiencyItems.push(`Saving Throws ${savingThrows.join(', ')}`);
    }

    if (skills.length > 0) {
      proficiencyItems.push(`Skills ${skills.join(', ')}`);
    }

    return proficiencyItems.length > 0 ? (
      <div className="stat-line">
        <strong>{proficiencyItems.join('; ')}</strong>
      </div>
    ) : null;
  };

  const renderDamageRelations = () => {
    const { vulnerabilities, resistances, immunities, conditionImmunities } = monster.damageRelations;
    const damageItems = [];

    if (vulnerabilities.length > 0) {
      damageItems.push(`Damage Vulnerabilities ${vulnerabilities.join(', ')}`);
    }

    if (resistances.length > 0) {
      damageItems.push(`Damage Resistances ${resistances.join(', ')}`);
    }

    if (immunities.length > 0) {
      damageItems.push(`Damage Immunities ${immunities.join(', ')}`);
    }

    if (conditionImmunities.length > 0) {
      damageItems.push(`Condition Immunities ${conditionImmunities.join(', ')}`);
    }

    return damageItems.map((item, index) => (
      <div key={index} className="stat-line">
        <strong>{item}</strong>
      </div>
    ));
  };

  const renderFeatures = (features, title) => {
    if (!features || features.length === 0) return null;

    return (
      <div className="features-section">
        <h3 className="features-title">{title}</h3>
        {features.map((feature, index) => (
          <div key={index} className="feature">
            {feature.name && <strong className="feature-name">{feature.name}.</strong>}
            {feature.description && <span className="feature-description"> {feature.description}</span>}
          </div>
        ))}
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
        <h1 className="creature-name">{monster.name}</h1>
        {monster.tag && <div className="creature-tag">{monster.tag}</div>}
      </div>

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
      {monster.senses.length > 0 && (
        <div className="stat-line">
          <strong>Senses</strong> {MonsterDataFormatter.getSensesString(monster.senses)}
        </div>
      )}

      {/* Languages */}
      <div className="stat-line">
        <strong>Languages</strong> {MonsterDataFormatter.getLanguagesString(monster.languages)}
      </div>

      {/* Challenge Rating */}
      <div className="stat-line">
        <strong>Challenge</strong> {monster.challengeRating.rating} ({monster.challengeRating.xp} XP)
      </div>

      <div className="stat-block-divider"></div>

      {/* Features */}
      {renderFeatures(monster.features.traits, 'Traits')}
      {renderFeatures(monster.features.actions, 'Actions')}
      {renderFeatures(monster.features.reactions, 'Reactions')}
      {renderFeatures(monster.features.legendaryActions, 'Legendary Actions')}
      {renderFeatures(monster.features.lairActions, 'Lair Actions')}
      {renderFeatures(monster.features.regionalEffects, 'Regional Effects')}
    </div>
  );
};

export default StatBlock;