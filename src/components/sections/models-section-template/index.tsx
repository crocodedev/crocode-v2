import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';
import PrimitiveFactory from '@/lib/three/PrimitiveFactory';

const MODELS_LIST = [
  {
    prompt: MODELS.PLANET.url,
    rotation: [Math.PI / 10, 0, 0],
    scale: { desktop: 0.13, mobile: 0.1 },
    position: { desktop: [-0.35, 0.12, 0], mobile: [-0.2, 0.15, 0] },
  },
  {
    prompt: MODELS.MARSHMALLOW.url,
    rotation: [Math.PI * 0.45, Math.PI * 0.7, -Math.PI * 0.15],
    scale: { desktop: 0.1, mobile: 0.1 },
    position: { desktop: [-0.05, -0.15, 0], mobile: [0, -0.1, 0] },
  },
  {
    prompt: MODELS.FLUTED_PIPE.url,
    rotation: [-Math.PI * 1.4, Math.PI * 0.7, Math.PI * 0.45],
    scale: { desktop: 0.12, mobile: 0.08 },
    position: { desktop: [0.35, -0.135, 0], mobile: [0.18, -0.15, 0] },
  },
];

const ModelsSectionTemplate = () => {
  return (
    <PrimitiveFactory
      lightIntensity={10}
      className={styles.models}
      models={MODELS_LIST}
    />
  );
};

export default ModelsSectionTemplate;
