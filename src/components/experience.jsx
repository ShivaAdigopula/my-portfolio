import { Grid } from "@mui/material";
import {withStyles} from "@mui/styles";
import { Fragment } from "react";

const styles = {
    responsibility: {
        margin: '1vmin 15vmin !important'
    },
    experience: {
       marginTop: '4vmin',
       
    },
    role: {
        fontSize: '2vmin'
    },
    experienceHead: {
        height: '5vmin',
        borderBottom: '1px solid #814949'
    }
};

function ExperienceComponent({ experience = {}, classes }) {
    const { company, location, role, from, to, responsibilities } = experience;
    return <Fragment>
        <Grid container
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            className={classes.experience}>

            <Grid item container flexDirection="column"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                >
                <Grid item ><span className="company">{company}</span><span className="location">{location}</span></Grid>
                <Grid item > <span className={classes.role}>{role}</span><span>,</span>  <span className={classes.role}>{from}</span> <span>-</span> <span className={classes.role}>{to}</span></Grid>
            </Grid>
            <Grid item className={classes.responsibility}>
                {responsibilities}
            </Grid>
        </Grid>

    </Fragment>
}

export default withStyles(styles)(ExperienceComponent);