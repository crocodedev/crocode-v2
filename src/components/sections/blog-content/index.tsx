import { SectionLayout } from '@/components/sections';
import { TSanityImage } from '@/types/image';
import { TLink } from '@/types/link';
import SocialsBlock from './socials-block';
import Image from 'next/image';

import styles from './styles.module.scss';

type TProps = {
  desc: string;
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
  contentRaw,
  coverImage,
}: TProps) => {
  console.log({ desc, socials });
  const html = contentRaw?.reduce(
    (acc, elem) => acc + (elem?.children?.[0]?.text || ''),
    '',
  );

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
      {/* {data.content && (
        <div className={styles.blog__content}>
          {data.content.map((_, index) => (
            <span key={index}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
              quas cupiditate dolorem ad sequi. Error, ad. Aut cum distinctio
              hic recusandae doloribus? Sit repudiandae excepturi eaque deserunt
              in cumque.
            </span>
          ))}
        </div> // TODO: менять sanity
      )} */}
    </SectionLayout>
  );
};

export default BlogContentSection;
