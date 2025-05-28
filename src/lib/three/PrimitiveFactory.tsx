import { useEffect, useRef } from 'react';
import {
  Clock,
  Euler,
  Group,
  Mesh,
  MeshStandardMaterial,
  SRGBColorSpace,
  Scene,
  WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { MODELS } from '@/utils/const';
import { setupCamera, setupLight, setupOrbitControler } from '@/utils/threejs';

import { PrimitiveFactoryProps } from './types';

export default function PrimitiveFactory({
  prompt = MODELS.CROSS.url,
  scale = 1,
  className,
  rotation = [-Math.PI / 1.3, 0, 0],
  animation = {
    rotationSpeed: 0.1,
    bounceHeight: 0.2,
    bounceSpeed: 0.25,
    rotationAxis: 'bounce',
  },
  isHaveTexture,
  lightIntensity = 12,
  cameraPosition = [1.8, 1.8, 1.8],
  lightDirectionPosition = [2, 15, 12],
}: PrimitiveFactoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const animationId = useRef<number | null>(null);
  const modelRef = useRef<Group | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = SRGBColorSpace;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new Scene();
    sceneRef.current = scene;

    const camera = setupCamera(scene, container, cameraPosition);
    setupLight(scene, lightIntensity, lightDirectionPosition, false);
    const controls = setupOrbitControler(camera, renderer.domElement);

    const modelGroup = new Group();
    modelRef.current = modelGroup;
    scene.add(modelGroup);

    const loader = new GLTFLoader();

    loader.load(prompt, (gltf) => {
      const model = gltf.scene;
      model.quaternion.setFromEuler(
        new Euler(rotation[0], rotation[1], rotation[2]),
      );
      if (Array.isArray(scale)) model.scale.set(...scale);
      else model.scale.setScalar(scale);

      model.traverse((child) => {
        if ((child as Mesh).isMesh) {
          const mesh = child as Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          if (isHaveTexture) return;

          mesh.material = new MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.65,
            roughness: 0,
          });
        }
      });

      modelGroup.add(model);
    });

    const clock = new Clock();
    const animate = () => {
      const t = clock.getElapsedTime();

      if (modelRef.current) {
        if (animation.bounceHeight && animation.bounceSpeed) {
          modelRef.current.position.y =
            Math.sin(t * animation.bounceSpeed) * animation.bounceHeight;
        }

        if (animation.rotationSpeed) {
          switch (animation.rotationAxis) {
            case 'x':
              modelRef.current.rotation.x = t * animation.rotationSpeed;
              break;
            case 'y':
              modelRef.current.rotation.y = t * animation.rotationSpeed;
              break;
            case 'z':
              modelRef.current.rotation.z = t * animation.rotationSpeed;
              break;
            case 'bounce':
              const angle =
                Math.sin(t * animation.rotationSpeed) * (Math.PI / 12);

              modelRef.current.rotation.y = angle;
              modelRef.current.rotation.x = angle;

              break;
            default:
              modelRef.current.rotation.y = t * animation.rotationSpeed;
          }
        }
      }

      controls.update();
      renderer.render(scene, camera);
      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container || !rendererRef.current || !sceneRef.current) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [prompt, scale, rotation, animation]);

  return <div className={className} ref={containerRef} />;
}
