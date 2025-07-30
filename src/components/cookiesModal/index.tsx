import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui';

import { COOKIE, cookieStore } from '@/utils/cookies';

import { useMainContext } from '../main-context';
import Portal, { createContainer } from '../portal';

import { cookiesData } from './data';
import styles from './styles.module.scss';

const CookiesModal = () => {
  const isCookieAproved = cookieStore.get(COOKIE.ACCESS);
  const [isMounted, setMounted] = useState(false);
  const { isOpenCookies, closeCookies } = useMainContext();

  useEffect(() => {
    createContainer({ id: cookiesData.modalContainerId });
    setMounted(true);
  }, []);

  return isMounted && !isCookieAproved ? (
    <Portal id={cookiesData.modalContainerId}>
      <div
        className={`
        ${styles.wrapper}
        ${!isOpenCookies ? styles.close : ''}
        `}
      >
        <div className={styles.modal}>
          <Image
            className={styles.modal__background}
            src={cookiesData.background.src}
            fill
            alt={cookiesData.background.alt}
          />
          <div className={styles.modal__column}>
            <h3>{cookiesData.title.toUpperCase()}</h3>
            <p className={styles.modal__text}>
              {cookiesData.text}
              <Link
                className={styles.modal__link}
                href={cookiesData.link.href || '#'}
              >
                {cookiesData.link.text}
              </Link>
            </p>
          </div>
          <Button className={styles.modal__button} onClick={closeCookies}>
            {cookiesData.button.text}
          </Button>
        </div>
      </div>
    </Portal>
  ) : null;
};

export default CookiesModal;
