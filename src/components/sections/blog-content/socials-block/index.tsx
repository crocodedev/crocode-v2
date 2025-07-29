import { IconFacebook, IconLinkedin, IconTwitter } from '@/components/icons';

import { TLink } from '@/types/link';

// import Link from 'next/link';
import styles from './styles.module.scss';

type TProps = {
  socials: {
    link: TLink;
  }[];
};

const SocialsBlock = ({ socials }: TProps) => {
  const socialIcon = (name: string | undefined) => {
    switch (name) {
      case 'Twitter':
        return <IconTwitter />;
      case 'Linkedin':
        return <IconLinkedin />;
      case 'Facebook':
        return <IconFacebook />;
      default:
        return;
    }
  };

  return (
    <ul className={styles.socials}>
      {socials.map((item, i) => (
        <li key={i} className={styles.socials__item}>
          <a href={item.link?.linkExternal?.href}>
            {socialIcon(item.link?.linkExternal?.label)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialsBlock;
