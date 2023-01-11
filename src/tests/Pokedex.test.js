import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testando o componente Pokedex', () => {
  test('testando se tem o h2', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('heading', {
      name: /encountered pokémon/i,
    })).toBeInTheDocument();
  });

  test('testando se tem os botoes de filtro', () => {
    renderWithRouter(<App />);
    const bttn = screen.getAllByTestId('pokemon-type-button');
    expect(bttn[0]).toHaveTextContent('Electric');
    expect(bttn[1]).toHaveTextContent('Fire');
    expect(bttn[2]).toHaveTextContent('Bug');
    expect(bttn[3]).toHaveTextContent('Poison');
    expect(bttn[4]).toHaveTextContent('Psychic');
    expect(bttn[5]).toHaveTextContent('Normal');
    expect(bttn[6]).toHaveTextContent('Dragon');
  });

  test('botao de filtragem', () => {
    renderWithRouter(<App />);
    const botao = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(botao);
    expect(botao).toBeInTheDocument();
  });
});
