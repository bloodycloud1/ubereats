import type { NextApiRequest, NextApiResponse } from "next";
import reustarants from "../../../db/db1.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(reustarants);
}
