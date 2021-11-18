const LOAD_EPISODES = 'final-space-hub/episodes/LOAD_EPISODES';
const GET_EPISODES = 'final-space-hub/episodes/GET_EPISODES';
const FILTER_EPISODES = 'final-space-hub/episodes/FILTER_EPISODES';

const initialState = [];

export const loadEPISODES = (episodes) => ({
  type: LOAD_EPISODES,
  payload: episodes,
});

export const getEPISODES = (id) => ({
  type: GET_EPISODES,
  payload: id,
});

const getepisodes = async () => {
  const request = await fetch('https://finalspaceapi.com/api/v0/episode/');
  const result = await request.json();
  return result;
};

export const loadepisodes = () => async (dispatch) => {
  const getResult = await getepisodes();
  const episodes = getResult.map((EPISODES) => ({
    id: EPISODES.id,
    name: EPISODES.name,
    date: EPISODES.air_date,
    image: EPISODES.img_url,
    director: EPISODES.director,
    writer: EPISODES.writer,
    characters: EPISODES.characters,
  }));
  if (episodes) {
    dispatch(loadEPISODES(episodes));
  }
};

const episodesReducer = (state = initialState, action) => {
  const { payload: episodes } = action;
  switch (action.type) {
    case LOAD_EPISODES:
      return episodes;
    case GET_EPISODES:
      return state.filter((EPISODES) => EPISODES.id === episodes);
    case FILTER_EPISODES:
      return state.filter((EPISODES) => EPISODES.id === episodes);
    default:
      return state;
  }
};

export default episodesReducer;
