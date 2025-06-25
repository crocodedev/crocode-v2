/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  ACESFilmicToneMapping,
  Camera,
  Euler,
  Group,
  Mesh,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Raycaster,
  Scene,
  Sphere,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Loader } from '@/components/ui';

import { useCanLoad3D } from '@/hooks/threejs/useCanLoad3D';

import { MODELS } from '@/utils/const';
import { setupCamera, setupLight } from '@/utils/threejs';

import styles from './styles.module.scss';
import { ModelData, PrimitiveFactoryProps, QUALITY } from './types';
import { useIsMobile } from '@/hooks';
import { debounce } from '@/utils';

const STRENGTH = 0.1 / 50;
const BOUNCE_AMPLITUDE = 0.1 / 5;
const BOUNCE_FREQUENCY = 0.5;
const ROTATION_SPEED = 0.01;

export default function PrimitiveFactory({
  models,
  className,
  lightIntensity = 4,
}: PrimitiveFactoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const animationId = useRef<number | null>(null);
  const sceneRef = useRef<Scene>(new Scene());
  const modelDataRef = useRef<ModelData[]>([]);
  const pointer = useRef<Vector2>(new Vector2(2, 2));
  const raycaster = useRef<Raycaster>(new Raycaster());
  const mouseWorld = useRef<Vector3>(new Vector3());
  const prevMouseWorld = useRef<Vector3>(new Vector3());
  const isMouseInsideCanvas = useRef<boolean>(false);
  const cameraRef = useRef<Camera | null>(null);
  const { isMobile, isReady } = useIsMobile();
  const memoizedModels = useMemo(() => models, [JSON.stringify(models)]);

  const canLoad3D = useCanLoad3D(containerRef);

  useEffect(() => {
    if (!canLoad3D) return;

    const container = containerRef.current;

    if (!container || !window.WebGLRenderingContext) {
      console.error('WebGL or container not available');
      return;
    }

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(QUALITY.LOW);
    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    const camera = setupCamera(container, [0, 0, 1]);
    cameraRef.current = camera;

    setupLight(sceneRef.current, lightIntensity);

    return () => {
      if (rendererRef.current) {
        if (container) {
          container.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
      sceneRef.current.clear();
    };
  }, [canLoad3D]);

  const loadModels = useCallback(() => {
    let loadedCount = 0;
    const totalModels = memoizedModels.length;

    modelDataRef.current.forEach(({ group }) => sceneRef.current.remove(group));
    modelDataRef.current = [];

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    const upgradeQuality = () => {
      if (rendererRef.current) {
        rendererRef.current.setPixelRatio(QUALITY.MEDIUM);
      }
    };

    memoizedModels.forEach(
      ({
        prompt = MODELS.CROSS.url,
        position = { desktop: [0, 0, 0], mobile: [0, 0, 0] },
        scale = { desktop: 1, mobile: 1 },
        rotation = [-Math.PI / 1.3, 0, 0],
      }) => {
        if (
          !position.desktop ||
          !position.mobile ||
          !scale.desktop ||
          !scale.mobile
        ) {
          console.warn(`Invalid model data for prompt ${prompt}, skipping`);
          loadedCount++;
          if (loadedCount === totalModels) {
            setTimeout(upgradeQuality, 100);
          }
          return;
        }

        const group = new Group();
        sceneRef.current.add(group);

        const selectedPosition = isMobile ? position.mobile : position.desktop;
        const selectedScale = isMobile ? scale.mobile : scale.desktop;
        const initialPosition = new Vector3(...selectedPosition);

        loader.load(
          prompt,
          (gltf) => {
            const model = gltf.scene;
            model.scale.setScalar(selectedScale);
            model.quaternion.setFromEuler(new Euler(...rotation));
            model.position.copy(initialPosition);

            const meshes: Mesh[] = [];
            model.traverse((child) => {
              if (child instanceof Mesh) {
                const mesh = child as Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                meshes.push(mesh);
              }
            });

            group.add(model);

            modelDataRef.current.push({
              group,
              initialPosition: initialPosition.clone(),
              basePosition: initialPosition.clone(),
              targetPosition: initialPosition.clone(),
              velocity: new Vector3(),
              angularVelocity: new Vector3(),
              meshes,
              lastPosition: initialPosition.clone(),
            });
            loadedCount++;
            if (loadedCount === totalModels) {
              setTimeout(upgradeQuality, 100);
            }
          },
          undefined,
          (error) => {
            console.error(`Failed to load model: ${prompt}`, error);
            loadedCount++;
            if (loadedCount === totalModels) {
              setTimeout(upgradeQuality, 100);
            }
          },
        );
      },
    );
  }, [memoizedModels, isMobile]);

  const computeBoundingSphere = useCallback((group: Group, meshes: Mesh[]) => {
    const sphere = new Sphere();
    group.updateMatrixWorld(true);
    meshes.forEach((mesh) => {
      if (mesh.geometry) {
        mesh.geometry.computeBoundingSphere();
        const localSphere = mesh.geometry.boundingSphere!.clone();
        localSphere.applyMatrix4(mesh.matrixWorld);
        sphere.center.add(localSphere.center);
        sphere.radius = Math.max(sphere.radius, localSphere.radius);
      }
    });
    sphere.center.divideScalar(meshes.length || 1);
    return sphere;
  }, []);

  const handleCollisions = useCallback(() => {
    for (let i = 0; i < modelDataRef.current.length; i++) {
      for (let j = i + 1; j < modelDataRef.current.length; j++) {
        const modelA = modelDataRef.current[i];
        const modelB = modelDataRef.current[j];

        const sphereB = computeBoundingSphere(
          modelB.group,
          modelB.meshes as Mesh[],
        );
        const sphereA = computeBoundingSphere(
          modelA.group,
          modelA.meshes as Mesh[],
        );

        if (sphereA.intersectsSphere(sphereB)) {
          const direction = new Vector3()
            .subVectors(sphereB.center, sphereA.center)
            .normalize();
          modelA.velocity.add(direction.clone().multiplyScalar(-STRENGTH));
          modelB.velocity.add(direction.clone().multiplyScalar(STRENGTH));
        }
      }
    }
  }, []);

  const updatePositions = useCallback(() => {
    const time = performance.now() * 0.001;


    modelDataRef.current.forEach((data, index) => {
      const { group, velocity, basePosition, initialPosition, meshes } = data;

      if (isMobile) {
        const offset =
          Math.sin(time * BOUNCE_FREQUENCY + index) * BOUNCE_AMPLITUDE;
        basePosition.y = initialPosition.y + offset;

        group.rotation.y = Math.sin(time * ROTATION_SPEED + index) * 0.1;

        basePosition.add(velocity);
        velocity.multiplyScalar(0.95);
      } else {
        group.position.copy(basePosition);

        if (isMouseInsideCanvas.current) {
          const intersects = raycaster.current.intersectObjects(meshes, true);
          const isMouseOver = intersects.length > 0;

          if (isMouseOver) {
            const mouseDelta = new Vector3()
              .subVectors(mouseWorld.current, prevMouseWorld.current)
              .normalize();
            velocity.add(mouseDelta.multiplyScalar(STRENGTH));
          }
        }

        const maxSpeed = 0.1;
        if (velocity.length() > maxSpeed) {
          velocity.normalize().multiplyScalar(maxSpeed);
        }

        basePosition.add(velocity);
        velocity.multiplyScalar(0.95);
      }

      const camera = cameraRef.current as PerspectiveCamera;
      const container = containerRef.current;
      if (!container) return;
      const aspect =
        container.clientWidth / container.clientHeight;
      const fovRad = (camera.fov * Math.PI) / 180;
      const cameraZ = camera.position.z;
      const halfHeight = Math.tan(fovRad / 2) * cameraZ;
      const halfWidth = halfHeight * aspect;
      const bounds = { x: halfWidth, y: halfHeight, z: 0.5 };

      if (basePosition.x < -bounds.x || basePosition.x > bounds.x) {
        basePosition.x = Math.max(
          Math.min(basePosition.x, bounds.x),
          -bounds.x,
        );
        velocity.x *= -0.7;
      }
      if (
        !isMobile &&
        (basePosition.y < -bounds.y || basePosition.y > bounds.y)
      ) {
        basePosition.y = Math.max(
          Math.min(basePosition.y, bounds.y),
          -bounds.y,
        );
        velocity.y *= -0.7;
      }
      basePosition.z = initialPosition.z;

      if (!isMobile) {
        group.position.copy(basePosition);
      } else {
        group.position.set(basePosition.x, basePosition.y, basePosition.z);
      }
    });
  }, [isMobile]);

  const renderScene = useCallback(() => {
    if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, []);

  useEffect(() => {
    if (!canLoad3D) return;
    if (!rendererRef.current || !cameraRef.current || !isReady) return;

    loadModels();

    const animate = () => {
      if (!sceneRef.current || !rendererRef.current || !cameraRef.current)
        return;

      raycaster.current.setFromCamera(pointer.current, cameraRef.current);
      handleCollisions();
      updatePositions();
      renderScene();

      animationId.current = requestAnimationFrame(animate);
    };

    if (!animationId.current) {
      animationId.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
        animationId.current = null;
      }
      modelDataRef.current.forEach(({ group }) =>
        sceneRef.current.remove(group),
      );
      modelDataRef.current = [];
    };
  }, [
    canLoad3D,
    loadModels,
    handleCollisions,
    updatePositions,
    renderScene,
    isReady,
  ]);

  const handleMouseMove = useCallback(
    debounce((e: MouseEvent) => {
      if (isMobile) return;

      const container = containerRef.current;
      if (!container || !cameraRef.current) return;

      const bounds = container.getBoundingClientRect();
      if (
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom
      ) {
        isMouseInsideCanvas.current = true;
        pointer.current.set(
          ((e.clientX - bounds.left) / bounds.width) * 2 - 1,
          -((e.clientY - bounds.top) / bounds.height) * 2 + 1,
        );
        raycaster.current.setFromCamera(pointer.current, cameraRef.current);

        const planeZ = new Vector3(0, 0, 0);
        const direction = raycaster.current.ray.direction;
        const origin = raycaster.current.ray.origin;
        if (Math.abs(direction.z) > 0.0001) {
          const t = (planeZ.z - origin.z) / direction.z;
          if (t >= 0) {
            prevMouseWorld.current.copy(mouseWorld.current);
            mouseWorld.current.copy(origin).addScaledVector(direction, t);
          }
        }
      } else {
        isMouseInsideCanvas.current = false;
        pointer.current.set(2, 2);
      }
    }, 1),
    [isMobile],
  );

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    isMouseInsideCanvas.current = false;
    pointer.current.set(2, 2);
  }, [isMobile]);

  const handleResize = useCallback(
    debounce(() => {
      const container = containerRef.current;
      if (!container || !rendererRef.current || !cameraRef.current) return;
      rendererRef.current.setSize(
        container.clientWidth,
        container.clientHeight,
      );
      if (cameraRef.current instanceof PerspectiveCamera) {
        cameraRef.current.aspect =
          container.clientWidth / container.clientHeight;
        cameraRef.current.updateProjectionMatrix();
      }
    }, 100),
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove, handleMouseLeave, handleResize, isMobile]);

  if (!canLoad3D) {
    return (
      <div ref={containerRef} className={`${styles.canvas} ${className}`}>
        <Loader />
      </div>
    );
  }
  return <div ref={containerRef} className={`${styles.canvas} ${className}`} />;
}
