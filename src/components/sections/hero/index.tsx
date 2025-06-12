import Image from 'next/image';

import { ModelsLayout, SectionLayout } from '@/components/sections';
import { Button } from '@/components/ui';

import { TImage, TLink } from '@/types/types';

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
  title: string;
  imageWithAltText: TImage;
  breadcrumbs: TLink[];
};

const Hero = (props: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <ModelsLayout models={MODELS_LIST}>
        <div className={styles.hero}>
          <Image
            className={styles.hero__background}
            src={props.imageWithAltText.image.asset.url}
            fill
            alt={props.imageWithAltText.altText}
          />
          <h1 className={`${styles.title}`}>{props.title}</h1>
          <Button className={`${styles.nav__button}  ${styles.mobile}`}>
            Contact us
          </Button>
        </div>
      </ModelsLayout>
    </SectionLayout>
  );
};

export default Hero;
