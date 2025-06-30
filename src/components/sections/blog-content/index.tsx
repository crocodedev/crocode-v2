import Image from 'next/image';

import { SectionLayout } from '@/components/sections';

import { TArticle } from '../blog-catalog/types';

import styles from './styles.module.scss';

type TBlogContentSectionProps = {
  article: TArticle;
};

const BlogContentSection = ({ article }: TBlogContentSectionProps) => (
  <SectionLayout className={styles.blog__wrapper}>
    <h2 className={styles.blog__title}>{article.title}</h2>
    <div className={styles.blog__image__wrapper}>
      <Image
        src={article.coverImage.image.asset.url}
        alt={article.coverImage.altText || ''}
        className={styles.blog__image}
        width={1200}
        height={600}
      />
    </div>
    {article.content && (
      <div className={styles.blog__content}>
        {article.content.map((_, index) => (
          <span key={index}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
            quas cupiditate dolorem ad sequi. Error, ad. Aut cum distinctio hic
            recusandae doloribus? Sit repudiandae excepturi eaque deserunt in
            cumque.
          </span>
        ))}
      </div> // TODO: менять sanity
    )}
  </SectionLayout>
);

export default BlogContentSection;
