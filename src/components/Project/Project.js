import React from 'react'
import { Container, Wrapper, Title } from '../../style_theme/GlobalStyle'
import {
  ProjectWrapper,
} from "./StyledProject";
import ProjectCard from './ProjectCard';
import { objFirst, objSecond, objThird } from './infoData';

const Project = () => {
  return (
    <Container id="project">
      <Wrapper>
        <Title>PROJECT</Title>
        <ProjectWrapper>
          <ProjectCard {...objFirst} />
          <ProjectCard {...objSecond} />
          <ProjectCard {...objThird} />
        </ProjectWrapper>
      </Wrapper>
    </Container>
  );
}

export default Project
