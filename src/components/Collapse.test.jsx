import { render, screen , fireEvent} from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Collapse from './Collapse';

 describe('Collapse (stateful)', () => {
  test('fermé par défaut, souvre au clic', async () => {
  
    render(
      <Collapse title="Description" content="Contenu du collapse" />)
         
    expect(screen.getByText('Description')).toBeInTheDocument();  //la description est bien là
    fireEvent.click(screen.getByTestId('collapse-title')); // on clique sur la description
    expect(screen.getByText('Contenu du collapse')).toBeInTheDocument(); // le contenu est bien là après le clic
  })})
