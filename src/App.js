import './App.css';
import { Fragment } from 'react';
import profilepicture from './assets/dp.jpg';
import IntroComponent from './components/Intro';
import { AboutComponent } from './components/about';
import { data } from './assets/data';
import { ExperienceList } from './components/experienceList';
import { Fade, Zoom } from 'react-reveal';
import { SkillsComponent } from './components/skills';
import { Link, SpeedDial, SpeedDialAction } from '@mui/material';
import { GiHamburgerMenu, GiSkills } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdWork , MdClose} from 'react-icons/md';

function App() {
  const { name, designation, about, experience, socialNetworks, skills, resume } = data;

  const actions = [
    { icon: <Link  style={{paddingTop:5}} href="#about">< BsFillPersonFill size={25} /></Link>, name: 'About' },
    { icon: <Link style={{paddingTop:5}} href="#experience"><MdWork size={25} /></Link>, name: 'Experience' },
    { icon: <Link style={{paddingTop:5}} href="#skills"><GiSkills size={25}/></Link>, name: 'Skills' },
  ];
  return (<Fragment>
    <SpeedDial
      FabProps={{ 'color': 'secondary'}}
      ariaLabel="Menu"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<GiHamburgerMenu size="25" />}
      openIcon={<MdClose size={25} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            style={{paddingTop:3}}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
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
