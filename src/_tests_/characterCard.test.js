import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterCard from '../components/characterCard';

test('renders a message', () => {
  const { getByText } = render(<CharacterCard
    characterId={1}
    characterName="Gary Goodspeed"
    characterImageUrl="https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png"
    characterAbilities={[]}
  />);
  expect(getByText('0 abilities')).toBeInTheDocument();
});
