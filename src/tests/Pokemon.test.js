import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

describe('testando o componente pokemon', () => {
  test('testando se a imagem do pokemon esta correta', () => {
    renderWithRouter(<App />);
    const name = screen.getByTestId('pokemon-name').innerHTML;
    const type = screen.getByTestId('pokemon-type');
    const image = screen.getByRole('img');
    const list = pokemonList.find((el) => el.name === name);
    const bttn = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(image.src).toBe(list.image);
    expect(image.alt).toBe(`${name} sprite`);
    userEvent.click(bttn);
    const favorit = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(favorit);
    const star = screen.getByRole('img', { name: `${name} is marked as favorite` });
    expect(star.src).toBe('http://localhost/star-icon.svg');
    expect(star.alt).toBe(`${name} is marked as favorite`);
    expect(type).toHaveTextContent(list.type);
    expect(bttn.href).toBe(`http://localhost/pokemon/${list.id}`);
  });
});
