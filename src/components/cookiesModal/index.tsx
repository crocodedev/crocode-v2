import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui';

import Portal, { createContainer } from '../portal';

import styles from './styles.module.scss';

const MODAL_CONTAINER_ID = 'cookies';

const CookiesModal = () => {
  const LINK_URL = 'https://www.google.com';
  const BUTTON_TEXT = 'Accept';
  const TITLE = 'Our website uses cookies';
  const TEXT =
    'This site uses cookies for analytics, personalization and advertising. By continuing to browse it, you agree to our use of cookies. To find out more or change your cookie settings';
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={styles.modal}>
        <div className={styles.modal__column}>
          <h3>{TITLE.toUpperCase()}</h3>
          <p className={styles.modal__text}>{TEXT}</p>
          <Link className={styles.modal__link} href={LINK_URL}>
            click here.
          </Link>
        </div>
        <Button className={styles.modal__button}>{BUTTON_TEXT}</Button>
      </div>
    </Portal>
  ) : null;
};

export default CookiesModal;
