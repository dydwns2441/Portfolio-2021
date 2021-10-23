import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: -apple-system, 'Noto Sans KR', sans-serif;
        border:none;
}
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  min-width: 375px;
  margin-bottom:120px;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 1140px) {
    width: 65%;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  background: -webkit-linear-gradient(left, #7d5a50, #b4846c, #e5b299, #fcdec0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: "Roboto", sans-serif;
  padding: 40px 0 0 0;

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 85px;
  }
`;