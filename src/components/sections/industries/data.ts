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
  title: 'Industries',
  items: [
    {
      link: {
        text: 'eCommerce',
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
        text: 'GameDev',
        href: '/game-dev',
      },
    },
  ],
};
