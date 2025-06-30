import { TRedirect } from './redirect';
import { TSeo } from './seo';

export type TPageProps = {
  allRedirects: TRedirect[];
  seo: TSeo;
};
