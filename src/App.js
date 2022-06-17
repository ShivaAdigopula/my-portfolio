import './App.css';
import { Fragment } from 'react';
import profilepicture from './asserts/dp.jpg';
import IntroComponent from './components/Intro';
import { AboutComponent } from './components/about';
import { data } from './asserts/data';
import { ExperienceList } from './components/experienceList';
import { Fade, Zoom } from 'react-reveal';

function App() {
  const { name, designation, about, experience, socialNetworks } = data;
  return (<Fragment>
    <Fade>
      <IntroComponent name={name} designation={designation} socialNetworks={socialNetworks} />
    </Fade>
    <Zoom>
      <AboutComponent picture={profilepicture} about={about} />
      <ExperienceList experience={experience} />
    </Zoom>

  </Fragment>
  );
}

export default App;
