import { Button, Grid } from "@mui/material";
import { Fragment } from "react";
import { AiOutlineDownload } from "react-icons/ai";

export function AboutComponent({ picture, about, resume }) {
    return <Fragment>
        <Grid container id="about" className="about"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            spacing={4}
        >

            <Grid item >
                <div variant="h4" className="banner marginBottom">About Me</div>
            </Grid>


            <Grid item >
                <img src={picture} className="profile-image" alt={`profile`} />
            </Grid>
            <Grid container item
                flexDirection="column"
                alignItems="center"
                alignContent="center"
                justifyContent="center"

            >

                <Grid item xs={8} sm={6} lg={6}>
                    <div>{about}</div>
                </Grid>

                <Grid item>
                    <a href={resume} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Button variant="outlined" startIcon={<AiOutlineDownload />}>
                        Resume
                    </Button></a>
                </Grid>

            </Grid>
        </Grid>

    </Fragment>
}