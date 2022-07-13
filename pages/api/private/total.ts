// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as data from '../../../public/assets/data/products.json';
import { Product } from '../../../@types/products';

interface Prices {
    c: number;
    d: number;
}
type Data = {
  totals: Prices;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = (data as any).default;
  const totals: Prices = {c: 0, d: 0};
  products.forEach((product: Product) => {
    totals[product.currency === '$'? 'd' : 'c'] += product.price;
  });
  res.status(200).json({totals});
}
