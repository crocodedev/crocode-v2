import styles from './styles.module.scss';

type AnchorType = 'left' | 'right';

type TProps = {
  anchor?: AnchorType;
  title: string;
};

export const Title = ({ title, anchor = 'left' }: TProps) => {
  return (
    <div className={`${styles.container} ${styles[anchor]}`}>
      <h2 className={`${styles.title} ${styles[anchor]}`}>
        {title?.toUpperCase()}
      </h2>
    </div>
  );
};
