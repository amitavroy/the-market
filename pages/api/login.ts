// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { useCookies } from "react-cookie";

type Data = {
  token: string | null;
  userId: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const url = process.env.API;
    const resp = await axios.post(`${url}/auth`, req.body);
    res.status(200).json({ token: resp.data.token, userId: resp.data.userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ token: null, userId: null });
  }
}
