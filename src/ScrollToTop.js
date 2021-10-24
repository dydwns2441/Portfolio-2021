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
    border-radius: 10px;
    border: 1px solid #000;
    background: #f7f7f7;
    &:hover {
      background: linear-gradient(45deg, #7d5a50, #e5b299);
      color: #fff;
      border: none;
      border-radius: 50%;
      transition: all 0.1s;
    }
  }
`;
export const I = styled.i`
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  &::before {
    position: fixed;
    right: 46px;
    bottom: 30px;
  }
`;
