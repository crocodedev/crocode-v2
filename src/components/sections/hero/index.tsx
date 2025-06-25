import { ModelsLayout, SectionLayout } from '@/components/sections';
import { Button } from '@/components/ui';
import Image from 'next/image';
import { TImage } from '@/types/types';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';

const COMPONENT_MODELS = [
  {
    prompt: MODELS.ROGUE.url,
    scale: { desktop: 0.2, mobile: 0.1 },
    rotation: [Math.PI / 4, 0, 0],
    position: { desktop: [-0.55, 0.2, 0], mobile: [-0.1, 0.1, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    scale: { desktop: 0.15, mobile: 0.08 },
    rotation: [Math.PI / 1, Math.PI / 4, -Math.PI * 0.25],
    position: { desktop: [-0.3, 0.15, 0], mobile: [0.1, 0.23, 0] },
  },
  {
    prompt: MODELS.CROSS.url,
    scale: { desktop: 0.15, mobile: 0.08 },
    rotation: [-Math.PI * 0.55, -Math.PI * 0.9, Math.PI * 0.15],
    position: { desktop: [-0.4, -0.05, 0], mobile: [-0.01, 0.17, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    scale: { desktop: 0.1, mobile: 0.05 },
    rotation: [Math.PI * 0.1, Math.PI * 0.15, Math.PI * 0.3],
    position: { desktop: [0.52, -0.05, 0], mobile: [0.08, 0.1, 0] },
  },
  {
    prompt: MODELS.CROSS.url,
    scale: { desktop: 0.15, mobile: 0.08 },
    rotation: [0, Math.PI * -0.8, Math.PI / 8],
    position: { desktop: [0.4, 0.15, 0], mobile: [-0.01, -0.12, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    scale: { desktop: 0.15, mobile: 0.08 },
    rotation: [Math.PI / 1, Math.PI / 4, -Math.PI * 0.25],
    position: { desktop: [-0.55, -0.2, 0], mobile: [-0.1, -0.1, 0] },
  },
];

type TProps = {
  typeText?: 'default' | 'main' | string;
  modelsIsShow: boolean;
  title: string;
  image?: TImage;
};

const Hero = ({
  title,
  image = {
    src: '/images/background.jpg',
    alt: 'background',
  },
  typeText = 'default',
}: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <ModelsLayout models={COMPONENT_MODELS} lightIntensity={4} />
      <div className={styles.hero}>
        <Image
          loading='eager'
          className={styles.hero__background}
          src={image.src}
          fill
          alt={image.alt}
        />
        <div className={styles.hero__content}>
          <h1
            className={`${styles.hero__title} ${styles[`hero__title_${typeText}`]}`}
          >
            {title}
          </h1>
          <Button className={styles.hero__button}>Contact us</Button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hero;
