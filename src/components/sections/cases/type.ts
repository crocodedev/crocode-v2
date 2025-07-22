export type TTechnology = {
  title: string;
  icon?: {
    asset: {
      url: string;
    };
  };
};

export type TCase = {
  _id: string;
  title: string;
  country: string;
  slug: { current: string };
  technologiesList: TTechnology[];
  contentRaw: {
    children: { text: string }[];
  }[];
  duration: string;
  service: string;
  industry: string;
  casesItemImage: {
    altText: string;
    image: { asset: { url: string } };
  };
  images: {
    altText: string;
    image: { asset: { url: string } };
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};
