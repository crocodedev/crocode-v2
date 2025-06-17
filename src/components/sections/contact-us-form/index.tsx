import Image from 'next/image';

import { Button, Checkbox, Input } from '@/components/ui';

import { form } from './data';
import styles from './styles.module.scss';

type TProps = {
  image?: {
    src: string;
    alt: string;
  };
};

const ContactUsForm = ({
  image = {
    src: '/background.png',
    alt: 'background',
  },
}: TProps) => {
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
    </section>
  );
};

export default ContactUsForm;
