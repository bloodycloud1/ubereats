const TabDishCard = (props: any) => {
  const { dishname, price, imgUrl, onClick } = props;
  // discription
  return (
    <div className="flex justify-between border border-solid border-grey-e rounded">
      <div>
        <div className="text-green-57">{dishname}</div>
        {/* <div className="text-xs">{discription}</div>*/}
        <button className="text-yellow-400">подробнее</button>
        <div>{price} р</div>
        <button className="flex items-center">
          <span>добавить в</span>
          <img className="h-4 w-4" src="/images/components/header/shopbag.svg" />
        </button>
      </div>
      <div>
        <img className="wallpaper-img" src={imgUrl} alt="картинка блюда" onClick={onClick} />
      </div>
    </div>
  );
};
export default TabDishCard;
