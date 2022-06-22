import './App.css';
import { Fragment } from 'react';
import profilepicture from './assets/dp.jpg';
import IntroComponent from './components/Intro';
import { AboutComponent } from './components/about';
import { data } from './assets/data';
import { ExperienceList } from './components/experienceList';
import { Fade, Zoom } from 'react-reveal';
import { SkillsComponent } from './components/skills';

function App() {
  const { name, designation, about, experience, socialNetworks, skills, resume } = data;
  return (<Fragment>
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
