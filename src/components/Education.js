import React from 'react';
import styled from 'styled-components';
import Tilt from "react-parallax-tilt";

const Education = () => {
  return (
    <EducationContainer>
      <h1>education</h1>
      <EducationDisplay>
        <EducationColorBackground>
          <Tilt perspective={700}>
            <EducationDegree>
              <EducationDegreeHeader><h1>ut: rio grande valley</h1></EducationDegreeHeader>
              <EducationDegreeDetail>
                <EducationDegreeLeft>
                  <p>b.s. degree of computer science</p>
                  <p>gpa: 3.10</p>
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

const EducationContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  > h1 {
    text-transform: uppercase;
    font-size: 60px;
    font-weight: bolder;
    margin-bottom: 15px;
  }

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const EducationDisplay = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const EducationColorBackground = styled.div`
  background-image: linear-gradient(255deg, #80ff72 0%, #7ff4b5 48%, #7ee8fa 100%);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
`;

const EducationDegree = styled.div`
    display: flex;
    flex-direction: column;
    border: 4px solid black;
    border-radius: 10px;
    font-size: 15px;
    background-color: white;
    cursor: pointer;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;

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
`;

const EducationDegreeDetail = styled.div`
  display: flex;
  padding: 10px;
`;

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
`;

const EducationDegreeRight = styled.div`
  padding: 10px;

  > p {
    font-size: 20px;
    font-weight: 600px;
    text-transform: uppercase;
  }
`;