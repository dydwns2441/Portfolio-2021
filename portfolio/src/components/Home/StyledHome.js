import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;


export const HomeContent = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

export const HomeTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;
  margin-bottom:12px;
  @media screen and (min-width: 480px) {
    font-size: 64px;
  }

  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
`;

export const HomeContentText = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
  width: 90%;
  margin: 12px auto 0;
  letter-spacing: -1px;
  @media screen and (min-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HomeImgWrapper = styled.div`
  position: absolute;
  width:100%;
  height:90vh;
  overflow: hidden;
`;

export const HomeImg = styled.img`
  background-image: url("./image/back1.jpg");
  background-size: cover;
  width: 100%;
  height: 90vh;
  background-position: center center;
  background-color: darkgrey;
  background-blend-mode: multiply;
`;
