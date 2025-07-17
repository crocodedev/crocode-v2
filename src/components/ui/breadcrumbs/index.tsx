import styles from './styles.module.scss';
import { IconsArrow } from '@/components/icons';
import { TLinkExternal, TLinkInternal } from '@/types/link';
import SmartLink from '../smart-link';
import { Fragment } from 'react';
import Link from 'next/link';

type TBreadcrumbItem = {
  title: string;
  path: string;
};

type TBreadcrumbs = TBreadcrumbItem[];

type TSanityItem = {
  linkExternal: TLinkExternal;
  linkInternal: TLinkInternal;
};

type TProps = {
  sanityData?: TSanityItem[];
  data?: TBreadcrumbs;
  className?: string;
};

const DEFAULT_BREADCRUMBS: TBreadcrumbs = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'cases',
    path: '/cases',
  },
];

const Breadcrumbs = ({
  data = DEFAULT_BREADCRUMBS,
  sanityData,
  className,
}: TProps) => {
  const itemsToRender = sanityData ?? data ?? [];

  if (!itemsToRender.length) return null;

  return (
    <div className={`${styles.breadcrumbs} ${className}`}>
      {itemsToRender.map((item, i, arr) => {
        const isLast = i === arr.length - 1;
        const linkClassName = `${styles.breadcrumbs__link} ${
          isLast ? styles.breadcrumbs__link_last : ''
        }`;

        return (
          <Fragment key={i}>
            {sanityData ? (
              <SmartLink data={item as TSanityItem} className={linkClassName} />
            ) : (
              <Link
                href={(item as TBreadcrumbItem).path}
                className={linkClassName}
              >
                {(item as TBreadcrumbItem).title}
              </Link>
            )}

            {!isLast && (
              <span className={styles.breadcrumbs__arrow}>
                <IconsArrow />
              </span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
