import React from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import { contactList } from "./ContactList";

const getContactList = () => contactList.map(element => (
  <ButtonList>
    {Object.entries(element.sources).map((key, index) => (
      <Button style={{color: `${key[1][2]}`, border: `1px solid ${key[1][2]}`}} className="buttonList" href={key[1][0]} key={index} size="large" variant="outlined" startIcon={key[1][1]}>
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

const ContactContainer = styled.div`
  padding: 6px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100vw fit-content;
`;

const ContactForm = styled.div`
  margin-bottom: 30px;
`;

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

  
`;

const ButtonList = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  .buttonList { 
      :not(:last-child) { 
        margin-right: 10px;
      }
    }
`;

