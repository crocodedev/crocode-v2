type TData = {
  title: string;
  items: {
    id: number;
    title: string;
    text?: string;
  }[];
};

export const DATA: TData = {
  title: `CO TO JEST MVP?`,
  items: [
    {
      id: 1,
      title: 'Podstawowe narzędzia w rozwoju front-endu',
      text: 'Skuteczny projekt developerski wymaga użycia odpowiednich narzędzi i technologii. Nasi programiści front-endowi opierają się na trzech głównych technologiach: HTML, CSS i JavaScript, które pomimo ciągłej ewolucji technologii pozostają fundamentem rozwoju frontendu.',
    },
    {
      id: 2,
      title:
        'HTML (HyperText Markup Language) służy do strukturyzacji tekstów i organizowania elementów na stronie internetowej',
    },
    {
      id: 3,
      title:
        'CSS (Cascading Style Sheets) definiuje sposób prezentacji użytkownikom podstawowych struktur stworzonych w HTML',
    },
    {
      id: 4,
      title:
        'JavaScript - trzecie kluczowe narzędzie - pozwala developerom modyfikować strony internetowe zgodnie z wymaganiami użytkowników',
    },
  ],
};
