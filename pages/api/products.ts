// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: object | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const productUrl = process.env.API;
    const products = await axios.get(`${productUrl}/products`);
    res.status(200).json({ products: products.data });
  } catch (error) {
    res.status(500).json({ products: null });
  }
}
