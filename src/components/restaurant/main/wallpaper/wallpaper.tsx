import Image from 'next/image';
import { RestaurantType } from '../../../../interface/restaurant';

const WallpaperRestaurant = ({ wallpaper, name, type, time }: RestaurantType) => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="absolute z-10 xs:top-10 xs:left-1 md:left-1 bg-white-f rounded-[24px] xs:w-[280px] xs:h-[180px]">
          <h1 className="xs:text-[24px] md:text-[36px] ml-12 mt-[38px]">{name}</h1>
          <p className=" ml-12">{type}</p>
          <p className=" ml-12">{time}</p>
        </div>
        <div className="relative xs:h-[256px] md:h-[364px] xl:h-[460px]">
          <Image src={wallpaper} layout="fill" alt="wallpaper-restaraunt" />
        </div>
      </div>
    </div>
  );
};

export default WallpaperRestaurant;
