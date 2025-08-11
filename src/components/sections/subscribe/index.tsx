import Image from 'next/image';
import { FieldError, useForm } from 'react-hook-form';

import { Input } from '@/components/ui';
import Button from '@/components/ui/button';

import { data } from './data';
import styles from './styles.module.scss';

type FormValues = {
  [key: string]: string;
};

const SubscribeSection = () => {
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
    <section className={styles.subscribe}>
      <Image
        className={styles.subscribe__background}
        src={data.background.src}
        fill
        alt={data.background.alt}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.subscribe__form}
      >
        <h2 className={styles.subscribe__title}>{data.title}</h2>
        <Input
          className={styles.subscribe__input}
          type='email'
          placeholder='Wprowadź e-mail'
          error={
            (errors as Record<string, FieldError>)?.[data.input.name]?.message
          }
          {...register(data.input.name, data.input.rules)}
        />
        <Button
          type='submit'
          className={styles.subscribe__button}
          disabled={!isValid}
        >
          {data.button}
        </Button>
      </form>
    </section>
  );
};

export default SubscribeSection;
