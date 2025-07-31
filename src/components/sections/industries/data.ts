type TData = {
  title: string;
  items: {
    link: {
      text: string;
      href: string;
    };
  }[];
  color?: `green` | `black` | `grey`;
};

export const data: TData = {
  title: 'Branże',
  items: [
    {
      link: {
        text: 'eHandel',
        href: '/e-commerce-development',
      },
    },
    {
      link: {
        text: 'Web',
        href: '/',
      },
    },
    {
      link: {
        text: 'Mobile',
        href: '/',
      },
    },
    {
      link: {
        text: 'Twórcy gry',
        href: '/game-dev',
      },
    },
  ],
};
