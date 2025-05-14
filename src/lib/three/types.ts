import { ThreeElements } from '@react-three/fiber';

export type MeshProps = ThreeElements['mesh'];

export interface PrimitiveFactoryProps extends MeshProps {
  prompt?: ModelsNameType;
  scale?: number | [number, number, number];
}

export type ModelsNameType = 'Sphere';
