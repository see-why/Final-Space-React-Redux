import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import episodesReducer from './episodes/episodes';
import charactersReducer from './characters/characters';

const rootReducer = combineReducers({ episodes: episodesReducer, characters: charactersReducer });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
