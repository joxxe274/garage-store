// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as data from '../../public/assets/data/products.json';
import { Product } from '../../@types/products';

type Data = {
  products: Product[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ products: (data as any).default });
}
