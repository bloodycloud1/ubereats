import { FC } from "react";
import { Reustarant } from "../../../interface/reustarant";
import Link from "next/link";

const Reustarant: FC<Reustarant> = (props) => {
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
