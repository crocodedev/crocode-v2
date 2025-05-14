import { DirectionalLight } from 'three';

export default function configureLights() {
  const light = new DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 5);
  light.castShadow = true;
  return <primitive object={light} />;
}
