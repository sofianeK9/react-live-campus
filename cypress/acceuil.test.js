import { expect, test } from '@jest/globals';
import Acceuil from '../src/Components/Acceuil.jsx';  


test('affiche le titre du blog', () => {
  render(Acceuil);
  
  const titleElement = screen.getByText(/Bienvenue sur mon blog !/i);
  expect(titleElement).toBeInTheDocument();
});
