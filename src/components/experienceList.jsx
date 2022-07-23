import { Fragment } from 'react'
import ExperienceComponent from './experience'

export function ExperienceList ({ experience }) {
  return (
    <Fragment>
      <div
        id="experience"
        className="experience flex flex-col items-center justify-center"
      >
        <div item className="banner">
          Experience
        </div>

        {experience &&
          experience.map((exp) => (
            <ExperienceComponent key={exp.company} experience={exp} />
          ))}
      </div>
    </Fragment>
  )
}
