import React from 'react';
import './StatBlock.scss';

const StatBlock = ({ monsterData }) => {
  const formatModifier = (score) => {
    const modifier = Math.floor((score - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  };

  return (
    <div className="stat-block">
      <div className="stat-block-header">
        <h2>{monsterData.name}</h2>
        {monsterData.tag && <span className="tag">{monsterData.tag}</span>}
      </div>

      <div className="stat-block-subheader">
        <p>
          {monsterData.size} {monsterData.creatureType}, {monsterData.alignment}
        </p>
      </div>

      <div className="stat-block-divider"></div>

      <div className="stat-block-section">
        <p><strong>Armor Class</strong> {monsterData.ac} {monsterData.armorType && `(${monsterData.armorType})`}</p>
        <p><strong>Hit Points</strong> {monsterData.hp} {monsterData.hitDice && `(${monsterData.hitDice})`}</p>
        <p><strong>Speed</strong> {monsterData.walkSpeed} ft.</p>
      </div>

      <div className="stat-block-divider"></div>

      <div className="stat-block-abilities">
        <div className="ability">
          <div className="ability-name">STR</div>
          <div className="ability-score">{monsterData.str}</div>
          <div className="ability-modifier">({formatModifier(monsterData.str)})</div>
        </div>
        <div className="ability">
          <div className="ability-name">DEX</div>
          <div className="ability-score">{monsterData.dex}</div>
          <div className="ability-modifier">({formatModifier(monsterData.dex)})</div>
        </div>
        <div className="ability">
          <div className="ability-name">CON</div>
          <div className="ability-score">{monsterData.con}</div>
          <div className="ability-modifier">({formatModifier(monsterData.con)})</div>
        </div>
        <div className="ability">
          <div className="ability-name">INT</div>
          <div className="ability-score">{monsterData.int}</div>
          <div className="ability-modifier">({formatModifier(monsterData.int)})</div>
        </div>
        <div className="ability">
          <div className="ability-name">WIS</div>
          <div className="ability-score">{monsterData.wis}</div>
          <div className="ability-modifier">({formatModifier(monsterData.wis)})</div>
        </div>
        <div className="ability">
          <div className="ability-name">CHA</div>
          <div className="ability-score">{monsterData.cha}</div>
          <div className="ability-modifier">({formatModifier(monsterData.cha)})</div>
        </div>
      </div>

      <div className="stat-block-divider"></div>

      <div className="stat-block-section">
        <p><strong>Challenge</strong> {monsterData.challengeRating} ({monsterData.xp} XP)</p>
        <p><strong>Languages</strong> {formatLanguages(monsterData.languages)}</p>
      </div>
    </div>
  );
};

export default StatBlock;