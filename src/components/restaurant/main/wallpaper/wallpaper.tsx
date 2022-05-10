const WallpaperRestaurant = (props: any) => {
  const { wallpaperUrl } = props;
  return (
    <div className="wallpaper container mx-auto">
      <div className="relative">
        <div className="absolute">
          <div className=" w-72  bg-white-f ">
            <div className="">
              <div>Якитория</div>
              <div>Азиатская</div>
              <div>40 - 50 min</div>
            </div>
          </div>
        </div>
        <img src={wallpaperUrl} className="wallpaper-img mx-auto" />
      </div>
    </div>
  );
};

export default WallpaperRestaurant;
