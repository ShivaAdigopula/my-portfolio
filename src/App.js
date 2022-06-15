import './App.css';
import { Fragment } from 'react';
import profilepicture from './asserts/dp.jpg';
import { IntroComponent } from './components/Intro';
import { AboutComponent } from './components/about';
import {data} from './asserts/data';


function App() {
  const {name, designation, about} = data;
  return (<Fragment>
    <IntroComponent name={name} designation={designation} />
    <AboutComponent picture={profilepicture} about={about} />
  </Fragment>
  );
}

export default App;
