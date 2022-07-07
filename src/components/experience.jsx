import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Fragment } from "react";
import { LightSpeed } from "react-reveal";

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
    const { company, location, role, from, to } = experience;
    return <Fragment>
        <Grid container
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            className={classes.experience}
            xs={12} sm={8} md={8} lg={8} xl={ 8}>

            <LightSpeed left>
                <Grid item container flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"

                >
                    <Grid item ><span className="company">{company}</span><span className="location">{location}</span></Grid>
                    <Grid item > <span className="role">{role}</span><span>,</span>  <span className="duration">{from}</span> <span>-</span> <span className="duration">{to}</span></Grid>
                </Grid>
            </LightSpeed>
          
        </Grid>

    </Fragment>
}

export default withStyles(styles)(ExperienceComponent);