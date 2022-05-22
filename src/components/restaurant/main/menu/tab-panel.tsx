import React, { FC, ReactNode } from 'react';

type TabPanelProps = {
  children: ReactNode;
  value: number;
  index: number;
};

const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index } = props;
  return (
    <div className="grid gap-4 xs:grid-cols-1 lg:grid-cols-2" hidden={value !== index}>
      {value === index && children}
    </div>
  );
};

export default TabPanel;
