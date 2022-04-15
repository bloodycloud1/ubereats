import reustarant from "../../../db/db.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler( { query: { id } }: NextApiRequest, res: NextApiResponse) {
  const finded = reustarant.find((p) => p.id === id);
  // Reustarant with id exists
  if (finded) {
    res.status(200).json(finded);
  } else {
    res.status(404).json({ message: `reustarant with id: ${id} not found.` });
  }
}



