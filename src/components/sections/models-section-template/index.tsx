import { Fragment, PropsWithChildren } from 'react';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';
import PrimitiveFactory from '@/lib/three/PrimitiveFactory';

const ModelsSectionTemplate = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <PrimitiveFactory
        scale={1}
        prompt={MODELS.PLANET.url}
        className={styles.planet}
        rotation={[-Math.PI / 1.3, 0, 0]}
        animation={{
          rotationSpeed: 0.1,
          bounceHeight: 0.2,
          bounceSpeed: 0.25,
          rotationAxis: 'bounce',
        }}
        lightIntensity={10}
      />
      <PrimitiveFactory
        scale={1}
        prompt={MODELS.MARSHMALLOW.url}
        className={styles.marshmallow}
        rotation={[-Math.PI / 1.3, 0, 0]}
        animation={{
          rotationSpeed: 0.1,
          bounceHeight: 0.2,
          bounceSpeed: 0.25,
          rotationAxis: 'bounce',
        }}
      />
      <PrimitiveFactory
        scale={0.8}
        prompt={MODELS.FLUTED_PIPE.url}
        className={styles.fluted_pipe}
        rotation={[Math.PI / 1.5, -7.5, -8]}
        animation={{
          rotationSpeed: 0.1,
          bounceHeight: 0.2,
          bounceSpeed: 0.25,
          rotationAxis: 'bounce',
        }}
        lightIntensity={10}
      />
      {children}
    </Fragment>
  );
};

export default ModelsSectionTemplate;
