import { Fragment, PropsWithChildren } from 'react';

import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import { MODELS } from '@/utils/const';

import styles from './styles.module.scss';
import PrimitiveFactory from '@/lib/three/PrimitiveFactory';

const DATA_ITEMS = [
  {
    title: 'why crocode?',
    text: 'We offer an integrated approach to the creation and promotion of sites. Our prices initially include everything so that the customer receives a completely ready-to-use website that can make a profit. Programmers, marketers, SEO-optimizers, designers participate in the design and development. We take into account all the nuances: technical, structural, marketing, so that your new site brings you money from the moment of launch.',
  },
  {
    text: ' We fully undertake the whole range of work: from thinking over the idea of the site and developing design to creating custom solutions for every taste. Just tell us what you need - we will develop a suitable plan and bring the project to life. We are not afraid of difficult tasks and are always happy to gain new experience, so we take on any projects.',
  },
  {
    text: ' We fully undertake the whole range of work: from thinking over the idea of the site and developing design to creating custom solutions for every taste. Just tell us what you need - we will develop a suitable plan and bring the project to life. We are not afraid of difficult tasks and are always happy to gain new experience, so we take on any projects. ',
  },
  {
    text: ' Quality - We do the work in good faith and are responsible for it with our reputation. Speed - Our team is able to fulfill orders in the shortest possible time. Availability - We do not pursue instant profits, but build our work on trust and mutual understanding, which allows our clients to get on their feet and build a truly successful business.',
  },
];

const MODELS_LIST = [
  {
    prompt: MODELS.FLUTED_PIPE.url,
    className: styles.fluted_pipe,
    lightIntensity: 4,
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
    cameraPosition: [1.5, 2, 1.5],
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

const ModelsLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      {MODELS_LIST.map((model, index) => (
        <PrimitiveFactory key={index} {...model} />
      ))}
      {children}
    </Fragment>
  );
};

const WhyCrocodeSection = () => {
  return (
    <div className={styles.wrapper}>
      <ModelsLayout>
        <SectionLayout className={styles.section}>
          {DATA_ITEMS.map((item) => (
            <Card key={item.title} className={styles.card}>
              {item.title && (
                <h2 className={styles.card__title}>
                  {item.title.toUpperCase()}
                </h2>
              )}
              <p className={styles.card__text}>{item.text.toUpperCase()}</p>
            </Card>
          ))}
        </SectionLayout>
      </ModelsLayout>
    </div>
  );
};

export default WhyCrocodeSection;
