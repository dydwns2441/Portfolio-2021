import React from 'react';
import { useTheme } from "../../context/ThemeProvider";
import ThemeToggle from '../../context/Toggle';
import ScrollToTop from '../../context/ScrollToTop';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <>
      <ToggleScrollWrapper>
        <ScrollToTop />
        <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
          DarkMode
        </ThemeToggle>
      </ToggleScrollWrapper>
      <>{children}</>
    </>
  );
};
export default AppLayout;

export const ToggleScrollWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    bottom: 30px;
    right: 15px;
  }
`;