import { TLinkInternal, TLinkExternal } from '@/types/link';

export type TBreadcrumbs = {
  linkInternal: TLinkInternal | null;
  linkExternal: TLinkExternal | null;
}[];
