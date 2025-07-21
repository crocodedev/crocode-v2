import { Fragment, useRef, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Button, Card, Title } from '@/components/ui';

import styles from './styles.module.scss';

const QUESTIONS = [
  {
    id: '01',
    text: 'What does the cost consist of?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro!',
  },
  {
    id: '02',
    text: 'What models of cooperation do you have?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro!',
  },
  {
    id: '03',
    text: 'How is the work organized in the Crocode Team?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro!',
  },
  {
    id: '04',
    text: 'What service do I need?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro!',
  },
  {
    id: '05',
    text: 'What will I get as a result?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro!',
  },
  {
    id: '06',
    text: 'What the sages of work?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro!',
  },
  {
    id: '07',
    text: 'I dont have the documentation ready. What to do?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro!',
  },
  {
    id: '08',
    text: 'How do you ensure the quality of your work?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis voluptas quas magnam quam! Voluptatibus laboriosam laborum explicabo quasi cupiditate nihil atque corrupti fugit temporibus repellat officia magni, a dolor porro!',
  },
];
const QuestionsSection = () => {
  const [indexActiveCard, setIndexActiveCard] = useState<string | null>(null);
  const [clickPosition, setClickPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleClickMore = (index: string) => {
    const cardElement = cardRefs.current[index];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      setClickPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
    setIndexActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <SectionLayout className={styles.section}>
      <Title text='QUESTIONS' anchor='right' />
      <div className={`${styles.container} `}>
        {QUESTIONS.map((question) => {
          const isActive = indexActiveCard === question.id;

          return (
            <Fragment key={question.id}>
              <Card
                onClick={handleClickMore.bind(null, question.id)}
                className={`${styles.question} 
                ${styles[`question__${question.id}`]}
                ${isActive && styles.hide}`}
                ref={(el: HTMLDivElement | null) => {
                  cardRefs.current[question.id] = el;
                }}
              >
                <h2 className={styles.question__title}>{question.text}</h2>
                <Button className={styles.question__button}>
                  {isActive ? '-' : '+'}
                </Button>
              </Card>

              {isActive && (
                <Card
                  onClick={handleClickMore.bind(null, question.id)}
                  className={` ${styles.question} ${styles.question__absolute} ${styles.question}__${question.id}`}
                  style={
                    {
                      '--initial-top': `${clickPosition.top - 100}px`,
                      '--initial-left': `${clickPosition.left - 100}px`,
                      '--initial-width': `${clickPosition.width}px`,
                      '--initial-height': `${clickPosition.height}px`,
                    } as React.CSSProperties
                  }
                >
                  <h2 className={styles.question__title}>{question.text}</h2>
                  <p className={styles.question__answer}>{question.answer}</p>
                  <Button className={styles.question__button}>-</Button>
                </Card>
              )}
            </Fragment>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default QuestionsSection;
