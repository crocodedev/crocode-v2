import styles from './styles.module.scss';

type TProps = {
  html: string;
};

const StyleGuide = ({ html }: TProps) => {
  return (
    <div
      className={styles.section}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default StyleGuide;
