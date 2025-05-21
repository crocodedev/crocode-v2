import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

import { useThreeAnimation } from '@/hooks/threejs';

import { MODELS } from '@/utils/const';

import { MeshProps, PrimitiveFactoryProps } from './types';
import { useModels } from '@/contexts/ModelContext';

function GLTFModel({
  modelName,
  scale = 1,
  ...props
}: { modelName: string; scale?: PrimitiveFactoryProps['scale'] } & MeshProps) {
  const { scene } = useGLTF(`/models/${modelName}.glb`);

  useThreeAnimation((t) => {
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
