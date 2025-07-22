import { TBreadcrumbs } from '../breadcrumbs/type';
import { TSanityImage } from '@/types/image';
import { TImage, TLink, TSeo } from '@/types/types';

export type TArticleContentBlock = {
  title?: string;
  text?: string[] | null;
  contentImage?: TSanityImage | null;
};

export type TArticle = {
  author: string;
  category: string;
  date: string;
  desc: string;
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: TSanityImage;
  breadcrumbs: TBreadcrumbs[];
  contentRaw: {
    children: { text: string }[];
  }[];
  seo: TSeo;
  socials: { link: TLink }[];
};

export type TProps = {
  category: string[];
  cards?: {
    image: TImage;
    link: string;
  };
  articles: TArticle[];
};
