import { IconEmail, IconTel } from '@/components/icons';
import { MapboxMap, TitleSection } from '@/components/ui';

import SectionLayout from '../section-layout';

import styles from './styles.module.scss';

const CONTACTS = [
  {
    icon: IconEmail,
    href: 'mailto:welcome@crocode.io',
    text: 'welcome@crocode.io',
  },
  {
    icon: IconTel,
    href: 'tel:+48728451662',
    text: '+48728451662',
  },
];

const MAP_DATA = {
  center: [21.155451, 51.404513] as [number, number],
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 6,
  markers: [
    {
      icon: '/marker.svg',
      coordinates: [22.019343, 50.020982] as [number, number],
      popup: 'al. Tadeusza Rejtana 53A/303 35-326 Rzeszów, Poland',
    },
  ],
};

const ContactUsMap = () => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.info}>
        <TitleSection
          className={styles.info__title}
          label={'Skontaktuj się z naszym zespołem'}
        />
        <div className={styles.info__contacts}>
          <div className={styles.info__contacts__inner}>
            {CONTACTS.map((contact, index) => (
              <a
                href={contact.href}
                className={styles.info__contact}
                key={index}
              >
                <span className={styles.info__contact_icon}>
                  <contact.icon />
                </span>
                <span className={styles.info__contact_text}>
                  {contact.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <MapboxMap map={MAP_DATA} />
      </div>
    </SectionLayout>
  );
};

export default ContactUsMap;
