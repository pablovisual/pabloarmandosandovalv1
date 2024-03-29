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
      minWidth: 275,
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
          <h1 className={classes.titleSection}>Tech Skills</h1>
          {/**skills*/}
          <SkillCards>
            {/**Programming Languages */}
            <SkillsProgrammingLanguages__HostingPlatformsCard>
              <Card className={classes.root} style={{marginBottom: 10}}>
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
            </SkillsProgrammingLanguages__HostingPlatformsCard>

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

            {/**Backend, Database, version control */}
            <SkillsBackend__Database__VersionControlCard>
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

              <Card className={classes.root} style={{height: 240, marginBottom: 10}}>
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

              {/*<SkillsVersionControlCard>*/}
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
            {/*</SkillsVersionControlCard>*/}
            </SkillsBackend__Database__VersionControlCard>
          </SkillCards>
        </SkillsContainer>
    )
}

export default Skills

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  
`;

const SkillCards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SkillsProgrammingLanguages__HostingPlatformsCard = styled.div.attrs(props => ({
  className: props.className,
}))`
  flex: 0.3;
  display: flex;
  flex-direction: column;
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

const SkillsProgrammingLanguages = styled.div`
  padding: 5px;
`;

/*const SkillsProgrammingLanguagesCard = styled.div.attrs(props => ({
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
`;*/


const SkillsFrontendCard = styled.div.attrs(props => ({
  className: props.className,
}))`
  flex: 0.3;
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



/*const SkillsBackend__Database__HostingPlatformCard = styled.div.attrs(props => ({
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
`;*/

const SkillsBackend__Database__VersionControlCard = styled.div.attrs(props => ({
  className: props.className,
}))`
  flex: 0.3;
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

const SkillsBackend = styled.div`
  padding: 5px;
`;

const SkillsDatabase = styled.div`
  padding: 5px;
`;

const SkillsHostingPlatforms = styled.div`
  padding: 5px;
`;

/*const SkillsVersionControlCard = styled.div.attrs(props => ({
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
`;*/

const SkillsVersionControl = styled.div`
  padding: 5px;
`;

/**<VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "-1px 4px 20px -6px rgba(0, 0, 0, 0.75)", borderTop: "4px solid darkblue" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "0 0 0 4px #1976d2, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)"}}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Linkedin Clone</h3>
          <h4 className="vertical-timeline-element-subtitle">Youtube Course</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', boxShadow: "0 0 0 4px #c2185b, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline> 
      
      Object.entries(element.sources).forEach(entry => {
            const [key, value] = entry;
            console.log(key + value);
            <ThemeProvider className="test" theme={theme}>
              <Button href={value} variant="outlined" color="primary" className={classes.margin}>
                {key}
              </Button>
            </ThemeProvider>
          })}
      */