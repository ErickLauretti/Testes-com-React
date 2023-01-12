import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';
import App from '../App';

describe('testando o componente pokemondetails', () => {
  test('componente pokemondetails', () => {
    renderWithRouter(<App />);
    const name = screen
      .getByTestId('pokemon-name').innerHTML;
    const list = pokemonList
      .find((el) => el.name === name);
    const bttn = screen
      .getByRole('link', { name: /more details/i });
    userEvent.click(bttn);
    const title = screen
      .getByRole('heading', { name: `${name} Details` });
    const text = screen
      .getByRole('heading', { name: /summary/i });
    const location = screen
      .getByRole('heading', { name: `Game Locations of ${name}` });
    const favorit = screen
      .getByText(/pokémon favoritado\?/i);
    const image = screen
      .getAllByAltText(`${name} location`);
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(text.nextElementSibling).toHaveTextContent(list.summary);
    expect(location).toBeInTheDocument();
    expect(favorit).toBeInTheDocument();
    image.forEach((img, index) => {
      expect(img).toBeInTheDocument();
      expect(img.src).toBe(list.foundAt[index].map);
    });
  });
});
