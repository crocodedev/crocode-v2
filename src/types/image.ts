export type TImage = {
  src: string;
  alt: string;
};

export type TSanityImage = {
  altText: string;
  image: {
    asset: {
      url: string;
    };
  };
};
