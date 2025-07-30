/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';

import { SectionLayout } from '@/components/sections';
import { Title } from '@/components/ui';
import Button from '@/components/ui/button';
import { AnchorType } from '@/components/ui/title/types';

import { TImage, TLink } from '@/types/types';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  anchor?: AnchorType;
  cards?: any; // заполнить карточки контентом
  linkDetails: TLink;
};

type TCardProps = {
  href?: '/';
  image?: TImage;
};

const Card = ({
  href = '/',
  image = { src: '/images/our-project.png', alt: 'image' },
}: TCardProps) => {
  return (
    <Link href={href} className={styles.card}>
      <Image
        className={styles.card__image}
        src={image.src}
        fill
        alt={image.alt}
      />
    </Link>
  );
};

const BlogSection = ({ title, anchor = 'right', linkDetails }: TProps) => {
  return (
    <SectionLayout className={styles.layout}>
      <Title text={title} anchor={anchor} />
      <div className={styles.container}>
        <Card />
        <div className={styles.rightCol}>
          <Card />
          <Button
            type='link'
            href={linkDetails.href}
            className={`${styles.button} ${styles.button__lg}`}
          >
            {linkDetails.text}
          </Button>
        </div>
        <Card />
        <Card />
      </div>
      <Button className={`${styles.button} ${styles.button__md}`}>
        {linkDetails.text}
      </Button>
    </SectionLayout>
  );
};

export default BlogSection;
