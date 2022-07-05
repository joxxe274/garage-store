import React from 'react'
import { Product } from '../../@types/products';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as dataJson from '../../public/assets/data/products.json';
import styles from './Product.module.scss'
import { Header } from '../../components/header/Header.component';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import { MainLayout } from '../../layouts/Main.layout';
import { getProduct, getProducts } from '../../services/apiService';


const ProductComponent: React.FC<any> = ({ id }) => {

  return (
    <MainLayout>
     <p>{id}</p>
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