import { TSanityImage } from '@/types/image';

export type TTechnologieCard = {
  title: string;
  slug: string;
  technologiesList: TTechnlogy[];
};

export type TTechnlogy = {
  title: string;
  technologyImage: TSanityImage;
};

export type TContainerImagesProps = {
  icons: TTechnlogy[];
  slug: string;
};

export type TTechnologiesSanity = {
  categories: TTechnologieCard[];
};

export type TProps = {
  categories: TTechnologieCard[];
};

export type TIconCardProps = {
  slug: string;
  title: string;
  url: string;
  altText: string;
};
