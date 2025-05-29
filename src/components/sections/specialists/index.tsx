import { SectionLayout } from '@/components/sections';
import { Card } from '@/components/ui';

import styles from './styles.module.scss';

const DATA_ITEMS = [
  {
    id: '01',
    title: 'Developers',
    text: 'This is Gameplay developer, Game developer, UI developer, Back-end developer, Animation developer and others',
  },
  {
    id: '02',
    title: 'Game designer',
    text: 'To describe it briefly, these are those who are on pretty with 3D and visual games. The way the player sees and perceives the characters, the environment, primarily depends on them',
  },
  {
    id: '03',
    title: 'Artists',
    text: 'These specialists are involved in the development of the entire game world: from the characters and the purpose of the game to the text and sound. Their goal is to make a cool product for the audience',
  },
];

const SepcialistsSection = () => {
  return (
    <SectionLayout className={styles.section}>
      <h2 className={styles.section__title}>
        {'What kind of specialists will you need to create a game?'.toUpperCase()}
      </h2>
      <div className={styles.container}>
        {DATA_ITEMS.map((item) => (
          <Card className={styles.card} key={item.id}>
            <h2 className={styles.card__title}>{item.title.toUpperCase()}</h2>
            <p className={styles.card__text}>{item.text.toUpperCase()}</p>
            <span className={styles.card__num}>{item.id}</span>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default SepcialistsSection;
