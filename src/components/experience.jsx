import { Fragment } from 'react'
import { LightSpeed } from 'react-reveal'

function ExperienceComponent ({ experience = {} }) {
  const { company, location, role, from, to } = experience
  return (
    <Fragment>
      <div className="flex items-center content-center justify-center my-5">
        <LightSpeed left>
          <div className="flex flex-col items-center content-center justify-center">
            <div item>
              <span className="mx-5 text-2xl md:text-3xl">{company}</span>
              <span className="text-xl">{location}</span>
            </div>
            <div item>
              {' '}
              <span className="text-base italic">{role}</span>
              <span>,</span> <span className="text-sm">{from}</span>{' '}
              <span className="align-text-top">-</span>{' '}
              <span className="text-sm">{to}</span>
            </div>
          </div>
        </LightSpeed>
      </div>
    </Fragment>
  )
}

export default ExperienceComponent
