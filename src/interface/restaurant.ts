export interface DishType {
  dishname: string;
  imgUrl: string;
  discription: string;
  price: number;
}

export interface MenuType {
  name: string;
  dishlist: DishType[];
}

export interface RestaurantType {
  id?: string;
  name?: string;
  type?: string;
  time?: string;
  image: string;
  wallpaper: string | any;
  menu: MenuType[];
}
