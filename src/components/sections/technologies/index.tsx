import Image from 'next/image';
import { useCallback, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Card, Title } from '@/components/ui';

import { data } from './data';
import styles from './styles.module.scss';

const Technologies = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const smartNumber = (num: number) => (num >= 10 ? `${num}` : `0${num}`);

  const handleClickOnCard = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <SectionLayout>
      <Title text={data.title} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {data.categories.map((category, index) => (
            <Card
              key={index}
              className={`${styles.card}${activeIndex === index ? ' ' + styles.active : ''}`}
              onClick={() => handleClickOnCard(index)}
            >
              <div className={styles.card__inner}>
                <div className={styles.card__header}>
                  <h3 className={styles.card__title}>{category.title}</h3>
                  <span className={styles.card__number}>
                    {smartNumber(index + 1)}
                  </span>
                </div>
                <div className={styles.card__technologies}>
                  {category.technologiesList?.map((technology, index) => (
                    <div className={styles.card__technology} key={index}>
                      <span className={styles.card__technology_icon}>
                        <Image
                          loading='lazy'
                          src={technology.image.src}
                          fill
                          alt={technology.image.alt}
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
