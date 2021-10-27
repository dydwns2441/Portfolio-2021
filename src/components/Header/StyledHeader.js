import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const HeaderContainer = styled.nav`
  min-width: 375px;

  width: 100%;
  height: 80px;
  margin-top: -100px;
  position: absolute;
  z-index: 10;
  position: sticky;
  top: 0;
  transition: 0.4s ease-in-out all;
  color: #fff;
  &.bgColor {
    background-color: ${({ theme }) => theme.cdColor} !important;
  }
  font-family: "Roboto", sans-serif;
  @media screen and (min-width: 768px) {
    height: 100px;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 25px 20px;
  align-items: center;
  height: 100%;
  @media screen and (min-width: 768px) {
    padding: 30px 30px 30px 30px;
  }
`;

export const HeaderLogo = styled.h3`
  display: none;
  color: #fff;
  &.bgColorText {
    color: ${({theme})=> theme.textColor} !important;
  }
  /* background: -webkit-linear-gradient(left, #889eaf, #334756);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; */
  cursor: pointer;
  /* color:black; */
  @media screen and (min-width: 768px) {
    display: block;
    width: 200px;
    font-size: 22px;
  }
`;

export const HeaderContent = styled.ul`
  padding: 0 10px;
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  &.bgColorText {
    color: ${({theme})=> theme.textColor} !important;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-right:-25px;
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