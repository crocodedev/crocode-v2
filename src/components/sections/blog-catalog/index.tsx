'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Card, Filters, Pagination } from '@/components/ui';

import styles from './styles.module.scss';
import { TProps } from './types';

const BlogCatalogSection = ({ category, articles }: TProps) => {
  const ITEMS_PER_PAGE = 8; // Number of articles per page: max 8, no more styles
  const [selectCategory, setSelectCategory] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticle = useMemo(() => {
    setCurrentPage(1);
    return articles.filter((item) => {
      const categoryMatch =
        selectCategory.length === 0 ||
        selectCategory.includes(item.category || '');

      return categoryMatch;
    });
  }, [category, selectCategory]);

  const totalPages = Math.ceil(filteredArticle.length / ITEMS_PER_PAGE);

  const paginatedArticle = useMemo(() => {
    const page = Math.min(currentPage, totalPages || 1);
    return filteredArticle.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE,
    );
  }, [filteredArticle, currentPage, totalPages]);

  const handleChangePage = useCallback((page: number) => {
    setCurrentPage(page);
    window.requestAnimationFrame(() => {
      document
        .getElementById('blog-top')
        ?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  const handleSelectCategory = useCallback((country: string) => {
    setSelectCategory((prev) => (prev[0] === country ? [] : [country]));
  }, []);

  console.log(paginatedArticle.length);

  if (paginatedArticle.length == 0) return null;

  return (
    <SectionLayout className={styles.section} id={'blog-top'}>
      <Filters
        items={category}
        className={styles.filters}
        select={selectCategory}
        setSelect={handleSelectCategory}
      />
      <div className={styles.container}>
        {paginatedArticle.map((article, index) => (
          <Card key={index} className={styles.card}>
            <Link className={styles.card__link} href={article.slug.current}>
              <Image
                className={styles.card__image}
                src={article.coverImage.image.asset.url}
                fill
                alt={article.coverImage.altText ?? 'image'}
              />
            </Link>
          </Card>
        ))}
      </div>
      <Pagination
        paginationData={{ currentPage, totalPages }}
        onPageChange={handleChangePage}
        showPaginationRange={true}
      />
    </SectionLayout>
  );
};

export default BlogCatalogSection;
