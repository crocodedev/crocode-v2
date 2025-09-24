import { ModelsLayout, SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import { MODELS } from '@/utils/const';

import { data } from './data';
import styles from './styles.module.scss';

const MODELS_LIST = [
  {
    prompt: MODELS.FLUTED_PIPE.url,
    rotation: [Math.PI / 6, Math.PI / 4, Math.PI / 4],
    scale: { desktop: 0.08, mobile: 0.05 },
    position: { desktop: [-0.22, 0.14, 0], mobile: [-0.15, 0.03, 0] },
  },
  {
    prompt: MODELS.PLANET.url,
    rotation: [Math.PI * 0.5, 0, Math.PI * 0.05],
    scale: { desktop: 0.1, mobile: 0.05 },
    position: { desktop: [0.2, 0.18, 0], mobile: [0.15, 0.2, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    rotation: [-Math.PI * 1.55, Math.PI * 0.45, Math.PI / 6],
    scale: { desktop: 0.1, mobile: 0.05 },
    position: { desktop: [-0.15, -0.15, 0], mobile: [-0.13, -0.14, 0] },
  },
];

const WhyCrocodeSection = () => {
  return (
    <div className={styles.wrapper}>
      <ModelsLayout models={MODELS_LIST} className={styles.models} />
      <SectionLayout className={styles.section}>
        {data.map((item, i) => (
          <Card key={i} className={styles.card}>
            {item.title && (
              <h2 className={styles.card__title}>{item.title.toUpperCase()}</h2>
            )}
            <p className={styles.card__text}>{item.text.toUpperCase()}</p>
          </Card>
        ))}
      </SectionLayout>
    </div>
  );
};

export default WhyCrocodeSection;
