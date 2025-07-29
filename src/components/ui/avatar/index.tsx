import styles from './styles.module.scss';

type TProps = {
  active: boolean;
  onClick: () => void;
  className?: string;
};

const Avatar = ({ active, onClick, className }: TProps) => {
  return (
    <button
      type='button'
      className={`${styles.avatar} ${active ? styles.active : ''} ${className}`}
      onClick={onClick}
    ></button>
  );
};

export default Avatar;
