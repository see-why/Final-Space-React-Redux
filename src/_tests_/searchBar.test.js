import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import SearchBar from '../components/searchBar';

describe('search bar tests', () => {
  test('search bar renders correctly', () => {
    render(<Provider store={store}><SearchBar /></Provider>);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('search character name...')).toBeInTheDocument();
    screen.debug();
  });
});
