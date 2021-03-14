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
    fontSize: 60,
    fontWeight: 'bolder',
    textTransform: "uppercase",
    marginBottom: 15,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

const Projects = () => {
  const classes = useStyles();

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
              <Button href={key[1]} variant="outlined" color="primary" className={classes.margin}>
                {key[0]}
              </Button>
            </ThemeProvider>
          ))}
      </ButtonList>
    </VerticalTimelineElement>
  ));

  return (
    <ProjectsContainer>
      <ProjectList>
        {/**title */}
        <h1 className={classes.titleSection}>projects</h1>
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

const ProjectsContainer = styled.div`
  border-bottom: 1px solid black;
`;

const ProjectList = styled.div`
  > h1 {
    margin-top: 20px;
    text-align: center;
  }

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
`;

const ButtonList = styled.div`
  display: flex;
`;