import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width:100%;
`;
export const ProjectCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.cdColor};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 40px 20px;
  margin: 10px 0 30px;

  @media screen and (min-width: 600px) {
    padding: 40px;
  }
`;

export const ProjectH2 = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight:700;

  @media screen and (min-width: 600px) {
    font-size: 28px;
  }

  @media screen and (min-width: 800px) {
    font-size: 32px;
  }
`;
export const ProjectH4 = styled.h4`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 5px;
  font-weight: 700;

  @media screen and (min-width: 800px) {
    font-size: 18px;
  }
`;
export const ProjectImgContentWrapper = styled.div`
  margin-top: 27px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;
export const ProjectImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  /* border: 1px solid red; */
  max-width: 300px;
  @media screen and (min-width: 1000px) {
    width: 50%;
    height: 50%;
    margin: 0 20px 0 0;
    max-width: 300px;
  }
`;
export const ProjectFirstImg = styled.img`
  width: 100%;
  min-height: 250px;
  height: 100%;
  background-image: url ("./image/uptodoor.jpg");
  /* background-image: url("./image/uptodoor.jpeg"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  display: inline-block;
  content: "";
  /* border: 1px solid black; */
  @media screen and (min-width: 600px) {
    height: 350px;
  }
  @media screen and (min-width: 800px) {
    height: 450px;
  }
  @media screen and (min-width: 1000px) {
    min-width: 360px;
    height: 600px;

    margin-right: 30px;
  }
`;

export const Strong = styled.strong`
  font-weight: 900;
`;
export const ProjectImg = styled.div`
  width: 100%;
  min-height: 250px;
  height: 100%;
  background-image: ${({ image }) =>
    image ? `url(${image})` : `black`};
  /* background-image: url("./image/uptodoor.jpeg"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  display: inline-block;
  content: "";
  /* border: 1px solid black; */
  @media screen and (min-width: 600px) {
    height: 350px;
  }
  @media screen and (min-width: 800px) {
    height: 450px;
  }
  @media screen and (min-width: 1000px) {
    min-width: 360px;
    height: 600px;

    margin-right: 30px;
  }
`;
export const ProjectContent = styled.div`
  margin: 15px 0 0 0;
  @media screen and (min-width: 1000px) {
    margin: 0;
  }
`;
export const ProjectContentDetail = styled.p`
  font-size: 14px;

  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;
export const ProjectLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProjectLinkH4 = styled.h4`
  margin: 6px 0 6px 0;
  font-weight: 700;
  font-size:14px;
  border-left: 6px solid black;
  padding-left: 10px;
  width:50%;
  > a {
    font-weight: 400;
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    margin: 0 0 6px 10px;
  }
  @media screen and (min-width: 1000px) {
    margin: 12px 0 6px 0;
  }
`;
export const ProjectDesc = styled.p`
  margin: 0 0 12px 0;
`;

