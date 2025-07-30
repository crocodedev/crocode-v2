import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import { data } from './data';
import styles from './styles.module.scss';
import { TContainerImagesProps, TIconCardProps } from './types';

const PAGE_URL = '/technologies';

const IconCard = ({ title, icon, slug, altText }: TIconCardProps) => {
  return (
    <Link className={styles.card__icon} href={PAGE_URL + slug}>
      <Image
        className={styles.card__icon__image}
        width={100}
        height={100}
        alt={altText}
        src={icon}
      />
      <span className={styles.card__icon__title}>{title}</span>
    </Link>
  );
};

const ContainerItems = ({ items }: TContainerImagesProps) => {
  return (
    <div className={styles.card__icon__container}>
      {items?.map((item) => {
        const slug = item.slug;
        const icon = item.image.icon;
        const altText = item.image.altText;
        const title = item.title;

        return (
          <IconCard
            slug={slug}
            key={title}
            icon={icon}
            title={title}
            altText={altText}
          />
        );
      })}
    </div>
  );
};

import { data } from './data';

const TechnologyStackSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.container}>
        {data.map((item, index) => (
          <Card className={styles.card} key={index}>
            <Link
              href={`/technologies/${item.href}`}
              className={styles.card__link}
            >
              <h2 className={styles.title}>{item.text}</h2>
            </Link>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default TechnologyStackSection;
