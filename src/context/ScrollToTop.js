import styled from "styled-components";
import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [btnStatus, setBtnStatus] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const showScrollBtn = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 400) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };
  useEffect(() => {
    const chkScroll = () => {
      window.addEventListener("scroll", showScrollBtn);
    };
    chkScroll();
    return () => {
      window.removeEventListener("scroll", showScrollBtn);
    };
  });

  return (
    <ArrowChk>
      <I
        className={
          btnStatus
            ? "fas fa-angle-double-up click-icon active"
            : "fas fa-angle-double-up click-icon"
        }
        onClick={scrollTop}
      ></I>
    </ArrowChk>
  );
}

export default ScrollToTop;


const ArrowChk = styled.div`
  > .fa-angle-double-up {
    opacity: 0;
    transition: all 0.3s;
  }
  > .active {
    transition: all 0.3s;
    opacity: 1;
    z-index: 1;
    cursor: pointer;
    border-radius: 50%;
    border: ${(props) => props.theme.borderColor};
    background-color: ${(props) => props.theme.cdColor};
    color: ${(props) => props.theme.arrowColor};
    box-shadow: ${(props) =>
      props.mode === "dark"
        ? "0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)"
        : "0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)"};
    &:hover {
      background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.textColor};
      transition: all 0.1s;
    }
  }
`;
export const I = styled.i`
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
`;
