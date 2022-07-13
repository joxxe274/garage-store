import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo} style={{cursor: 'pointer'}}>
        <Link href={'/'}>
          <h1>joxxe&apos;s garage sale</h1>
        </Link>
      </div>
      <div className={styles.contact}>
        <div className={styles.item}>
          <a href="mailto:joxxe274@gmail.com?subject=Interesado en venta de garage">
            <Image src={'/assets/img/icons/mail-icon.jpeg'} alt="Arrow" width={20} height={20}></Image>
            joxxe274@gmail.com
          </a>
        </div>
        <div className={styles.item}>
          <a href="tel:+50660883684">
            <Image src={'/assets/img/icons/phone-icon.png'} alt="Arrow" width={20} height={20}></Image>
            +506 6088-3684
          </a>
        </div>
      </div>
    </div>
  )
}
