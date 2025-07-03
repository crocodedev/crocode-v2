import {
  AmbientLight,
  Camera,
  SpotLight, 
  PerspectiveCamera,
  Scene,
  Vector3,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const setupLight = (scene: Scene, lightIntensity = 1) => {

  const createLight = (position: Vector3, target: Vector3, angle: number, penumbra: number) => {
    const light = new SpotLight('#eff2e1', lightIntensity * 15, 5, angle, penumbra, 2);
    light.position.set(position.x, position.y, position.z);
    light.target.position.set(target.x, target.y, target.z);
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 10;
    light.shadow.focus = 1;
    light.shadow.bias = - .003;

    scene.add(light);
    scene.add(light.target);

    return light;
  };

  createLight(new Vector3(-2, 2, 2), new Vector3(0, -2, -2), 0.2, 1);
  createLight(new Vector3(2, 2, 2), new Vector3(0, -2, -2), 0.2, 1);

  createLight(new Vector3(-2, -2, 2), new Vector3(0, 2, -2), 0.2, 1);
  createLight(new Vector3(2, -2, 2), new Vector3(0, 2, -2), 0.2, 1);

  
  createLight(new Vector3(0, 2, 2), new Vector3(0, -2, -2), 0.2, 1);

  const ambient = new AmbientLight('white', .5);
  scene.add(ambient);
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
