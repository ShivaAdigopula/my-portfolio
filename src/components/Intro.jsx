import { Fragment } from "react";
import { AiFillGithub as GitHub } from "react-icons/ai";
import {AiOutlineLinkedin as LinkedIn} from 'react-icons/ai';
import {AiOutlineMail as Mail} from 'react-icons/ai';
export function IntroComponent ({name, designation, socialNetworks}) {
    return <Fragment>
        <div id="intro" className="intro flex-column" 
    //style={{backgroundImage: `url(${bg})`}}
    >


      <div className="intro-text ">
        <div >
          <span>Hello, I'm</span> <span className="intro-name-highlighter">{name}</span>.
        </div>
        <div>
          I'm a {designation}.
        </div>
        <div className="icon-links">
                <span><a href={socialNetworks.linkedIn} target="_blank"><LinkedIn /></a></span>
                <span><a href={socialNetworks.gitHub} target="_blank"><GitHub/></a></span>
                <span><a href={`mailto: ${socialNetworks.mail}`}><Mail /></a></span>
                
        </div>
      </div>


    </div>
    </Fragment>
}