import './App.css';
import { Fragment } from 'react';
import profilepicture from './assets/dp.jpg';
import IntroComponent from './components/Intro';
import { AboutComponent } from './components/about';
import { data } from './assets/data';
import { ExperienceList } from './components/experienceList';
import { Fade, Zoom } from 'react-reveal';
import { SkillsComponent } from './components/skills';
import { Grid, Link } from '@mui/material';

function App() {
  const { name, designation, about, experience, socialNetworks, skills, resume } = data;
  return (<Fragment>
    <Grid container className='nav-bar'
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="flex-end"
     
      columnSpacing={4}>
      
      <Grid item className='nav-bar-item'><Link style={{textDecoration: 'none', color: 'inherit'}} href="#about">About</Link></Grid>
        <Grid item className='nav-bar-item'><Link style={{textDecoration: 'none', color: 'inherit'}} href="#experience">Experience</Link></Grid>
        <Grid item className='nav-bar-item'><Link style={{textDecoration: 'none', color: 'inherit'}} href="#skills">Skills</Link></Grid>
      
    </Grid>
    <Fade >
      <IntroComponent name={name} designation={designation} socialNetworks={socialNetworks} />
    </Fade>
    <Zoom>
      <AboutComponent picture={profilepicture} about={about} resume={resume}/>
      <ExperienceList experience={experience} />
      <SkillsComponent skills={skills}/>
    </Zoom>

  </Fragment>
  );
}

export default App;
