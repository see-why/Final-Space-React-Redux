import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import '../css/characterCards.css';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const CharacterDetails = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  const [state, setstate] = useState({
    name: '',
    species: '',
    image: '',
    gender: '',
    alias: [],
    origin: '',
    abilities: [],
  });

  const { characters } = useSelector((state) => state);
  const pageCharacter = characters.find((character) => character.id.toString() === id);

  useEffect(() => {
    setstate((prev) => ({
      ...prev,
      ...pageCharacter,
    }));
  }, pageCharacter);

  const {
    name,
    species,
    image,
    gender,
    alias,
    origin,
    abilities,
  } = state;

  return (
    <div className="flex">
      <div className="my-profile">
        <div className="slideshow-container">
          <div className="character-details-image">
            <a href="/">
              <i className="fas fa-chevron-left" />
            </a>
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="my-character-details-info">
          <h2>{name}</h2>
          <h3>
            {`${abilities?.length} `}
            abilities
          </h3>
          <h3>
            {`${alias?.length} `}
            aliases
          </h3>
        </div>
      </div>
      <div className="other-info">
        <p>ADDITIONAL INFORMATION</p>
        <h3>
          Species
          <div className="span-div">
            <span>{`${species}`}</span>
            <i className="far fa-arrow-circle-right" />
          </div>
        </h3>
        <h3>
          Gender
          <div className="span-div">
            <span>{`${gender}`}</span>
            <i className="far fa-arrow-circle-right" />
          </div>
        </h3>
        <h3>
          Origin
          <div className="span-div">
            <span>{`${origin}`}</span>
            <i className="far fa-arrow-circle-right" />
          </div>
        </h3>
        <h3 className="abilities">
          <div className="abilities-div">
            Abilities
            <i className="far fa-arrow-circle-right" />
          </div>
          <ul>
            {(abilities.length > 0)
            && (abilities.map((ability) => <li key={uuidv4()}>{ability}</li>))}
            {(abilities.length === 0)
            && (<li key={uuidv4()}>no abilities</li>)}
          </ul>
        </h3>
        <h3 className="abilities">
          <div className="abilities-div">
            Aliases
            <i className="far fa-arrow-circle-right" />
          </div>
          <ul>
            {(alias.length > 0)
            && (alias.map((item) => <li key={uuidv4()}>{item}</li>))}
            {(alias.length === 0)
            && (<li key={uuidv4()}>no aliases</li>)}
          </ul>
        </h3>
      </div>
    </div>
  );
};

CharacterDetails.propTypes = {
  match: propTypes.objectOf(propTypes.object).isRequired,
};

export default CharacterDetails;
