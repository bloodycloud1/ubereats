import path from 'path';
import { promises as fs } from 'fs';
import { Restaurant } from '../interface/restaurant';

export const readFileRestaurant = async () => {
  const filePath = path.join(process.cwd(), 'db/db.json');
  const fileDb = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileDb) as Restaurant[];
};
