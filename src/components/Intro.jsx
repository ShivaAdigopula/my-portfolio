import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Fragment } from "react";
import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiOutlineLinkedin as LinkedIn } from 'react-icons/ai';
import { AiOutlineMail as Mail } from 'react-icons/ai';

const styles = {
    root: {
        margin: '2vmin !important'
    },
    span: {
        padding: '1vmin',
        cursor: 'pointer'
    },
    anchor: {
        color: '#fff'
    }
};

const IntroComponent = ({ name, designation, socialNetworks, classes }) => {

    return <Fragment>
        <Grid container id="intro" className="intro"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        //style={{backgroundImage: `url(${bg})`}}
        >
            <Grid item container className="intro-text "
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
                <Grid container item flexDirection="row"
                justifyContent="center"
                alignItems="center"
                >
                    <div>Hello, I'm</div><div className="intro-name-highlighter">{name}.</div>
                </Grid>
                <Grid item>
                    I'm a {designation}.
                </Grid>
                <Grid item className={classes.root}>
                    <span className={classes.span}><a className={classes.anchor} href={socialNetworks.linkedIn} target="_blank" rel="noreferrer" ><LinkedIn /></a></span>
                    <span className={classes.span}><a className={classes.anchor} href={socialNetworks.gitHub} target="_blank" rel="noreferrer" ><GitHub /></a></span>
                    <span className={classes.span}><a className={classes.anchor} href={`mailto: ${socialNetworks.mail}`}><Mail /></a></span>

                </Grid>
               
            </Grid>
        </Grid>
    </Fragment>


}
export default withStyles(styles)(IntroComponent);