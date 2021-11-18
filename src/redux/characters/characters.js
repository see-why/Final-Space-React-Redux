const LOAD_CHARACTERS = 'final-space-hub/characters/LOAD_CHARACTERS';
const LOADSINGLE_CHARACTERS = 'final-space-hub/characters/LOADSINGLE_CHARACTERS';
const GET_CHARACTERS = 'final-space-hub/characters/GET_CHARACTERS';
const FILTER_CHARACTERS = 'final-space-hub/characters/FILTER_CHARACTERS';

const initialState = [];

export const loadCHARACTERS = (characters) => ({
  type: LOAD_CHARACTERS,
  payload: characters,
});

export const loadSingleCHARACTER = (characters) => ({
  type: LOADSINGLE_CHARACTERS,
  payload: characters,
});

export const getCHARACTERS = (id) => ({
  type: GET_CHARACTERS,
  payload: id,
});

export const filterCHARACTERS = (characters) => ({
  type: FILTER_CHARACTERS,
  payload: characters,
});

const getcharacters = async () => {
  const request = await fetch('https://finalspaceapi.com/api/v0/character/');
  const result = await request.json();
  return result;
};

const getSingleCharacter = async (id) => {
  const request = await fetch(`https://finalspaceapi.com/api/v0/character/${id}`);
  const result = await request.json();
  return result;
};

export const loadcharacters = () => async (dispatch) => {
  const getResult = await getcharacters();
  const characters = getResult.map((CHARACTERS) => ({
    id: CHARACTERS.id,
    name: CHARACTERS.name.toUpperCase(),
    species: CHARACTERS.species,
    image: CHARACTERS.img_url,
    gender: CHARACTERS.gender,
    alias: CHARACTERS.alias,
    origin: CHARACTERS.origin,
    abilities: CHARACTERS.abilities,
  }));
  if (characters) {
    dispatch(loadCHARACTERS(characters));
  }
};

export const loadSingleCharacter = (id) => async (dispatch) => {
  const getResult = await getSingleCharacter(id);
  const characters = getResult.map((CHARACTERS) => ({
    id: CHARACTERS.id,
    name: CHARACTERS.name.toUpperCase(),
    species: CHARACTERS.species,
    image: CHARACTERS.img_url,
    gender: CHARACTERS.gender,
    alias: CHARACTERS.alias,
    origin: CHARACTERS.origin,
    abilities: CHARACTERS.abilities,
  }));
  if (characters) {
    dispatch(loadSingleCHARACTER(characters));
  }
};

const charactersReducer = (state = initialState, action) => {
  const { payload: characters } = action;
  let searchString = '';
  switch (action.type) {
    case LOAD_CHARACTERS:
      return characters;
    case GET_CHARACTERS:
      return state.filter((CHARACTERS) => CHARACTERS.id === characters);
    case FILTER_CHARACTERS:
      searchString = characters.toLowerCase();
      return state.filter((CHARACTERS) => CHARACTERS.name.toLowerCase().includes(searchString));
    case LOADSINGLE_CHARACTERS:
      return characters;
    default:
      return state;
  }
};

export default charactersReducer;
