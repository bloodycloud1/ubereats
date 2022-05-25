import Tabs from '@mui/material/Tabs';
import React, { FC, ReactNode } from 'react';

type TabsDishTypeProps = {
  children: ReactNode;
  value: number;
  handleChange: any;
};

const TabsDishType: FC<TabsDishTypeProps> = (props) => {
  const { children, value, handleChange } = props;

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      className="mb-8 border-b border-grey-e text-green-57"
    >
      {children}
    </Tabs>
  );
};
export default TabsDishType;
