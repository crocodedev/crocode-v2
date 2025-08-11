/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { IconClip } from '@/components/icons';

import { TInput } from '@/types/Input';

import styles from './styles.module.scss';

type TProps = TInput & {
  className?: string;
  error?: string;
  value?: string;
  [key: string]: any;
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
  if (type === 'tel') {
    return (
      <Controller
        {...rest}
        render={({ field, fieldState }) => (
          <label className={`${styles.input} ${className}`}>
            <div className={styles.input__messages}>
              {label && <span className={styles.input__label}>{label}</span>}
              {fieldState?.error?.message && (
                <span className={styles.input__error}>
                  {fieldState.error.message}
                </span>
              )}
            </div>
            <PhoneInput
              country={'pl'}
              value={field.value}
              onChange={(value) => field.onChange(value)}
              containerClass={`${styles.input__input_tel_container} ${fieldState.error?.message && styles.input__input_tel_container_error}`}
              inputClass={`${styles.input__input_tel} ${fieldState.error?.message && styles.input__input_tel_error}`}
              buttonClass={`${styles.input__input_tel_button} ${fieldState.error?.message && styles.input__input_tel_button_error}`}
            />
          </label>
        )}
      />
    );
  } else {
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
  }
};

export default Input;
