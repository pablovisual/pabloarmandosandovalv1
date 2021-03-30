import React, { useState } from 'react';
import styled from 'styled-components';
import Tilt from "react-parallax-tilt";

const Education = () => {
  return (
    <EducationContainer id="/education">
      <EducationHeaderContainer><h1>education</h1></EducationHeaderContainer>
      <EducationDisplay>
        <EducationColorBackground>
          <Tilt perspective={700}>
            <EducationDegree>
              <EducationDegreeHeader><h1>ut: rio grande valley</h1></EducationDegreeHeader>
              <EducationDegreeDetail>
                <EducationDegreeLeft>
                  <p>b.s. degree of computer science</p>
                </EducationDegreeLeft>

                <EducationDegreeRight>
                  <p>graduated: december 2019</p>
                </EducationDegreeRight>
              </EducationDegreeDetail>
            </EducationDegree>
          </Tilt>
        </EducationColorBackground>
      </EducationDisplay>
    </EducationContainer>
  )
}

export default Education

/** give the div a column direction only
 * for the title and other div with padding
 * width of 100vw and black border bottom
*/
const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  width: 100vw fit-content;
  border-bottom: 1px solid black;
`;

/**align the text to the center and make
 * letters to uppercase with margin and font
 * adjustments and color of whitesmoke
 */
const EducationHeaderContainer = styled.div`
  text-align: center;
  > h1 {
    text-transform: uppercase;
    font-size: xxx-large;
    font-weight: 400;
    margin-bottom: 15px;
    color: whitesmoke;
  }
`;

/**center the divs inside with a margin bottom */
const EducationDisplay = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

/**give a div a colored background of the backgroud
 * of the whole page with some padding, a 3px 
 * colored border and some radius, with cetnering
 * the contents inside
 */
const EducationColorBackground = styled.div`
  background-image: linear-gradient(255deg, #80ff72 0%, #7ff4b5 48%, #7ee8fa 100%);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
`;

/**set the direction to columns for the degree
 * header and description with border, and border
 * radius, giving a pointer look when hovers over 
 * the div, with a box shadow to give that hover effect
 */
const EducationDegree = styled.div`
    display: flex;
    flex-direction: column;
    border: 4px solid black;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;

/**adjust the header text inside the div */
const EducationDegreeHeader = styled.div`
  > h1 {
    text-align: center;
    border-radius: 5px 5px 0 0;
    text-transform: uppercase;
    font-size: 45px;
    border-bottom: 1px solid black;
    background-color: whitesmoke;
    padding: 10px;
  }

  /**if the screen hits 426px width or lower
  set the font size to inherit so the text doest
  overflow */
  @media screen and (max-width: 426px) {
    > h1 {
      font-size: inherit;
    }
  }
`;

/**set the divs left and right as a flex
 * row width padding
 */
const EducationDegreeDetail = styled.div`
  display: flex;
  padding: 10px;
`;

/** give padding to the left, and adjust
 * the page text and add margin bottom thats
 * not the last child
*/
const EducationDegreeLeft = styled.div`
  padding: 10px;

  > p {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600px;
    text-align: start;
  }

  > p:not(:last-child) {
    margin-bottom: 10px;
  }

  /**make the page text font size small when
  screen hits 426px or less */
  @media screen and (max-width: 426px) {
    > p {
      font-size: small;
    }
  }
`;

/**give the same style to the right */
const EducationDegreeRight = styled.div`
  padding: 10px;
  > p {
    font-size: 20px;
    font-weight: 600px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 426px) {
    > p {
      font-size: small;
    }
  }
`;