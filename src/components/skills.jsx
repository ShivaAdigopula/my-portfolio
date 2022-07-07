import { Grid } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Fragment } from 'react';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 2,
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
            className="skills"
            id="skills"
        >
            <Grid item className="banner marginBottom">Skills</Grid>
            <Grid item container rowSpacing={2} xs={10} sm={6} lg={6}
                flexDirection="column"
                justifyContent="center"
            >
                {
                    skills && skills.map(skill => <Fragment key={skill.name}>
                        <Grid item >
                            {skill.name}
                        </Grid>
                        <Grid item >
                            <BorderLinearProgress variant="determinate" value={skill.efficiency} />
                        </Grid>
                    </Fragment>)
                }
            </Grid>

        </Grid>
    </Fragment>
}