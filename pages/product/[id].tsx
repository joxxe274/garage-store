import React from 'react'
import { Product } from '../../@types/products';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styles from './Product.module.scss'
import { Header } from '../../components/header/Header.component';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import { MainLayout } from '../../layouts/Main.layout';
import { getProducts, getProduct } from '../../services/apiService';
import { formatNumber } from '../../services/utils';

interface ProductProps {
  product: Product;
}

var settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
};



const ProductComponent: NextPage<ProductProps> = ({product}) => {
  const [shareAvailable, setShareAvailable] = React.useState(false);
  const descriptionPage = `${product.name} - ${product.description[0]}`;

  console.log(descriptionPage);

  React.useEffect(() => {
    setShareAvailable(!navigator.canShare ? false : true);
  }, []);

  const webShare = async () => {
    const title = product.name;
    const text = product.name + ' ' + product.description[0];
    const url = `${process.env.NEXT_PUBLIC_SELF_URL}/product/${product.id}`;
  
    try {
      await navigator.share({ title, text, url });
    } catch (error) {
      console.error('Error sharing: ' + error);
    }
  }

  return (
    <MainLayout description={descriptionPage} image={product.images[0]} title={product.name}>
      <Header />
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {product.images.map((image, idx) => (
              <div className={styles.slide} key={idx}>
                <Image src={image} alt={`${product.name} - img-${idx + 1}`} layout="fill" objectFit="cover" objectPosition="center" />
              </div>
            ))}
          </Slider>
          <div className={styles.shareButton}>
            {shareAvailable && (
              <div className={styles.buttonShare} onClick={webShare}>
                Compatir
              </div>
            )}
          </div>
        </div>
        <div className={styles.contentCard}>
          <div>
            <h2>{product.name}</h2>
            <p className={styles.productPrice}><span>Precio:</span> {formatNumber(product.price)}{product.currency}</p>
            {product.description.map((desc, idx) => (
              <p key={idx} className={styles.productDescription}>{desc}</p>
            ))}
            {product.ref_url && (
              <p className={styles.productRef}>Referencia: 
              <a href={product.ref_url} target="_BLANK" rel="noreferrer">Link.</a></p>
            )}
            {product.status === 'sold' && (
              <p className={styles.productSold}>Vendido</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductComponent;

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const res = await getProducts();

  const paths = res.products.map((product: Product) => ({
    params: { id: String(product.id) },
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  const data = await getProduct(Number(id));

  return {
    props: {
      product: data
    }
  }
}