import Image from 'next/image';

import Button from '@/components/ui/button';

import { data } from './data';
import styles from './styles.module.scss';

const SubscribeSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed!');
  };

  return (
    <section className={styles.subscribe}>
      <Image
        className={styles.subscribe__background}
        src={data.background.src}
        fill
        alt={data.background.alt}
      />
      <form onSubmit={handleSubmit} className={styles.subscribe__form}>
        <h2 className={styles.subscribe__title}>{data.title}</h2>
        <input
          className={styles.subscribe__input}
          type='email'
          placeholder='Enter E-mail'
          required
        />
        <Button type='submit' className={styles.subscribe__button}>
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default SubscribeSection;
