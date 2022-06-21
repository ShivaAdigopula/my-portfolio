import { Grid } from "@mui/material";
import { Fragment } from "react";

export function AboutComponent({ picture, about }) {
    return <Fragment>
        <Grid container id="about" className="about"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            
        >

            <Grid item >
                <div variant="h4" className="banner marginBottom">About Me</div>
            </Grid>


            <Grid item>
                <img src={picture} className="profile-image" alt={`profile`}/>
            </Grid>
            <Grid container item
                flexDirection="column"
                alignItems="center"
                alignContent="center"
                justifyContent="center"
                >
                {
                    about && about.map(sentence => <Grid item textAlign="center">{sentence}</Grid>)
                }
            </Grid>
        </Grid>

    </Fragment>
}