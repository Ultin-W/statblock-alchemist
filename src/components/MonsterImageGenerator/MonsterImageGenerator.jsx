import React, { useMemo, useState } from 'react';
import { usePollinationsImage } from '@pollinations/react';
import dragonPlaceholder from '../../assets/dragon-head.svg';
import './MonsterImageGenerator.scss';

const MonsterImageGenerator = ({ monster }) => {
  const [shouldGenerateImage, setShouldGenerateImage] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate smart prompt based on monster data
  const imagePrompt = useMemo(() => {
    let prompt = `fantasy creature`;

    if (monster?.name && monster.name !== 'Unnamed Creature') {
      prompt += ` ${monster.name}`;
    }

    if (monster?.creatureType) {
      prompt += ` ${monster.creatureType}`;
    }

    if (monster?.size) {
      prompt += ` ${monster.size} size`;
    }

    // Add descriptive elements based on stats
    if (monster?.abilityScores?.str?.score > 16) {
      prompt += ` muscular powerful`;
    }

    if (monster?.abilityScores?.dex?.score > 16) {
      prompt += ` agile swift`;
    }

    if (monster?.challengeRating?.rating && Number(monster.challengeRating.rating) > 10) {
      prompt += ` menacing dangerous`;
    }

    prompt += ` digital art fantasy illustration`;

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