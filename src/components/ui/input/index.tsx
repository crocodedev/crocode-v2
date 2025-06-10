import { IconClip } from '@/components/icons';

import { TInput } from '@/types/Input';

import styles from './styles.module.scss';

type TProps = TInput & {
  className?: string;
  error?: string;
  value?: string;
};

const Input = ({
  label = '',
  placeholder = '',
  type = 'text',
  className,
  value,
  error,
  ...rest
}: TProps) => {
  return (
    <label className={`${styles.input} ${className}`}>
      <div className={styles.input__messages}>
        {label && <span className={styles.input__label}>{label}</span>}
        {error && <span className={styles.input__error}>{error}</span>}
      </div>
      {type === 'textarea' ? (
        <textarea
          rows={1}
          cols={1}
          className={`${styles.input__input} ${error && styles.input__input_error} ${styles.input__textarea}`}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      ) : type === 'file' ? (
        <label className={styles.input__file_label}>
          <input type={type} className={styles.input__file} {...rest} />
          <span className={styles.input__file_icon}>{IconClip()}</span>
        </label>
      ) : (
        <input
          type={type}
          className={`${styles.input__input} ${error && styles.input__input_error}`}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      )}
    </label>
  );
};

export default Input;
