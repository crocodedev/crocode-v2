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
  lightDirectionPosition: number[],
  useDirectionHelper?: boolean,
) => {
  const light = new DirectionalLight(0xf5f5f5, lightIntensity);
  light.position.set(
    lightDirectionPosition[0],
    lightDirectionPosition[1],
    lightDirectionPosition[2],
  );

  scene.add(new AmbientLight(0xffffff, 1));

  scene.add(light);

  if (useDirectionHelper) {
    const helper = new DirectionalLightHelper(light, 25, 'red');
    scene.add(helper);
  }
};

export const setupOrbitControler = (camera: Camera, el: HTMLElement) => {
  const controls = new OrbitControls(camera, el);
  controls.enableDamping = true;
  controls.enableZoom = false;

  return controls;
};

export const setupCamera = (
  scene: Scene,
  container: HTMLDivElement,
  cameraPosition: number[],
) => {
  const camera = new PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    0.1,
    100,
  );

  // const cameraHelper = new CameraHelper(camera);
  // scene.add(cameraHelper);

  camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
  scene.add(camera);

  return camera;
};
