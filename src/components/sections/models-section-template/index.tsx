import { Fragment, PropsWithChildren } from 'react';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';
import PrimitiveFactory from '@/lib/three/PrimitiveFactory';

const MODELS_LIST = [
  {
    prompt: MODELS.ROGUE.url,
    className: styles.rogue,
    lightIntensity: 2,
    rotation: [Math.PI / 10, 0, 0] as [number, number, number],
    isHaveTexture: true,
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    className: styles.hollow_planet_1,
    isHaveTexture: true,
    lightDirectionPosition: [40, 20, 20] as [number, number, number],
    rotation: [Math.PI / 3.2, 0, -Math.PI * 0.25] as [number, number, number],
    lightIntensity: 5,
  },
  {
    prompt: MODELS.CROSS.url,
    className: styles.cross,
    isHaveTexture: true,
    lightIntensity: 2.5,
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
    isHaveTexture: true,
    lightIntensity: 5,
    cameraPosition: [1.5, 1.8, 1.8] as [number, number, number],
    lightDirectionPosition: [10, 5, 5] as [number, number, number],
    rotation: [Math.PI * 0.3, Math.PI * 0.18, Math.PI * 0.3] as [
      number,
      number,
      number,
    ],
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    className: styles.hollow_planet_3,
    isHaveTexture: true,
    lightIntensity: 5,
    rotation: [Math.PI / 3, 0, 0] as [number, number, number],
  },
];

type TProps = PropsWithChildren & {
  modelsIsShow: boolean;
};

const ModelsSectionTemplate = ({ modelsIsShow, children }: TProps) => {
  if (modelsIsShow) {
    return (
      <Fragment>
        {MODELS_LIST.map((model, index) => (
          <PrimitiveFactory key={index} {...model} />
        ))}
        {children}
      </Fragment>
    );
  } else {
    return <>{children}</>;
  }
};

export default ModelsSectionTemplate;
