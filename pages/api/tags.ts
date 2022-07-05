// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as data from '../../public/assets/data/tags.json';
import { FilterTag } from '../../@types/products';

type Data = {
  tags: FilterTag[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ tags: (data as any).default });
}
