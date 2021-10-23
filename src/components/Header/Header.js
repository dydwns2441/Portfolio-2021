import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderContent,
  HeaderItem,
  NavLinks,
} from "./StyledHeader";

const Header = () => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    };
  
  return (
    <HeaderContainer scrollNav={scrollNav}>
      {/* <HeaderWrapper> */}
      <HeaderLogo scrollNav={scrollNav} onClick={toggleHome}>
        YJ's Portfolio
      </HeaderLogo>

      <HeaderContent scrollNav={scrollNav}>
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
            About me
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
      {/* </HeaderWrapper> */}
    </HeaderContainer>
  );
}

export default Header
