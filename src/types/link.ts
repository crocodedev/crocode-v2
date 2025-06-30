export type TLinkExternal = {
  blank?: boolean;
  href: string;
  label: string;
};

export type TLinkInternal = {
  reference: {
    slug: {
      current: string;
    };
  };
  label: string;
};

export type TPdf = {
  asset: {
    url: string;
  };
};

export type TLink = {
  linkExternal: TLinkExternal | null;
  linkInternal: TLinkInternal | null;
  pdf?: TPdf;
  title: string;
  _key: string | null;
  text: string;
  href: string;
};
