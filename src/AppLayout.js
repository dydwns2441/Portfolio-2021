import React from 'react';
import { useTheme } from "./context/ThemeProvider";
import ThemeToggle from './context/Toggle';

const AppLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <>
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
        DarkMode
      </ThemeToggle>
      <>{children}</>
    </>
  );
};
export default AppLayout;
