import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const HeaderContainer = styled.nav`
  min-width: 375px;
  width: 100%;
  height: 80px;
  margin-top: -100px;
  display: flex;
  padding: 25px 20px;
  align-items: center;
  position: absolute;
  z-index: 10;
  position: sticky;
  top: 0;
  transition: 0.6s ease-in-out all;
  background-color: ${({ scrollNav }) => (scrollNav ? "#fff" : "none")};

  @media screen and (min-width: 768px) {
    /* margin-top: -100px; */
    height: 100px;
    padding: 30px 30px 30px 30px;
  }
`;

export const HeaderLogo = styled.h3`
  display: none;
  color: ${({ scrollNav }) => (scrollNav ? "#7D5A50" : "#fff")};
  cursor: pointer;
  /* color:black; */
  @media screen and (min-width: 768px) {
    display: block;
    width: 200px;
    margin-left: 30px;
    font-size: 20px;
  }
`;

export const HeaderContent = styled.ul`
  padding: 0 10px;
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: ${({ scrollNav }) => (scrollNav ? "#7c7c7c" : "#fff")};
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-right: 20px;
  }
`;

export const HeaderItem = styled.li`
  font-size: 18px;
  
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin: 0 25px;
    font-size: 20px;
  }
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  &.active {
    /* padding: 0 0 10px 0; */
    /* border-bottom: 3px solid blue; */
  }
`;