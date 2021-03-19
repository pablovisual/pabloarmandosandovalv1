import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer className="footer-style">
      © {new Date().getFullYear()} | All Rights Reserved
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background-color: whitesmoke;
  color: black;
  text-align: center;
  font-size: 2em;
  padding: 10px;
`;