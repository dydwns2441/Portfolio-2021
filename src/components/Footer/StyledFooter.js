import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.cdColor};
  padding: 35px 0 30px 0;
`;

export const FooterWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 600px) {
    align-items: center;
  }
`;

export const Infomation = styled.div`
  margin: 0 0 10px 0;

  > h3 {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 600px) {
    > h3 {
      text-align: center;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (min-width: 600px) {
    margin: 0 20px;
  }
`;

export const SocialIconLink = styled.a`
  color: black;
  font-size: 48px;
  > div {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:4px;
  }
`;

export const Tistory = styled.img`
    padding-top: 2px;
    width: 32px;
    height: 32px;
`;

export const Notion = styled.img`
  width: 38px;
  height: 38px;
`;