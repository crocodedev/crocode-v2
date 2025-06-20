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
  title: 'Our website uses cookies',
  text: 'This site uses cookies for analytics, personalization and advertising. By continuing to browse it, you agree to our use of cookies. To find out more or change your cookie settings, ',
  background: {
    src: '/images/background.jpg',
    alt: 'background',
  },
  link: {
    text: 'click here.',
    href: 'https://www.google.com',
  },
  button: {
    text: 'Accept',
  },
};
