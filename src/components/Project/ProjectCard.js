import React from 'react'
import {
  ProjectCardWrapper,
  ProjectH2,
  ProjectH4,
  ProjectImg,
  ProjectContent,
  ProjectContentDetail,
  ProjectLinkWrapper,
  ProjectLinkH4,
  ProjectDesc,
  // Strong,
  ProjectImgContentWrapper,
} from "./StyledProject";

const ProjectCard = ({
  frontend,
  backend,
  deploy,
  github,
  image,
  site,
  siteName,
  mainFuntion,
  detail1,
  detail2,
  detail3,
  detail4,
  heading,
  heading1,
  heading2, notion,
  presentation
}) => {
  return (
    <ProjectCardWrapper>
      <ProjectH2>{heading}</ProjectH2>
      {heading1 !== null ? <ProjectH4>{heading1}</ProjectH4> : null}
      <ProjectH4>{heading2}</ProjectH4>
      <ProjectImgContentWrapper>
        {/* <ProjectImgWrapper> */}
        <ProjectImg image={image} />
        {/* </ProjectImgWrapper> */}
        <ProjectContent>
          <ProjectContentDetail>
            {detail1}
            <br />
            <br />
            {detail2 ? (
              <>
                {detail2}
                <br />
                <br />
              </>
            ) : null}
            {detail3 ? (
              <>
                {detail3}
                <br />
                <br />
              </>
            ) : null}
            {detail4 ? (
              <>
                {detail4}
                <br />
                <br />
              </>
            ) : null}
          </ProjectContentDetail>
          {/* 사이트, 위키, 후기, 주요기능, 회고글, 프론트,백,배포 주스택  */}
          <ProjectLinkH4>주요 기능</ProjectLinkH4>
          <ProjectDesc>{mainFuntion}</ProjectDesc>
          <ProjectLinkWrapper>
            {siteName ? (
              <ProjectLinkH4>
                사이트
                <a href={site} target="_blank" rel="noreferrer">
                  {" "}
                  {siteName}
                </a>
              </ProjectLinkH4>
            ) : null}
            <ProjectLinkH4>
              Github
              <a href={github} target="_blank" rel="noreferrer">
                {" "}
                wiki
              </a>
            </ProjectLinkH4>
          </ProjectLinkWrapper>
          {notion && presentation ? (
            <ProjectLinkWrapper>
              <ProjectLinkH4>
                Notion
                <a href={notion} target="_blank" rel="noreferrer">
                  {" "}
                  notion
                </a>
              </ProjectLinkH4>
              <ProjectLinkH4>
                발표 영상
                <a href={presentation} target="_blank" rel="noreferrer">
                  {" "}
                  youtube
                </a>
              </ProjectLinkH4>
            </ProjectLinkWrapper>
          ) : null}
          <ProjectLinkH4>Front-end</ProjectLinkH4>
          <ProjectDesc>{frontend}</ProjectDesc>
          {backend ? (
            <>
              <ProjectLinkH4>Back-end</ProjectLinkH4>
              <ProjectDesc>{backend}</ProjectDesc>
            </>
          ) : null}
          <ProjectLinkH4>Deploy</ProjectLinkH4>
          <ProjectDesc>{deploy}</ProjectDesc>
        </ProjectContent>
      </ProjectImgContentWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard
