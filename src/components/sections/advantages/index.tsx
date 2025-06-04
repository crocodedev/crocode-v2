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
    className: styles.fluted_pipe,
    lightIntensity: 3,
    rotation: [Math.PI / 10, 0, 0] as [number, number, number],
    isHaveTexture: true,
    scale: 0.8,
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

const AdvantagesSection = () => {
  return (
    <div className={styles.wrapper}>
      <ModelsLayout models={MODELS_LIST}>
        <SectionLayout className={styles.section}>
          <div className={styles.container}>
            {DATA_ITEMS.map((item) => (
              <Card key={item.title} className={styles.card}>
                <h2 className={styles.card__title}>
                  {item.title.toUpperCase()}
                </h2>
                <p className={styles.card__text}>{item.text.toUpperCase()}</p>
              </Card>
            ))}
          </div>
        </SectionLayout>
      </ModelsLayout>
    </div>
  );
};

export default AdvantagesSection;
