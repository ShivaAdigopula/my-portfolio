import { Grid } from '@mui/material'
import { Fragment } from 'react'

export function SkillsComponent ({ skills }) {
  return (
    <Fragment>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        className="skills"
        id="skills"
      >
        <Grid item className="banner marginBottom">
          Skills
        </Grid>
        <Grid
          item
          container
          rowSpacing={2}
          xs={10}
          sm={6}
          lg={6}
          flexDirection="column"
          justifyContent="center"
        >
          {skills &&
            skills.map((skill) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-white-700 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.efficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </Grid>
      </Grid>
    </Fragment>
  )
}
