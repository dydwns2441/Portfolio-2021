import styled from "styled-components";

export const AboutProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutProfileImgWrapper = styled.div`
  @media screen and (min-width: 800px) {
    width: 70%;
    margin-right: 70px;
  }
`;

export const AboutProfileImg = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  background-image: url("./image/IMG_5231.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  @media screen and (min-width: 800px) {
    max-width: 600px;
    max-height: 600px;
  }
`;

export const AboutProfileP = styled.p`
  font-size: 14px;
  line-height: 1.8rem;
`;

export const AboutDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    width: 50%;
    margin-right: 50px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 800px) {
    width: 50%;

  }
`;

export const DetailItem = styled.div``;

export const DetailItemTitle = styled.h4`
  margin: 16px 0;
  
`;

export const DetailAWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const DetailItemA = styled.a`
  text-decoration: none;
  color: black;
  list-style: none;
  margin: 0 20px 0 0;
  border: 2px solid #e7e7e7;
  padding: 8px;
  border-radius: 8px;
  width: 130px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    margin-right: 10px;
  }
  background: #ece9e6;
  background: -webkit-linear-gradient(to bottom, #ece9e6, #ffffff);
  background: linear-gradient(to bottom, #ece9e6, #ffffff);
`;

export const DetailItemToggle = styled.h4`
  margin: 16px 0;
  cursor: pointer;
`;

export const DetailItemP = styled.p`
  font-size:14px;
  margin-bottom: 10px;
`;

export const Skill = styled.div`
  padding: 3px 8px 5px;
  border-radius: 4px;
  border: 1px solid #2c3e50;
  display: inline;
  font-size: 12px;
  margin: 2px;
  vertical-align: middle;
  color: #2c3e50;
  line-height:1.5rem;
  background-color:#fff;
  margin-bottom:4px;
`;

export const SkillsWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

`;