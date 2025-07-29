import { TLink } from '@/types/link';

import styles from './styles.module.scss';

type TProps = {
  socials: {
    link: TLink;
  }[];
};

const SocialsBlock = ({ socials }: TProps) => {
  return (
    <div className={styles.socials}>
      <ul>
        {socials?.map((item, i) => (
          <li key={i}>
            {/* <Link href={item.link.}></Link> */}
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialsBlock;
