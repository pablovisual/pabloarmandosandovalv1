import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderOption from "./HeaderOption";
import { Avatar } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import { animateScroll as scroll } from "react-scroll";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={() => scroll.scrollToTop()}><HomeIcon fontSize="large" /></HeaderAvatar>
      </HeaderLeft>



      <HeaderRight className="navItems">
        <Menu onClick={handleClick}><i>{clicked ? <ClearRoundedIcon /> : <MenuRoundedIcon />}</i></Menu>
        <div className={clicked ? "nav-menu active" : "nav-menu"}>
          <div className="link"><HeaderOption  title="about" LinkToSection="/about" /></div>
          <div className="link"><HeaderOption title="skills" LinkToSection="/skills" /></div>
          <div className="link"><HeaderOption title="experience" LinkToSection="/experience" /></div>
          <div className="link"><HeaderOption title="project" LinkToSection="/projects" /></div>
          <div className="link"><HeaderOption title="education" LinkToSection="/education" /></div>
          <div className="link"><HeaderOption title="contact" LinkToSection="/contact" /></div>
        </div>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  background-color: whitesmoke;
  top: 0;
  z-index: 999;
  width: 100vw fit-content;

  @media screen and (max-width: 321px) {
    width: 95.25%;
  }
`;

const HeaderLeft = styled.div`
  flex: 1;
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  color: black !important;
  background: none !important;
`;

const Menu = styled.div`

  > i {
    cursor: pointer;
  }
`;

const HeaderRight = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex !important;

  > ${Menu} {
    display: none;
  }

  .nav-menu {
    display: flex;
  }

  .link {
    :not(:last-child) {
      margin-right: 15px;
    }
  }
  

  @media screen and (max-width: 960px) {
    > ${Menu} {
      display: block;
    }

    .navItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 60px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: whitesmoke;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .link {
      padding: 10px;
      width: 100%;
      display: flex;
      opacity: 1;
      justify-content: center;
    }

    .link:hover {
      background-color: #7ff4b5;
      cursor: pointer;
    }
  }
`;