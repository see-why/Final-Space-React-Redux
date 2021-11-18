import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import MainCard from './mainCard';
import { loadcharacters } from '../redux/characters/characters';
import { loadepisodes } from '../redux/episodes/episodes';
import CharacterDetails from './characterDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadcharacters());
    dispatch(loadepisodes());
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <MainCard />
      </Route>
      <Route path="/character/:id" component={CharacterDetails} />
    </Switch>
  );
}

export default App;
