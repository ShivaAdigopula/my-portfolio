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

        <div className='flex flex-col flex-wrap justify-center my-10 lg:flex-row xl:flex-row lg:gap-5 xl:gap-5'>
        {experience &&
          experience.map((exp) => (
            <ExperienceComponent key={exp.company} experience={exp} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}
