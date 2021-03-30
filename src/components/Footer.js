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

/**set text to black, set into the center, give 
 * a padding of 10 and font size of 1em
 */
const FooterContainer = styled.div`
  background-color: whitesmoke;
  color: black;
  text-align: center;
  font-size: 2em;
  padding: 10px;
  width: 100vw fit-content;

 /**set the font size of 1.3 when the screen hits 426px
 width and change the width 95.25% when going lower than 
 321px */
  @media screen and (max-width: 426px) {
    font-size: 1.3em;
  }

  @media screen and (max-width: 321px) {
    width: 95.25%;
  }
`;