import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header/Header.component'
import { SliderComponent } from '../components/slider/Slider.component'
import { HomeComponent } from '../components/home/Home.component';
import { getProducts } from '../services/apiService';

const Home: NextPage = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const res = await getProducts();
      setProducts(res.products);
    }
    getData();
  }, []);

  return (
    <div >
      <Header></Header>
      <SliderComponent products={products} />
      <HomeComponent products={products}></HomeComponent>
    </div>
  )
}

export default Home
