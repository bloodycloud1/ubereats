import { FC } from "react";
import { ReustarantType } from "../../../interface/interface";
import Link from "next/link";

const Reustarant: FC<ReustarantType> = (props) => {
  const { id, name, type, time } = props;
  return (
    <div>
      <Link href="/reustarant/[id]" as={`/reustarant/${id}`} passHref>
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

export default Reustarant;
