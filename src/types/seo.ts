import { TSanityImage } from './image';

export type TSeo = {
  titleTemplate: boolean;
  title: string;
  description: string;
  keywords: string;
  image: TSanityImage;
  ogType: string;
  twitterCard: string;
};
