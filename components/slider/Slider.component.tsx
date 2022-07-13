import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider, { Settings } from 'react-slick';
import { Product } from '../../@types/products';
import styles from './Slider.module.scss';
import { formatNumber } from '../../services/utils';

var settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        dots: true
      }
    },
  ]
};

interface SliderProps {
  products: Product[];
}

export const SliderComponent: React.FC<SliderProps> = ({products}) =>{

  const [slides, setSlides] = React.useState<Product[]>([]);

  React.useEffect(() => {
    if (products.length > 0) {
      const featuredList = products.filter((p) => p.featured === true);
      if (featuredList.length > 0) {
        setSlides(featuredList);
      } else {
        setSlides([products[0]]);
      }
    }
  }, [products]);

  return (
    <Slider {...settings}>
      {slides.length > 0 && slides.map((product) => (
        <div className={styles.slide} key={product.id}>
          <div className={styles.slideContent}>
            <div className={styles.imageContent}>
              <Image src={product.images[0]} alt={`Image ${product.name}`} layout="fill" objectFit="cover" objectPosition="center" priority={false} />
            </div>
            <div className={styles.infoContent}>
              <h2>{product.name}</h2>
              <p className={styles.productDescription}>
                {product.description[0]}
              </p>
              <p className={styles.productPrice}>
                <span>Precio:</span> {formatNumber(product.price)}{product.currency}
              </p>
              <Link href={`/product/${product.id}`}>
                <div className={styles.moreButton}>
                  Ver más...
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}