import React from 'react'
import { Container, Wrapper, Title } from '../../theme/GlobalStyle'
import {
  ProjectWrapper,
  ProjectCard,
  ProjectH2,
  ProjectH4,
  ProjectFirstImg,
  ProjectContent,
  ProjectContentDetail,
  ProjectLinkWrapper,
  ProjectLinkH4,
  ProjectDesc,
  ProjectSecondImg,Strong,
  ProjectImgContentWrapper,
} from "./StyledProject";
const Project = () => {
  return (
    <Container id="project">
      <Wrapper>
        <Title>PROJECT</Title>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectH2>지역 경제 기반 정기구독 플랫폼 UptoDoor</ProjectH2>
            <ProjectH4>코드스테이츠 Final Project</ProjectH4>
            <ProjectH4>2021.09 - 2021.10 (4주 / 4인 프로젝트)</ProjectH4>

            <ProjectImgContentWrapper>
              {/* <ProjectImgWrapper> */}
              <ProjectFirstImg />
              {/* </ProjectImgWrapper> */}
              <ProjectContent>
                <ProjectContentDetail>
                  covid-19으로 인해 침제된 지역 경제 활성화의 돌파구로 우리 집
                  반경 2.5km의 <Strong>정기 구독 서비스</Strong>를 조회, 주문,
                  판매 할 수 있는 웹사이트입니다. 소상공인은 장기 고객 확보의
                  기회를, 소비자에게는 주변에도 좋은 월구독 서비스가 있다는
                  정보를 얻어 가까운 곳에서 더 빠르고, 신뢰도 있는 구독 서비스를
                  받을 수 있습니다.
                  <br />
                  <br /> 코드스테이츠 final project로 백엔드 개발자와 협업하는
                  과정에서 많이 배울 수 있었던 프로젝트였습니다. 작성된 api
                  문서를 바탕으로 데이터를 응답받아 뿌려주며 소통하였습니다.
                  <br />
                  <br />
                  카카오맵api으로 동네 인증 가능과 map에 검색, 클릭, 태그 선택에
                  따라 리스트와 마커가 변경되는 기능을 구현하며 많이 배울 수
                  있었습니다.
                  <br />
                  <br />
                  프론트엔드 동료와 직접 디자인을 구상하며 UI & UX에 대해서도
                  많이 고민해 볼 수 있었습니다. ApexCharts 라이브러리와 각종
                  애니메이션 효과, flex와 grid에 대해 많이 배울 수 있는
                  프로젝트였습니다.
                  <br />
                  <br />
                </ProjectContentDetail>
                {/* 사이트, 위키, 후기, 주요기능, 회고글, 프론트,백,배포 주스택  */}
                <ProjectLinkH4>주요 기능</ProjectLinkH4>
                <ProjectDesc>
                  동네 인증, 구독 찾기, 장바구니, 테스트 정기 결제, 분석 데이터
                </ProjectDesc>
                <ProjectLinkWrapper>
                  <ProjectLinkH4>
                    사이트
                    <a
                      href="https://uptodoor.shop/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      uptodoor.shop
                    </a>
                  </ProjectLinkH4>

                  <ProjectLinkH4>
                    노션 / 깃헙
                    <a
                      href="https://url.kr/9z8qt2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Notion
                    </a>
                    <a
                      href="https://url.kr/9z8qt2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </ProjectLinkH4>
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
          <ProjectCard>
            <ProjectH2>
              유기견 보호에 관심있는 사람들의 커뮤니티 BowWow
            </ProjectH2>
            <ProjectH4>코드스테이츠 First Project</ProjectH4>
            <ProjectH4>2021.08 - 2021.9 (2주 / 4인 프로젝트)</ProjectH4>
            <ProjectImgContentWrapper>
              {/* <ProjectImgWrapper> */}
              <ProjectSecondImg />
              {/* </ProjectImgWrapper> */}
              <ProjectContent>
                <ProjectContentDetail>
                  유기견 보호에 관심이 많지만 어떻게 접근해야 할지 어려운
                  사람들과 도움이 필요한 유기견 보호소를 연결해줄수 있는
                  커뮤니티 웹사이트입니다. 유기견 보호소의 위치, 봉사일정 공유,
                  입양가능한 유기견들과 입양 후기를 볼 수 있습니다.
                  <br />
                  <br /> 첫 팀 프로젝트 였던 만큼 git활용과 SR기획 단계에서
                  어떻게 진행되는지 경험할 수 있었습니다. 첫 프로젝트이고,
                  2주라는 짧은 시간으로 기본적인 기능인 로그인, 회원가입,
                  회원탈퇴/수정, 게시글 작성/수정/삭제 구현에 초점을
                  맞추었습니다. advanced로 댓글 추가,삭제 기능을 구현하였습니다.
                  <br />
                  <br /> 프론트 엔드로서 Wireframe - UI Design - 디자인 구현까지
                  동료와 많이 소통하며 좋은 UI/UX를 보여주기 위해 노력했습니다.
                </ProjectContentDetail>
                {/* 사이트, 위키, 후기, 주요기능, 회고글, 프론트,백,배포 주스택  */}
                <ProjectLinkH4>주요 기능</ProjectLinkH4>
                <ProjectDesc>
                  로그인, 회원가입, 프로필 수정/삭제, 게시글 작성/수정/삭제, 댓글 추가/삭제
                </ProjectDesc>
                <ProjectLinkWrapper>
                  <ProjectLinkH4>
                    사이트
                    <a
                      href="https://eteammerge.shop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      eteammerge.shop
                    </a>
                  </ProjectLinkH4>
                  <ProjectLinkH4>
                    깃헙 위키
                    <a
                      href="https://url.kr/9z8qt2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Wiki
                    </a>
                  </ProjectLinkH4>
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
        </ProjectWrapper>
      </Wrapper>
    </Container>
  );
}

export default Project
