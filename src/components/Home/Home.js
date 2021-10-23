import React from 'react'
import { Container } from '../../GlobalStyle'

import {
  HomeWrapper,
  HomeContent,
  HomeTitle,
  HomeContentText,
  HomeImgWrapper,
  HomeImg,
} from "./StyledHome";

const Home = () => {


  return (
    <Container>
      <HomeWrapper>
        <HomeImgWrapper>
          <HomeImg />
        </HomeImgWrapper>
        <HomeContent>
          <HomeTitle>Web Developer</HomeTitle>
          <HomeContentText>
            Front-end 개발자 허용준입니다. 노력과 최선의 힘을 믿고 있습니다{" "}
            <br />
            후회가 남지 않도록 매순간 최선을 다하며 실력있는 개발자가 되겠습니다
          </HomeContentText>
        </HomeContent>
      </HomeWrapper>
    </Container>
  );
}

export default Home
