import React from 'react'
import { Container, Wrapper, Title } from '../../theme/GlobalStyle'
import {
  ProjectWrapper,
  ProjectCard,
  ProjectH2,
  ProjectH4,
  ProjectImg,
  ProjectContent,
  ProjectContentDetail,
  ProjectLinkWrapper,
  ProjectLinkH4,
  ProjectLink,
  ProjectDesc,
  ProjectImgContentWrapper,
} from "./StyledProject";
const Project = () => {
  return (
    <Container id="project">
      <Wrapper>
        <Title>PROJECT</Title>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectH2>
              우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱 플랫폼
            </ProjectH2>
            <ProjectH4>2021.09 - 2021.10 (4주 / 4인 프로젝트)</ProjectH4>
            <ProjectH4>코드스테이츠 Final Project</ProjectH4>
            <ProjectImgContentWrapper>
              {/* <ProjectImgWrapper> */}
              <ProjectImg />
              {/* </ProjectImgWrapper> */}
              <ProjectContent>
                <ProjectContentDetail>
                  우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱
                  플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할 수
                  있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할
                  수 있는 웹/앱
                  <br />
                  <br /> 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할 수
                  있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할
                  수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매
                  할 수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문,
                  판매 할 수 있는 웹/앱 플랫폼
                  <br />
                  <br /> 우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼
                </ProjectContentDetail>
                {/* 사이트, 위키, 후기, 주요기능, 회고글, 프론트,백,배포 주스택  */}
                <ProjectLinkWrapper>
                  <div>
                    <ProjectLinkH4>사이트</ProjectLinkH4>
                    <ProjectLink href="/" target="_blank" rel="noreferrer">
                      uptodoor.shop
                    </ProjectLink>
                  </div>
                  <div>
                    <ProjectLinkH4>노션</ProjectLinkH4>
                    <ProjectLink href="/" target="_blank" rel="noreferrer">
                      uptodoor.shop
                    </ProjectLink>
                  </div>
                </ProjectLinkWrapper>
                <ProjectLinkH4>Front-end</ProjectLinkH4>
                <ProjectDesc>
                  React, React-hooks, JavaScript, styled-components
                </ProjectDesc>
                <ProjectLinkH4>Back-end</ProjectLinkH4>
                <ProjectDesc>NodeJs, Express, MySQL, Sequelize</ProjectDesc>
                <ProjectLinkH4>Deploy</ProjectLinkH4>
                <ProjectDesc>S3, EC2, RDS, CloudFront</ProjectDesc>
              </ProjectContent>
            </ProjectImgContentWrapper>
          </ProjectCard>
          <ProjectCard>
            <ProjectH2>
              유기견 보호에 관심있는 사람들의 커뮤니티 웹 서비스
            </ProjectH2>
            <ProjectH4>2021.08 - 2021.9 (2주 / 4인 프로젝트)</ProjectH4>
            <ProjectH4>코드스테이츠 First Project</ProjectH4>
            <ProjectImgContentWrapper>
              {/* <ProjectImgWrapper> */}
              <ProjectImg />
              {/* </ProjectImgWrapper> */}
              <ProjectContent>
                <ProjectContentDetail>
                  우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는 웹/앱
                  플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할 수
                  있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할
                  수 있는 웹/앱
                  <br />
                  <br /> 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할 수
                  있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매 할
                  수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문, 판매
                  할 수 있는 웹/앱 플랫폼 우리 동네 구독서비스를 조회, 주문,
                  판매 할 수 있는 웹/앱 플랫폼
                  <br />
                  <br /> 우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼우리 동네 구독서비스를 조회, 주문, 판매 할 수 있는
                  웹/앱 플랫폼
                </ProjectContentDetail>
                {/* 사이트, 위키, 후기, 주요기능, 회고글, 프론트,백,배포 주스택  */}
                <ProjectLinkWrapper>
                  <div>
                    <ProjectLinkH4>사이트 주소</ProjectLinkH4>
                    <ProjectLink href="/" target="_blank" rel="noreferrer">
                      uptodoor.shop
                    </ProjectLink>
                  </div>
                  <div>
                    <ProjectLinkH4>노션</ProjectLinkH4>
                    <ProjectLink href="/" target="_blank" rel="noreferrer">
                      uptodoor.shop
                    </ProjectLink>
                  </div>
                </ProjectLinkWrapper>
                  <ProjectLinkH4>Front-end</ProjectLinkH4>
                  <ProjectDesc>
                    React, Redux, JavaScript,TypeScript, styled-components
                  </ProjectDesc>
                  <ProjectLinkH4>Back-end</ProjectLinkH4>
                  <ProjectDesc>
                    NodeJs, Express, MySQL, Sequelize, Winston
                  </ProjectDesc>
                  <ProjectLinkH4>Deploy</ProjectLinkH4>
                  <ProjectDesc>
                    S3, EC2, RDS, CloudFront, Load Balancer
                  </ProjectDesc>
              </ProjectContent>
            </ProjectImgContentWrapper>
          </ProjectCard>
        </ProjectWrapper>
      </Wrapper>
    </Container>
  );
}

export default Project
