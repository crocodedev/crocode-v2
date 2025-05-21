import { useEffect, useState } from 'react';

import Portal, { createContainer } from '../portal';

import styles from './styles.module.scss';

const MODAL_CONTAINER_ID = 'cookies';

const CookiesModal = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={styles.modal}></div>
    </Portal>
  ) : null;
};

export default CookiesModal;
