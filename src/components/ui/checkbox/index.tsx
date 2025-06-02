import { useState } from 'react';

import { TInput } from '@/types/Input';

import styles from './styles.module.scss';

type TProps = TInput & {
  link?: {
    href: string;
    label: string;
  };
  className?: string;
};

const Checkbox = ({ type, label, link, className }: TProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`${styles.checkbox} ${className}`}>
      <input type={type} className={styles.checkbox__false} onInput={toggle} />
      <span
        className={`${styles.checkbox__true} ${isChecked && styles.checkbox__true_checked}`}
      />
      <span className={styles.checkbox__label}>
        {label}
        {link && (
          <a href={link?.href} className={styles.checkbox__link}>
            {link.label}
          </a>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
