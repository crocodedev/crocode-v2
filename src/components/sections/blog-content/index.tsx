import Image from 'next/image';
import { PortableTextBlock } from '@portabletext/react';

import { SectionLayout, StyleGuide } from '@/components/sections';

import { TSanityImage } from '@/types/image';
import { TLink } from '@/types/link';

import SocialsBlock from './socials-block';
import styles from './styles.module.scss';

type TProps = {
  desc: string;
  socials: { link: TLink; _key?: string }[];
  title: string;
  contentRaw: PortableTextBlock;
  coverImage: TSanityImage;
};

const BlogContentSection = ({
  desc,
  socials,
  contentRaw,
  coverImage,
}: TProps) => {
  return (
    <SectionLayout className={styles.blog__wrapper}>
      <div className={styles.blog__inner}>
        <div className={styles.blog__image__wrapper}>
          <Image
            src={coverImage.image.asset.url}
            alt={coverImage.altText || ''}
            className={styles.blog__image}
            width={1200}
            height={600}
          />
        </div>
        <h2 className={styles.blog__description}>{desc}</h2>
        <StyleGuide value={contentRaw} className={styles.blog__content} />
        <SocialsBlock socials={socials} />
      </div>
    </SectionLayout>
  );
};

export default BlogContentSection;
