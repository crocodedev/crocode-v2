import Image from 'next/image';

import { Button, Checkbox, Input } from '@/components/ui';

import { TInput } from '@/types/Input';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

type TProps = {
  image: {
    src: string;
    alt: string;
  };
  form: {
    title: string;
    inputs: TInput[];
    checkbox: TInput;
  };
};

const ContactUs = ({ image, form }: TProps) => {
  return (
    <SectionLayout className={styles.contact}>
      <div className={styles.contact__image_wrapper}>
        <Image
          className={styles.contact__image}
          width={960}
          height={960}
          src={image.src}
          alt={image.alt}
        />
      </div>
      <form className={styles.form}>
        <div className={styles.form__inner}>
          <h3 className={styles.form__title}>{form.title}</h3>
          <div className={styles.form__inputs}>
            {form.inputs.map((input, index) => (
              <Input
                className={styles.form__input}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                key={index}
              />
            ))}
          </div>
          <Checkbox
            type={form.checkbox.type}
            label={form.checkbox.label}
            link={{ href: '/', label: ' Privacy policy' }}
            className={styles.form__checkbox}
          />
          <Button className={styles.form__button} view={'second'}>
            Send form
          </Button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default ContactUs;
