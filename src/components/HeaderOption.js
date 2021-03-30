import { AppBar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-scroll';
import styled from "styled-components";

const HeaderOption = ({ title, LinkToSection }) => {
  return (
    <HeaderOptionContainer>
      <SmoothScrollLink to={LinkToSection} smooth={true} duration={2000}><h3 className="headerOption__title">{title}</h3></SmoothScrollLink>
    </HeaderOptionContainer>
  )
}

export default HeaderOption

/**give the h3 tag except the last child a
 * margin right and give style to the title
 * options
 */
const HeaderOptionContainer = styled.div`
  display: flex;
  :not(:last-child) {
      margin-right: 15px;
    }

  .headerOption__title {
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
  }
`;

/** give some style to the Link component of
 * react scroll Link
*/
const SmoothScrollLink = styled(Link)`
  :hover {
    cursor: pointer;
    color: green;
  }
  /**give a new hover effect when screen
  hits 960px */
  @media screen and (max-width: 960px) {
    :hover {
      cursor: pointer;
      color: white;
    }
  }
`;