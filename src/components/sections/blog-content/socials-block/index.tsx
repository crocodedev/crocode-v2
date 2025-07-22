import { TLink } from '@/types/link';

// import Link from 'next/link';
import styles from './styles.module.scss';

type TProps = {
  socials: {
    link: TLink;
    _key: string;
  }[];
};

const SocialsBlock = ({ socials }: TProps) => {
  console.log({ socials });
  return (
    <div className={styles.socials}>
      <ul>
        {socials.map((item) => (
          <li key={item._key}>
            {/* <Link href={item.link.}></Link> */}
            {item._key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialsBlock;
