export type TCase = {
    _id: string;
    title: string;
    slug: { current: string };
    technologies: string[];
    text: string;
    marker: string;
    link: {
      _key: string;
      title: string;
      linkExternal?: { href: string; label: string; blank: boolean };
      linkInternal?: { label: string; reference?: { slug: { current: string } } };
    };
    casesItemImage: {
      altText: string;
      image: { asset: { url: string } };
    };
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  };