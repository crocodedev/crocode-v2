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
        href: '/rozwoj-handlu-elektronicznego',
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
        href: '/rozwoj-mobilny',
      },
    },
    {
      link: {
        text: 'Twórcy gry',
        href: '/tworzenie-gier',
      },
    },
  ],
};
