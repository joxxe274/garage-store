import { faEnvelope, faPhone, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1>joxxe&apos;s garage sale</h1>
      </div>
      <div className={styles.contact}>
        <div className={styles.item}>
          <a href="mailto:joxxe274@gmail.com?subject=Interesado en venta de garage">
            <FontAwesomeIcon icon={faEnvelope} size={'xs'} color="#fff" />
            joxxe274@gmail.com
          </a>
        </div>
        <div className={styles.item}>
          <a href="tel:+50660883684">
            <FontAwesomeIcon icon={faPhone} size={'xs'} color="#fff" />
            +506 6088-3684
          </a>
        </div>
      </div>
    </div>
  )
}
