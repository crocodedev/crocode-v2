import Image from 'next/image';

import Button from '@/components/ui/button';
import { FieldError, useForm } from 'react-hook-form';

import { data } from './data';
import styles from './styles.module.scss';
import { Input } from '@/components/ui';

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
          placeholder='Enter E-mail'
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
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default SubscribeSection;
