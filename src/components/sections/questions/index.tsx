import { useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Button, Card, Title } from '@/components/ui';

import styles from './styles.module.scss';

const QUESTIONS = [
  {
    id: '01',
    text: 'What does the cost consist of?',
    answer: 'Tralalero tralala',
  },
  {
    id: '02',
    text: 'What models of cooperation do you have?',
    answer: 'Tralalero tralala',
  },
  {
    id: '03',
    text: 'How is the work organized in the Crocode Team?',
    answer: 'Tralalero tralala',
  },
  {
    id: '04',
    text: 'What service do I need?',
    answer: 'Tralalero tralala',
  },
  {
    id: '05',
    text: 'What will I get as a result?',
    answer: 'Tralalero tralala',
  },
  {
    id: '06',
    text: 'What the sages of work?',
    answer: 'Tralalero tralala',
  },
  {
    id: '07',
    text: 'I don`t have the documentation ready. What to do?',
    answer: 'Tralalero tralala',
  },
  {
    id: '08',
    text: 'How do you ensure the quality of your work?',
    answer: 'Tralalero tralala',
  },
];

const getPushClass = (cardIndex: number, activeId: string | null): string => {
  if (!activeId) return '';
  const activeIndex = QUESTIONS.findIndex((q) => q.id === activeId);

  if (cardIndex === activeIndex) return 'question_active';
  if (cardIndex < activeIndex && cardIndex % 3 === 0) return 'pushed-left';
  if (cardIndex < activeIndex && cardIndex % 3 === 1) return 'pushed-up';
  if (cardIndex < activeIndex && cardIndex % 3 === 2) return 'pushed-down';
  if (cardIndex > activeIndex && cardIndex % 2 === 0) return 'pushed-right';
  return 'pushed-down';
};

const QuestionsSection = () => {
  const [indexActiveCard, setIndexActiveCard] = useState<string | null>(null);

  const handleClickMore = (index: string) => {
    setIndexActiveCard(indexActiveCard !== index ? index : null);
  };

  return (
    <SectionLayout className={styles.section}>
      <Title text='QUESTIONS' anchor='right' />
      <div
        className={`${styles.container} ${indexActiveCard !== null && styles.container_active}`}
      >
        {QUESTIONS.map((question, index) => {
          const isActive = indexActiveCard === question.id;

          return (
            <Card
              onClick={handleClickMore.bind(null, question.id)}
              className={`
                  ${styles.question}
                  ${isActive ? styles.question_active : ''}
                  ${indexActiveCard && !isActive ? styles.hide : ''}
                  ${getPushClass(index, indexActiveCard)}
              `}
              key={question.id}
            >
              <h2 className={styles.question__title}>{question.text}</h2>
              <p
                className={`${styles.question__answer} ${indexActiveCard !== null && styles.question__answer_active}`}
              >
                {question.answer}
              </p>
              <Button className={styles.question__button}>
                {isActive ? '-' : '+'}
              </Button>
            </Card>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default QuestionsSection;
