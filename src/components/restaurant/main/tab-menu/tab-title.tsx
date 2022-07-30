import { FC } from 'react';

type TabTitleProps = {
  title: string;
  value: number;
  index: number;
};

const TabTitle: FC<TabTitleProps> = (props) => {
  const { title, value, index } = props;
  return (
    <h1 className="text-2xl my-8" hidden={value !== index}>
      {title}
    </h1>
  );
};

export default TabTitle;
