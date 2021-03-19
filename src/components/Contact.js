import React from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import { contactList } from "./ContactList";

const getContactList = () => contactList.map(element => (
  <ButtonList>
    {Object.entries(element.sources).map((key, index) => (
      <Button className="buttonList" href={key[1][0]} key={index} size="large" variant="outlined" color="primary" startIcon={key[1][1]}>
        {key[0]}
      </Button>
    ))}
  </ButtonList>
));

const Contact = () => {
  return (
    <ContactContainer>
      <ContactForm>
        <PaperComponent style={{borderRadius: 15}} elevation={3}>
          <h1>Connect With Me</h1>
          {getContactList()}
        </PaperComponent>
      </ContactForm>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
`;

const ContactForm = styled.div`
  margin-bottom: 20px;
`;

const PaperComponent = styled(Paper)`
  border-radius: 15px;
  > h1{
    text-align: center;
    font-size: 60px;
    font-weight: bolder;
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

  > .MuiButton-outlinedPrimary {
    color: green;
    border: 1px solid rgba(76, 175, 80, 0.5);
  }

  > .MuiButton-outlinedPrimary:hover {
    border: 1px solid #4caf50;
    background-color: rgba(76, 175, 80, 0.04);
  }
`;

