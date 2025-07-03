/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { FieldError, useForm } from 'react-hook-form';

import { IconCross } from '@/components/icons';
import { useMainContext } from '@/components/main-context';
import { Button, Input } from '@/components/ui';

import { TInput } from '@/types/Input';

import styles from './styles.module.scss';

type TProps = {
  className?: string;
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

const PopupContactUs = ({ form, className }: TProps) => {
  const { isOpenPopup, closePopup } = useMainContext();

  const closePopupBeyond = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.classList?.contains('popup')) closePopup();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`${styles.popup} ${isOpenPopup ? styles.popup_show : styles.popup_hidden} ${className}`}
      onClick={closePopupBeyond}
    >
      <div className={`${styles.popup__inner} popup`}>
        <div className={styles.popup__main}>
          <div className={styles.popup__background}>
            <div className={styles.popup__background_image}>
              <Image
                fill
                objectFit='cover'
                src={'/background.png'}
                alt={'background'}
              />
            </div>
            <button
              type='button'
              className={styles.popup__btn_close}
              onClick={closePopup}
            >
              <IconCross />
            </button>
          </div>
          <form
            className={styles.popup__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className={styles.popup__title}>{form.title}</h3>
            <div className={styles.popup__inputs}>
              {form.inputs.map((input, index) => (
                <Input
                  key={index}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  value={input.value}
                  className={styles.popup__input}
                  error={
                    (errors as Record<string, FieldError>)?.[input.name || '']
                      ?.message
                  }
                  {...register(input.name, input.rules)}
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
            <Button
              type='submit'
              className={`${styles.popup__button} ${!isValid ? styles.popup__button_disabled : ''}`}
              disabled={!isValid}
              view={'second'}
            >
              Send form
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupContactUs;
