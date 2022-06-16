import { Grid } from "@mui/material";
import { Fragment } from "react";
import ExperienceComponent from "./experience";

export function ExperienceList({experience}){
    return <Fragment>
        <Grid container id="experience" className="experience"
        flexDirection="column" 
        justifyContent="center"
        alignItems="center"
        alignContent="center">
            <Grid item className="banner">Experience</Grid>
        
            {experience && experience.map(exp => <ExperienceComponent experience={exp}/>)}
        </Grid>
        
    </Fragment>
}