import { screen } from '@testing-library/react';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';

describe('testando o componente FavoritePokemon', () => {
  test('testando se exibe na tela a mensagem', () => {
    renderWithRouter(<FavoritePokemon />);
    expect(screen.getByText(/no favorite pokémon found/i)).toBeInTheDocument();
  });
});
