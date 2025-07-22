import { TRedirect } from './redirect';
import { TSanityError } from './sanityError';
import { TSeo } from './seo';

export type TPageProps = {
  allRedirects: TRedirect[];
  seo: TSeo;
  errors?: TSanityError;
};
