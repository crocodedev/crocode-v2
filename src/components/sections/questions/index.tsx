import { Fragment, useRef, useState } from 'react';

import { SectionLayout } from '@/components/sections';
import { Button, Card, Title } from '@/components/ui';

import { TData, data } from './data';
import styles from './styles.module.scss';

type TProps = {
  questions?: TData[];
};

const QuestionsSection = ({ questions = data }: TProps) => {
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
      <div
        className={`${styles.container} ${indexActiveCard !== null ? styles.container_active : ''}`}
      >
        {questions &&
          questions?.map((question) => {
            const id = question.id;
            const isActive = indexActiveCard === question.id;

            return (
              <Fragment key={question.id}>
                <Card
                  onClick={handleClickMore.bind(null, id)}
                  className={`${styles.question}
                ${styles[`question__${id}`]}
                ${isActive && styles.hide}`}
                  ref={(el: HTMLDivElement | null) => {
                    cardRefs.current[id] = el;
                  }}
                >
                  <h2 className={styles.question__title}>{question.text}</h2>
                  <Button className={styles.question__button}>
                    {isActive ? '-' : '+'}
                  </Button>
                </Card>

                {isActive && (
                  <Card
                    onClick={handleClickMore.bind(null, id)}
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
