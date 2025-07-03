import { useFrame } from '@react-three/fiber';

export function useThreeAnimation(callback: (t: number) => void) {
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    callback(t);
  });
}
