import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import { skills } from "./SkillList";

const useStyles = makeStyles({
  root: {
    maxWidth: 365,
    transition: 'transform 0.3s',
    "&:hover": {
      transform: 'scale(1.05)'
    },
    boxShadow: "-1px 4px 20px -6px rgba(0, 0, 0, 0.75)",
  },

  titleSection: {
    fontSize: 60,
    fontWeight: 400,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 20,
    color: "whitesmoke",
  },

  title: {
    fontSize: 40,
    fontWeight: 600,
  },
});

function Skills () {
  const classes = useStyles();

  return (
    <SkillsContainer id="/skills">
      {/**title */}
      <SkillsContainerHeader><h1 className={classes.titleSection}>tech skills</h1></SkillsContainerHeader>
      {/**skills*/}
      <SkillCards>
        {/**Programming Languages */}
        <SkillsProgrammingLanguagesCard style={{ marginLeft: 10 }}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} style={{ textAlign: "center" }} variant="h4" component="h2" color="textPrimary">
                Programming Languages
                    <hr />
              </Typography>
              <SkillsProgrammingLanguages>
                {skills.programmingLanguages.map((skill, index) => (
                  <div className="programmingLanguages" key={index}>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      <img style={{ objectFit: "contain", width: 50, height: 50, marginRight: 20 }} src={skill.imgSrc} alt={skill.imgAltText} rounded="true" className="image-style m-1" />
                    </a>
                    <a href={skill.link} className="programmingLanguages__name" style={{ textAlign: "center" }}>{skill.skillName}</a>
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
              <Typography className={classes.title} style={{ textAlign: "center" }} variant="h4" component="h2" color="textPrimary">
                Frontend
                    <hr />
              </Typography>
              <SkillsFrontend>
                {skills.frontend.map((skill, index) => (
                  <div className="frontend" key={index}>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      <img style={{ objectFit: "contain", width: 50, height: 50, marginRight: 20 }} src={skill.imgSrc} alt={skill.imgAltText} rounded="true" className="image-style m-1" />
                    </a>
                    <a href={skill.link} className="frontend__name" style={{ textAlign: "center" }}>{skill.skillName}</a>
                  </div>
                ))}
              </SkillsFrontend>
            </CardContent>
          </Card>
        </SkillsFrontendCard>

        {/**Backend, Database, hosting platform */}
        <SkillsBackend__Database__HostingPlatformCard>
          <Card className={classes.root} style={{ marginBottom: 10 }}>
            <CardContent>
              <Typography className={classes.title} style={{ textAlign: "center" }} variant="h4" component="h2" color="textPrimary">
                Backend
                    <hr />
              </Typography>
              <SkillsBackend>
                {skills.backend.map((skill, index) => (
                  <div className="backend" key={index}>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      <img style={{ objectFit: "contain", width: 50, height: 50, marginRight: 20 }} src={skill.imgSrc} alt={skill.imgAltText} rounded="true" className="image-style m-1" />
                    </a>
                    <a href={skill.link} className="backend__name" style={{ textAlign: "center" }}>{skill.skillName}</a>
                  </div>
                ))}
              </SkillsBackend>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ marginBottom: 10 }}>
            <CardContent>
              <Typography className={classes.title} style={{ textAlign: "center" }} variant="h4" component="h2" color="textPrimary">
                Database
                    <hr />
              </Typography>
              <SkillsDatabase>
                {skills.databases.map((skill, index) => (
                  <div className="database" key={index}>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      <img style={{ objectFit: "contain", width: 50, height: 50, marginRight: 20 }} src={skill.imgSrc} alt={skill.imgAltText} rounded="true" className="image-style m-1" />
                    </a>
                    <a href={skill.link} className="database__name" style={{ textAlign: "center" }}>{skill.skillName}</a>
                  </div>
                ))}
              </SkillsDatabase>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} style={{ textAlign: "center" }} variant="h4" component="h2" color="textPrimary">
                Hosting Platforms
                    <hr />
              </Typography>
              <SkillsHostingPlatforms>
                {skills.hostingPlatforms.map((skill, index) => (
                  <div className="hostingPlatforms" key={index}>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      <img style={{ objectFit: "contain", width: 50, height: 50, marginRight: 20 }} src={skill.imgSrc} alt={skill.imgAltText} rounded="true" className="image-style m-1" />
                    </a>
                    <a href={skill.link} className="hostingPlatforms__name" style={{ textAlign: "center" }}>{skill.skillName}</a>
                  </div>
                ))}
              </SkillsHostingPlatforms>
            </CardContent>
          </Card>
        </SkillsBackend__Database__HostingPlatformCard>

        <SkillsVersionControlCard>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} style={{ textAlign: "center" }} variant="h4" component="h2" color="textPrimary">
                Version Control
                    <hr />
              </Typography>
              <SkillsVersionControl>
                {skills.versionControl.map((skill, index) => (
                  <div className="versionControl" key={index}>
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      <img style={{ objectFit: "contain", width: 50, height: 50, marginRight: 20 }} src={skill.imgSrc} alt={skill.imgAltText} rounded="true" className="image-style m-1" />
                    </a>
                    <a href={skill.link} className="versionControl__name" style={{ textAlign: "center" }}>{skill.skillName}</a>
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

/**give display of flex with the column
 * as the direction, add some padding with
 * border bottom and width of 100vw
 */
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  border-bottom: 1px solid black;
  width: 100vw fit-content;
`;

const SkillsContainerHeader = styled.div`
`;

/**this is where I set each card to hold a flex
 * of 0.25 so each one has a certain amount of 
 * space to cover.
 * and give same style to each div for programming
 * languages, frontend, backend, database, hosting
 * platform and version control cards
 */
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

/**this div gives each card some 
 * space, evenly so no card will
 * have more than the other
 */
const SkillCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px; 

  /**when the screen go lower than 960px
  make the cards go into a column of one with 
  how many cards there are for the rows */
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > ${SkillsProgrammingLanguagesCard} {
      margin-bottom: 10px;
      margin-left: 0px !important;
      
    }

    > ${SkillsFrontendCard} {
      margin-bottom: 10px;
    }

    > ${SkillsVersionControlCard} {
      flex: none;
      margin-top: 10px;
    }
  }
`;