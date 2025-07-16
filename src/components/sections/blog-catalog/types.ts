import { TSanityImage } from '@/types/image';
import { TPagination } from '@/types/pagination';
import { TImage } from '@/types/types';

export type TArticleContentBlock = {
  title?: string;
  text?: string[] | null;
  contentImage?: TSanityImage | null;
};

export type TArticle = {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: TSanityImage;
  seo: {
    title: string;
    description: string;
    keywords: string | null;
  };
  author: string;
  content: TArticleContentBlock[] | null;
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
