import React, { useMemo, useState } from 'react';
import { usePollinationsImage } from '@pollinations/react';
import dragonPlaceholder from '../../assets/dragon-head.svg';
import './MonsterImageGenerator.scss';

const MonsterImageGenerator = ({ monster }) => {
  const [shouldGenerateImage, setShouldGenerateImage] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate smart prompt based on monster data
  const imagePrompt = useMemo(() => {
    let prompt = `fantasy creature from Dungeons and Dragons tabletop roleplaying game`;

    if (monster?.name && monster.name !== 'Unnamed Creature') {
      prompt += ` ${monster.name}`;
    }

    if (monster?.creatureType) {
      prompt += ` ${monster.creatureType}`;
    }

    if (monster?.size) {
      prompt += ` ${monster.size} size`;
    }

    // Add alignment-based descriptors
    if (monster?.alignment) {
      const alignment = monster.alignment.toLowerCase();
      if (alignment.includes('evil')) {
        prompt += ` sinister malevolent`;
      } else if (alignment.includes('good')) {
        prompt += ` noble benevolent`;
      } else if (alignment.includes('chaotic')) {
        prompt += ` wild unpredictable`;
      } else if (alignment.includes('lawful')) {
        prompt += ` orderly disciplined`;
      }
    }

    // Add descriptive elements based on stats
    if (monster?.abilityScores?.str?.score > 16) {
      prompt += ` muscular powerful`;
    }

    if (monster?.abilityScores?.dex?.score > 16) {
      prompt += ` agile swift`;
    }

    if (monster?.abilityScores?.con?.score > 16) {
      prompt += ` robust sturdy`;
    }

    if (monster?.abilityScores?.int?.score > 16) {
      prompt += ` intelligent cunning`;
    }

    if (monster?.abilityScores?.wis?.score > 16) {
      prompt += ` wise perceptive`;
    }

    if (monster?.abilityScores?.cha?.score > 16) {
      prompt += ` charismatic commanding`;
    }

    // Add descriptive elements for low stats
    if (monster?.abilityScores?.str?.score <= 8) {
      prompt += ` weak frail`;
    }

    if (monster?.abilityScores?.dex?.score <= 8) {
      prompt += ` clumsy awkward`;
    }

    if (monster?.abilityScores?.con?.score <= 8) {
      prompt += ` sickly fragile`;
    }

    if (monster?.abilityScores?.int?.score <= 8) {
      prompt += ` dim-witted simple`;
    }

    if (monster?.abilityScores?.wis?.score <= 8) {
      prompt += ` oblivious unaware`;
    }

    if (monster?.abilityScores?.cha?.score <= 8) {
      prompt += ` repulsive off-putting`;
    }

    // Add challenge rating descriptors
    if (monster?.challengeRating?.rating) {
      const cr = Number(monster.challengeRating.rating);
      if (cr >= 15) {
        prompt += ` legendary epic terrifying`;
      } else if (cr >= 10) {
        prompt += ` menacing dangerous`;
      } else if (cr >= 5) {
        prompt += ` formidable threatening`;
      } else if (cr >= 1) {
        prompt += ` moderate threat`;
      }
    }

    // Add armor class hints
    if (monster?.armorClass?.ac) {
      const ac = Number(monster.armorClass.ac);
      if (ac >= 18) {
        prompt += ` heavily armored`;
      } else if (ac >= 15) {
        prompt += ` well-armored`;
      } else if (ac <= 12) {
        prompt += ` lightly armored`;
      }
    }

    // Add speed-based descriptors
    if (monster?.speed?.walk) {
      const walkSpeed = Number(monster.speed.walk);
      if (walkSpeed >= 50) {
        prompt += ` fast moving`;
      }
    }

    if (monster?.speed?.fly) {
      prompt += ` winged flying`;
    }

    if (monster?.speed?.swim) {
      prompt += ` aquatic`;
    }

    if (monster?.speed?.burrow) {
      prompt += ` burrowing`;
    }

    // Add resistance/immunity hints
    if (monster?.damageResistances && monster.damageResistances.length > 0) {
      const resistances = monster.damageResistances.join(' ').toLowerCase();
      if (resistances.includes('fire')) {
        prompt += ` fire-resistant`;
      }
      if (resistances.includes('cold')) {
        prompt += ` cold-resistant`;
      }
      if (resistances.includes('acid')) {
        prompt += ` acid-resistant`;
      }
    }

    // Add senses-based descriptors
    if (monster?.senses?.darkvision) {
      prompt += ` dark-adapted`;
    }

    if (monster?.senses?.blindsight) {
      prompt += ` keen senses`;
    }

    // Add environment hints based on creature type
    if (monster?.creatureType) {
      const type = monster.creatureType.toLowerCase();
      if (type.includes('undead')) {
        prompt += ` undead skeletal ghostly`;
      } else if (type.includes('fiend')) {
        prompt += ` demonic infernal`;
      } else if (type.includes('celestial')) {
        prompt += ` angelic radiant`;
      } else if (type.includes('dragon')) {
        prompt += ` draconic scaly`;
      } else if (type.includes('beast')) {
        prompt += ` natural animal-like`;
      } else if (type.includes('fey')) {
        prompt += ` magical ethereal`;
      } else if (type.includes('elemental')) {
        prompt += ` elemental primal`;
      }
    }

    prompt += ` high quality digital art fantasy illustration detailed`;

    return prompt.trim();
  }, [monster]);

  // Generate a consistent seed based on the monster name
  const imageSeed = useMemo(() => {
    if (monster?.name && monster.name !== 'Unnamed Creature') {
      return monster.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    }
    return undefined;
  }, [monster?.name]);

  // Only generate image if explicitly requested
  const imageUrl = usePollinationsImage(shouldGenerateImage ? imagePrompt : null, {
    width: 400,
    height: 400,
    seed: imageSeed
  });

  // Check if we have meaningful monster data
  const hasMonsterData = monster?.name && monster.name !== 'Unnamed Creature';

  const handleGenerateImage = () => {
    setIsGenerating(true);
    setShouldGenerateImage(true);
  };

  const handleImageLoad = () => {
    setIsGenerating(false);
  };

  const handleImageError = () => {
    setIsGenerating(false);
    // Could add error handling here if needed
  };

  // Reset generation state when monster data changes
  React.useEffect(() => {
    if (shouldGenerateImage) {
      setShouldGenerateImage(false);
      setIsGenerating(false);
    }
  }, [imagePrompt]);

  // Dragon Placeholder Component
  const PlaceholderImage = () => (
    <img
      src={dragonPlaceholder}
      alt="Monster placeholder"
      className="monster-placeholder-img"
    />
  );

  return (
    <div className="monster-image-generator">
      <div className="image-container">
        {shouldGenerateImage && imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={monster?.name || 'Monster'}
              className="monster-image"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ display: isGenerating ? 'none' : 'block' }}
            />
            {isGenerating && (
              <div className="image-placeholder">
                <div className="loading-spinner"></div>
                <p>Generating your monster image...</p>
              </div>
            )}
          </>
        ) : isGenerating ? (
          <div className="image-placeholder">
            <div className="loading-spinner"></div>
            <p>Generating your monster image...</p>
          </div>
        ) : (
          <>
            <PlaceholderImage />
            {hasMonsterData && (
              <button
                className="generate-image-btn"
                onClick={handleGenerateImage}
                type="button"
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Generate Image'}
              </button>
            )}
          </>
        )}
      </div>

      {/* Show prompt info when generating or generated */}
      {shouldGenerateImage && (
        <div className="prompt-info">
          <small>Prompt: {imagePrompt}</small>
        </div>
      )}
    </div>
  );
};

export default MonsterImageGenerator;