import React from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import { contactList } from "./ContactList";

const getContactList = () => contactList.map(element => (
  <ButtonList>
    {Object.entries(element.sources).map((key, index) => (
      <Button target="_blank" rel="noopener noreferrer" style={{color: `${key[1][2]}`, border: `1px solid ${key[1][2]}`}} className="buttonList" href={key[1][0]} key={index} size="large" variant="outlined" startIcon={key[1][1]}>
        {key[0]}
      </Button>
    ))}
  </ButtonList>
));

const Contact = () => {
  return (
    <ContactContainer id="/contact">
      <ContactForm>
        <PaperComponent style={{borderRadius: 15}} elevation={10}>
          <h1>Connect With Me</h1>
          {getContactList()}
        </PaperComponent>
      </ContactForm>
    </ContactContainer>
  )
}

export default Contact

/**give the container some padding and margin
 * then center the content with 100vw
 */
const ContactContainer = styled.div`
  padding: 6px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100vw fit-content;
`;

/**give margin to the bottom so it doesnt 
 * stick to the footer div
 */
const ContactForm = styled.div`
  margin-bottom: 20px;
`;

/**this styled component takes the Paper attr
 * and change the settings to fit contents
 */
const PaperComponent = styled(Paper)`
  border-radius: 15px;
  > h1{
    text-align: center;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  padding: 20px;

  /**when the screen hits 376px or lower increase font size */
  @media screen and (max-width: 376px) {
    > h1 {
      font-size: xx-large;
    }
  }
`;

/**give flex to the buttons amd center then
 * as to center the text in the buttons
 */
const ButtonList = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  /**give margin to the right except the last one */
  .buttonList { 
      :not(:last-child) { 
        margin-right: 10px;
      }
    }

  /**when the screen hits lower than 426, instead
  display flex with direction column to make them 
  stacked with one another*/
  @media screen and (max-width: 426px) {
    display: flex;
    flex-direction: column;
    
    /**center the text in the buttons
    take away the margin on the right
    and give to the bottom except the 
    last child */
    .buttonList {
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      :not(:last-child) {
        margin-right: 0;
        margin-bottom: 10px
      }
    }
  }
`;

