import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutContainer>
          <About__inner>
            <h1>About</h1>
          </About__inner>
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const About__inner = styled.div`
  border: 50px 1px solid lightgray;
  border-radius: 15px;
  height: 100%;
  width: 100;
  background-color: white;
`;