// src/components/Banner.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Banner from './Banner';

describe('Banner (stateless)', () => {
  it('affiche la bannière (background-image) et le texte quand les props sont fournies', () => {
    const { container } = render(
      <Banner image="banner-home.jpg" text="Chez vous, partout et ailleurs" />
    );

    const bannerDiv = container.querySelector('.banner');
    expect(bannerDiv).toBeInTheDocument();

    // Vérifie que l'inline-style contient l'URL passée
    expect(bannerDiv.style.backgroundImage).toContain('banner-home.jpg');

    // Le titre est bien rendu
    expect(
      screen.getByRole('heading', { name: /chez vous, partout et ailleurs/i })
    ).toBeInTheDocument();
  });

  it("n'affiche pas de texte si la prop 'text' est absente", () => {
    const { container } = render(<Banner image="banner-home.jpg" />);
    const bannerDiv = container.querySelector('.banner');

    expect(bannerDiv).toBeInTheDocument();
    expect(bannerDiv.style.backgroundImage).toContain('banner-home.jpg');

    // Pas de <h1> si pas de texte
    expect(screen.queryByRole('heading')).toBeNull();
  });
});
