import path from "path";
import { promises as fs } from "fs";
import { Reustarant } from "../interface/reustarant";

export const readFileReustarant = async () => {
  const filePath = path.join(process.cwd(), "db/db.json");
  const fileDb = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileDb) as Reustarant[];
};
``