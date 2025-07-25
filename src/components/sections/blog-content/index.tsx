import Image from 'next/image';
import { CardGrid, Info, SectionLayout } from '@/components/sections';
import { TSanityImage } from '@/types/image';
import { TLink } from '@/types/link';
import SocialsBlock from './socials-block';
import { parseHtmlToBlocks } from '@/utils/parseMarkdown';
import { Fragment } from 'react';
import { TitleSection } from '@/components/ui';

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
  title,
  contentRaw,
  coverImage,
}: TProps) => {
  const html = contentRaw?.reduce(
    (acc, elem) => acc + (elem?.children?.[0]?.text || ''),
    '',
  );

  const blocksContent = parseHtmlToBlocks(html);

  return (
    <SectionLayout className={styles.blog__wrapper}>
      <h2 className={styles.blog__title}>{title}</h2>
      <div className={styles.blog__image__wrapper}>
        <Image
          src={coverImage.image.asset.url}
          alt={coverImage.altText || ''}
          className={styles.blog__image}
          width={1200}
          height={600}
        />
      </div>
      <div className={styles.blog__content}>
        <h2>{desc}</h2>
        {blocksContent && (
          <div>
            {blocksContent.length &&
              blocksContent.map((block, i) => (
                <Fragment key={i}>
                  {block.type === 'list' ? (
                    <CardGrid cards={block.content.cards} />
                  ) : block.type === 'title' ? (
                    <TitleSection label={block.content.title} />
                  ) : block.type === 'text' ? (
                    <Info texts={[block.content.text]} />
                  ) : null}
                </Fragment>
              ))}
          </div>
        )}
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
