import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import React, { FC, ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#327430'
    },
    secondary: {
      main: '#327430'
    }
  }
});

type TabsDishTypeProps = {
  children: ReactNode;
  value: number;
  handleChange: any;
};

const TabsDishType: FC<TabsDishTypeProps> = (props) => {
  const { children, value, handleChange } = props;

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        className="mb-8 border-b border-grey-e text-green-57"
        indicatorColor="primary"
        textColor="secondary"
      >
        {children}
      </Tabs>
    </ThemeProvider>
  );
};
export default TabsDishType;
