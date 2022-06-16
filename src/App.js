import './App.css';
import { Fragment } from 'react';
import profilepicture from './asserts/dp.jpg';
import { IntroComponent } from './components/Intro';
import { AboutComponent } from './components/about';
import {data} from './asserts/data';
import { ExperienceComponent } from './components/experience';
import { ExperienceList } from './components/experienceList';


function App() {
  const {name, designation, about, experience, socialNetworks} = data;
  return (<Fragment>
    <IntroComponent name={name} designation={designation} socialNetworks={socialNetworks}/>
    <AboutComponent picture={profilepicture} about={about} />
    <ExperienceList experience={experience} />
  </Fragment>
  );
}

export default App;
