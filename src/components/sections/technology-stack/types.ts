export type TTechnologieCard = {
  title: string;
  technologiesList: TTechnlogy[];
};

export type TTechnlogy = {
  title: string;
  slug: string;
  image: TTechologyImage;
};


export type TTechologyImage = {
  icon: string;
  altText: string;
}

export type TContainerImagesProps = {
  items: TTechnlogy[];
};


export type TProps = {
  categories: TTechnologieCard[];
};

export type TIconCardProps = {
  title: string;
  icon: string;
  slug: string;
  altText: string;
};
