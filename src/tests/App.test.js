import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('testando os links do componente App.js', () => {
  const { history } = renderWithRouter(<App />);
  const home = screen.getByRole('link', {
    name: /home/i,
  });
  const about = screen.getByRole('link', {
    name: /about/i,
  });
  const favoritePokemon = screen.getByRole('link', {
    name: /favorite pokémon/i,
  });

  test('testando o topo da aplicacao', () => {
    renderWithRouter(<App />);
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePokemon).toBeInTheDocument();
  });

  test('testando se esta redirecionando para a pagina principal', () => {
    userEvent.click(home);
    history.push('/');
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('testando se esta redirecionando para a pagina About', () => {
    userEvent.click(about);
    history.push('/about');
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('testando se esta redirecionando para a pagina pokemon favoritos', () => {
    userEvent.click(favoritePokemon);
    history.push('/favorites');
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('testando se esta renderizando o Not Found', () => {
    renderWithRouter(<NotFound />);
    const title = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(title).toBeInTheDocument();
  });
});
