import { Fragment, PropsWithChildren } from 'react';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';
import PrimitiveFactory from '@/lib/three/PrimitiveFactory';

type TProps = PropsWithChildren<unknown> & {
  title: string;
  className?: string;
  showModels?: boolean;
};

const MODELS_LIST = [
  {
    model: MODELS.ROGUE,
    props: {
      className: styles.rogue,
      lightIntensity: 2,
      rotation: [Math.PI / 10, 0, 0] as [number, number, number],
      isHaveTexture: true,
    },
  },
  {
    model: MODELS.HOLLOW_PLANET,
    props: {
      className: styles.hollow_planet_1,
      isHaveTexture: true,
      lightDirectionPosition: [40, 20, 20],
      rotation: [Math.PI / 3.2, 0, -Math.PI * 0.25] as [number, number, number],
      lightIntensity: 5,
    },
  },
  {
    model: MODELS.CROSS,
    props: {
      isHaveTexture: true,
      lightIntensity: 2.5,
      className: styles.cross,
      rotateY: Math.PI / 6,
      rotation: [-Math.PI * 0.55, Math.PI * 0.65, Math.PI * 0.45] as [
        number,
        number,
        number,
      ],
    },
  },
  {
    model: MODELS.HOLLOW_PLANET,
    props: {
      className: styles.hollow_planet_2,
      isHaveTexture: true,
      lightIntensity: 5,
      cameraPosition: [1.5, 1.8, 1.8],
      lightDirectionPosition: [10, 5, 5],
      rotation: [Math.PI * 0.3, Math.PI * 0.18, Math.PI * 0.3] as [
        number,
        number,
        number,
      ],
    },
  },
  {
    model: MODELS.HOLLOW_PLANET,
    props: {
      className: styles.hollow_planet_3,
      isHaveTexture: true,
      lightIntensity: 5,
      rotation: [Math.PI / 3, 0, 0] as [number, number, number],
    },
  },
];

const ModelLayout = ({
  children,
  showModels,
}: PropsWithChildren & { showModels?: boolean }) => {
  if (!showModels) return children;

  return (
    <Fragment>
      {MODELS_LIST.map(({ model, props }, index) => (
        <PrimitiveFactory key={index} prompt={model.url} {...props} />
      ))}
      {children}
    </Fragment>
  );
};

const Banner = ({ children, title, className, showModels }: TProps) => {
  return (
    <div className={`${styles.banner} ${className}`}>
      <ModelLayout showModels={showModels}>
        <h2 className={styles.banner__title}>{title}</h2>
        {children}
      </ModelLayout>
    </div>
  );
};

export default Banner;
