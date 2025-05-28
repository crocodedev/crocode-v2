import { ThreeElements } from '@react-three/fiber';

import { MODELS } from '@/utils/const';

export type MeshProps = ThreeElements['mesh'];

type AnimationConfig = {
  rotationSpeed?: number;
  bounceHeight?: number;
  bounceSpeed?: number;
  rotationAxis?: 'x' | 'y' | 'z' | 'bounce';
};

export interface PrimitiveFactoryProps extends MeshProps {
  prompt?: ModelsNameType;
  scale?: number | [number, number, number];
  className?: string;
  rotation?: [number, number, number];
  isHaveTexture?: boolean;
  lightIntensity?: number;
  animation?: AnimationConfig;
  cameraPosition?: number[];
  lightDirectionPosition?: number[];
}

export type ModelsNameType = (typeof MODELS)[keyof typeof MODELS]['url'];
