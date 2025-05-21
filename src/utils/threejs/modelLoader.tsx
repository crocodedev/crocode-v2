import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Object3D } from 'three';

import { useThreeAnimation } from '@/hooks/threejs';

export default function ModelLoader({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  const ref = useRef<Object3D>(null);

  useThreeAnimation((t) => {
    if (ref.current) {
      ref.current!.rotation.y = Math.sin(t * 0.1) * 3;
      ref.current!.position.y = Math.sin(t * 0.5) * 5;
    }
  });

  return <primitive object={scene} ref={ref} scale={0.2} />;
}
