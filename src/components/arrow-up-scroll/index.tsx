import { useEffect, useState } from 'react';

// import { Button } from '@/components/ui';

import { IconArrowUp } from '../icons';
import Portal, { createContainer } from '../portal';

import styles from './styles.module.scss';

const ARROW_CONTAINER_ID = 'arrow-scroll';
const SCROLL_THRESHOLD = 900;

const ArrowUpScroll = () => {
  const [isMounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    createContainer({ id: ARROW_CONTAINER_ID });
    setMounted(true);

    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > SCROLL_THRESHOLD;
      if (shouldBeVisible !== isVisible) {
        setIsVisible(shouldBeVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <Portal id={ARROW_CONTAINER_ID}>
      <button
        type='button'
        className={`${styles.wrapper} ${isVisible ? styles.visible : ''}`}
        onClick={scrollToTop}
      >
        <IconArrowUp />
      </button>
    </Portal>
  );
};

export default ArrowUpScroll;
