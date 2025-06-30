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
    rotation: [Math.PI * 0.7, 0, 0],
    scale: { desktop: 0.1, mobile: 0.1 },
    position: { desktop: [-0.15, 0.18, 0], mobile: [-0.15, 0.1, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    rotation: [Math.PI * 0.5, 0, Math.PI * 0.05],
    scale: { desktop: 0.15, mobile: 0.1 },
    position: { desktop: [-0.3, -0.05, 0], mobile: [-0.18, -0.1, 0] },
  },
  {
    prompt: MODELS.PLANET.url,
    rotation: [-Math.PI * 0.55, Math.PI * 0.65, Math.PI * 0.45],
    scale: { desktop: 0.15, mobile: 0.1 },
    position: { desktop: [0.3, -0.1, 0], mobile: [0.15, -0.15, 0] },
  },
];

const OurFiguresSection = () => {
  return (
    <div className={styles.wrapper}>
      <ModelsLayout models={MODELS_LIST} lightIntensity={15} />
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
    </div>
  );
};

export default OurFiguresSection;
