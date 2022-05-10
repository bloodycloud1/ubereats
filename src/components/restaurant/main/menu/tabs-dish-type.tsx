import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#327430'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#327430'
    }
  }
});

const TabsDishType = (props: any) => {
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
