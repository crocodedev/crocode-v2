import { TInput } from '@/types/Input';

import styles from './styles.module.scss';

type TProps = TInput & {
  className?: string;
};

const Input = ({
  label = '',
  placeholder = '',
  type = 'text',
  className,
}: TProps) => {
  return (
    <label className={`${styles.input} ${className}`}>
      {label && <span className={styles.input__label}>{label}</span>}
      <input
        type={type}
        className={styles.input__input}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
