import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderContent,
  HeaderItem,
  NavLinks,
  HeaderWrapper,
} from "./StyledHeader";


const Header = () => {

    const [headerBg, setHeaderBg] = useState("")
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
        setHeaderBg("bgColor")
      } else {
        setScrollNav(false);
        setHeaderBg("");
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    };
  console.log(headerBg);
  return (
    <HeaderContainer
      className={headerBg}

    >
      <HeaderWrapper>
      <HeaderLogo className={headerBg ? "bgColorText" : ""} onClick={toggleHome}>
        YJ's Portfolio
      </HeaderLogo>

      <HeaderContent className={headerBg ? "bgColorText" : ""}>
        <HeaderItem onClick={toggleHome}>Home</HeaderItem>
        <HeaderItem>
          <NavLinks
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Me
          </NavLinks>
        </HeaderItem>
        <HeaderItem>
          <NavLinks
            to="project"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Project
          </NavLinks>
        </HeaderItem>
        <HeaderItem>
          <NavLinks
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </NavLinks>
        </HeaderItem>
      </HeaderContent>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header
