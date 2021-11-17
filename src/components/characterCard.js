import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import '../css/characterCards.css';

const CharacterCard = ({
  characterId,
  characterName,
  characterImageUrl,
  characterAbilities,
}) => {
  const zigZag = () => {
    let i;
    const characterTilles = document.getElementsByClassName('my-character');
    for (i = 0; i < characterTilles.length; i += 1) {
      if ((i >= 1) && (i % 2 === 1)) {
        characterTilles[i].classList.add('zigZag');
        i += 3;
      }
    }

    for (i = 0; i < characterTilles.length; i += 1) {
      if ((i >= 2) && (i % 2 === 0)) {
        characterTilles[i].classList.add('zigZag');
        i += 3;
      }
    }
  };

  useEffect(() => {
    zigZag();
  }, []);

  return (

    <div className="my-character" id={characterId} role="menuitem" tabIndex={0} aria-hidden="true">
      <a href={`/character/${characterId}`}>
        <div className="my-character-images">
          <img src={characterImageUrl} alt={characterName} />
          <i className="far fa-arrow-circle-right" />
        </div>
        <div className="my-character-info">
          <h2>{characterName}</h2>
          <h3>
            {`${characterAbilities.length} `}
            abilities
          </h3>
        </div>
      </a>
    </div>

  );
};

CharacterCard.propTypes = {
  characterId: propTypes.number.isRequired,
  characterName: propTypes.string.isRequired,
  characterImageUrl: propTypes.string.isRequired,
  characterAbilities: propTypes.arrayOf(propTypes.string).isRequired,
};

export default CharacterCard;
