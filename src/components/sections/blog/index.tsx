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
  linkDetails: TLink;
};

type TCardProps = {
  href?: string;
  image?: TImage;
};

const Card = ({ href, image }: TCardProps) => {
  return (
    <Link href={href || '/'} className={styles.card}>
      <Image
        className={styles.card__image}
        src={image?.src || '/images/our-project.png'}
        fill
        alt={image?.alt || 'image'}
      />
    </Link>
  );
};

const DATA_CARDS = [
  {
    href: '/blog/hard-skills-vs-soft-skills',
    image: {
      src: '/images/blogs/soft-skills.webp',
      alt: 'Image-Link for Blog Hard Skills vs Soft Skills',
    },
  },
  {
    href: '/blog/first-freelance-job-at-upwork',
    image: {
      src: '/images/blogs/upwork.webp',
      alt: 'Image-Link for Blog First Freelance Job at Upwork',
    },
  },
  {
    href: '/blog/sites-that-will-help-you-reach-a-new-level',
    image: {
      src: '/images/blogs/new-level.webp',
      alt: 'Image-Link for Blog Sites that will help you reach a new level',
    },
  },
  {
    href: '/blog/how-do-i-choose-an-executor-for-my-project',
    image: {
      src: '/images/blogs/how-choose.webp',
      alt: 'Image-Link for Blog How do I choose an executor for my project',
    },
  },
];

const BlogSection = ({ title, anchor = 'right', linkDetails }: TProps) => {
  return (
    <SectionLayout className={styles.layout}>
      <Title text={title} anchor={anchor} />
      <div className={styles.container}>
        <Card {...DATA_CARDS[2]} />
        <div className={styles.rightCol}>
          <Card {...DATA_CARDS[1]} />
          <Button
            type='link'
            href={linkDetails.href}
            className={`${styles.button} ${styles.button__lg}`}
          >
            {linkDetails.text}
          </Button>
        </div>
        <Card {...DATA_CARDS[3]} />
        <Card {...DATA_CARDS[0]} />
      </div>
      <Button className={`${styles.button} ${styles.button__md}`}>
        {linkDetails.text}
      </Button>
    </SectionLayout>
  );
};

export default BlogSection;
