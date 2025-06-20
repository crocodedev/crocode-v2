import dynamic from 'next/dynamic';
import { Fragment, PropsWithChildren } from 'react';

import { Loader } from '@/components/ui';

import styles from './styles.module.scss';
import { ModelProps } from '@/lib/three/types';

const PrimitiveFactory = dynamic(() => import('@/lib/three/PrimitiveFactory'), {
  ssr: false,
  loading: () => <Loader />,
});

type TProps = PropsWithChildren & {
  className?: string;
  models: ModelProps[];
  lightIntensity?: number;
  showModels?: boolean;
};

const ModelsLayout = ({
  className,
  models,
  lightIntensity,
  children,
  showModels = true,
}: TProps) => {
  return (
    <Fragment>
      {showModels && (
        <PrimitiveFactory
          lightIntensity={lightIntensity}
          className={`${styles.models} ${className}`}
          models={models}
        />
      )}
      {children}
    </Fragment>
  );
};

export default ModelsLayout;
