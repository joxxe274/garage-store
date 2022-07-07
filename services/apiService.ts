import axios from "axios";
import { Product } from '../@types/products';

export const getProducts = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SELF_URL}/api/data`);
    return res.data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }

    return false;
  }
};

export const getTags = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SELF_URL}/api/tags`);
    return res.data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }

    return false;
  }
}

export const getProduct = async (id: number) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SELF_URL}/api/data`);
    const product = res.data.products.find((product: Product) => product.id === id);
    return product;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }

    return false;
  }
}