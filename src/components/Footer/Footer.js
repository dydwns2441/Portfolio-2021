import React from 'react'
import {
  FooterContainer,
  SocialIcons,
  SocialIconLink,
  Notion,
  Tistory,
  Infomation,
  FooterWrapper,
} from "./StyledFooter";
import { FaInstagram, FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Infomation>
          <h3>YJ's Portfolio</h3>
          <p>© 2021. Heo Yong Jun. All rights reserved.</p>
        </Infomation>
        <SocialIcons>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <div>
              <Tistory src="./image/tistory.svg" alt="tistory" />
            </div>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <div>
              <Notion src="./image/notion.png" alt="tistory" />
            </div>
          </SocialIconLink>
        </SocialIcons>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer
