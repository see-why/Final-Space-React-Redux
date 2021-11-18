import charactersReducer, { loadCHARACTERS } from '../redux/characters/characters';

describe('charactersReducer Test', () => {
  const initialState = [];
  it('Returns an empty array with the initial state', () => {
    const state = charactersReducer(initialState, loadCHARACTERS(initialState));
    expect(state).toEqual([]);
  });

  it('Shows one object when action is dispatched with one object as payload', () => {
    const state = charactersReducer([], loadCHARACTERS([{
      id: 1,
      name: 'Gary Goodspeed',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      hair: 'Blonde',
    }]));
    expect(state).toEqual([{
      id: 1,
      name: 'Gary Goodspeed',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      hair: 'Blonde',
    }]);
  });

  it('Shows three objects when action is dispatched with three objects as payload', () => {
    const state = charactersReducer([], loadCHARACTERS([
      {
        id: 1,
        name: 'Gary Goodspeed',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        hair: 'Blonde',
      },
      {
        id: 2,
        name: 'Mooncake',
        status: 'Unknown',
        species: "Mooncake's Species",
        gender: 'None (referred to as male)',
        hair: 'None',
      },
      {
        id: 3,
        name: 'Quinn Ergon',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        hair: 'Dark Brown',
      },
    ]));
    expect(state).toEqual([
      {
        id: 1,
        name: 'Gary Goodspeed',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        hair: 'Blonde',
      },
      {
        id: 2,
        name: 'Mooncake',
        status: 'Unknown',
        species: "Mooncake's Species",
        gender: 'None (referred to as male)',
        hair: 'None',
      },
      {
        id: 3,
        name: 'Quinn Ergon',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        hair: 'Dark Brown',
      },
    ]);
  });
});
