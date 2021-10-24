import React from 'react'
import { Title } from "../../theme/GlobalStyle";
import {
  FlexWrapper,
  ContactWrapper,
  Name,ContentWrapper,
  Content,ContactContainer
} from "./StyledContact";


const Contact = () => {
  return (
    <ContactContainer id="contact">
      <FlexWrapper>
        <Title>CONTACT</Title>
        <ContactWrapper>
          <ContentWrapper>
            <Name>EMAIL</Name>
            <Content>heoyjun6@gmail.com</Content>
          </ContentWrapper>
          <ContentWrapper>
            <Name>MOBILE</Name>
            <Content>010-7185-2791</Content>
          </ContentWrapper>
          <ContentWrapper>
            <Name>BLOG</Name>
            <Content>miracleground.tistory.com</Content>
          </ContentWrapper>
        </ContactWrapper>
      </FlexWrapper>
    </ContactContainer>
  );
}

export default Contact
