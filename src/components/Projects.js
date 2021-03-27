import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { projectList } from "./ProjectList";
import StarIcon from "@material-ui/icons/Star";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import 'react-vertical-timeline-component/style.min.css';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },

  titleSection: {
    fontSize: "xxx-large",
    fontWeight: 400,
    textTransform: "uppercase",
    marginBottom: 15,
    color: "whitesmoke",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  }
});

const getTimelineElements = () => projectList.map((element, index) => (
  <VerticalTimelineElement {...element.props}>
    <ToolsList>
      {element.tools.map((toolNames, index) => (<p key={index}>{toolNames}</p>))}
    </ToolsList>
    <h3 className="vertical-timeline-element-title">{element.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
    <p>{element.content}</p>
    <ButtonList>
      {Object.entries(element.sources).map(
        (key, index) => (
          <ThemeProvider key={index} theme={theme}>
            <Button className="buttonList" href={key[1]} variant="outlined" color='primary'>
              {key[0]}
            </Button>
          </ThemeProvider>
        ))}
    </ButtonList>
  </VerticalTimelineElement>
));

const Projects = () => {
  const classes = useStyles();

  return (
    <ProjectsContainer id="/projects">
      {/**title */}
      <ProjectsHeaderContainer><h1 className={classes.titleSection}>projects</h1></ProjectsHeaderContainer>
      <ProjectList>
        <VerticalTimeline>
          {getTimelineElements()}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </ProjectList>
    </ProjectsContainer>

  )
}

export default Projects

const ProjectsHeaderContainer = styled.div`
  text-align: center;
`;

const ProjectList = styled.div`
  margin-bottom: 20px;
`;

const ToolsList = styled.div`
  display: flex;
  margin-top: -18px;
  margin-bottom: 15px;

  > p {
    background-color: lightgray;
    padding: 8px;
    color: black;
    border: 1px solid lightgray;
    border-radius: 999px;
  }

  > p:not(:last-child){
    margin-right: 15px;
  }

  @media screen and (max-width: 426px) {
      display: inline-block;
      > p {
        display: inline-block;
      }
    }
`;

const ButtonList = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  & .buttonList { 
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

const ProjectsContainer = styled.div`
  padding: 6px;
  border-bottom: 1px solid black;
  width: 100vw fit-content;
      
    
`;