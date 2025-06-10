import Image from 'next/image';
import { FieldError, useForm } from 'react-hook-form';

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

type FormValues = {
  [key: string]: string;
};

const PopupContactUs = ({ isShow, form, className }: TProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

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
        <form className={styles.popup__form} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles.popup__title}>{form.title}</h3>
          <div className={styles.popup__inputs}>
            {form.inputs.map((input, index) => {
              return (
                <Input
                  key={index}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  value={input.value}
                  className={styles.popup__input}
                  error={
                    (errors as Record<string, FieldError>)?.[input.name]
                      ?.message
                  }
                  {...register(input.name, input.rules)}
                />
              );
            })}
          </div>
          <div className={styles.popup__message}>
            <span className={styles.popup__message_text}>
              {form.message?.text}
            </span>
            <a href={form.link?.href} className={styles.popup__policy}>
              {form.link?.text}
            </a>
          </div>
          <Button
            className={`${styles.popup__button} ${!isValid ? styles.popup__button_disabled : ''}`}
            disabled={!isValid}
            view={'second'}
          >
            Send form
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PopupContactUs;
