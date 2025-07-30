import styles from './styles.module.scss';
import { IconsArrow } from '@/components/icons';
import { TLinkExternal, TLinkInternal } from '@/types/link';
import SmartLink from '../../ui/smart-link';
import { Fragment } from 'react';
import Link from 'next/link';
import SectionLayout from '../section-layout';

type TBreadcrumbItem = {
  title: string;
  path: string;
};

type TSanityItem = {
  linkExternal: TLinkExternal | null;
  linkInternal: TLinkInternal | null;
};

type TProps = {
  sanityData?: TSanityItem[];
  data?: TBreadcrumbItem[];
  className?: string;
};

const Breadcrumbs = ({ data, sanityData, className }: TProps) => {
  const itemsToRender = sanityData ?? data ?? [];

  return (
    <SectionLayout className={`${styles.breadcrumbs} ${className}`}>
      {itemsToRender.length
        ? itemsToRender.map((item, i, arr) => {
            const isLast = i === arr.length - 1;
            const linkClassName = `${styles.breadcrumbs__link} ${
              isLast ? styles.breadcrumbs__link_last : ''
            }`;

            return (
              <Fragment key={i}>
                {sanityData ? (
                  <SmartLink
                    data={item as TSanityItem}
                    className={linkClassName}
                  />
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
          })
        : null}
    </SectionLayout>
  );
};

export default Breadcrumbs;
