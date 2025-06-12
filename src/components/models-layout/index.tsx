import { Fragment, PropsWithChildren } from 'react';

import PrimitiveFactory from '@/lib/three/PrimitiveFactory';
import { PrimitiveFactoryProps } from '@/lib/three/types';

type TProps = PropsWithChildren & {
  isShow: boolean;
  models: PrimitiveFactoryProps[];
};

const ModelsLayout = ({ models, isShow = true, children }: TProps) => {
  if (isShow) {
    return (
      <Fragment>
        {models.map((model, index) => (
          <PrimitiveFactory key={index} {...model} />
        ))}
        {children}
      </Fragment>
    );
  } else {
    return <>{children}</>;
  }
};

export default ModelsLayout;
