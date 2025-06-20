import { ModelsLayout, SectionLayout } from '@/components/sections';
import { Button } from '@/components/ui';

import { TImage, TLink } from '@/types/types';

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
    position: { desktop: [0.3, 0.2, 0], mobile: [-0.01, -0.12, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    scale: { desktop: 0.15, mobile: 0.08 },
    rotation: [Math.PI / 1, Math.PI / 4, -Math.PI * 0.25],
    position: { desktop: [-0.55, -0.2, 0], mobile: [-0.1, -0.1, 0] },
  },
];

type TProps = {
  title: string;
  imageWithAltText: TImage;
  breadcrumbs: TLink[];
};

const Hero = ({ title }: TProps) => {
  return (
    <SectionLayout className={styles.section}>
      <ModelsLayout models={COMPONENT_MODELS} />
      <div className={styles.hero}>
        <h1 className={styles.title}>{title}</h1>
        <Button className={`${styles.nav__button} ${styles.mobile}`}>
          Contact us
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Hero;
