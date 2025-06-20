import {
  AmbientLight,
  Camera,
  DirectionalLight,
  DirectionalLightHelper,
  PerspectiveCamera,
  Scene,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const setupLight = (
  scene: Scene,
  lightIntensity: number,
  useDirectionHelper?: boolean,
) => {
  const light = new DirectionalLight(0xf5f5f5, lightIntensity);
  light.position.set(0, 2, 5);

  scene.add(new AmbientLight(0xffffff, 1.5));

  scene.add(light);

  if (useDirectionHelper) {
    const helper = new DirectionalLightHelper(light, 25, 'red');
    scene.add(helper);
  }
};

export const setupOrbitControler = (camera: Camera, el: HTMLElement) => {
  const controls = new OrbitControls(camera, el);
  controls.enableDamping = true;
  controls.enableZoom = true;

  return controls;
};

export function setupCamera(container: HTMLElement, position: number[]) {
  const camera = new PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    0.1,
    1000,
  );
  camera.position.set(position[0], position[1], position[2]);
  camera.lookAt(0, 0, 0);
  return camera;
}
