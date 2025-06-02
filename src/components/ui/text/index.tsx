import styles from './styles.module.scss';

type TText = {
  labels: string[];
  className?: string;
};

const Text = ({ labels, className }: TText) => {
  return (
    <>
      <div className={`${styles.text} ${className}`}>
        {labels.map((label, index) => (
          <p className={styles.text__label} key={index}>
            {label}
          </p>
        ))}
      </div>
    </>
  );
};

export default Text;
