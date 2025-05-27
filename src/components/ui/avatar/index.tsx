import styles from './styles.module.scss';

type TProps = {
  index?: number;
  activeIndex?: number;
};

const Avatar = ({ index, activeIndex }: TProps) => {
  return (
    <div
      className={`${styles.avatar} ${index === activeIndex ? styles.active : ''}`}
    />
  );
};

export default Avatar;
