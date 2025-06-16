import { SectionLayout } from '@/components/sections';
import Button from '@/components/ui/button';

import { TLink } from '@/types/types';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  buttonLink?: TLink;
};

const GetStarted = ({
  title,
  buttonLink = { text: 'Start Project', href: '/' },
}: TProps) => {
  return (
    <SectionLayout>
      <div className={styles.banner}>
        <h3 className={styles.banner__title}>{title}</h3>
        <Button>{buttonLink.text}</Button>
      </div>
    </SectionLayout>
  );
};

export default GetStarted;
