import React, { useState } from 'react';
import styled from 'styled-components';
import UTRGV from "../assets/utrgv.png"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },

    titleSection: {
      fontSize: 'xxx-large',
      fontWeight: 400,
      textTransform: "uppercase",
      marginBottom: 15,
      color: "whitesmoke",
    },

    header: {
      fontSize: 30,
      fontWeight: 'bolder',
      textTransform: "uppercase",
    },

    font: {
      fontSize: 18,
    }

  });

  const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      borderRadius: 4,
      transition: 'transform 0.3s',
      "&:hover": { transform: 'scale(1.05)' },
      boxShadow: "-1px 4px 20px -6px rgba(0, 0, 0, 0.75)",
      
      '&:not(:last-child)': {
        borderBottom: 0,
      },

      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },

      maxWidth: 1200,
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },

      flexGrow: 0,
    },

    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      "&p": { fontSize: 18}
    },
  }))(MuiAccordionDetails);
  

const Experience = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : true);
    };

    return (
      <ExperienceContainer id="/experience">
        {/**Title */}
        <EducationHeaderContainer><h1 className={classes.titleSection} >experience</h1></EducationHeaderContainer>
        {/**Exp Details */}
        <ExperienceCard>
          <Accordion className={classes.root} square expanded={expanded === 'panel1'} onChange={handleChange("panel1")}>
            <AccordionSummary  className="test" aria-controls="panel1d-content" id="panel1d-header">
              <Typography className={classes.header}>ut: rio grande valley</Typography>
            </AccordionSummary>
          <AccordionDetails>
            <ExperienceCompany>
              <ExperienceCompanyName>
                <h1>Research Assistant</h1>
                <p className={classes.font}><strong>Technology: </strong>Matlab, ACF(autocorrelation function), Faster R-CNN, Yolo</p>
                <p className={classes.font}><strong>Duration: </strong>May 2019 - August 2019</p>
                <p className={classes.font}><strong>Desctiption:</strong></p>
              </ExperienceCompanyName>
              <ExperienceCompanyImage>
                <img src={UTRGV} alt="" />
              </ExperienceCompanyImage>
            </ExperienceCompany>
            <Typography className={classes.font}>
              <ul>
                <li>Developed a program using Matlab to 
                  see how well it can learn on automatically 
                  annotated data. The goal was to check if 
                  automatically generated training data is 
                  viable for machines.
                </li>
                <li>Used three different supervised 
                  learning models to run through our 
                  500 custom images. To get the four 
                  coordinates of where said object 
                  (mostly pedestrian) is in our images.
                </li>
                <li>Then compared the coordinates to our 
                  ground truth that I made using an annotated toolbox 
                  that was provided, to obtain three different Average 
                  Precision recall graphs.</li>
              </ul>
            </Typography>
          </AccordionDetails>
         </Accordion>
        </ExperienceCard>
      </ExperienceContainer>
    )
}

export default Experience

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  border-bottom: 1px solid black;
  width: 100vw fit-content;
`;

const EducationHeaderContainer = styled.div`
  text-align: center;
`;

const ExperienceCard = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 426px) {
  p.MuiTypography-root{
    font-size: larger;
   }
  }
`;

const ExperienceCompany = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExperienceCompanyName = styled.div`
  h1 {
    margin-bottom: 20px;
  }

  > p:not(:last-child) {
    margin-bottom: 20px;
    color: gray;
  }

  > p > strong {
    color: black;
    font-size: 20px;
  }
`;

const ExperienceCompanyImage = styled.div`
  > img {
    height: 200px;
    
  }

  @media screen and (max-width: 426px) {
  > img {
    height: auto;
    width: 100%;
   
  }
  }
`;