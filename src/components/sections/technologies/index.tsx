import Image from 'next/image';
import { useCallback, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import { TImage } from '@/types/types';

import styles from './styles.module.scss';

type TCategory = {
  title: string;
  slug: string;
  text: string;
  _key: string;
  technologiesList: {
    title: string;
    _key: string;
    technologyImage: TImage;
  }[];
};

type TProps = {
  title: string;
  categories: TCategory[];
};

const Technologies = (props: TProps) => {
  console.log(props);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickOnCard = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <SectionLayout>
      <Title text={props.title} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {props.categories.map((category, index) => (
            <Card
              key={category._key}
              className={`${styles.card}${activeIndex === index ? ' ' + styles.active : ''}`}
              onClick={() => handleClickOnCard(index)}
            >
              <div className={styles.card__inner}>
                <div className={styles.card__header}>
                  <h3 className={styles.card__title}>{category.title}</h3>
                </div>
                <div className={styles.card__technologies}>
                  {category.technologiesList.map((technology) => (
                    <div
                      className={styles.card__technology}
                      key={technology._key}
                    >
                      <span className={styles.card__technology_icon}>
                        <Image
                          src={technology.technologyImage.image.asset.url}
                          fill
                          alt={technology.technologyImage.altText}
                        />
                      </span>
                      <span className={styles.card__technology_name}>
                        {technology.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Technologies;
