import { Fragment } from 'react'
import { AiFillGithub as GitHub, AiOutlineLinkedin as LinkedIn, AiOutlineMail as Mail } from 'react-icons/ai'

const IntroComponent = ({ name, designation, socialNetworks, classes }) => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center w-screen h-screen css-selector text-white space-y-2">
        <div className="intro-text flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-center ">
            <div className="text-2xl md:text-4xl lg:text-5xl">Hello, I'm</div>
            <div className="intro-name-highlighter text-3xl md:text-5xl lg:text-6xl">
              {name}.
            </div>
          </div>
          <div className="text-xl md:text-3xl lg:text-4xl">
            I'm a {designation}.
          </div>
          <div className="flex flex-row items-center justify-center text-3xl text-white space-x-2">
            <div>
              <a
                href={socialNetworks.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
            </div>
            <div>
              <a href={socialNetworks.gitHub} target="_blank" rel="noreferrer">
                <GitHub />
              </a>
            </div>
            <div>
              <a href={`mailto: ${socialNetworks.mail}`}>
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default IntroComponent
