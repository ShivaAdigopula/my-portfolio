import { Fragment } from "react";

export function ExperienceComponent({experience = {}}) {
    const {company, location, role, from, to, responsibilities} = experience;
    return <Fragment>
    <div  className=" flex-column">
        
        
        
            <div className="flex-item">
               <div ><span className="company">{company}</span><span className="location">{location}</span></div>
               <div> <span>{role}</span><span>,</span>  <span>{from}</span> <span>-</span> <span>{to}</span></div>
            </div>
            <div className="flex-item maringleftRight20">
               {responsibilities}
            </div>
        </div>
    
</Fragment>
}