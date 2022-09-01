import { Fragment } from 'react'
import ExperienceComponent from './experience'

export function ExperienceList ({ experience }) {
  return (
    <Fragment>
      <div
        id="experience"
        className="flex flex-col items-center justify-center w-screen experience"
      >
        <div className="banner">
          Experience
        </div>

        <div className='flex flex-col'>
        {experience &&
          experience.map((exp) => (
            <ExperienceComponent key={exp.company} experience={exp} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}
