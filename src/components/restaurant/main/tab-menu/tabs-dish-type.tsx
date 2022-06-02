import Tabs from '@mui/material/Tabs';
import React, { FC, ReactNode } from 'react';
import { ChangeEvent } from 'react';

// type TabsDishTypeProps = {
//   children: ReactNode;
//   value: number;
//   onChange?: React;
// };

const TabsDishType = (props: any) => {
  const { children, value, handleChange } = props;

  return (
    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className="border-b border-grey-e text-green-57">
      {children}
    </Tabs>
  );
};
export default TabsDishType;
