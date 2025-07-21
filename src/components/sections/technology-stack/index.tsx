import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import styles from './styles.module.scss';
import { TContainerImagesProps, TIconCardProps, TProps } from './types';

const PAGE_URL = '/technologies';

const IconCard = ({ slug, title, url, altText }: TIconCardProps) => {
  return (
    <Link className={styles.card__icon} href={PAGE_URL + slug}>
      <Image
        className={styles.card__icon__image}
        width={110}
        height={110}
        alt={altText}
        src={url}
      />
      <span className={styles.card__icon__title}>{title}</span>
    </Link>
  );
};

const ContainerImages = ({ icons, slug }: TContainerImagesProps) => {
  return (
    <div className={styles.card__icon__container}>
      {icons?.map((icon) => {
        const url = icon?.technologyImage?.image?.asset?.url;
        const altText = icon.technologyImage.altText;
        const title = icon.title;

        return (
          <IconCard
            key={title}
            url={url}
            title={title}
            altText={altText}
            slug={slug}
          />
        );
      })}
    </div>
  );
};

const TechnologyStackSection = ({ categories }: TProps) => {
  const [indexActiveCard, setIndexActiveCard] = useState<string | null>(null);

  const handleClickMore = (index: string) => {
    setIndexActiveCard((prev) => (prev === index ? null : index));
  };
  return (
    <SectionLayout className={styles.section}>
      <div className={`${styles.container}`}>
        {categories?.map((item, index) => {
          const isActive = indexActiveCard === item.title;

          return (
            <Fragment key={item.title}>
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
                  <ContainerImages
                    slug={item.slug}
                    icons={item.technologiesList.slice(
                      0,
                      item.technologiesList.length / 2,
                    )}
                  />
                  <h2 className={styles.card__title_active}>
                    {item.title.toUpperCase()}
                  </h2>
                  <ContainerImages
                    slug={item.slug}
                    icons={item.technologiesList.slice(
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
