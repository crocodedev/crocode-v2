import { PortableTextBlock } from '@portabletext/react';

import { TSanityImage } from '@/types/image';
import { TImage, TLink, TSeo } from '@/types/types';

import { TBreadcrumbs } from '../breadcrumbs/type';

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
  contentRaw: PortableTextBlock;
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
