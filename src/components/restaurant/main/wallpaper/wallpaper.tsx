import { FC } from 'react';
import { RestaurantType } from '../../../../interface/restaurant';

type WallpaperPropsType = {
  wallpaperUrl: RestaurantType['wallpaper'];
  wallpaperName: RestaurantType['name'];
  wallpaperType: RestaurantType['type'];
  wallpaperTime: RestaurantType['time'];
};

const WallpaperRestaurant: FC<WallpaperPropsType> = ({ wallpaperUrl, wallpaperName, wallpaperType, wallpaperTime }) => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="wallpaper-wrapper bg-white-f  shadow-md rounded-sm">
          <div className="wallpaper-title md:mt-6 md:ml-12 xs:text-2xl md:text-4xl xs:text-center md:text-left">{wallpaperName}</div>
          <div className="flex xs:flex-col xs:items-center md:flex-row md:items-start md:justify-between md:mx-12 md:mb-9 md:mt-14">
            <div className="wallpaper-restaurant-type xs:text-xs-14 lg:text-lg ">{wallpaperType}</div>
            <div className="wallpaper-restaurant-time xs:text-xs-14 lg:text-lg">{wallpaperTime}</div>
          </div>
        </div>
        <img src={wallpaperUrl} className="wallpaper-img" />
      </div>
    </div>
  );
};

export default WallpaperRestaurant;
