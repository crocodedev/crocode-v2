import { useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Avatar, Title } from '@/components/ui';
import { IconChevronLeft, IconChevronRight } from '@/components/icons';

import { usersData } from './mockData';
import styles from './styles.module.scss';

type TProps = {
  title?: string;
  users?: {
    name: string;
    avatarUrl?: string;
    comment: string;
  }[];
};

const AboutUsSection = ({
  title = 'Say about us',
  users = usersData,
}: TProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % users.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + users.length) % users.length);
  };

  const handleClickAvatar = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SectionLayout className={styles.section}>
      <Title text={title} />
      <div className={styles.container}>
        <div className={styles.navbar}>
          <button
            type='button'
            className={styles.navbar__button}
            onClick={handlePrev}
          >
            <span className={styles.navbar__button_icon}>
              <IconChevronLeft />
            </span>
          </button>

          <button
            type='button'
            className={styles.navbar__button}
            onClick={handleNext}
          >
            <span className={styles.navbar__button_icon}>
              <IconChevronRight />
            </span>
          </button>
        </div>
        <div className={styles.container__avatars}>
          {users.map((_, index) => (
            <Avatar
              key={index}
              active={activeIndex === index}
              className={styles.avatar}
              onClick={() => handleClickAvatar(index)}
            />
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
