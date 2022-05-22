import { FC } from 'react';
import { RestaurantType } from '../../../../interface/restaurant';

type WallpaperUrlType = {
  wallpaperUrl: RestaurantType['wallpaper'];
};

const WallpaperRestaurant: FC<WallpaperUrlType> = ({ wallpaperUrl }) => {
  return (
    <div className="wallpaper container mx-auto">
      <div className="relative">
        <div className="wallpaper-wrapper bg-white-f">
          <div className="wallpaper-title">Якитория</div>
          <div className="wallpaper-restaurant-type">Азиатская</div>
          <div className="wallpaper-restaurant-time">40 - 50 min</div>
        </div>
        <img src={wallpaperUrl} className="wallpaper-img mx-auto" />
      </div>
    </div>
  );
};

export default WallpaperRestaurant;
