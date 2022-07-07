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
            rowSpacing={4}
        >

            <Grid item >
                <div variant="h4" className="banner marginBottom">About Me</div>
            </Grid>


            <Grid item >
                <img src={picture} className="profile-image" alt={`profile`} />
            </Grid>
            

            <Grid item container  alignContent="center" alignItems="center"  justifyContent="center">
                
                <Grid item xs={8} sm={8} md={8} lg={8} xl={ 8}>
                    <div>{about}</div>
                </Grid>
               
                    
                </Grid>

                <Grid item  >
                    <a href={resume} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Button variant="contained" startIcon={<AiOutlineDownload />}>
                        Resume
                    </Button></a>
                </Grid>

            
        </Grid>

    </Fragment>
}