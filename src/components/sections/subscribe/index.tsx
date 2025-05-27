import { SectionLayout } from '@/components/sections';
import Button from '@/components/ui/button';

import styles from './styles.module.scss';

const SubscribeSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed!');
  };

  return (
    <SectionLayout className={styles.subscribe}>
      <form onSubmit={handleSubmit} className={styles.subscribe__form}>
        <h2 className={styles.subscribe__title}>Subscribe to our blog</h2>
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
    </SectionLayout>
  );
};

export default SubscribeSection;
