import React from 'react';
import styled from 'styled-components';
import { Avatar } from "@material-ui/core";

function Header() {
    return (
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar />
        </HeaderLeft>

        <HeaderRight>
          <p>about</p>
          <p>skills</p>
          <p>experience</p>
          <p>projects</p>
          <p>education</p>
          <p className="last">contact</p>
        </HeaderRight> 
      </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div `
  display: flex;
  position: fixed;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  background: none;
  width: 100vw;
  top: 0;
  z-index: 999;
`;

const HeaderLeft = styled.div`
  flex: 1;
`;
const HeaderAvatar = styled(Avatar)``;

const HeaderRight = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  > p {
    margin: 15px;
    justify-content: center;
    text-transform: uppercase;
  }
  > p:hover {
      cursor: pointer;
      color: lightgray;
  }

  & .last {
    padding-right: 15px;
  }
  
`