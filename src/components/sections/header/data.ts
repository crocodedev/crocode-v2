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
      href: '/our-services',
    },
    {
      text: 'Projekty',
      href: `/cases`,
    },
    {
      text: 'Technologie',
      href: '/technologies',
    },
    {
      text: 'O nas',
      href: '/about-us',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
};
