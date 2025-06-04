import { ModelsLayout, SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';

const OUR_FIGURES = [
  {
    number: 80,
    label: 'READY ORDERS',
  },
  {
    number: 100,
    label: 'HAPPY CLIENTS',
  },
  {
    number: 100,
    label: 'ORDERS',
  },
];

const MODELS_LIST = [
  {
    prompt: MODELS.MARSHMALLOW.url,
    className: styles.marshmallow,
    lightIntensity: 4,
    rotation: [Math.PI / 10, 0, 0] as [number, number, number],
    isHaveTexture: true,
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    className: styles.hollow_planet,
    isHaveTexture: true,
    lightDirectionPosition: [40, 20, 20] as [number, number, number],
    rotation: [Math.PI * 0.5, 0, Math.PI * 0.05] as [number, number, number],
    lightIntensity: 5,
    cameraPosition: [1.7, 2, 1.7],
  },
  {
    prompt: MODELS.PLANET.url,
    className: styles.planet,
    isHaveTexture: true,
    lightIntensity: 4,
    rotateY: Math.PI / 6,
    rotation: [-Math.PI * 0.55, Math.PI * 0.65, Math.PI * 0.45] as [
      number,
      number,
      number,
    ],
  },
];

const OurFiguresSection = () => {
  return (
    <div className={styles.wrapper}>
      <ModelsLayout models={MODELS_LIST}>
        <SectionLayout className={styles.section}>
          {OUR_FIGURES.map(({ number, label }) => (
            <Card key={label} className={styles.card}>
              <h2 className={styles.number}>{number}+</h2>
              <h3 className={styles.label}>{label}</h3>
            </Card>
          ))}

          <Card className={styles.mission}>
            <p className={styles.mission__text}>
              {` Our mission is to turn ideas into impressive digital products that
          change the world. Our vision is that our products will be used by
          millions of people around the world. Our Values: C - Continuous growth
          R - Reliability O - Open-minded`.toUpperCase()}
            </p>
          </Card>
        </SectionLayout>
      </ModelsLayout>
    </div>
  );
};

export default OurFiguresSection;
