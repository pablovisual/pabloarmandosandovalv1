import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import { skills } from "./Tech-Skills";

const useStyles = makeStyles({
    root: {
      maxWidth: 365,

      transition: 'transform 0.3s',

      "&:hover": {
      transform: 'scale(1.05)'}
    },

    titleSection: {
      fontSize: 60,
      fontWeight: 'bolder',
    },

    title: {
      fontSize: 40,
      fontWeight: 600,
    },
  });

const Skills = () => {
  const classes = useStyles();
    return (
        <SkillsContainer>
          {/**title */}
          <h1 className={classes.titleSection} style={{textAlign: 'center'}}>Tech Skills</h1>
          {/**skills*/}
          <SkillCards>
            {/**Programming Languages */}
            <SkillsProgrammingLanguagesCard style={{marginLeft: 10}}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} style={{textAlign: "center" }} variant="h4" component="h2" color="textPrimary">
                    Programming Languages
                    <hr />
                  </Typography>
                  <SkillsProgrammingLanguages>
                    {skills.programmingLanguages.map((skill, index) => (
                    <div className="programmingLanguages" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img style={{objectFit: "contain", width: 50, height: 50, marginRight: 20}} src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" /> 
                      </a>
                      <a href={skill.link} className="programmingLanguages__name" style={{textAlign: "center"}}>{skill.skillName}</a>
                    </div>
                   ))}
                  </SkillsProgrammingLanguages>
                </CardContent>
              </Card>
            </SkillsProgrammingLanguagesCard>

            {/**Frontend */}
            <SkillsFrontendCard>
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} style={{textAlign: "center"}} variant="h4" component="h2" color="textPrimary">
                    Frontend
                    <hr />
                  </Typography>
                  <SkillsFrontend>
                    {skills.frontend.map((skill, index) => (
                    <div className="frontend" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img style={{objectFit: "contain", width: 50, height: 50, marginRight: 20}} src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" /> 
                      </a>
                      <a href={skill.link} className="frontend__name" style={{textAlign: "center"}}>{skill.skillName}</a>
                    </div>
                   ))}
                  </SkillsFrontend>
                </CardContent>
              </Card>
            </SkillsFrontendCard>

            {/**Backend, Database, hosting platform */}
            <SkillsBackend__Database__HostingPlatformCard>
              <Card className={classes.root} style={{marginBottom: 10}}>
                <CardContent>
                  <Typography className={classes.title} style={{textAlign: "center"}} variant="h4" component="h2" color="textPrimary">
                    Backend
                    <hr />
                  </Typography>
                  <SkillsBackend>
                    {skills.backend.map((skill, index) => (
                    <div className="backend" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img style={{objectFit: "contain", width: 50, height: 50, marginRight: 20}} src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" /> 
                      </a>
                      <a href={skill.link} className="backend__name" style={{textAlign: "center"}}>{skill.skillName}</a>
                    </div>
                   ))}
                  </SkillsBackend>
                </CardContent>
              </Card>

              <Card className={classes.root} style={{marginBottom: 10}}>
                <CardContent>
                  <Typography className={classes.title} style={{textAlign: "center"}} variant="h4" component="h2" color="textPrimary">
                    Database
                    <hr />
                  </Typography>
                  <SkillsDatabase>
                    {skills.databases.map((skill, index) => (
                    <div className="database" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img style={{objectFit: "contain", width: 50, height: 50, marginRight: 20}} src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" /> 
                      </a>
                      <a href={skill.link} className="database__name" style={{textAlign: "center"}}>{skill.skillName}</a>
                    </div>
                   ))}
                  </SkillsDatabase>
                </CardContent>
              </Card>

              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} style={{textAlign: "center"}} variant="h4" component="h2" color="textPrimary">
                    Hosting Platforms
                    <hr />
                  </Typography>
                  <SkillsHostingPlatforms>
                    {skills.hostingPlatforms.map((skill, index) => (
                    <div className="hostingPlatforms" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img style={{objectFit: "contain", width: 50, height: 50, marginRight: 20}} src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" /> 
                      </a>
                      <a href={skill.link} className="hostingPlatforms__name" style={{textAlign: "center"}}>{skill.skillName}</a>
                    </div>
                   ))}
                  </SkillsHostingPlatforms>
                </CardContent>
              </Card>
            </SkillsBackend__Database__HostingPlatformCard>

            <SkillsVersionControlCard>
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} style={{textAlign: "center"}} variant="h4" component="h2" color="textPrimary">
                    Version Control
                    <hr />
                  </Typography>
                  <SkillsVersionControl>
                    {skills.versionControl.map((skill, index) => (
                    <div className="versionControl" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <img style={{objectFit: "contain", width: 50, height: 50, marginRight: 20}} src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" /> 
                      </a>
                      <a href={skill.link} className="versionControl__name" style={{textAlign: "center"}}>{skill.skillName}</a>
                    </div>
                   ))}
                  </SkillsVersionControl>
                </CardContent>
              </Card>
            </SkillsVersionControlCard>
          </SkillCards>
        </SkillsContainer>
    )
}

export default Skills

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  padding: 5px;
  border-bottom: 1px solid black;
`;

const SkillCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px; 
`;

const SkillsProgrammingLanguagesCard = styled.div.attrs(props => ({
  className: props.className,
}))`
  flex: 0.25;

  & .programmingLanguages {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      padding: 10px;
  }

  & .programmingLanguages:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    object-fit: contain;
  }

  & .programmingLanguages__name {
    text-decoration: none;
    color: #343a40;
    text-align: center;
  }
`;

const SkillsProgrammingLanguages = styled.div`
  padding: 5px;
`;


const SkillsFrontendCard = styled.div.attrs(props => ({
  className: props.className,
}))`
  flex: 0.25;

  & .frontend {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      padding: 10px;
  }

  & .frontend:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    object-fit: contain;
  }

  & .frontend__name {
    text-decoration: none;
    color: #343a40;
    text-align: center;
  }
`;

const SkillsFrontend = styled.div`
  padding: 5px;
`;

const SkillsBackend__Database__HostingPlatformCard = styled.div.attrs(props => ({
  className: props.className,
}))`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & .backend {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      padding: 10px;
  }

  & .backend:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    object-fit: contain;
  }

  & .backend__name {
    text-decoration: none;
    color: #343a40;
    text-align: center;
  }

  & .database {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      padding: 10px;
  }

  & .database:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    object-fit: contain;
  }

  & .database__name {
    text-decoration: none;
    color: #343a40;
    text-align: center;
  }

  & .hostingPlatforms {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      padding: 10px;
  }

  & .hostingPlatforms:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    object-fit: contain;
  }

  & .hostingPlatforms__name {
    text-decoration: none;
    color: #343a40;
    text-align: center;
  }
`;

const SkillsBackend = styled.div`
  padding: 5px;
`;

const SkillsDatabase = styled.div`
  padding: 5px;
`;

const SkillsHostingPlatforms = styled.div`
  padding: 5px;
`;

const SkillsVersionControlCard = styled.div.attrs(props => ({
  className: props.className,
}))`
  flex: 0.25;

  & .versionControl {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      padding: 10px;
  }

  & .versionControl:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    object-fit: contain;
  }

  & .versionControl__name {
    text-decoration: none;
    color: #343a40;
    text-align: center;
  }
`;

const SkillsVersionControl = styled.div`
  padding: 5px;
`;