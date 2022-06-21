import { Grid } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Fragment } from 'react';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));



export function SkillsComponent({ skills }) {
    return <Fragment>
        <Grid container 
         flexDirection="column" 
         justifyContent="center"
         alignItems="center"
         alignContent="center"
         
         >
        <Grid item className="banner marginBottom">Skills</Grid>
        <Grid item container rowSpacing={2} xs={11} sm={8} lg={8} className="marginSkills"> 
        {
                skills && skills.map(skill => <Fragment>
                    <Grid item xs={6}>
                        {skill.name}
                    </Grid>
                    <Grid item xs={6}>
                        <BorderLinearProgress variant="determinate" value={skill.efficiency} />
                    </Grid>
                </Fragment>)
            }
        </Grid>
            
        </Grid>
    </Fragment>
}