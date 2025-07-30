import Image from 'next/image';

import { SectionLayout } from '@/components/sections';

import { TSanityImage } from '@/types/image';
import { TLink } from '@/types/link';

// import { parseHtmlToBlocks } from '@/utils/parseMarkdown';

import SocialsBlock from './socials-block';
import styles from './styles.module.scss';

type TProps = {
  desc: string;
  socials: { link: TLink; _key?: string }[];
  title: string;
  // contentRaw: any;
  socials: { link: TLink }[];
  title: string;
  contentRaw: {
    children: { text: string }[];
  }[];
  coverImage: TSanityImage;
};

const BlogContentSection = ({
  desc,
  socials,
  title,
  // contentRaw,
  coverImage,
}: TProps) => {
  // const html = contentRaw?.reduce(
  //   //@ts-expect-error
  //   (acc, elem) => acc + (elem?.children?.[0]?.text || ''),
  //   '',
  // );

  // console.log(parseHtmlToBlocks(html));
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
        <div
          className={styles.blog__content}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <SocialsBlock socials={socials} />
      </div>
    </SectionLayout>
  );
};

export default BlogContentSection;
