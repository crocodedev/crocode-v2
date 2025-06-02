import Image from 'next/image';

import { Button, Input } from '@/components/ui';

import { TInput } from '@/types/Input';

import styles from './styles.module.scss';

type TProps = {
  className?: string;
  isShow: boolean;
  form: {
    title: string;
    inputs: TInput[];
    message?: {
      text: string;
    };
    link?: {
      href: string;
      text: string;
    };
  };
};

const PopupContactUs = ({ isShow, form, className }: TProps) => {
  return (
    <div
      className={`${styles.popup} ${isShow ? styles.popup__show : ''} ${className}`}
    >
      <div className={styles.popup__background_wrapper}>
        <Image
          fill={true}
          src={'/background.png'}
          className={styles.popup__background}
          alt={'background'}
        />
      </div>
      <div className={styles.popup__main}>
        <form className={styles.popup__form}>
          <h3 className={styles.popup__title}>{form.title}</h3>
          <div className={styles.popup__inputs}>
            {form.inputs.map((input, index) => (
              <Input
                className={styles.popup__input}
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                key={index}
              />
            ))}
          </div>
          <div className={styles.popup__message}>
            <span className={styles.popup__message_text}>
              {form.message?.text}
            </span>
            <a href={form.link?.href} className={styles.popup__policy}>
              {form.link?.text}
            </a>
          </div>
          <Button className={styles.popup__button} view={'second'}>
            Send form
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PopupContactUs;
