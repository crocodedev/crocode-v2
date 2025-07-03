import { ThreeElements } from '@react-three/fiber';
import { Group, Object3D, Vector3 } from 'three';

import { MODELS } from '@/utils/const';

export type MeshProps = ThreeElements['mesh'];

type AnimationConfig = {
  rotationSpeed?: number;
  bounceHeight?: number;
  bounceSpeed?: number;
  rotationAxis?: 'x' | 'y' | 'z' | 'bounce';
};

type ScaleType = {
  desktop: number;
  mobile: number;
};

type PositionType = {
  desktop: [number, number, number] | number[];
  mobile: [number, number, number] | number[];
};

export interface ModelProps {
  prompt?: ModelsNameType;
  scale?: ScaleType;
  rotation?: [number, number, number] | number[];
  isHaveTexture?: boolean;
  position?: PositionType;
  animation?: AnimationConfig;
}

export type ModelData = {
  group: Group;
  initialPosition: Vector3;
  velocity: Vector3;
  angularVelocity: Vector3;
  targetPosition: Vector3;
  basePosition: Vector3;
  lastPosition: Vector3;
  meshes: Object3D[];
};

export enum QUALITY {
  LOW = 0.5,
  MEDIUM = 1,
  HIGH = 3,
}

export type PrimitiveFactoryProps = {
  models: ModelProps[];
  className?: string;
  lightIntensity?: number;
};

export type ModelsNameType = (typeof MODELS)[keyof typeof MODELS]['url'];
