import { FC } from 'react';
import { RestaurantType } from '../../../../interface/restaurant';
import Link from 'next/link';

const Restaurant: FC<RestaurantType> = (props) => {
  const { id, name, image, type, time } = props;
  return (
    <div className="justify-items: stretch shadow-md my-2">
      <Link href="/restaurant/[id]" as={`/restaurant/${id}`} passHref>
        <a>
          <div>
            <img className="w-full h-64" src={image} />
          </div>
          <div className=" pl-3">
            <h3 className="text-base mt-3">{name}</h3>
            <div className="text-tiny my-1">{type}</div>
            <div className="text-tiny pb-3">{time}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Restaurant;
