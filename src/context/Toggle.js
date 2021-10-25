import React from "react";
import styled from "styled-components";

function ThemeToggle({ toggle, mode }) {
  return (
      <ToggleWrapper onClick={toggle} mode={mode}>
        {mode === "dark" ? "☀️" : "🌙"}
      </ToggleWrapper>
  );
}

export default ThemeToggle;



const ToggleWrapper = styled.button`
  background-color: ${(props) => props.theme.cdColor};
  border: ${(props) => props.theme.borderColor};
  font-size: 20px;
  color: ${(props) => props.theme.arrowColor};
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  box-shadow: ${(props) =>
    props.mode === "dark"
      ? "0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)"
      : "0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)"};
  &:hover {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    transition: all 0.1s;
  }
`;
