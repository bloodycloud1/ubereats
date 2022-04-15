type Dish = {
  dishname: string;
  imgUrl: string;
  discription: string;
  price: number;
};

type Menu = {
  name: string;
  dishlist: Dish[];
};

export type Reustarant = {
  id: string;
  name: string;
  type: string;
  time: string;
  image: string;
  wallpaper: string;
  menu: Menu[];
};