type THeader = {
  button: string;
  links: {
    text: string;
    href: string;
  }[];
};

export const data: THeader = {
  button: 'Kontakt',
  links: [
    {
      text: 'Główna',
      href: '/',
    },
    {
      text: 'Usługi',
      href: '/uslugi',
    },
    {
      text: 'Projekty',
      href: `/projekty`,
    },
    {
      text: 'Technologie',
      href: '/technologie',
    },
    {
      text: 'O nas',
      href: '/o-nas',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
};
