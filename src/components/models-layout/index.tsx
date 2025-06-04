import { Fragment, PropsWithChildren } from 'react';

import PrimitiveFactory from '@/lib/three/PrimitiveFactory';
import { PrimitiveFactoryProps } from '@/lib/three/types';

type TProps = PropsWithChildren & {
  models: PrimitiveFactoryProps[];
};

const ModelsLayout = ({ models, children }: TProps) => {
  return (
    <Fragment>
      {models.map((model, index) => (
        <PrimitiveFactory key={index} {...model} />
      ))}
      {children}
    </Fragment>
  );
};

export default ModelsLayout;
