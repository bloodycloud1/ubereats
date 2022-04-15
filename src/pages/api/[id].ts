import reustarant from "../../../db/db.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler( { query: { id } }: NextApiRequest, res: NextApiResponse) {
  const filtered = reustarant.filter((p) => p.id === id);
  // Reustarant with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `reustarant with id: ${id} not found.` });
  }
}



