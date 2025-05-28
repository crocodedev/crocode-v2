import { useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Avatar, Title } from '@/components/ui';
import Button from '@/components/ui/button';

import { users } from './mockData';
import styles from './styles.module.scss';

const AboutUsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % users.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + users.length) % users.length);
  };

  return (
    <SectionLayout className={styles.section}>
      <Title text='Say About us' />
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Button className={styles.navbar__button} onClick={handlePrev}>
            {'<'}
          </Button>

          <Button className={styles.navbar__button} onClick={handleNext}>
            {'>'}
          </Button>
        </div>
        <div className={styles.container__avatars}>
          {users.map((avatar, index) => (
            <Avatar key={avatar.id} index={index} activeIndex={activeIndex} />
          ))}

          <div className={styles.container__comment}>
            <p className={styles.comment}>{users[activeIndex].comment}</p>
            <span className={styles.author}>{users[activeIndex].name}</span>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutUsSection;
