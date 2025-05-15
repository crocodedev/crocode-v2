import styles from './styles.module.scss';

type AnchorType = 'left' | 'right';

type TProps = {
  anchor?: AnchorType;
  title: string;
};

export const Title = ({ title, anchor = 'left' }: TProps) => {
  const containerClass = `${styles.container} ${styles[`container_${anchor}`]}`;
  const titleClass = `${styles.title} ${styles[`title_${anchor}`]}`;

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>{title?.toUpperCase()}</h2>
    </div>
  );
};
