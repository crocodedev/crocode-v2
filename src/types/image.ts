export type TImage = {
  src: string;
  alt: string;
};

export type TSanityImage = {
  altText: string;
  image: {
    asset: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    hotspot: {
      width: number;
      height: number;
    };
  };
};
