import axios from "axios";
import { Product } from '../@types/products';

export const getProducts = async () => {
  try {
    const res = await axios.get(`/api/data`);
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
    const res = await axios.get(`/api/tags`);
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
    const res = await axios.get(`/api/data`);
    console.log('_________')
    console.log('_________')
    console.log('_________')
    console.log('_________')
    console.log('_________')
    console.log(res.data)
    return res.data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }

    return false;
  }
}