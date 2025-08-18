import React, { useMemo, useState } from 'react';
import { usePollinationsImage } from '@pollinations/react';
import dragonPlaceholder from '../../assets/dragon-head.svg';
import './MonsterImageGenerator.scss';

const MonsterImageGenerator = ({ monster }) => {
  const [shouldGenerateImage, setShouldGenerateImage] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showRefinement, setShowRefinement] = useState(false);
  const [refinementPrompt, setRefinementPrompt] = useState('');
  const [activePrompt, setActivePrompt] = useState('');

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

  // Only generate image if explicitly requested, using the active prompt
  const imageUrl = usePollinationsImage(shouldGenerateImage ? activePrompt : null, {
    width: 400,
    height: 400,
    seed: imageSeed
  });

  // Check if we have meaningful monster data
  const hasMonsterData = monster?.name && monster.name !== 'Unnamed Creature';

  const handleGenerateImage = () => {
    setIsGenerating(true);
    setActivePrompt(imagePrompt);
    setShouldGenerateImage(true);
  };

  const handleImageLoad = () => {
    setIsGenerating(false);
  };

  const handleImageError = () => {
    setIsGenerating(false);
    // Could add error handling here if needed
  };

  const handleRefineClick = () => {
    setRefinementPrompt(imagePrompt);
    setShowRefinement(true);
  };

  const handleRefinementGenerate = () => {
    if (refinementPrompt.trim()) {
      setIsGenerating(true);
      setActivePrompt(refinementPrompt.trim());
      setShouldGenerateImage(true);
      setShowRefinement(false);
    }
  };

  const handleCancelRefinement = () => {
    setShowRefinement(false);
    setRefinementPrompt('');
  };

  // Reset generation state when monster data changes
  React.useEffect(() => {
    if (shouldGenerateImage) {
      setShouldGenerateImage(false);
      setIsGenerating(false);
    }
    // Also clear refinement and active prompt state
    setShowRefinement(false);
    setRefinementPrompt('');
    setActivePrompt('');
  }, [imagePrompt]);

  // Generate descriptive alt text for monster images
  const generateAltText = () => {
    if (!monster?.name || monster.name === 'Unnamed Creature') {
      return 'Generated fantasy monster illustration';
    }

    let altText = `Generated illustration of ${monster.name}`;

    if (monster.size && monster.creatureType) {
      altText += `, a ${monster.size.toLowerCase()} ${monster.creatureType.toLowerCase()}`;
    } else if (monster.creatureType) {
      altText += `, a ${monster.creatureType.toLowerCase()}`;
    } else if (monster.size) {
      altText += `, a ${monster.size.toLowerCase()} creature`;
    }

    if (monster.alignment) {
      altText += ` of ${monster.alignment.toLowerCase()} alignment`;
    }

    return altText;
  };

  // Dragon Placeholder Component
  const PlaceholderImage = () => (
    <img
      src={dragonPlaceholder}
      alt="Dragon head placeholder - a stylized icon representing a fantasy creature. Click 'Generate Image' to create a custom illustration for your monster."
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
              alt={generateAltText()}
              className="monster-image"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ display: isGenerating ? 'none' : 'block' }}
            />
            {!isGenerating && (
              <button
                className="generate-image-btn refine-btn"
                onClick={handleRefineClick}
                type="button"
                aria-label="Refine the generated monster image with custom prompt"
              >
                Refine Image
              </button>
            )}
            {isGenerating && (
              <div
                className="image-placeholder"
                role="status"
                aria-live="polite"
                aria-label="Image generation in progress"
              >
                <div className="loading-spinner" aria-hidden="true"></div>
                <p>Generating your monster image...</p>
              </div>
            )}
          </>
        ) : isGenerating ? (
          <div
            className="image-placeholder"
            role="status"
            aria-live="polite"
            aria-label="Image generation in progress"
          >
            <div className="loading-spinner" aria-hidden="true"></div>
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
                aria-label={`Generate AI image for ${monster?.name || 'your monster'} using creature details`}
                aria-describedby="image-generation-help"
              >
                {isGenerating ? 'Generating...' : 'Generate Image'}
              </button>
            )}
          </>
        )}
      </div>

      {/* Help text for image generation */}
      {hasMonsterData && !shouldGenerateImage && (
        <div id="image-generation-help" className="visually-hidden">
          AI will generate an image based on your monster's size, type, alignment, abilities, and other characteristics
        </div>
      )}

      {/* Refinement Interface */}
      {showRefinement && (
        <div className="refinement-interface" role="dialog" aria-labelledby="refinement-title">
          <h4 id="refinement-title">Refine Your Image</h4>
          <p>Modify the prompt to refine your image:</p>
          <label htmlFor="refinement-textarea" className="visually-hidden">
            Custom refinement prompt for image generation
          </label>
          <textarea
            id="refinement-textarea"
            value={refinementPrompt}
            onChange={(e) => setRefinementPrompt(e.target.value)}
            className="refinement-prompt"
            rows="4"
            placeholder="Add details to refine your image..."
            aria-describedby="refinement-help"
          />
          <div id="refinement-help" className="visually-hidden">
            Describe specific details you want to add or modify in the generated monster image
          </div>
          <div className="refinement-buttons">
            <button
              className="refinement-btn generate"
              onClick={handleRefinementGenerate}
              disabled={!refinementPrompt.trim() || isGenerating}
              aria-label="Generate new image with refined prompt"
            >
              Generate Refined Image
            </button>
            <button
              className="refinement-btn cancel"
              onClick={handleCancelRefinement}
              disabled={isGenerating}
              aria-label="Cancel image refinement"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Show prompt info when generating or generated */}
      {shouldGenerateImage && (
        <div className="prompt-info" role="status" aria-label="Image generation prompt">
          <small>Prompt: {activePrompt || imagePrompt}</small>
        </div>
      )}
    </div>
  );
};

export default MonsterImageGenerator;