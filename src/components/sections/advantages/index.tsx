import { ModelsLayout, SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';

const DATA_ITEMS = [
  {
    title: 'Security',
    text: 'Custom developed software is a closed source project and is used only by your team',
  },
  {
    title: 'Flexibility & Scalability',
    text: 'You can make changes to the software at any time',
  },
  {
    title: 'Benefits of custom software',
    text: 'Understanding the benefits of custom software development for both business and customers will help you make the right decisions for you and your business',
  },
  {
    title: 'Personalized Solution',
    text: 'No templates and monotonous approaches',
  },
  {
    title: 'Realiability',
    text: 'We use a custom solution because it is safer and more reliable',
  },
];

const MODELS_LIST = [
  {
    prompt: MODELS.FLUTED_PIPE.url,
    rotation: [Math.PI * 1.3, 0, 0],
    scale: { desktop: 0.1, mobile: 0.05 },
    position: { desktop: [-0.35, 0.1, 0], mobile: [-0.185, 0.15, 0] },
  },
  {
    prompt: MODELS.HOLLOW_PLANET.url,
    rotation: [Math.PI * 1.2, Math.PI * 0.8, Math.PI * 1.5],
    scale: { desktop: 0.13, mobile: 0.08 },
    position: { desktop: [0.3, 0, 0], mobile: [0.19, 0.05, 0] },
  },
  {
    prompt: MODELS.PLANET.url,
    scale: { desktop: 0.1, mobile: 0.08 },
    rotation: [-Math.PI * 0.55, Math.PI * 0.65, Math.PI * 0.45],
    position: { desktop: [-0.1, -0.175, 0], mobile: [-0.19, -0.12, 0] },
  },
];

const AdvantagesSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <ModelsLayout models={MODELS_LIST} />
      <div className={styles.container}>
        {DATA_ITEMS.map((item) => (
          <Card key={item.title} className={styles.card}>
            <h2 className={styles.card__title}>{item.title.toUpperCase()}</h2>
            <p className={styles.card__text}>{item.text.toUpperCase()}</p>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default AdvantagesSection;
