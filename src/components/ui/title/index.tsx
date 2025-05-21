import styles from './styles.module.scss';

type AnchorType = 'left' | 'right';

type TProps = {
  anchor?: AnchorType;
  text: string;
};

const Title = ({ text, anchor = 'left' }: TProps) => {
  return (
    <div className={`${styles.container} ${styles[anchor]}`}>
      <h2 className={`${styles.title} ${styles[anchor]}`}>
        {text?.toUpperCase()}
      </h2>
    </div>
  );
};

export default Title;
