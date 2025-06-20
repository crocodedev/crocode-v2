import Image from 'next/image';

import { ModelsLayout, SectionLayout } from '@/components/sections';
import { Button } from '@/components/ui';

import { TImage } from '@/types/types';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';

const MODELS_LIST = [
  {
    prompt: MODELS.ROGUE.url,
    className: styles.rogue,
    lightIntensity: 2,
    rotation: [Math.PI / 10, 0, 0] as [number, number, number],
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    className: styles.hollow_planet_1,
    lightDirectionPosition: [40, 20, 20],
    rotation: [Math.PI / 3.2, 0, -Math.PI * 0.25] as [number, number, number],
    lightIntensity: 5,
  },
  {
    prompt: MODELS.CROSS.url,
    lightIntensity: 2.5,
    className: styles.cross_1,
    rotateY: Math.PI / 6,
    rotation: [-Math.PI * 0.55, Math.PI * 0.65, Math.PI * 0.45] as [
      number,
      number,
      number,
    ],
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,

    className: styles.hollow_planet_2,
    lightIntensity: 5,
    cameraPosition: [1.5, 1.8, 1.8],
    lightDirectionPosition: [10, 5, 5],
    rotation: [Math.PI * 0.3, Math.PI * 0.18, Math.PI * 0.3] as [
      number,
      number,
      number,
    ],
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    className: styles.hollow_planet_3,
    lightIntensity: 5,
    rotation: [Math.PI / 5, 0, 0] as [number, number, number],
  },
  {
    prompt: MODELS.CROSS.url,
    lightIntensity: 2.5,
    className: styles.cross_2,
    rotateY: Math.PI / 6,
    rotation: [Math.PI / 2, 0, Math.PI * -0.85] as [number, number, number],
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
  modelsIsShow = true,
  typeText = 'default',
}: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <ModelsLayout models={MODELS_LIST} isShow={modelsIsShow}>
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
      </ModelsLayout>
    </SectionLayout>
  );
};

export default Hero;
