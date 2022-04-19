import { FC } from 'react';
import { Restaurant } from '../../../interface/restaurant';
import Link from 'next/link';

const Restaurant: FC<Restaurant> = (props) => {
  const { id, name, type, time } = props;
  return (
    <div>
      <Link href="/restaurant/[id]" as={`/restaurant/${id}`} passHref>
        <div>
          <div>{id}</div>
          <div>{name}</div>
          <div>{type}</div>
          <div>{time}</div>
        </div>
      </Link>
    </div>
  );
};

export default Restaurant;
