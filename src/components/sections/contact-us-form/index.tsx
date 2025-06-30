import Image from 'next/image';
import { FieldError, useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';

import { Button, Checkbox, Input } from '@/components/ui';

import { form } from './data';
import styles from './styles.module.scss';

type TProps = {
  image?: {
    src: string;
    alt: string;
  };
};

type FormValues = {
  [key: string]: string;
};

const ContactUsForm = ({
  image = {
    src: '/background.png',
    alt: 'background',
  },
}: TProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contact__image_wrapper}>
        <Image
          className={styles.contact__image}
          fill={true}
          src={image.src}
          alt={image.alt}
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__inner}>
          <h3 className={styles.form__title}>{form.title}</h3>
          <div className={styles.form__inputs}>
            {form.inputs.map((input, index) => {
              return (
                <Input
                  control={control}
                  className={styles.form__input}
                  label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  key={index}
                  error={
                    (errors as Record<string, FieldError>)?.[input.name]
                      ?.message
                  }
                  {...register(input.name, input.rules)}
                />
              );
            })}
            {form.file && (
              <div className={styles.form__input_file_wrapper}>
                {form.file.map((input, i) => (
                  <Input
                    className={styles.form__input}
                    label={input.label}
                    type={input.type}
                    placeholder={input.placeholder}
                    key={i}
                    error={
                      (errors as Record<string, FieldError>)?.[input.name]
                        ?.message
                    }
                    {...register(input.name, input.rules)}
                  />
                ))}
              </div>
            )}
          </div>
          <Checkbox
            type={form.checkbox.type}
            label={form.checkbox.label}
            link={{ href: '/', label: ' Privacy policy' }}
            error={
              (errors as Record<string, FieldError>)?.[form.checkbox.name]
                ?.message
            }
            className={styles.form__checkbox}
            {...register(form.checkbox.name, form.checkbox.rules)}
          />
          <Button
            type='submit'
            className={`${styles.form__button} ${!isValid ? styles.form__button_disabled : ''}`}
            view={'second'}
            disabled={!isValid}
          >
            Send form
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;
