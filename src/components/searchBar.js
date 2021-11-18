import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCHARACTERS, loadcharacters } from '../redux/characters/characters';

const SearchBar = () => {
  const [character, setCharacter] = useState('');

  const dispatch = useDispatch();

  const filterData = (character) => {
    if (character) {
      dispatch(filterCHARACTERS(character));
    } else {
      dispatch(loadcharacters());
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCharacter((prev) => (prev === value ? prev : value));
    filterData(value);
  };

  return (<input type="text" name="character" onInput={handleChange} value={character} className="character-input" placeholder="search character name..." />);
};

export default SearchBar;
