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
    maxWidth: 1200,
    boxShadow: '-1px 4px 20px -6px rgba(0, 0, 0, 0.75)',
  },

  media: {
    paddingTop: "56.25%"
  },
});

function About () {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <AboutContainer id="/about">
      <About__Inner>
        <ReactCardFlip className="test" isFlipped={isFlipped} flipDirection="horizontal">
          <About__image>
            <Card className={classes.root} style={{ width: 600 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={bum}
                  title="Pablo Sandoval"
                  alt=""
                />
              </CardActionArea>
              <About__front>
                <Typography variant="h2">
                  ABOUT ME
                  </Typography>
                <IconButton onClick={handleClick}>
                  <ArrowForwardIosRoundedIcon fontSize="large" />
                </IconButton>
              </About__front>

            </Card>
          </About__image>

          <About__description>
            <Card className={classes.root}>
              <CardContent className={classes.media, "helper"} style={{ padding: 20, width: 560, height: 374 }}>
                <Typography variant="h5" component="h2" align="center">
                  Hello, my name is Pablo Armando Sandoval
                </Typography>

                <Typography variant="h5" color="textSecondary" component="h2">
                  I am an inspired software developer who is driven to create amazing applications
                  and like to learn new types of frameworks and programming languages. I've learned 
                  <strong style={{color: 'black'}}> react js</strong> with <strong style={{color: 'black'}}>firebase</strong> for authentication and data storing
                  that help create clones such as <strong style={{color: 'black'}}>amazon</strong>, <strong style={{color: 'black'}}>twitter</strong>, 
                  <strong style={{color: 'black'}}> discord</strong>, <strong style={{color: 'black'}}>linkedin</strong>, and <strong style={{color: 'black'}}>facebook</strong>.
                  I'm willing to learn new things to gain lots of experiences and become a better
                  engineer that could land me the best companies for my career.
                </Typography>
                <About__back>
                  <IconButton onClick={handleClick}>
                    <ArrowBackIosRoundedIcon fontSize="large" />
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

/** make sure there is no overflow of the background and give border bottom of where the section ends*/
const AboutContainer = styled.div`
  width: 100vw fit-content;
  border-bottom: 1px solid black;
`;

/**give the caontainer a display to center the content inside and some 20px margin on top and bottom */
const About__Inner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

/**give border radius around the image and about me card */
const About__image = styled.div`
  border-radius: 4px;
  /**when the screen size hits 426px give it flex and center the card
  with the card width changing to 90% */
  @media screen and (max-width: 426px) {
    display: flex;
    justify-content: center;
    .MuiPaper-root {
      width: 90% !important;
    }
  }
  
`;

/**same as the about__image with a border radius*/
const About__description = styled.div`
  border-radius: 4px;

/**same style as before but make height auto so it 
doesnt cut off bc it has a specific height if it's
not below 426px*/
  @media screen and (max-width: 426px) {
    display: flex;
    justify-content: center;
    .MuiPaper-root.MuiCard-root {
      width: 90% !important;
    }

    .MuiCardContent-root.helper {
      width: 90% !important;
      height: auto !important;
    }
  }
`;

/**give this div to center and align the text and arrow */
const About__front = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /**give left margin to the icon and make the color black */
  > .MuiIconButton-root {
    margin-left: 15px;
    color: black;
  }

  /**when the screen goes lower than 426px give some left margin to
  the text*/
  @media screen and (max-width: 426px) {
    margin-left: 34px;
  } 
`;

/**give same style as about__back */
const About__back = styled.div`
  text-align: center;
  > .MuiIconButton-root {
    color: black;
  }
`;