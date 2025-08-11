import { TImage, TLink } from '@/types/types';

type TDataCookies = {
  modalContainerId: string;
  title: string;
  text: string;
  background: TImage;
  link: TLink;
  button: {
    text: string;
  };
};

export const cookiesData: TDataCookies = {
  modalContainerId: 'cookies',
  title: 'Nasza strona używa plików cookies',
  text: 'Ta strona wykorzystuje pliki cookies do celów analitycznych, personalizacji i reklamy. Kontynuując przeglądanie, zgadzasz się na ich użycie. Aby dowiedzieć się więcej lub zmienić ustawienia cookies, ',
  background: {
    src: '/images/background.jpg',
    alt: 'tło',
  },
  link: {
    text: 'kliknij tutaj.',
    href: 'https://www.google.com',
  },
  button: {
    text: 'Akceptuję',
  },
};
