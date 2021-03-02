import React, { useState } from 'react';
import styled from 'styled-components';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import ReactCardFlip from "react-card-flip";
import bum from "../assets/altumcode-U0tBTn8UR8I-unsplash.jpg";
import { makeStyles } from '@material-ui/core/styles';
import { CardActions, IconButton } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';


const useStyles = makeStyles({
  root: {
    maxWidth:1200,
  },
  
  media: {
    height: 340,
  },
});

const About = () => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <AboutContainer>
      <About__Inner>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <About__image>
            <Card className={classes.root} style={{width: 600}} variant="outlined">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={bum}
                  title="Pablo Sandoval"
                  alt="" 
                />
              </CardActionArea>
                <About__next>
                  <Typography variant="h2" color="lightgray">
                    ABOUT ME
                  </Typography>
                  <IconButton onClick={handleClick}>
                    <ArrowForwardIosRoundedIcon fontSize="large" />
                  </IconButton>
                </About__next>

            </Card>
          </About__image>

          <About__description>
            <Card className={classes.root}>
              <CardContent className={classes.media} style={{padding: 20, width: 560, height: 374}}>
                <Typography variant="h5" color="blue" component="h2" align="center">
                  Hello, my name is Pablo Armando Sandoval
                </Typography>

                <Typography variant="h5" color="textSecondary" component="h2">
                  I am an inspired software developer who is driven to create amazing applications 
                  and like to learn new types of frameworks and programming languages. I've learned react js with firebase for authentication and data storing 
                  that help create clones such as amazon, twitter, discord, linkedin, and facebook. 
                  I'm willing to learn new things to gain lots of experiences and become a better
                  engineer that could land me the best companies for my career.
                </Typography>
                <About__back>
                  <IconButton onClick={handleClick}>
                    <ArrowBackIosRoundedIcon fontSize="large"/>
                  </IconButton>
                </About__back>
              </CardContent>
            </Card>
          </About__description>
        </ReactCardFlip>
      </About__Inner>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.section`
  height: fit-content;
`;

const About__Inner = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const About__image = styled.div`
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;


const About__description = styled.div`
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;


const About__next = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px; 

  > .MuiIconButton-root {
    margin-left: 15px;
    color: black;
  }
`;

const About__back = styled.div`
  text-align: center;

  > .MuiIconButton-root {
    color: black;
  }
`;