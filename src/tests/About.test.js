import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('testando o componente about', () => {
  test('testando se tem o h2', () => {
    renderWithRouter(<About />);
    expect(screen.getByRole('heading', {
      name: /about pokédex/i,
    })).toBeInTheDocument();
  });

  test('testando se tem dois paragrafos', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/this application simulates a pokédex/i)).toBeInTheDocument();
    expect(screen.getByText(/one can filter pokémon by type/i)).toBeInTheDocument();
  });

  test('testando se ha uma imagem pokedex', () => {
    renderWithRouter(<About />);
    const imagem = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(imagem.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
