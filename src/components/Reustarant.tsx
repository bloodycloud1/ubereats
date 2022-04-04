import { FC } from "react";
import { ReustarantProps } from "../interface/ReustarantType";

const Reustarant: FC<ReustarantProps> = (props) => {
  const { id, name, type, time } = props;
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{type}</div>
      <div>{time}</div>
    </div>
  );
};

export default Reustarant;
