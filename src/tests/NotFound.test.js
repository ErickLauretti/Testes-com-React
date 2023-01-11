import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('testando o componente NotFound', () => {
  test('testando se tem o h2', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByRole('heading', {
      name: /page requested not found/i,
    })).toBeInTheDocument();
  });

  test('testando se aparece a imagem', () => {
    renderWithRouter(<NotFound />);
    const imagem = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(imagem.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
