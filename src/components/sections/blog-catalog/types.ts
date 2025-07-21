import { TBreadcrumbs } from '@/types/breadcrumbs';
import { TSanityImage } from '@/types/image';
import { TPagination } from '@/types/pagination';
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
  contentRaw: any;
  seo: TSeo;
  socials: { link: TLink }[];
};

export type TProps = {
  category: string[];
  cards?: {
    image: TImage;
    link: string;
  };
  paginationData: TPagination;
  articles: TArticle[];
};
