import { Button } from '@mui/material'
import { Fragment } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'

export function AboutComponent ({ picture, about, resume }) {
  return (
    <Fragment>
      <div className="about  mx-auto flex flex-col justify-center items-center content-center space-y-4">
        <div>
          <div className="banner mb-10">About Me</div>
        </div>

        <img
          className="block h-36 w-36 rounded-full "
          src={picture}
          alt={'profile'}
        />

        <div className="px-10 sm:px-20 md:px-30 lg:px-40">{about}</div>

        <div item>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <Button
              className="download-resume"
              variant="contained"
              startIcon={<AiOutlineDownload />}
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </Fragment>
  )
}
