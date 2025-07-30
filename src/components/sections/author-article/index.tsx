import styles from './styles.module.scss';

type TProps = {
  text: string;
};

const AuthorArticle = ({ text }: TProps) => {
  return (
    <section className={styles.author__wrapper}>
      <span className={styles.author}>{text}</span>
    </section>
  );
};

export default AuthorArticle;
