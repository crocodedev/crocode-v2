import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import { data } from './data';
import styles from './styles.module.scss';
import { TContainerImagesProps, TIconCardProps } from './types';

const PAGE_URL = '/technologie';

const IconCard = ({ title, icon, slug, altText }: TIconCardProps) => {
  return (
    <Link className={styles.card__icon} href={PAGE_URL + slug}>
      <Image
        className={styles.card__icon__image}
        width={110}
        height={110}
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

const TechnologyStackSection = () => {
  const [indexActiveCard, setIndexActiveCard] = useState<string | null>(null);

  const handleClickMore = (index: string) => {
    setIndexActiveCard((prev) => (prev === index ? null : index));
  };
  return (
    <SectionLayout className={styles.section}>
      <div className={`${styles.container}`}>
        {data?.map((item, index) => {
          const isActive = indexActiveCard === item.title;

          return (
            <Fragment key={item.title + index}>
              <Card
                onClick={handleClickMore.bind(null, item.title)}
                className={`
                ${styles.card}  
                ${styles.card}__${index + 1}
                ${indexActiveCard && styles.hide}
                `}
                key={item.title}
              >
                <h2 className={styles.card__title}>
                  {item.title.toUpperCase()}
                </h2>
              </Card>

              {isActive && (
                <Card
                  onClick={handleClickMore.bind(null, item.title)}
                  className={`${styles.card} ${styles.card__absolute} ${styles.card}__${index + 1} `}
                >
                  <ContainerItems
                    items={item.technologiesList.slice(
                      0,
                      item.technologiesList.length / 2,
                    )}
                  />
                  <h2 className={styles.card__title_active}>
                    {item.title.toUpperCase()}
                  </h2>
                  <ContainerItems
                    items={item.technologiesList.slice(
                      item.technologiesList.length / 2,
                      item.technologiesList.length,
                    )}
                  />
                </Card>
              )}
            </Fragment>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default TechnologyStackSection;
