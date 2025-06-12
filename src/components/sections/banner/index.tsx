import Image from 'next/image';
import { Fragment, PropsWithChildren } from 'react';

import { Text } from '@/components/ui';

import { MODELS } from '@/utils/const';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';
import PrimitiveFactory from '@/lib/three/PrimitiveFactory';

type TProps = {
  image?: {
    src: string;
    alt: string;
  };
  title: string;
  texts?: string[];
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

const Banner = ({
  image,
  title,
  texts,
  className,
  showModels = false,
}: TProps) => {
  return (
    <SectionLayout className={`${styles.banner} ${className}`}>
      {image && (
        <Image
          className={styles.banner__image}
          src={'/image.png'}
          fill
          alt={''}
        />
      )}
      <ModelLayout showModels={showModels}>
        <div className={styles.banner__inner}>
          <h2
            className={`
              ${styles.banner__title}
              ${!texts ? styles.banner__title_main : styles.banner__title_second}
            `}
          >
            {title}
          </h2>
          {texts && <Text labels={texts} className={styles.banner__texts} />}
        </div>
      </ModelLayout>
    </SectionLayout>
  );
};

export default Banner;
