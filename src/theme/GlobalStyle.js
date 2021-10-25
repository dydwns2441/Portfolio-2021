import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
     * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      border:none;
      @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    }
    body {
      background-color: ${({ theme }) => theme.bgColor};
      color: ${({ theme }) => theme.textColor};
      font-family: -apple-system,'Noto Sans KR', sans-serif;
      text-rendering: optimizeLegibility;
      line-height: 1.5;
      /* -webkit-font-smoothing: antialiased; */
    }
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  min-width: 375px;
  margin-bottom: 120px;
  border: none;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  border: none;

  @media screen and (min-width: 1140px) {
    width: 65%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  background: -webkit-linear-gradient(left, #889eaf, #334756);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: "Roboto", sans-serif;
  padding: 40px 0 0 0;

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 1000px) {
    font-size: 5rem;
  }
`;