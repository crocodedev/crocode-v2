export type TImage = {
  image: {
    asset: {
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
        lqip: string;
      };
      url: string;
    };
  };
  altText: string;
  _key: string | null;
};
