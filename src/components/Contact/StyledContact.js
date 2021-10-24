import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  height: 100%;
  min-width: 375px;
  margin: 120px auto 140px;
  @media screen and (min-width: 600px) {
    margin: 120px auto 80px;
  }
`;

export const FlexWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  align-items: center;

  > h1 {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 600px) {
    width: 90%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 500px;
    grid-template-columns: 58% 42%;
    > h1 {
      padding: 0 0 0 40px;
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1140px) {
    width: 65%;
    grid-template-columns: 65% 35%;
  }
`;
export const ContactWrapper = styled.div`
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  @media screen and (min-width: 1140px) {
    padding-left: 0;
    margin-right: 20px;
  }
`;
export const Name = styled.h3`
  margin-bottom:10px;
  font-weight: 700;
`;
export const Content = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;
