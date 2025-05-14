import { useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import { Suspense } from 'react';

import { useThreeAnimation } from '@/hooks/threejs';

import { useModels } from '@/contexts/ModelContext';

type MeshProps = ThreeElements['mesh'];

interface PrimitiveFactoryProps extends MeshProps {
  prompt?: ModelsNameType;
  scale?: number | [number, number, number];
}

export const MODELS = {
  SPHERE: { url: '/models/Sphere.glb', name: 'Sphere' },
} as const;

export type ModelsNameType = 'Sphere';

function GLTFModel({
  modelName,
  scale = 1,
  ...props
}: { modelName: string; scale?: PrimitiveFactoryProps['scale'] } & MeshProps) {
  const { scene } = useGLTF(`/models/${modelName}.glb`);

  useThreeAnimation(t => {
    if (scene) {
      scene.rotation.y = Math.sin(t * 0.1) * 3;
      scene.position.y = Math.sin(t * 0.5) * 5;
    }
  });

  return <primitive object={scene} scale={scale} {...props} />;
}

useGLTF.preload(MODELS.SPHERE.url);

export default function PrimitiveFactory({
  prompt = MODELS.SPHERE.name,
  scale,
  ...props
}: PrimitiveFactoryProps) {
  const { isLoaded } = useModels();

  if (!isLoaded) {
    return <div>Loading models...</div>;
  }

  return (
    <Suspense fallback={<div>Loading model...</div>}>
      <GLTFModel modelName={prompt} scale={scale} {...props} />
    </Suspense>
  );
}
