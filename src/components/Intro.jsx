import { Fragment } from "react";

export function IntroComponent ({name, designation}) {
    return <Fragment>
        <div id="intro" className="intro" 
    //style={{backgroundImage: `url(${bg})`}}
    >


      <div className="intro-text ">
        <div >
          <span>Hello, I'm</span> <span className="intro-name-highlighter">{name}</span>.
        </div>
        <div>
          I'm a {designation}.
        </div>
      </div>


    </div>
    </Fragment>
}