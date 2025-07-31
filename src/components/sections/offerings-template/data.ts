type TLink = {
  text: string;
  href: string;
};

type TItems = [TLink, TLink, TLink, TLink];

export const items: TItems = [
  {
    text: 'Rozwój gry',
    href: '/game-dev',
  },
  {
    text: 'Wydzielony zespół',
    href: '/dedicated-team',
  },
  {
    text: 'Tworzenie oprogramowania na zamówienie',
    href: '/custom-software-development',
  },
  {
    text: 'Tworzenie MVP',
    href: '/mvp',
  },
];
