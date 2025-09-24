type TLink = {
  text: string;
  href: string;
};

type TItems = [TLink, TLink, TLink, TLink];

export const items: TItems = [
  {
    text: 'Rozwój gry',
    href: '/tworzenie-gier',
  },
  {
    text: 'Wydzielony zespół',
    href: '/dedykowane-zespoly',
  },
  {
    text: 'Software na zamówienie',
    href: '/oprogramowanie-na-zamowienie',
  },
  {
    text: 'Rozwój MVP',
    href: '/rozwoj-mvp',
  },
];
