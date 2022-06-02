import { FC, ReactNode } from 'react';

type TabTitleProps = {
  children: ReactNode;
  value: number;
  index: number;
};

const TabTitle: FC<TabTitleProps> = (props) => {
  const { children, value, index } = props;
  return (
    <h1 className="text-2xl my-8" hidden={value !== index}>
      {children}
    </h1>
  );
};

export default TabTitle;
