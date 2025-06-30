import { PropsWithChildren } from 'react';

import ModelsLayout from '@/components/models-layout';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<unknown> & {
  title?: string;
  className?: string;
  showModels?: boolean;
};

const MODELS_LIST = [
  {
    prompt: MODELS.ROGUE.url,
    rotation: [Math.PI / 4, 0, 0],
    scale: { desktop: 0.1, mobile: 0.1 },
    position: { desktop: [-0.55, 0.17, 0], mobile: [-0.35, 0.18, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    rotation: [Math.PI / 3.2, 0, -Math.PI * 0.25],
    scale: { desktop: 0.08, mobile: 0.08 },
    position: { desktop: [-0.45, 0.13, 0], mobile: [-0.315, 0.08, 0] },
  },
  {
    prompt: MODELS.CROSS.url,
    rotation: [-Math.PI * 0.55, Math.PI * 0.65, Math.PI * 0.45],
    scale: { desktop: 0.14, mobile: 0.11 },
    position: { desktop: [-0.4, 0, 0], mobile: [-0.13, 0.02, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    rotation: [Math.PI * 0.3, Math.PI * 0.18, Math.PI * 0.3],
    scale: { desktop: 0.15, mobile: 0.15 },
    position: { desktop: [-0.6, -0.13, 0], mobile: [-0.35, -0.1, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    rotation: [Math.PI / 3, 0, 0],
    scale: { desktop: 0.15, mobile: 0.15 },
    position: { desktop: [0.6, -0.15, 0], mobile: [0.32, -0.1, 0] },
  },
];

const Banner = ({ children, title, className, showModels }: TProps) => {
  return (
    <div className={`${styles.banner} ${className}`}>
      <ModelsLayout
        lightIntensity={3.5}
        models={MODELS_LIST}
        className={styles.models}
        showModels={showModels}
      />
      <h2 className={styles.banner__title}>{title}</h2>
      {children}
    </div>
  );
};

export default Banner;
