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
          <p>contact</p>
        </HeaderRight> 
      </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div `
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  background-color: darkgray;

`;

const HeaderLeft = styled.div`
  flex: 1;
`;
const HeaderAvatar = styled(Avatar)``;

const HeaderRight = styled.div`
  display: flex;
  > p {
    margin: 10px;
    text-transform: uppercase;
  }
  > p:hover {
      cursor: pointer;
      color: white;
  }
  
`