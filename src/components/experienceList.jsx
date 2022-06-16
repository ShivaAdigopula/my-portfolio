import { Fragment } from "react";
import { ExperienceComponent } from "./experience";

export function ExperienceList({experience}){
    return <Fragment>
        <div id="experience" className="experience flex-column">
        <div className="banner">Experience</div>
            {experience && experience.map(exp => <ExperienceComponent experience={exp}/>)}
        </div>
        
    </Fragment>
}