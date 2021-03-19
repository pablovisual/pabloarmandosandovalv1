import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Footer>
        © {new Date().getFullYear()}
      </Footer>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div``;

const Footer = styled.div`

`;