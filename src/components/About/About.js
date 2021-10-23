import React, { useState } from "react";
import { Container, Wrapper, Title } from "../../GlobalStyle";
import {
  AboutProfile,
  AboutProfileImg,
  AboutProfileP,
  AboutDetailWrapper,
  Column1,
  Column2,
  DetailItem,
  DetailItemTitle,
  DetailItemP,
  DetailItemToggle,
  DetailItemA,
  DetailAWrapper,
  Skill,
  SkillsWapper,
  AboutProfileImgWrapper,
} from "./StyledAbout";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const skills = ["HTML","CSS","React","Redux","styled-components",
    "Node.js","Express","Sequelize","Git",
  ];
  
  return (
    <Container id="about">
      <Wrapper>
        <Title>ABOUT ME</Title>
        <AboutProfile>
          <AboutProfileImgWrapper>
            <AboutProfileImg src="./image/IMG_5231.jpg" alt="profile" />
          </AboutProfileImgWrapper>

          <AboutProfileP>
            지금 무엇을 할 수 있을지, 이것을 하면 얼마나 성장할 수 있는지만
            생각하며 개발 공부를 하고 있습니다.
            <br />
            사용자가 어떤 경험을 할 지 상상하며 구현해내는 과정에
            <br />
            재미와 매력을 느껴 프론트엔드 개발에 관심을 가지고 학습하고
            있습니다. <br />
            운동 선수 생활로 다져진 적응력을 바탕으로 새로운 기술에 거부감 없이
            <br />
            적극적으로 배우는 개발자가 되겠습니다.
          </AboutProfileP>
        </AboutProfile>
        <AboutDetailWrapper className="grid">
          <Column1 className="col1">
            <DetailItem>
              <DetailItemTitle>Education</DetailItemTitle>
              <DetailItemP>
                - 코드스테이츠 소프트엔지니어링 30기 (21.04 - 21.10)
              </DetailItemP>
            </DetailItem>
            <DetailItem>
              <DetailItemTitle>Skills</DetailItemTitle>
              <SkillsWapper>
                {skills.map((skill) => {
                  return <Skill key={skill}>{skill}</Skill>;
                })}
              </SkillsWapper>
            </DetailItem>
            <DetailItem>
              <DetailItemTitle>Blog</DetailItemTitle>
              <DetailAWrapper>
                <DetailItemA
                  href="https://miracleground.tistory.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./image/tistory.svg"
                    alt="tistory blog"
                    width="16px"
                    height="16px"
                  />
                  Tistory
                </DetailItemA>
                <DetailItemA
                  href="https://github.com/dydwns2441"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./image/github.svg"
                    alt="tistory blog"
                    width="24px"
                    height="24px"
                  />
                  Github
                </DetailItemA>
              </DetailAWrapper>
            </DetailItem>
          </Column1>
          <Column2 className="col2">
            <DetailItem>
              <DetailItemToggle onClick={toggle}>
                {isOpen ? (
                  <i class="fas fa-caret-down"></i>
                ) : (
                  <i class="fas fa-caret-right"></i>
                )}{" "}
                More about me? Just Click!
              </DetailItemToggle>
              {isOpen ? (
                <DetailItemP>
                  코드스테이츠 소프트엔지니어링 30기 (21.04 - 21.10)
                  코드스테이츠 소프트엔지니어링 30기 (21.04 - 21.10)
                  코드스테이츠 소프트엔지니어링 30기 (21.04 - 21.10)
                  코드스테이츠 소프트엔지니어링 30기 (21.04 - 21.10)
                  코드스테이츠 소프트엔지니어링 30기 (21.04 - 21.10)코드스테이츠
                  소프트엔지니어링 30기 (21.04 - 21.10)코드스테이츠
                  소프트엔지니어링 30기 (21.04 - 21.10) 플랫폼 우리 동네
                  구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱 플랫폼 우리
                  동네 구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱 플랫폼
                  우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱
                  플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할
                  수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매
                  할 수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문,
                  판매 할 수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회,
                  주문, 판매 할 수 있는 웹/앱 플랫폼플랫폼 우리 동네
                  구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱 플랫폼 우리
                  동네 구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱 플랫폼
                  우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱
                  플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할
                  수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매
                  할 수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문,
                  판매 할 수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회,
                  주문, 판매 할 수 있는 웹/앱 플랫폼
                </DetailItemP>
              ) : null}
            </DetailItem>
          </Column2>
        </AboutDetailWrapper>
      </Wrapper>
    </Container>
  );
};

export default About;
