/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Pagination } from '@/components/ui';

import { TImage } from '@/types/types';

import styles from './styles.module.scss';

type TCards = {
  image: TImage;
  href: string;
};

const cards: TCards[] = Array.from({ length: 6 }).map((item) => ({
  image: {
    src: '/images/our-project.png',
    alt: 'our-project',
  },
  href: '#',
}));

type TProps = {
  cards: any; // заполнить карточки контентом
};

const CasesSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <Link href={card.href} className={styles.card} key={index}>
            <Image
              className={styles.card__image}
              src={card.image.src}
              width={700}
              height={350}
              alt={card.image.alt}
            />
          </Link>
        ))}
      </div>
      <Pagination currentPage={0} totalPages={10} />
    </SectionLayout>
  );
};

export default CasesSection;
