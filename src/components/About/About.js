import React, { useState } from "react";
import { Container, Wrapper, Title } from '../../theme/GlobalStyle'
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
            운동 선수 생활로 다져진 적응력과 마인드를 바탕으로 새로운 기술에
            <br />
            거부감 없이 적극적으로 배우는 개발자가 되겠습니다.
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
                  <i className="fas fa-caret-down"></i>
                ) : (
                  <i className="fas fa-caret-right"></i>
                )}{" "}
                More about me? Just Click!
              </DetailItemToggle>
              {isOpen ? (
                <>
                  <h5>15년 간의 아마추어 선수와 코치에서 새로운 도전을</h5>
                  <DetailItemP>
                    코로나와 부상이 겹치면서 개발이라는 세계에 도전하는 새로운
                    계기가 되었습니다. 아마추어 시절부터 선수와 경기를
                    분석하기로 좋아하여 개발 일이 잘 맞을 수 있다는 지인의
                    조언으로 코드스테이츠 부트캠프에 지원하여 개발을 배우기
                    시작했습니다. 개발을 배우며 사용자가 어떤 경험을 할지
                    생각하고 상호작용하는 매력에 푹 빠져 프론트엔드 개발에
                    관심을 가지고 학습하고 있습니다.
                  </DetailItemP>
                  <h5>어떤 개발자가 되고 싶나요?</h5>
                  <DetailItemP>
                    리더십을 갖춘 개발자가 되고 싶습니다. 리더란 문제 해결에
                    있어 적극적으로 참여하고 팀의 전체적인 부분을 볼 수 있는
                    시야를 가진 사람이라고 생각합니다. 그러기 위해선 기본에 충실해야 됩니다. 이번 두 프로젝트를 통해 내가 아는 만큼 보이고, 내 실력만큼만 사용할 수 있다는 걸 몸으로 느끼며 기초의 중요성을 다시 한번 깨달았고, 탄탄한 기본기를 가지고 위해 제가 배우는 것들을 기록하고, 스터디에서 기술발표를 통해 실력있는 개발자, 제가 원하는 리더쉽이 있는 개발자가 되기 위해 노력하고 있습니다.
                  </DetailItemP>
                </>
              ) : null}
            </DetailItem>
          </Column2>
        </AboutDetailWrapper>
      </Wrapper>
    </Container>
  );
};

export default About;
