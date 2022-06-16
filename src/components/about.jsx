import { Grid } from "@mui/material";
import { Fragment } from "react";

export function AboutComponent({ picture, about }) {
    return <Fragment>
        <Grid container id="about" className="about"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            
        >


            <Grid item >
                <img src={picture} className="profile-image" />
            </Grid>
            <Grid container item
                flexDirection="column"
                alignItems="center"
                alignContent="center"
                justifyContent="center">
                {
                    about && about.map(sentence => <Grid item textAlign="center">{sentence}</Grid>)
                }
            </Grid>
        </Grid>

    </Fragment>
}