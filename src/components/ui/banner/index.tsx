import { Fragment, PropsWithChildren } from 'react';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';
import PrimitiveFactory from '@/lib/three/PrimitiveFactory';

type TProps = PropsWithChildren<unknown> & {
  title: string;
  className?: string;
  showModels?: boolean;
};

const ModelLayout = ({
  children,
  showModels,
}: PropsWithChildren & { showModels?: boolean }) => {
  if (!showModels) return children;

  return (
    <Fragment>
      <PrimitiveFactory
        prompt={MODELS.ROGUE.url}
        className={styles.rogue}
        lightIntensity={2}
        rotation={[Math.PI / 10, 0, 0]}
        isHaveTexture={true}
      />
      <PrimitiveFactory
        prompt={MODELS.HOLLOW_PLANET.url}
        className={styles.hollow_planet_1}
        isHaveTexture={true}
        lightDirectionPosition={[40, 20, 20]}
        rotation={[Math.PI / 3.2, 0, -Math.PI * 0.25]}
        lightIntensity={5}
      />
      <PrimitiveFactory
        prompt={MODELS.CROSS.url}
        isHaveTexture={true}
        lightIntensity={2.5}
        className={styles.cross}
        rotateY={Math.PI / 6}
        rotation={[-Math.PI * 0.55, Math.PI * 0.65, Math.PI * 0.45]}
      />
      <PrimitiveFactory
        prompt={MODELS.HOLLOW_PLANET.url}
        className={styles.hollow_planet_2}
        isHaveTexture={true}
        lightIntensity={5}
        cameraPosition={[1.5, 1.8, 1.8]}
        lightDirectionPosition={[10, 5, 5]}
        rotation={[Math.PI * 0.3, Math.PI * 0.18, Math.PI * 0.3]}
      />
      <PrimitiveFactory
        prompt={MODELS.HOLLOW_PLANET.url}
        className={styles.hollow_planet_3}
        isHaveTexture={true}
        lightIntensity={5}
        rotation={[Math.PI / 3, 0, 0]}
      />
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
