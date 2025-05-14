import { ThreeElements } from '@react-three/fiber';

import { MODELS } from '@/utils/const';

export type MeshProps = ThreeElements['mesh'];

export interface PrimitiveFactoryProps extends MeshProps {
  prompt?: ModelsNameType;
  scale?: number | [number, number, number];
}

export type ModelsNameType = (typeof MODELS)[keyof typeof MODELS]['name'];
