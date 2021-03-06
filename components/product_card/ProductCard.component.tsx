import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './ProductCard.module.scss';
import { Product } from '../../@types/products';
import { formatNumber } from '../../services/utils';

export const ProductCard: React.FC<Product> = ({images, name, description, price, id, currency, status}) => {

  const [image] = React.useState(images[0]);

  return (
    <div className={styles.product}>
      <div className={styles.productCard}>
        <div className={styles.productImage}>
          <Image src={image} alt={`Image product ${name}`} layout="fill" objectFit="cover" objectPosition="center" />
        </div>
        <div className={styles.productInfo}>
          <h2>{name}</h2>
          <p className={styles.productDescription}>
            {description[0]}
          </p>
          <p className={styles.productPrice}>
            <span>Precio:</span> {formatNumber(price)}{currency}
          </p>
          <Link href={`/product/${id}`}>
            <div className={`${styles.moreButton} ${status === 'sold'? styles.moreButtonSold : {}}`}>
              {status === 'sold'? 'Vendido' : 'Ver más'}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
