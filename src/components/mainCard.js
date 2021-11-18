import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CharacterCard from './characterCard';
import TopSection from './topSection';
import SearchBar from './searchBar';
import '../css/characterCards.css';

const MainCard = () => {
  const { characters, episodes } = useSelector((state) => state);

  let slideIndex = 0;

  const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    slideIndex += 1;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'flex';
    setTimeout(showSlides, 5000);
  };

  useEffect(() => {
    showSlides();
  }, []);

  const Characters = characters.map((character) => {
    const {
      id,
      name,
      image,
      abilities,
    } = character;
    return (
      <CharacterCard
        key={uuidv4()}
        characterId={id}
        characterName={name}
        characterImageUrl={image}
        characterAbilities={abilities}
      />
    );
  });

  return (
    <div className="parent-div">
      <TopSection charactersCount={characters.length} episodesCount={episodes.length} />
      <div>
        <SearchBar />
        <div className="character-Container">
          {Characters}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
