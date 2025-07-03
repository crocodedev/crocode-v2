import styles from './styles.module.scss';

type TProps = {
  label: string;
  className?: string;
};

const TitleSection = ({ label, className }: TProps) => {
  return <h2 className={`${styles.title} ${className}`}>{label}</h2>;
};

export default TitleSection;
